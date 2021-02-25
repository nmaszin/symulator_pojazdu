import pRegulator from '@/simulation/regulators/p'
import pdRegulator from '@/simulation/regulators/pd'
import piRegulator from '@/simulation/regulators/pi'
import pidRegulator from '@/simulation/regulators/pid'

export default name => {
    const regulatorsMapping = {
        p: pRegulator,
        pi: piRegulator,
        pd: pdRegulator,
        pid: pidRegulator
    }

    return (state, settings) => regulatorsMapping[settings[name].regulatorType](name, state, settings)
}
