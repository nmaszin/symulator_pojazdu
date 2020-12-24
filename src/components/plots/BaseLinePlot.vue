<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
        this.renderChart(this.chartData, this.options)
    },
    watch: {
        options(newValue) {
            const chart = this.$data._chart;
            chart.options = newValue
            chart.update({
                duration: 0
            })
        }
    }
}
</script>
