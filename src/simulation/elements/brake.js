import { cutOff } from '@/simulation/utils'

export default (state, settings) => {
    //console.log(state.brake.controllerOutput * settings.maxBrakingAcceleration * settings.gravityAcceleration)

    const brakingAcceleration = cutOff(
        -state.brake.controllerOutput * settings.maxBrakingAcceleration * settings.gravityAcceleration,
        settings.minBrakingAcceleration,
        settings.maxBrakingAcceleration
    )

    const velocityDecrease = brakingAcceleration * settings.delta
    const velocity = Math.max(Math.abs(state.velocity) - velocityDecrease, 0) * Math.sign(state.velocity)

    return {
        ...state,
        velocity,
        brake: {
            ...state.brake,
            acceleration: brakingAcceleration
        }
    }
}
