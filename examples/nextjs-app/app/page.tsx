'use client'

import { useSession, signOut, signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const session = useSession()
  const user = session.data?.user
  const isAuthenticated = !!user

  return (
    <div className="bg-slate-100 min-h-screen">
      <main role="main" className="flex flex-col items-center justify-center h-5/6 space-y-8 text-center px-4 py-16 lg:pt-32 md:pt-16 sm:pt-8">
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:max-w-[43.5rem]">
          eLibrary Application
        </h1>
        <p className="mt-4 max-w-lg text-lg text-slate-700">
          Library Application using OpenID Connect Protocol.
        </p>
        {isAuthenticated ? (          
          <Button onClick={() => signOut()}>
            Logout
          </Button>          
        ) : (
          <Button onClick={() => signIn('testid')}>
            Login with ArmureAM
          </Button>
        )}
      </main>

      <footer className="text-center py-4">
        <p className="text-sm text-gray-500">
          
        </p>
      </footer>
    </div>
  )
}
