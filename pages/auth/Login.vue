<script setup>
import useLogin from '~/hooks/services/auth/login';
import SpinnerTwo from '~/layouts/components/Loader/SpinnerTwo.vue';
import SiteName from '~/layouts/components/SiteName.vue';

const { email, password, onSubmit, loginHandler } = useLogin()

</script>
<template>
    <main class="bg-slate-900 text-gray-100 h-screen grid place-items-center">
        <section class="rounded-md bg-slate-800 p-5 w-[350px]">
            <div class="grid place-items-center">
                <SiteName />
            </div>
            <form @submit="onSubmit" class="mt-8 space-y-3">

                <input v-model="email.value" :ref="email.ref" type="email" placeholder="Enter Email"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="email.error">{{ email.error.message }}</p>
                <div class="text-end">

                    <NuxtLink class="text-cyan-600 hover:underline hover:text-cyan-400 text-sm"
                        href="/auth/forgot-password">
                        Forgot Password
                    </NuxtLink>
                </div>
                <input v-model="password.value" :ref="password.ref" type="password" placeholder="Enter Password"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="password.error">{{ password.error.message }}</p>

                <p class="text-red-400 text-sm" v-if="loginHandler?.isError.value"> {{
                    loginHandler?.error?.value?.message
                    }}</p>
                <button
                    class="mt-2 w-full p-3 shrink-0 rounded-md bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-2 text-sm font-medium hover:from-sky-700 disabled:bg-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                    type="submit">
                    <SpinnerTwo v-if="loginHandler?.isPending.value" />
                    <span v-else>Login</span>
                </button>
                <div class="text-sm">Not sure you have an account? <NuxtLink class="text-cyan-400 hover:underline"
                        href="/auth/create-account">Create
                        Account</NuxtLink>
                </div>
            </form>
        </section>
    </main>

</template>