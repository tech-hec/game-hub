import { createDb } from "https://deno.land/x/kvdex@v0.5.2/mod.ts"
import type { User } from "./models.js"

const kv = await Deno.openKv()

export const db = createDb(kv, (builder) => ({
  users: builder.collection<User>(["users"])
}))
