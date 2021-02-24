export default (velocity, _state, settings) => {
    const newVelocity = velocity - settings.delta * settings.gravityAcceleration * settings.frictionCoefficient * Math.cos(settings.terrainGradient)
    return newVelocity > 0 ? newVelocity : 0;
}