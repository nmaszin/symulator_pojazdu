<template>
    <div class="plots">
        <canvas class="plot" v-for="(item, index) in plots" :key="index" :id="'plot-' + index"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'

function sample(callback, start, end, step) {
    let array = []
    for (let x = start; x < end; x += step) {
        array.push({
            x,
            y: callback(x)
        })
    }

    return array;
}


export default {
    props: [
        'settings'
    ],
    data() {
        return {
            plots: [
                {
                    type: 'line',
                    data: {
                        datasets: [{
                            label: 'Sinusoida',
                            borderColor: '#5a5',
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            data: sample(Math.sin, 0, 6 * Math.PI, 0.1)
                        }]
                    },
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
                                type: 'linear'
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
            ]
        }
    },
    mounted() {
        this.plots.forEach((data, index) => {
            const element = document.querySelector(`#plot-${index}`)
            return new Chart(element, data)
        })
    }
}
</script>

<style lang="scss" scoped>
    .plots {
        padding: 20px;
        flex: 3;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .plot {
        height: 95% !important;
    }
</style>