<script setup>
import useCreateAccount from '~/hooks/services/auth/createAccount';
import SiteName from '~/layouts/components/SiteName.vue';

const { name, email, password, onSubmit } = useCreateAccount()
</script>
<template>
    <main class="bg-slate-900 text-gray-100 h-screen grid place-items-center">
        <section class="rounded-md bg-slate-800 p-5 w-[350px]">
            <div class="grid place-items-center">
                <SiteName />
            </div>
            <form @submit="onSubmit" class="mt-8 space-y-3">
                <input :ref="name.ref" v-model="name.value" placeholder="Enter Full name"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="name.error">{{ name.error.message }}</p>

                <input :ref="email.ref" v-model="email.value" type="email" placeholder="Enter Email"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="email.error">{{ email.error.message }}</p>
                <input :ref="password.ref" v-model="password.value" type="password" placeholder="Enter Password"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="password.error">{{ password.error.message }}</p>

                <button
                    class="mt-2 w-full p-3 shrink-0 rounded-md bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-2 text-sm font-medium hover:from-sky-700 disabled:bg-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                    type="submit">
                    Create Account
                </button>
                <div class="text-sm">Do you have an account? <NuxtLink class="text-cyan-400 hover:underline"
                        href="/auth/login">Login</NuxtLink>
                </div>
            </form>


        </section>
    </main>

</template>