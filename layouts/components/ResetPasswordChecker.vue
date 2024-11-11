<script setup lang="ts">
import SpinnerOne from "./Loader/SpinnerOne.vue"
import type { UseQueryReturnType } from "@tanstack/vue-query";

const props = defineProps<{
    checkTokenQuery: UseQueryReturnType<any, Error>
}>()

</script>
<template>

    <div v-if="props.checkTokenQuery.isLoading.value" class="grid place-items-center mt-9">
        <div class="text-gray-500">
            Verifying Token...
        </div>
        <SpinnerOne />
    </div>

    <div v-if="props.checkTokenQuery.isError.value" class="text-sm">
        <div class="text-red-500">Not sure you have an account?</div>
        <div class="mt-2">
            <NuxtLink class="text-cyan-400 hover:underline" href="/auth/create-account">
                Reset Password
            </NuxtLink>
        </div>
    </div>

</template>