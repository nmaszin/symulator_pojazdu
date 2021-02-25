export default (state, settings) => {
    let velocity = state.velocity - settings.dragCoefficient * state.velocity ** 2
    velocity = velocity > 0 ? velocity : 0

    return {
        ...state,
        velocity
    }
}
