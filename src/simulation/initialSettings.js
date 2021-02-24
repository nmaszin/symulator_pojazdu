export default () => ({
    delta: 0.15,
    pause: true, // Should be always true

    requestedVelocity: 0, // Zadana prędkość
    terrainGradient: 0, // Nachylenie podłoża w stopniach, dodatnia wartość oznacza podjazd, ujemna - zjazd
    frictionCoefficient: 0.2, // Współczynnik tarcia kół o podłoże
    dragCoefficient: 0.3, // Współczynnik oporu aerodynamicznego

    proportionalGain: 1, // Współczynnik k_p regulatora
    derivativeTime: 1, // Czas wyprzedzenia T_d
    integralTime: 1, // Czas zdwojenia T_i

    maxEnginePower: 100_000, // maksymalna moc silnika wyrażana w watach
    vehicleMass: 1700, // Masa pojazdu w kilogramach

    gravityAcceleration: 9.81, // Przyspieszenie grawitacyjne
})

