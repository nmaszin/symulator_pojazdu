import { cutOff } from '@/simulation/utils'

export default (state, settings) => {
    const brakingAcceleration = cutOff(
        state.brake.controllerOutput * settings.maxBrakingAcceleration * settings.gravityAcceleration,
        settings.minBrakingAcceleration,
        settings.maxBrakingAcceleration
    )

    const velocity = state.velocity - brakingAcceleration * settings.delta

    return {
        ...state,
        velocity,
        brake: {
            ...state.brake,
            acceleration: brakingAcceleration
        }
    }
}
