<script setup lang="ts">
import ICONS from '~/assets/icons';
</script>

<template>
    <NuxtLink href="/">
        <div
            class="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            <img class="w-10" :src="ICONS.ink" alt="branchly-icon" />
            Branchly
        </div>
    </NuxtLink>
</template>