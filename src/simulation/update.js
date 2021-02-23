export default function update(state, settings) {
    return {
        velocity: {
            value: settings.requestedVelocity,
            argument: state.velocity.argument + settings.delta
        },
        enginePower: {
            value: state.enginePower.value,
            argument: state.velocity.argument + settings.delta
        },
        brakingPower: {
            value: state.brakingPower.value,
            argument: state.velocity.argument + settings.delta
        }
    }
}

