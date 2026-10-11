import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kakyuufwswyphjszggrl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtha3l1dWZ3c3d5cGhqc3pnZ3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2NDQ2NTcsImV4cCI6MjEwNzIyMDY1N30.r-CXQXnmabKzdVlMKaKstuumYZeBHguLiXXE8TeAoxM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Save booking into Supabase 'bookings' table
 */
export async function saveBookingToSupabase(bookingData) {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert([bookingData])
      .select();

    if (error) {
      console.warn('Supabase booking save warning (table might need creation):', error.message);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error('Supabase exception:', err);
    return { success: false, error: err };
  }
}

/**
 * Save inquiry into Supabase 'inquiries' table
 */
export async function saveInquiryToSupabase(inquiryData) {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([inquiryData])
      .select();

    if (error) {
      console.warn('Supabase inquiry save warning:', error.message);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error('Supabase exception:', err);
    return { success: false, error: err };
  }
}

/**
 * Save custom trip calculator estimate into Supabase 'custom_trips' table
 */
export async function saveCustomTripToSupabase(tripData) {
  try {
    const { data, error } = await supabase
      .from('custom_trips')
      .insert([tripData])
      .select();

    if (error) {
      console.warn('Supabase custom trip save warning:', error.message);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error('Supabase exception:', err);
    return { success: false, error: err };
  }
}


