import pidRegulator from '@/simulation/regulators/pid'
import engine from '@/simulation/engine'
import gravity from '@/simulation/inferences/gravity'
import friction from '@/simulation/inferences/friction'


export default function update(state, settings) {
    const controlError = settings.requestedVelocity - state.velocity
    const controllerOutput = pidRegulator(controlError, state, settings)
    let { enginePower, velocity } = engine(controllerOutput, state, settings)

    velocity = gravity(velocity, state, settings)
    velocity = friction(velocity, state, settings)

    return {
        regulation: {
            lastError: controlError,
            sumOfErrors: state.regulation.sumOfErrors + controlError
        },

        time: state.time + settings.delta,
        velocity,
        enginePower
    }
}
