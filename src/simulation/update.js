import controlError from '@/simulation/controlError'

import pidRegulator from '@/simulation/regulators/pid'
import engine from '@/simulation/engine'

import gravity from '@/simulation/inferences/gravity'
import friction from '@/simulation/inferences/friction'
import windResistance from '@/simulation/inferences/windResistance'


export default function update(state, settings) {
    const routines = [
        controlError,
        (state, settings) => pidRegulator('engine', state, settings),
        (state, settings) => pidRegulator('brake', state, settings),
        engine,
        gravity,

        friction,
        gravity,
        windResistance
    ]

    for (const routine of routines) {
        state = routine(state, settings)
    }

    return {
        ...state,
        time: state.time + settings.delta
    }
}
