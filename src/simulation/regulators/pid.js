export default (regulatorName, state, settings) => {
    const integralPart = settings.delta / settings[regulatorName].integralTime * state.sumOfErrors
    const derivativePart = settings[regulatorName].derivativeTime / settings.delta * (state.controlError - state.lastError)
    const controllerOutput = settings[regulatorName].proportionalGain * (state.controlError + integralPart + derivativePart)

    return {
        ...state,
        [regulatorName]: {
            controllerOutput
        }
    }
}
