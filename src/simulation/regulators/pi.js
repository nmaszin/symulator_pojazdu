export default (regulatorName, state, settings) => {
    const integralPart = settings.delta / settings[regulatorName].integralTime * state.sumOfErrors
    const controllerOutput = settings[regulatorName].proportionalGain * (state.controlError + integralPart)

    return {
        ...state,
        [regulatorName]: {
            controllerOutput
        }
    }
}
