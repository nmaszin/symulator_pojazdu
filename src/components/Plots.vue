<template>
    <div class="plots">
        {{ ustawienia }}
    </div>
</template>

<script>
export default {
    props: [
        'settings'
    ],
    computed: {
        ustawienia() {
            return JSON.stringify(this.settings)
        }
    }
}
</script>

<style lang="scss" scoped>
    .plots {
        padding: 20px;
        flex: 3;
        overflow-y: auto;
    }
</style>