import { createClient } from 'microcms-js-sdk';

type props = {
  serviceDomain: string;
};

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN,
});
