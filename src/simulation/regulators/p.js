export default (regulatorName, state, settings) => {
    const controllerOutput = settings[regulatorName].proportionalGain * state.controlError

    return {
        ...state,
        [regulatorName]: {
            controllerOutput
        }
    }
}
