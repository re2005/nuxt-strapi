<template>
    <div class="">
        <div class="flex justify-between">
            <div class="flex flex-col gap-6">
                <h1 class="text-4xl font-black">
                    {{ data?.title }}
                </h1>
                <div v-html="data.content" />
            </div>
            <figure>
                <img
                    :alt="data?.title"
                    :src="data?.image.data?.attributes.url"
                />
            </figure>
        </div>

    </div>
</template>
<script lang="ts" setup>
    const props = defineProps<{
        data: any;
    }>();
</script>
