// src/pages/test.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response('TEST_OK', { status: 200 });
};
