export default () => ({
    delta: 200,
    pause: true, // Should be always true

    requestedVelocity: 0, // Zadana prędkość
    terrainGradient: 0, // Nachylenie podłoża
    frictionCoefficient: 0.2, // Współczynnik tarcia kół o podłoże
    dragCoefficient: 0.3 // Współczynnik oporu aerodynamicznego
})
