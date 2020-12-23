<template>
    <div class="sidebar">
        <div class="control">
            <label class="control-label" for="amplitude">Amplituda</label>
            <input class="control-input" id="amplitude" type="number" step="0.5" v-model.number="settings.amplitude" @input="updateSettings">
        </div>

        <div class="control">
            <label class="control-label" for="frequency">Częstotliwość</label>
            <input class="control-input" id="frequency" type="number" step="0.5" v-model.number="settings.frequency" @input="updateSettings">
        </div>

        <div class="control">
            <label class="control-label" for="offset-x">Przesunięcie osi X</label>
            <input class="control-input" id="offset-x" type="range" min="-3.14" max="3.14" step="0.01" v-model.number="settings.offsetX" @input="updateSettings">
        </div>

        <div class="control">
            <label class="control-label" for="offset-y">Przesunięcie osi Y</label>
            <input class="control-input" id="offset-y" type="range" min="-3.14" max="3.14" step="0.01" v-model.number="settings.offsetY" @input="updateSettings">
        </div>

        <div class="control">
            <button @click="switchSimulation">
                {{ switchSimulationButtonText }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'value'
    ],
    data() {
        return {
            settings: Object.assign({}, this.value)
        }
    },
    computed: {
        switchSimulationButtonText() {
            return this.settings.pause ? 'Uruchom symulację' : 'Zatrzymaj symulację'
        }
    },
    methods: {
        updateSettings() {
            this.$emit('input', this.settings)
        },
        switchSimulation() {
            this.settings.pause = !this.settings.pause
            this.updateSettings()
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
        flex: 1;
        overflow-y: auto;

        display: flex;
        flex-direction: column;
    }

    .control {
        padding: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .control-label {
        padding: 5px;
    }
    
    .control-input {
        width: 150px;
    }

</style>