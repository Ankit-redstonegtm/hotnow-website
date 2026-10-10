/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_BOOKING_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
