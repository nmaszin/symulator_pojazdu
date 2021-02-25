export default (state, settings) => {
    const velocity = state.velocity - settings.delta * settings.gravityAcceleration * Math.sin(settings.terrainGradient)

    return {
        ...state,
        velocity
    }
}
