import { generateAndSaveAutoBlog } from '@/ai/flows/auto-blog-flow';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  try {
    await generateAndSaveAutoBlog();
    return NextResponse.json({ success: true, message: 'Blog post generated successfully.' });
  } catch (error) {
    console.error('Error generating blog post:', error);
    return NextResponse.json({ success: false, message: 'Failed to generate blog post.' }, { status: 500 });
  }
}
