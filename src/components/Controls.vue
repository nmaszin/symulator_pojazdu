<template>
    <div class="sidebar">
        <div class="control">
            <label class="control-label" for="requested-velocity">Zadana prędkość [km/h]</label>
            <Slider v-model="settings.requestedVelocity" tooltip="always" tooltipPlacement="bottom" id="requested-velocity" />
        </div>

        <div class="control">
            <label class="control-label" for="terrain-gradient">Kąt nachylenia [&deg;]</label>
            <Slider v-model="settings.terrainGradient" tooltip="always" tooltipPlacement="bottom" :min="-90" :max="90" id="terrain-gradient" />
        </div>

        <div class="control">
            <label class="control-label" for="friction-coefficient">Współczynnik tarcia kół o podłoże</label>
            <Slider v-model="settings.frictionCoefficient" tooltip="always" tooltipPlacement="bottom" :min="0" :max="1" :interval="0.01" id="friction-coefficient" />
        </div>

        <div class="control">
            <label class="control-label" for="drag-coefficient">Współczynnik oporu aerodynamicznego</label>
            <Slider v-model="settings.dragCoefficient" tooltip="always" tooltipPlacement="bottom" :min="0" :max="1" :interval="0.01" id="drag-coefficient" />
        </div>

        <div class="control buttons">
            <button class="button" @click="switchSimulation">
                {{ switchSimulationButtonText }}
            </button>

            <button class="button" @click="resetSimulation">
                Zresetuj
            </button>
        </div>
    </div>
</template>

<script>
import Slider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
    components: {
        Slider
    },
    props: [
        'value'
    ],
    data() {
        return {
            settings: this.value
        }
    },
    computed: {
        switchSimulationButtonText() {
            return this.settings.pause ? 'Uruchom symulację' : 'Zatrzymaj symulację'
        }
    },
    methods: {
        switchSimulation() {
            this.settings.pause = !this.settings.pause
            this.$emit('input', this.settings)
        },
        resetSimulation() {
            this.$emit('reset')
        }
    },
    watch: {
        value: {
            handler(value) {
                this.settings = value
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
        flex: 2;
        overflow-y: auto;

        display: flex;
        flex-direction: column;
    }

    .control {
        padding: 20px 40px;
        text-align: center;
    }

    .control-label {
        display: block;
        margin: 5px;
    }

    .button {
        background: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        transition-duration: 0.2s;
        margin: 10px;

        &:hover {
            background: darken(#34db98, 10%);
        }
    }

    .buttons {
        display: flex;
    }
</style>