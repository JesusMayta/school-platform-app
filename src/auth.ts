import
NextAuth, {
    DefaultSession
} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcryptjs from 'bcryptjs';
import prisma from './lib/prisma';
import type {
    LoginFormInterface,
    UserSessionInterface
} from './interfaces';

declare module 'next-auth' {
    interface Session {
        user: UserSessionInterface & DefaultSession['user'];
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.userData = user;
            }
            return token;
        },
        session: async ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...token.userData as UserSessionInterface
                }
            };
        }
    },
    providers: [
        Credentials({
            credentials: {
                code: {},
                password: {}
            },
            authorize: async (credentials) => {

                const { code, password } = credentials as LoginFormInterface;

                try {

                    const user = await prisma.user.findUnique({ where: { code } });

                    if (!user) return null;

                    if (!bcryptjs.compareSync(password, user.password)) return null;


                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { password: _, ...restUser } = user;

                    return restUser;

                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    session: {
        maxAge: 24 * 60 * 60
    }
});