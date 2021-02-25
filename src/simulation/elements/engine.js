import { cutOff } from '@/simulation/utils'

export default (state, settings) => {
    const limitedControllerOutput = cutOff(state.engine.controllerOutput, 0, 1)
    const power = settings.maxEnginePower * limitedControllerOutput
    const velocity = (state.velocity + Math.sqrt(Math.pow(state.velocity, 2) + 4 * power * settings.delta / settings.vehicleMass)) / 2

    return {
        ...state,
        engine: {
            ...state.engine,
            power
        },
        velocity
    }
}
