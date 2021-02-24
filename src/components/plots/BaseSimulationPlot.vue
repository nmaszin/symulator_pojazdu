<template>
    <VuePlotly
        :data="plotData"
        :layout="layout"
        :display-mode-bar="true"
    />
</template>

<script>
import VuePlotly from '@statnett/vue-plotly'

export default {
    components: {
        VuePlotly
    },
    props: {
        state: {
            type: Object,
            required: true
        },
        plottedField: {
            type: Function,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        xLabel: {
            type: String,
            required: true
        },
        yLabel: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            plotData: [{
                x: [],
                y: [],
                type: 'line'
            }]
        }
    },
    computed: {
        layout() {
            return {
                title: this.title,
                xaxis: {
                    title: this.xLabel
                },
                yaxis: {
                    title: this.yLabel
                },
            }
        }
    },
    watch: {
        state(newState) {
            const field = this.plottedField(newState)
            this.plotData[0].x.push(field.argument)
            this.plotData[0].y.push(field.value)
        }
    },
    methods: {
        reset() {
            this.plotData = [{
                x: [],
                y: [],
                type: 'line'
            }]
        }
    }
}
</script>