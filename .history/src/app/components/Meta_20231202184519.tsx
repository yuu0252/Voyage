import { Metadata } from 'next';

export async function generateMetadata(title): Promise<Metadata> {
  return {
    title: title,
  };
}
