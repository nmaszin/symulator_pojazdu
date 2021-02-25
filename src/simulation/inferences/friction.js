export default (state, settings) => {
    const velocityDecrease = settings.delta * settings.gravityAcceleration * settings.frictionCoefficient * Math.cos(settings.terrainGradient)
    const velocity = Math.max(Math.abs(state.velocity) - velocityDecrease, 0) * Math.sign(state.velocity)

    return {
        ...state,
        velocity
    }
}