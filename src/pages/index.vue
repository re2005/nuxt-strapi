<template>
    <div>
        <ul v-if="data">
            <li v-for="(item, index) in data"
                :key="index"
                class="underline text-gel-purple"
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

    const { find } = useStrapi4();
    const { data }: any = await find<Strapi4Response<any>>('pages');
</script>
