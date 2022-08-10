<template>
    <div>
        <h1>
            My nuxt website
        </h1>
        <ul v-if="data">
            <li v-for="(item, index) in data"
                :key="index"
            >
                <nuxt-link :to="`/${item.attributes.slug}`">
                    {{ item.attributes.title }}
                </nuxt-link>
            </li>

        </ul>
    </div>
</template>
<script lang="ts" setup>
    import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
    import { Strapi4RequestParams } from '@nuxtjs/strapi/dist/runtime/types/v4';

    const { find } = useStrapi4();
    const { data }: any = await find<Strapi4Response<any>>('pages');
</script>
