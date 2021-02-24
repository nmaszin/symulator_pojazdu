export default (velocity, _state, settings) => {
    return velocity - settings.delta * settings.gravityAcceleration * Math.sin(settings.terrainGradient)
}