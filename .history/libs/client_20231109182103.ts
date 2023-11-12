import { createClient } from 'microcms-js-sdk';

const data = {
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
}: {
  serviceDomain: string
};

export const client = createClient(data: {

});
