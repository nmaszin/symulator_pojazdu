<template>
    <div class="sidebar">
        <div class="control">
            <label class="control-label" for="amplitude">Amplituda</label>
            <input class="control-input" id="amplitude" type="number" v-model="settings.amplitude" @input="updateSettings">
        </div>

        <div class="control">
            <label class="control-label" for="frequency">Częstotliwość</label>
            <input class="control-input" id="frequency" type="number" v-model="settings.frequency" @input="updateSettings">
        </div>

        <div class="control">
            <label class="control-label" for="offset-x">Przesunięcie osi X</label>
            <input class="control-input" id="offset-x" type="range" min="-3.14" max="3.14" step="0.01" v-model="settings.offsetX" @input="updateSettings">
        </div>

        <div class="control">
            <label class="control-label" for="offset-y">Przesunięcie osi Y</label>
            <input class="control-input" id="offset-y" type="range" min="-3.14" max="3.14" step="0.01" v-model="settings.offsetY" @input="updateSettings">
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'modelValue'
    ],
    data() {
        return {
            settings: Object.assign({}, this.modelValue)
        }
    },
    emits: ['update:modelValue'],
    methods: {
        updateSettings() {
            this.$emit('update:modelValue', this.settings)
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