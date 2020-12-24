
<template>
    <BaseSimulationPlot
        :settings="settings"
        :state="state"
        title="Przykładowy wykres"
        xLabel="Czas [ms]"
        yLabel="Wartość"
        :yMin="-20"
        :yMax="20"
        borderColor="#f00"
        :plottedField="plottedField"
    />
</template>

<script>
import BaseSimulationPlot from '@/components/plots/BaseSimulationPlot'

export default {
    components: {
        BaseSimulationPlot
    },
    props: {
        settings: {
            type: Object,
            required: true
        },
        state: {
            type: Object,
            required: true
        }
    },
    methods: {
        plottedField(state) {
            return state.value
        }
    }
}
</script>
