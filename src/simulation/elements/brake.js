export default (state, settings) => {
    // TODO: hamowanie powinno odbywać się wyłącznie w celu zmniejszenia prędkości!
    const brakingAcceleration = state.controllerOutput * settings.maxBrakingAcceleration * settings.gravityAcceleration
    const velocity = state.velocity - brakingAcceleration * settings.delta * 0

    return {
        ...state,
        velocity
    }
}
