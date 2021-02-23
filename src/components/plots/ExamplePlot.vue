
<template>
    <div>
    <BaseSimulationPlot
        :state="state"
        :plottedField="state => ({ argument: state.value.argument / 1000, value: state.value.value })"
    
        title="Przykładowy wykres"
        xLabel="Czas [s]"
        yLabel="Wartość"
    />
    <BaseSimulationPlot
        :state="state"
        :plottedField="state => ({ argument: state.value.value, value: state.value.argument / 1000 })"
    
        title="Przykładowy wykres 2"
        xLabel="Wartość"
        yLabel="Czas [s]"
    />
    </div>
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
