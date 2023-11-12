import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN
} : {
  serviceDomain: string;
})