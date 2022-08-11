<template>
    <div class="inline-block w-7 h-7">
        <span
            class="cursor-pointer"
            @click="toggle"
        >
            <UiIcon
                :key="icon"
                :icon="icon === 'light' ? 'sun' : 'moon'"
                class="w-7"
            />
        </span>
    </div>
</template>
<script lang="ts" setup>
    // import { useApplicationStore } from '@/stores/application.store';
    import { computed } from 'vue';
    import UiIcon from '@/components/global/UiIcon.vue';
    import { onMounted, ref } from '#imports';

    const theme = ref('dark');

    const icon = computed(() => {
        return theme.value === 'dark' ? 'light' : 'dark';
    });

    const toggle = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        document.documentElement.className = theme.value;
    };
    onMounted(() => {
        // document.documentElement.className = 'dark';
    });

</script>
<style lang="scss"></style>
