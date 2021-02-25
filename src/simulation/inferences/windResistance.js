export default (state, settings) => {
    const force = 0.5 * settings.frontalSurface * settings.dragCoefficient * settings.mediumDensity * (state.velocity ** 2)

    const velocityDecrease = (force / settings.vehicleMass) * settings.delta
    const velocity = Math.max(Math.abs(state.velocity) - velocityDecrease, 0) * Math.sign(state.velocity)

    return {
        ...state,
        velocity
    }
}
