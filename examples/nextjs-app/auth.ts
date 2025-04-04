import NextAuth from 'next-auth'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [{
    id: 'armuream',
    name: 'ArmureAM',
    issuer: process.env.AUTH_ISSUER,
    type: 'oidc',
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    checks: ['pkce', 'state', 'nonce'],
    authorization: {
      params: { scope: 'openid profile email' }
    },
    idToken: true,
  }],
  session: { strategy: 'jwt' },
  callbacks: {
    jwt: ({ token, profile }) => {
      if (profile?.sub && profile?.email) {
        return {
          sub: profile.sub,
          name: profile.name,
          email: profile.email,
          picture: profile.picture,
        }
      }

      return token
    },
    session: async ({ session }) => {
      return session
    },
  }
})
