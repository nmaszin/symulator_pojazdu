<template>
    <main class="main">
        <Sidebar v-model="settings" />
        <Plots :settings="settings"/>
    </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Plots from '@/components/Plots'

export default {
    components: {
        Sidebar,
        Plots
    },
    data() {
        return {
            settings: {
                amplitude: 1,
                frequency: 1,
                offsetX: 0,
                offsetY: 0
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        height: calc(100vh - 135px); // TODO: replace it with better solution
    }
</style>