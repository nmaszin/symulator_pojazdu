<template>
    <main class="main">
        <Controls :value="settings" @input="updateSettings" />

        <div class="plots">
            <ExamplePlot :settings="settings" :state="state" />
        </div>
    </main>
</template>

<script>
import Controls from '@/components/Controls'
import ExamplePlot from '@/components/plots/ExamplePlot'

import initialSettings from '@/simulation/initialSettings'
import initialState from '@/simulation/initialState'
import update from '@/simulation/update'

export default {
    components: {
        Controls,
        ExamplePlot
    },
    data() {
        return {
            settings: initialSettings(),
            state: initialState(),
            intervalHandle: null
        }
    },
    methods: {
        runSimulation() {
            // value w this.state jest NaN
            this.intervalHandle = setInterval(() => {
                this.state = update(this.state, this.settings)
            }, this.settings.delta)
        },
        pauseSimulation() {
            clearInterval(this.intervalHandle)
        },
        updateSettings(settings) {
            this.settings = settings
            if (settings.pause) {
                this.pauseSimulation()
            } else {
                this.runSimulation()
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

    .plots {
        padding: 20px;
        flex: 3;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>