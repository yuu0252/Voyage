import { createClient } from 'microcms-js-sdk';

const data: {
  serviceDomain?: string;
  apiKey?: string;
} = {
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
};

export const client = createClient(data?);
