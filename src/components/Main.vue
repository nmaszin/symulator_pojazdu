<template>
    <main class="main">
        <Sidebar/>
        <Plots/>
    </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Plots from '@/components/Plots'

export default {
    components: {
        Sidebar,
        Plots
    }
}
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
    }
</style>