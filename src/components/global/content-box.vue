<template>
    <div>
        <h3 class="text-3xl">
            {{ data?.title }}
        </h3>

        <div v-html="data.content" />
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps<{
        data: any;
    }>();
</script>
