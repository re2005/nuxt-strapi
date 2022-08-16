<template>
    <div class="">
        <ul class="grid grid-cols-3 gap-6">
            <li
                v-for="item in props.data.boxes"
                :key="item.title"
                class="bg-gel-gray p-10 rounded-3xl flex flex-col gap-6"
            >
                <ul class="flex gap-2 items-center">
                    <li
                        v-for="(tag, index) in item.tags"
                        :key="index"
                        class="border border-white rounded-3xl px-5 py-3 shrink-0"
                    >
                        {{ tag }}
                    </li>
                </ul>
                <p class="font-bold text-xl">
                    {{ item.title }}
                </p>

                <ul class="flex items-center">
                    <li
                        v-for="logo in item.logos.data"
                        :key="logo.id"
                        class="-ml-4"
                    >
                        <img :src="logo.attributes.url" />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps<{
        data: any;
    }>();
</script>
