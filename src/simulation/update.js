export default function update(state, settings) {
    const derivative = value => settings.amplitude * Math.sin(settings.frequency * value - settings.offsetX) + settings.offsetY

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

