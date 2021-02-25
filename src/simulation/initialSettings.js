export default () => ({
    delta: 0.5, // Czas próbkowania
    pause: true, // Początkowo symulacja jest zapauzowana, nie należy tego zmieniać

    requestedVelocity: 0, // Zadana prędkość
    vehicleMass: 1700, // Masa pojazdu w kilogramach
    maxEnginePower: 100_000, // Maksymalna moc silnika wyrażana w watach
    gravityAcceleration: 9.81, // Przyspieszenie grawitacyjne

    terrainGradient: 0, // Nachylenie podłoża w stopniach, dodatnia wartość oznacza podjazd, ujemna - zjazd
    minBrakingAcceleration: 0.01, // Minimalne przyspieszenie hamowania, wyrażana w G (krotność przyspieszenia grawitacyjnego) - w dużym skrócie, kompensuje to wszystkie siły oporu wewnętrznych mechanizmów samochodu
    maxBrakingAcceleration: 1, // Maksymalna siła hamowania, wyrażana w G (krotność przyspieszenia grawitacyjnego)
    frictionCoefficient: 0, // Współczynnik tarcia opon o podłoże
    dragCoefficient: 0.3, // Współczynnik oporu aerodynamicznego
    mediumDensity: 1.2, // Gęstość ośrodka w kg/m^3
    frontalSurface: 3.7,

    engine: {
        regulatorType: 'pi',
        proportionalGain: 0.2, // Współczynnik k_p regulatora
        derivativeTime: 0.1, // Czas wyprzedzenia T_d
        integralTime: 2 // Czas zdwojenia T_i
    },
    brake: {
        regulatorType: 'p',
        proportionalGain: 0.006, // Współczynnik k_p regulatora
        derivativeTime: 0.1, // Czas wyprzedzenia T_d
        integralTime: 0.01, // Czas zdwojenia T_i
    },
})

