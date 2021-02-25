export default (regulatorName, state, settings) => {
    const derivativePart = settings[regulatorName].derivativeTime / settings.delta * (state.controlError - state.lastError)
    const controllerOutput = settings[regulatorName].proportionalGain * (state.controlError + derivativePart)

    return {
        ...state,
        [regulatorName]: {
            controllerOutput
        }
    }
}
