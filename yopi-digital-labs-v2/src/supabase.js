import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qpezreqdmkznjyninwhf.supabase.co";

const supabaseAnonKey =
  "sb_publishable_j0PGsV54HI7Mxl1XOd6ZQg_-Wwkdh6h";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);