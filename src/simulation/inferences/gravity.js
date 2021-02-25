export default (state, settings) => {
    const velocity = state.velocity - settings.delta * settings.gravityAcceleration * Math.sin(Math.PI / 180 * settings.terrainGradient)

    return {
        ...state,
        velocity
    }
}
