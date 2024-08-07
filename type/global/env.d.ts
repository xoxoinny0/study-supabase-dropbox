declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_PUBLIC_SUPABASE_URL: string;
      readonly NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      readonly NNEXT_SUPABASE_SERVICE_ROLE: string;
      readonly NEXT_SUPABASE_DB_PASSWORD: string;
      readonly NEXT_PUBLIC_STORAGE_BUCKET: string;
    }
  }
}

export {};
