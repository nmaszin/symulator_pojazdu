import controlError from '@/simulation/regulators/controlError'
import regulator from '@/simulation/regulators/regulator'

import engine from '@/simulation/elements/engine'
// import brake from '@/simulation/elements/brake'

import gravity from '@/simulation/inferences/gravity'
import friction from '@/simulation/inferences/friction'
import windResistance from '@/simulation/inferences/windResistance'

export default function update(state, settings) {
    const routines = [
        controlError,
        regulator('engine'),
        regulator('brake'),

        engine,
        //brake,

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
