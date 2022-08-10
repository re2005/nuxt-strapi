<template>
    <div>
        <h1>
            {{ route.name }}
        </h1>

        <div>
            {{ apiData }}
        </div>

    </div>
</template>

<script lang="ts" setup>
    import { Ref, ref } from '@vue/reactivity';
    import { useAsyncData, useRoute, useRouter } from '#app';

    const route = useRoute();
    const router = useRouter();

    const apiData: Ref<any> = ref({
        page: null,
        headers: null,
    });

    const header: any = await useAsyncData(() => $fetch(`/api/page/${route.params.id}`));
    const content: any = await useAsyncData(() => $fetch(`/api/block-children/${route.params.id}`));
    apiData.value.page = header.data;
    apiData.value.headers = content.data;
</script>

<style scoped></style>
