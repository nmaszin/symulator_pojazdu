
<template>
    <LinePlot :chartData="chartData" :options="options" />    
</template>

<script>
import LinePlot from '@/components/LinePlot'

function sample(callback, start, end, step) {
    let array = []
    for (let x = start; x < end; x += step) {
        array.push({
            x,
            y: callback(x)
        })
    }

    return array
}

export default {
    components: {
        LinePlot
    },
    props: ['settings'],
    data() {
        return {
            options: {
                elements: {
                    point: {
                        radius: 0
                    }
                },
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Wykres sinusoidy'
                },
                scales: {
                    yAxes: [{
                        type: 'linear',
                        ticks: {
                            min: -2,
                            max: 2,
                            stepSize: 0.2
                        }
                    }],
                    xAxes: [{
                        type: 'linear',
                        ticks: {
                            min: 0,
                            max: 6 * Math.PI,
                            stepSize: 0.5 * Math.PI,
                            callback: ((_, index) => index % 2 == 0 ? `${(index / 2)} π` : `${index}/2 π`)
                        }
                    }]
                }
            }
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
                    data: sample(this.plottedFunction, 0, 6 * Math.PI, 0.1)
                }]
            }
        }
    }
}
</script>
