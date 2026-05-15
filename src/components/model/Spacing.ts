export default class Spacing {
    public value: number;

    constructor(value: number) {
        this.value = value;
    }

    toString() {
        return `${this.value} px`;
    }
}