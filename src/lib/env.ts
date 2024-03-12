import { createEnv } from "@t3-oss/env-nextjs";
import { url } from "inspector";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {},
});
