<template>
    <BaseLinePlot :chartData="initialChartData" :options="options" />
</template>

<script>
import BaseLinePlot from '@/components/plots/BaseLinePlot'

export default {
    components: {
        BaseLinePlot
    },
    props: {
        settings: {
            type: Object,
            required: true
        },
        state: {
            type: Object,
            required: true   
        },
        title: String,
        xLabel: String,
        yLabel: String,
        yMin: Number,
        yMax: Number,
        borderColor: {
            type: String,
            default: '#5a5'
        },
        backgroundColor: {
            type: String,
            default: 'rgba(255, 255, 255, 0)'
        },

        plottedField: {
            type: Function,
            required: true
        },
        timestampToArgument: {
            type: Function,
            default: (timestamp, simulationStart) => timestamp - simulationStart
        },
        argumentToTimestamp: {
            type: Function,
            default: (argument, simulationStart) => simulationStart + argument
        }
    },
    data() {
        return {
            simulationStart: Date.now(),
            initialChartData: {
                datasets: [{
                    label: self.title,
                    borderColor: this.borderColor,
                    backgroundColor: this.backgroundColor,
                    data: []
                }]
            }
        }
    },
    computed: {
         options() {
            return {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: this.xLabel
                        },
                        type: 'realtime',
                        realtime: {
                            pause: this.settings.pause,
                            duration: this.settings.plotArea,
                            refresh: this.settings.delta,
                            delay: 0,
                            onRefresh: chart => {
                                chart.data.datasets.forEach(dataset => {
                                    const { argument, value } = this.plottedField(this.state)

                                    dataset.data.push({
                                        x: this.argumentToTimestamp(argument, this.simulationStart),
                                        y: value
                                    })
                                })
                            }
                        },
                        ticks: {
                            callback: (value, index, values) => this.timestampToArgument(values[index].value, this.simulationStart)
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: this.yLabel
                        },
                        ticks: {
                            min: this.yMin,
                            max: this.yMax,
                            stepSize: (this.yMax - this.yMin) / 10
                        }
                    }]
                },
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: this.title
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        }
    }
}
</script>