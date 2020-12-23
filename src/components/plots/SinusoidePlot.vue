
<template>
    <LinePlot :chartData="chartData" :options="options" />    
</template>

<script>
import LinePlot from '@/components/plots/LinePlot'

export default {
    components: {
        LinePlot
    },
    props: ['settings'],


    data() {
        return {
            simulationStart: Date.now()
        }
    },
    computed: {
        plottedFunction() {
            return value => (this.settings.amplitude * Math.sin(value * this.settings.frequency - this.settings.offsetX) + this.settings.offsetY)
        },

        chartData() {
            return {
                datasets: [{
                    label: 'Sinusoida',
                    borderColor: '#5a5',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    data: []
                }]
            }
        },

        options() {
            return {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Czas [s]'
                        },
                        type: 'realtime',
                        realtime: {
                            pause: this.settings.pause,
                            duration: 30000,
                            refresh: 1000,
                            delay: 1000,
                            onRefresh: chart => {
                                chart.data.datasets.forEach(dataset => {
                                    const currentDate = Date.now()
                                    dataset.data.push({
                                        x: currentDate,
                                        y: Math.random()
                                    })
                                })
                            }
                        },
                        ticks: {
                            callback: (date, index, values) => {
                                return Math.floor((values[index].value - this.simulationStart) / 1000)
                            }
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'A [m]'
                        },
                        ticks: {
                            min: -2,
                            max: 2,
                            stepSize: 0.2
                        }
                    }]
                },
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Wykres pewnej prostej krzywej'
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
