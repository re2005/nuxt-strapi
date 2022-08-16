<template>
    <div v-if="pageData">
        <h1 class="text-7xl font-black">
            {{ pageData?.title }}
        </h1>

        <div
            class="mt-4 text-3xl"
            v-html="pageData.content"
        />
        <div class="mt-40 flex gap-36 flex-col">
            <component
                :is="item.__component.replace('ui-elements.', '')"
                v-for="(item, index) in pageData.components"
                :key="index" :data="item"
            />
        </div>
    </div>
    <div v-else>
        Page not found
    </div>
</template>
<script lang="ts" setup>
    import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
    import { Strapi4RequestParams } from '@nuxtjs/strapi/dist/runtime/types/v4';
    import { useRoute } from '#app';

    const route = useRoute();

    const { find } = useStrapi4();
    const params: Strapi4RequestParams = {
        populate: ['deep'],
        filters: {
            slug: route.params.page,
        },
    };
    let pageData = null;

    const { data }: any = await find<Strapi4Response<any>>('pages', params);
    if (data[0]) {
        pageData = data[0].attributes;
    }
</script>
