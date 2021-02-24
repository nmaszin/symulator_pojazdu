export default () => ({
    // Potrzebne do regulatorów całkujących i różniczkujących
    regulation: {
        lastError: 0,
        sumOfErrors: 0
    },

    time: 0, // Punkt czasu w którym znajduje się symulacja
    velocity: 0, // Aktualna wartość prędkości
    enginePower: 0, // Aktualna moc silnika
})
