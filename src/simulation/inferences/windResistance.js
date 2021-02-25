export default (state, settings) => {
    const velocityDecrease = settings.dragCoefficient * state.velocity ** 2
    const velocity = Math.max(Math.abs(state.velocity) - velocityDecrease, 0) * Math.sign(state.velocity)

    return {
        ...state,
        velocity
    }
}
