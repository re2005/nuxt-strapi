<template>
    <div id="app"
         class="container mx-auto p-10">
        <header class="flex justify-between">
            <router-link
                to="/"
                class="flex"
            >
                <UiIcon
                    class="w-44"
                    icon="logo"
                />
            </router-link>
            <UiToggleTheme />
        </header>
        <main class="mt-20">
            <NuxtPage />
        </main>
    </div>
</template>

<style lang="scss">

</style>
