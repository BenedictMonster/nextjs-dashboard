// import NextAuth, { DefaultSession } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

// declare module 'next-auth' {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session extends DefaultSession {
//     user: {
//       address: string;
//       access?: string;
//       refresh?: string;
//       must_change_password?: boolean;
//     } & DefaultSession['user'];
//   }
// }

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    access?: string;
    refresh?: string;
    must_change_password?: boolean;
  }
}
