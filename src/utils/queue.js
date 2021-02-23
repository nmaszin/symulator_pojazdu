export default class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    push(value) {
        if (this.first === null) {
            this.last = this.first = { value, next: null }
        } else {
            this.last.next = { value, next: null }
            this.last = this.last.next
        }
    }

    top() {
        return this.first.value
    }

    empty() {
        return this.first === null
    }

    pop(value) {
        if (this.first !== null) {
            const data = this.first.value
            if (this.first === this.last) {
                this.first = this.last = null
            } else {
                this.first = this.first.next
            }

            return data
        }
    }
}
