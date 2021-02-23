<template>
    <main class="main">
        <Controls :value="settings" @input="updateSettings" />

        <div class="plots">
            <SimulationPlot
                :state="state"
                :plottedField="state => state.velocity"
            
                title="Wykres prędkości w dziedzinie czasu"
                xLabel="Wartość prędkości [km/h]"
                yLabel="Czas [s]"
            />

            <SimulationPlot
                :state="state"
                :plottedField="state => state.enginePower"
            
                title="Wykres mocy silnika w dziedzinie czasu"
                xLabel="Moc silnika [W]"
                yLabel="Czas [s]"
            />

            <SimulationPlot
                :state="state"
                :plottedField="state => state.brakingPower"
            
                title="Wykres siły hamowania w dziedzinie czasu"
                xLabel="Siła hamowania [N]"
                yLabel="Czas [s]"
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
