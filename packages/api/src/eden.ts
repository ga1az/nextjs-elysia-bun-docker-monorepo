import { treaty } from "@elysiajs/eden";
import type { App } from "@mono/server";

export const api = treaty<App>("localhost:4000");

export type GetTreatyType<T extends () => any> = Awaited<ReturnType<T>>["data"];