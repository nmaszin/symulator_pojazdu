<template>
    <main class="main">
        <Controls v-model="settings" />
        <Plots :settings="settings"/>
    </main>
</template>

<script>
import Controls from '@/components/Controls'
import Plots from '@/components/Plots'

export default {
    components: {
        Controls,
        Plots
    },
    data() {
        return {
            settings: {
                pause: false,
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