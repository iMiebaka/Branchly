<script setup>
import { useResetPassword } from '~/hooks/services/auth/resetPassword';
import SpinnerTwo from '~/layouts/components/Loader/SpinnerTwo.vue';
import ResetPasswordChecker from '~/layouts/components/ResetPasswordChecker.vue';
import SiteName from '~/layouts/components/SiteName.vue';


const { password, checkPassword, onSubmit, checkTokenQuery, resetPasswordHandler } = useResetPassword()

</script>
<template>
    <main class="bg-slate-900 text-gray-100 h-screen grid place-items-center">
        <section class="rounded-md bg-slate-800 p-5 w-[350px]">
            <div class="grid place-items-center">
                <SiteName />
            </div>

            <ResetPasswordChecker v-if="!checkTokenQuery.isError.value" :checkTokenQuery="checkTokenQuery" />

            <form v-else @submit="onSubmit" class="mt-8 space-y-3">
                <input v-model="password.value" :ref="password.ref" type="password" placeholder="Enter Password"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="password.error">{{ password.error.message }}</p>
                <input v-model="checkPassword.value" :ref="checkPassword.ref" type="checkPassword"
                    placeholder="Enter Password"
                    class="rounded-md w-full appearance-none bg-slate-900 focus:outline-none p-2" />
                <p class="text-red-400 text-sm" v-if="checkPassword.error">{{ checkPassword.error.message }}</p>

                <button :disabled="resetPasswordHandler?.isPending?.value"
                    class="mt-2 w-full p-3 shrink-0 rounded-md bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-2 text-sm font-medium hover:from-sky-700 disabled:bg-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                    type="submit">
                    <SpinnerTwo v-if="loginHandler.isPending.value" />
                    <span v-else>Reset Password</span>
                </button>
            </form>
        </section>
    </main>

</template>