import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

const port = (Deno.env.get("FUNCTIONS_CUSTOMHANDLER_PORT") ?? 0) as number;

const handler = (): Response => {
  const body = JSON.stringify({
    message: "Hello from Azure Functions with Deno!",
  });

  return new Response(body, {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

await serve(handler, { port });
