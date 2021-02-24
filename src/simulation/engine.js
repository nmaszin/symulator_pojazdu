export default (controlerOutput, state, settings) => {
    const limitedControllerOutput = (() => {
        const lowerBound = 0
        const upperBound = 1

        if (controlerOutput > upperBound) {
            return upperBound
        } else if (controlerOutput < lowerBound) {
            return lowerBound
        } else {
            return controlerOutput
        }
    })()

    const enginePower = settings.maxEnginePower * limitedControllerOutput
    const velocity = (state.velocity + Math.sqrt(Math.pow(state.velocity, 2) + 4 * enginePower * settings.delta / settings.vehicleMass)) / 2

    return {
        enginePower,
        velocity
    }
}
