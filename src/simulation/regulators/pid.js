export default (controlError, state, settings) => {
    const integralPart = settings.delta / settings.integralTime * state.regulation.sumOfErrors
    const derivativePart = settings.derivativeTime / settings.delta * (controlError - state.regulation.lastError)

    return settings.proportionalGain * (controlError + integralPart + derivativePart)
}
