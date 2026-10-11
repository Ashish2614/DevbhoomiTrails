#!/usr/bin/env node

/**
 * Custom Supabase MCP Server for Antigravity
 * Connects Antigravity directly to AK's Project (kakyuufwswyphjszggrl)
 * Using Supabase Management API & Personal Access Token
 */

import readline from 'node:readline';

const TOKEN = process.env.SUPABASE_ACCESS_TOKEN || 'sbp_fce30be69053e72dd5b0bbf40102f6dfbf579769';
const PROJECT_REF = process.env.SUPABASE_PROJECT_REF || 'kakyuufwswyphjszggrl';

async function executeSql(query) {
  const res = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Supabase API error (${res.status}): ${errorText}`);
  }
  
  return await res.json();
}

const TOOLS = [
  {
    name: 'sql_query',
    description: 'Execute any SQL query on your Supabase PostgreSQL database (SELECT, INSERT, UPDATE, ALTER, etc.)',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'The SQL query to run on the database'
        }
      },
      required: ['query']
    }
  },
  {
    name: 'list_tables',
    description: 'List all public database tables in your Supabase project',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'get_bookings',
    description: 'Retrieve the latest customer tour bookings from public.bookings',
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of bookings to retrieve (default: 25)'
        }
      }
    }
  },
  {
    name: 'get_inquiries',
    description: 'Retrieve the latest customer inquiries from public.inquiries',
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of inquiries to retrieve (default: 25)'
        }
      }
    }
  },
  {
    name: 'get_project_status',
    description: 'Get project health, database version, and configuration details for this Supabase project',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  }
];

async function handleToolCall(name, args) {
  switch (name) {
    case 'sql_query': {
      const data = await executeSql(args.query);
      return JSON.stringify(data, null, 2);
    }
    case 'list_tables': {
      const sql = `
        SELECT table_name, table_type 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name;
      `;
      const data = await executeSql(sql);
      return JSON.stringify(data, null, 2);
    }
    case 'get_bookings': {
      const limit = args.limit || 25;
      const sql = `SELECT * FROM public.bookings ORDER BY created_at DESC LIMIT ${limit};`;
      const data = await executeSql(sql);
      return JSON.stringify(data, null, 2);
    }
    case 'get_inquiries': {
      const limit = args.limit || 25;
      const sql = `SELECT * FROM public.inquiries ORDER BY created_at DESC LIMIT ${limit};`;
      const data = await executeSql(sql);
      return JSON.stringify(data, null, 2);
    }
    case 'get_project_status': {
      const res = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}`, {
        headers: { 'Authorization': `Bearer ${TOKEN}` }
      });
      const data = await res.json();
      return JSON.stringify(data, null, 2);
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', async (line) => {
  if (!line.trim()) return;

  try {
    const msg = JSON.parse(line);
    const id = msg.id;

    if (msg.method === 'initialize') {
      const response = {
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: 'supabase-antigravity',
            version: '1.0.0'
          }
        }
      };
      process.stdout.write(JSON.stringify(response) + '\n');
    } else if (msg.method === 'notifications/initialized') {
      // client initialized confirmation - no response needed
    } else if (msg.method === 'tools/list') {
      const response = {
        jsonrpc: '2.0',
        id,
        result: {
          tools: TOOLS
        }
      };
      process.stdout.write(JSON.stringify(response) + '\n');
    } else if (msg.method === 'tools/call') {
      const toolName = msg.params?.name;
      const toolArgs = msg.params?.arguments || {};
      
      try {
        const textResult = await handleToolCall(toolName, toolArgs);
        const response = {
          jsonrpc: '2.0',
          id,
          result: {
            content: [
              {
                type: 'text',
                text: textResult
              }
            ]
          }
        };
        process.stdout.write(JSON.stringify(response) + '\n');
      } catch (err) {
        const errorResponse = {
          jsonrpc: '2.0',
          id,
          result: {
            isError: true,
            content: [
              {
                type: 'text',
                text: `Error executing ${toolName}: ${err.message}`
              }
            ]
          }
        };
        process.stdout.write(JSON.stringify(errorResponse) + '\n');
      }
    } else {
      if (id !== undefined) {
        process.stdout.write(JSON.stringify({
          jsonrpc: '2.0',
          id,
          error: {
            code: -32601,
            message: `Method not found: ${msg.method}`
          }
        }) + '\n');
      }
    }
  } catch (err) {
    console.error('Error handling MCP message:', err);
  }
});
