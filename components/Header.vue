<script setup>
import SiteName from './SiteName.vue';

</script>
<template>
    <div class="mx-auto max-w-screen-lg px-3 py-6">
        <div class="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
            <SiteName />
            <nav>
                <ul class="flex gap-x-3 font-medium text-gray-200">
                    <li class="hover:text-white">
                        <NuxtLink href="/blog">Blogs</NuxtLink>
                    </li>
                    <li class="hover:text-white">

                        <NuxtLink v-if="Boolean(useCookie('access_token').value)" href="/account">Account</NuxtLink>
                        <NuxtLink v-else href="/auth/login">Login</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>