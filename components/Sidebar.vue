<script setup lang="ts">
import LogoutIcon from '~/assets/icons/logout.icon.vue';
import { useGetProfile } from '~/hooks/services/account/profile';

const links = [
    { path: "/account", title: "Dashboard" },
    { path: "/account/blog", title: "Blog" },
    { path: "/account/profile", title: "Profile" },

]
const userProfile = useGetProfile()

</script>

<template>
    <aside class="bg-slate-800 p-5 w-[200px] h-full overflow-y-hidden flex flex-col justify-between">
        <section>
            <SiteName />
            <nav class="mt-5">
                <ul class="space-y-5">
                    <li v-for="(link) in links" :key="Math.random()">
                        <NuxtLink class="hover:" :href="link.path">{{ link.title }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </section>

        <div>
            <p v-if="userProfile.isSuccess">
                <span class="text-gray-500">
                    Welcome
                </span>
                {{ userProfile?.data?.value?.name }}
            </p>
            <button class="flex gap-1 border p-1 w-full justify-between rounded mt-1">Logout
                <LogoutIcon />
            </button>
        </div>
    </aside>
</template>