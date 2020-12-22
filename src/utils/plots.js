export function sample(callback, start, end, step) {
    let array = []
    for (let x = start; x < end; x += step) {
        array.push({
            x,
            y: callback(x)
        })
    }

    return array
}