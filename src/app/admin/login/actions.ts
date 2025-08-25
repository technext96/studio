'use server';

import { getIronSession } from 'iron-session/edge';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SessionData, sessionOptions } from '@/lib/session';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const password = formData.get('password');
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (password === process.env.ADMIN_PASSWORD) {
      session.isLoggedIn = true;
      await session.save();
    } else {
      return 'Invalid password.';
    }
  } catch (error) {
    console.error(error);
    return 'An error occurred. Please try again.';
  }

  redirect('/admin/blogs');
}
