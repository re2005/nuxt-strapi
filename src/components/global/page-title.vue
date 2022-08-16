<template>
    <div class=" bg-gel-gray p-10 rounded-3xl">
        <div class="flex justify-between ">
            <div class="flex flex-col gap-6">
                <h1 class="text-7xl font-black">
                    {{ props.data?.title }}
                </h1>
                <div v-html="props.data.content" />
            </div>
            <figure class="rounded-3xl overflow-hidden">
                <img
                    :alt="props.data?.title"
                    :src="props.data?.image.data?.attributes.url"
                />
            </figure>
        </div>
        <button class="bg-gel-green block px-8 py-3 rounded-3xl text-black font-bold">
            Use cases ↓
        </button>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps<{
        data: any;
    }>();
</script>
