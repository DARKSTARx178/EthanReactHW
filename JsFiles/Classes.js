class plane {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `Plane: ${this.name}, Model: ${this.model}, Year: ${this.year}`;
    }
}