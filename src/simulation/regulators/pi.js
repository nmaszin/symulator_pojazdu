export default (regulatorName, state, settings) => {
    const integralPart = settings[regulatorName].delta / settings[regulatorName].integralTime * state.sumOfErrors
    const controllerOutput = settings[regulatorName].proportionalGain * (state.controlError + integralPart)

    return {
        ...state,
        [regulatorName]: {
            controllerOutput
        }
    }
}
