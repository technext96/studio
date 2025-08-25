import type { IronSessionOptions } from 'iron-session';

export interface SessionData {
  isLoggedIn: boolean;
}

export const sessionOptions: IronSessionOptions = {
  password: process.env.COOKIE_SECRET || 'complex_password_for_dev_only_at_least_32_characters_long',
  cookieName: 'admin_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
};
