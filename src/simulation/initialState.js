export default () => ({
    time: 0, // Punkt czasu w którym znajduje się symulacja
    velocity: 0, // Aktualna wartość prędkości

    lastError: 0,
    controlError: 0,
    sumOfErrors: 0,
    engine: {
        controllerOutput: 0,
        power: 0 // Aktualna moc silnika
    },
    brake: {
        controllerOutput: 0
    }
})
