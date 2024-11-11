<script setup>
import useForgotPassword from '~/hooks/services/auth/forgotPassword';
import SpinnerTwo from '~/layouts/components/Loader/SpinnerTwo.vue';
import SiteName from '~/layouts/components/SiteName.vue';

const { email, onSubmit, resetPasswordHandler } = useForgotPassword()

</script>
<template lang="html">
    <main class="bg-slate-900 text-gray-100 h-screen grid place-items-center">
        <section class="rounded-md bg-slate-800 p-5 w-[350px]">
            <div class="grid place-items-center">
                <SiteName />
            </div>
            <form @submit="onSubmit" class="mt-8 space-y-3">

                <input v-model="email.value" :ref="email.ref" type="email" placeholder="Enter Email"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="email.error">{{ email.error.message }}</p>
                <button
                    class="mt-2 w-full p-3 shrink-0 rounded-md bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-2 text-sm font-medium hover:from-sky-700 disabled:bg-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                    type="submit">
                    <SpinnerTwo v-if="resetPasswordHandler.isPending.value" />
                    <span v-else>Send Reset Link</span>
                </button>
                <div class="text-sm">I remember my credentials? <NuxtLink class="text-cyan-400 hover:underline"
                        href="/auth/login">Login</NuxtLink>
                </div>
            </form>
        </section>
    </main>

</template>