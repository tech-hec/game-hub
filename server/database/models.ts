import type { Model } from "https://deno.land/x/kvdex@v0.5.2/mod.ts"

export interface User extends Model {
  username: string
}
