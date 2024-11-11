<script setup>
const route = useRoute()
console.log(route.params)

import Footer from '~/layouts/components/Footer.vue';
import Header from '~/layouts/components/Header.vue';

</script>


<template lang="html">
    <div class="bg-slate-900 text-gray-100">
        <Header />
        <div class="mx-auto max-w-screen-lg px-3 py-6">
            <h1 class="text-center text-3xl font-bold">5th Lorem ipsum dolor sit</h1>
            <div class="mt-2 text-center text-sm text-gray-400">By <!-- -->Emma<!-- --> on<!-- --> <!-- -->Feb 5, 2020
            </div>
            <div class="mx-auto mt-5 max-w-prose">
                <div class="aspect-w-3 aspect-h-2"><img class="h-full w-full rounded-lg object-cover object-center"
                        src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                        alt="Image post 2" loading="lazy">
                </div>
                <div class="prose prose-invert mt-8 prose-img:rounded-lg">
                    <p>Full typography example at <a href="/demo/astro-boilerplate/posts/sixth-post">this page</a>.</p>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-screen-lg px-3 py-6">
            <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div class="sm:w-7/12">
                    <div class="text-3xl font-bold">Subscribe to my <span
                            class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Newsletters</span>
                    </div>
                    <p class="mt-3 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
                        esse non molestias eos excepturi, inventore atque cupiditate.</p>
                </div>
                <div class="w-full sm:w-5/12">
                    <form
                        class="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                        <input class="w-full appearance-none bg-slate-800 focus:outline-none"><button
                            class="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                            type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        <Footer />


    </div>
</template>
