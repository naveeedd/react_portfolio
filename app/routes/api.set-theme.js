import { json } from '@remix-run/cloudflare';

export async function action({ request, context }) {
  return json({ status: 'success' });
}
