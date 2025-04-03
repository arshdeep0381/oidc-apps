<script setup lang="ts">
import { useAuth } from '@/lib/auth'

const { isAuthenticated, user, login, logout } = useAuth()
</script>

<template>
  <div class="bg-slate-100 min-h-screen">
    <main role="main"
      class="flex flex-col items-center justify-center h-5/6 space-y-8 text-center px-4 py-16 lg:pt-32 md:pt-16 sm:pt-8">
      <h1 class="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:max-w-[43.5rem]">
        Utility Apps Platform
      </h1>
      <p class="mt-4 max-w-lg text-lg text-slate-700">
        Application uses OpenID Connect Protocol for authentication.
      </p>
      <p v-if="isAuthenticated">
        <h3>
          Authenticated User!
        </h3>
        <h4>
        User:  {{user}}
        </h4>
      </p>
      <p v-else>
        <h3>Not Authenticated</h3>
      </p>
      <button class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" v-if="isAuthenticated" @click="logout">
        Logout
      </button>
      <button class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" v-else @click="login">
        Login with ArmureAM ID
      </button>
    </main>

    <footer class="text-center py-4">
      <p class="text-sm text-gray-500">
        
      </p>
    </footer>
  </div>
</template>
