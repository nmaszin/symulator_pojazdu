<template>
    <div class="sidebar">
        <div class="controls-group">
            <h2 class="controls-group-title">Dane symulacji</h2>
            
            <div class="control">
                <label class="control-label" for="requested-velocity">Zadana prędkość [m/s]</label>
                <Slider v-model="settings.requestedVelocity" tooltip="always" tooltipPlacement="bottom" id="requested-velocity" />
            </div>

            <div class="control">
                <label class="control-label" for="vehicle-mass">Masa pojazdu [kg]</label>
                <input type="number" v-model.number="settings.vehicleMass" id="vehicle-mass" >
            </div>

            <div class="control">
                <label class="control-label" for="max-engine-power">Maksymalna moc silnika [kW]</label>
                <input type="number" v-model.number="settings.maxEnginePower" id="max-engine-power" >
            </div>

            <div class="control">
                <label class="control-label" for="max-braking-acceleration">Maksymalne przeciążenie podczas hamowania [G]</label>
                <input type="number" step="0.01" v-model.number="settings.maxBrakingAcceleration" id="max-braking-acceleration" >
            </div>

            <div class="control">
                <label class="control-label" for="gravity-acceleration">Przyspieszenie grawitacyjne</label>
                <input type="number" step="0.01" v-model.number="settings.gravityAcceleration" id="gravity-acceleration" >
            </div>

            <div class="control">
                <label class="control-label" for="terrain-gradient">Kąt nachylenia terenu [&deg;]</label>
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
        </div>


        <div class="controls-group">
            <h2 class="controls-group-title">Regulator silnika</h2>

            <div class="control">
                <label class="control-label" for="regulator-type">Rodzaj regulatora</label>
                <select v-model="settings.engine.regulatorType" class="select">
                    <option value="p">P</option>
                    <option value="pi">PI</option>
                    <option value="pd">PD</option>
                    <option value="pid">PID</option>
                </select>
            </div>

            <div class="control">
                <label class="control-label" for="proportional-gain">Wzmocnienie regulatora</label>
                <input type="number" step="0.01" v-model.number="settings.engine.proportionalGain" id="proportional-gain" >
            </div>

            <div class="control" v-show="settings.engine.regulatorType.includes('d')">
                <label class="control-label" for="derivative-time">Czas wyprzedzenia</label>
                <input type="number" step="0.01" v-model.number="settings.engine.derivativeTime" id="derivative-time" >
            </div>
            
            <div class="control" v-show="settings.engine.regulatorType.includes('i')">
                <label class="control-label" for="integral-time">Czas zdwojenia</label>
                <input type="number" step="0.01" v-model.number="settings.engine.integralTime" id="integral-time" >
            </div>
        </div>

        <div class="controls-group">
            <h2 class="controls-group-title">Regulator układu hamulcowego</h2>

            <div class="control">
                <label class="control-label" for="regulator-type">Rodzaj regulatora</label>
                <select v-model="settings.brake.regulatorType" class="select">
                    <option value="p">P</option>
                    <option value="pi">PI</option>
                    <option value="pd">PD</option>
                    <option value="pid">PID</option>
                </select>
            </div>

            <div class="control">
                <label class="control-label" for="proportional-gain">Wzmocnienie regulatora</label>
                <input type="number" step="0.01" v-model.number="settings.brake.proportionalGain" id="proportional-gain" >
            </div>

            <div class="control" v-show="settings.brake.regulatorType.includes('d')">
                <label class="control-label" for="derivative-time">Czas wyprzedzenia</label>
                <input type="number" step="0.01" v-model.number="settings.brake.derivativeTime" id="derivative-time" >
            </div>
            
            <div class="control" v-show="settings.brake.regulatorType.includes('i')">
                <label class="control-label" for="integral-time">Czas zdwojenia</label>
                <input type="number" step="0.01" v-model.number="settings.brake.integralTime" id="integral-time" >
            </div>
        </div>


        <div class="controls-group">
            <h2 class="controls-group-title">Parametry symulacji</h2>

            <div class="control">
                <label class="control-label" for="delta">Czas próbkowania</label>
                <input type="number" step="0.01" min="0.05" v-model.number="settings.delta" id="delta" >
            </div>
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
        padding: 15px;
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
        justify-content: center;
    }

    .controls-group {
        margin: 0 20px;
        border-bottom: 1px solid gray;
        padding: 30px 0;
    }

    .controls-group-title {
        text-align: center;
        margin: 0;
    }
</style>