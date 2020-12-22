<template>
    <div class="plots">
        <SinusoidePlot :settings="settings" />
    </div>
</template>

<script>
import SinusoidePlot from '@/components/SinusoidePlot.vue'

export default {
    components: {
        SinusoidePlot
    },
    props: ['settings']
}
</script>

<style lang="scss" scoped>
    .plots {
        padding: 20px;
        flex: 3;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>