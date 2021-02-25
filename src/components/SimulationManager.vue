<template>
    <main class="main">
        <Controls :value="settings" @input="updateSettings" @reset="resetSimulation" />

        <div class="plots">
            <SimulationPlot
                v-for="(plot, index) in plots"
                :key="index"
                ref="plots"

                :state="state"

                :title="plot.title"
                :xLabel="plot.xLabel"
                :yLabel="plot.yLabel"
                :argument="plot.argument"
                :value="plot.value"
            />
        </div>
    </main>
</template>

<script>
import Controls from '@/components/Controls'
import SimulationPlot from '@/components/plots/BaseSimulationPlot'

import initialSettings from '@/simulation/initialSettings'
import initialState from '@/simulation/initialState'
import update from '@/simulation/update'

export default {
    components: {
        Controls,
        SimulationPlot
    },
    data() {
        return {
            settings: initialSettings(),
            state: initialState(),
            intervalHandle: null,
            plots: [
                {
                    title: 'Wykres prędkości w dziedzinie czasu',
                    xLabel: 'Czas [s]',
                    yLabel: 'Wartość prędkości [m/s]',
                    argument: state => state.time,
                    value: state => state.velocity
                },
                {
                    title: 'Wykres mocy silnika w dziedzinie czasu',
                    xLabel: 'Czas [s]',
                    yLabel: 'Moc silnika [W]',
                    argument: state => state.time,
                    value: state => state.enginePower
                },
                {
                    title: 'Uchyb regulacji w dziedzinie czasu',
                    xLabel: 'Czas [s]',
                    yLabel: 'Uchyb regulacji prędkości [m/s]',
                    argument: state => state.time,
                    value: state => this.settings.requestedVelocity - state.velocity
                },
            ]
        }
    },
    methods: {
        runSimulation() {
            this.intervalHandle = setInterval(() => {
                this.state = update(this.state, this.settings)
            }, this.settings.delta * 1000)
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
        },
        resetSimulation() {
            if (!this.settings.pause) {
                this.pauseSimulation()
            }

            this.settings = initialSettings()
            this.state = initialState()

            this.$refs.plots.forEach(plot => plot.reset())
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        height: calc(100vh - 135px); /* TODO: replace it with better solution */
    }

    .plots {
        padding: 20px;
        flex: 5;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
