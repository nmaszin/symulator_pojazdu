export default function update(state, settings) {
    console.log(state)

    const derivative = value => settings.amplitude * Math.sin(settings.frequency * value - settings.offsetX) + settings.offsetY
    // const derivative = () => settings.amplitude

    const old = state.value.value
    const argument = state.value.argument + settings.delta
    const increase = (settings.delta / 1000) * derivative(argument / 1000)

    return {
        value: {
            value: old + increase,
            argument,
        }
    }
}
