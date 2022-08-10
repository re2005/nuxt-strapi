<template>
    <div>
        <h1>
            {{ pageData.title }}
        </h1>

        <div v-html="pageData.content" />
        <template
            v-for="(item, index) in pageData.components"
            :key="index"
        >
            <div
            >
                <component :is="item.__component.replace('ui-elements.', '')" :data="item" />
            </div>
        </template>
    </div>
</template>
<script lang="ts" setup>
    import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
    import { Strapi4RequestParams } from '@nuxtjs/strapi/dist/runtime/types/v4';

    const { find } = useStrapi4();
    const params: Strapi4RequestParams = {
        populate: ['components.image'],
        filters: {
            slug: 'my-first-page',
        },
    };
    const { data }: any = await find<Strapi4Response<any>>('pages', params);

    let pageData = null;
    if (data[0]) {
        pageData = data[0].attributes;
    }
</script>
