export default (state, settings) => {
    let velocity = state.velocity - settings.delta * settings.gravityAcceleration * settings.frictionCoefficient * Math.cos(settings.terrainGradient)
    velocity = velocity > 0 ? velocity : 0;

    return {
        ...state,
        velocity
    }
}