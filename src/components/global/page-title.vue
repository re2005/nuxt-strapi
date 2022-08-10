<template>
    <div>
        <div class="flex justify-between">
            <h1>
                {{ data.title }}
            </h1>
            <figure>
                <img
                    :alt="data.title"
                    :src="data.image.data?.attributes.url"
                />
            </figure>
        </div>

        <div v-html="data.content" />
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps<{
        data: any;
    }>();
</script>
