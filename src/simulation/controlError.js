export default (state, settings) => {
    const controlError = settings.requestedVelocity - state.velocity

    return {
        ...state,
        lastError: state.controlError,
        controlError,
        sumOfErrors: state.sumOfErrors + controlError
    }
}
