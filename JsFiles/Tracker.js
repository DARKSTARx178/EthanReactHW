class Payment {
    constructor(date, method, payee, description, amount, reciever) {
        this.date = date;
        this.method = method;
        this.payee = payee;
        this.description = description;
        this.amount = amount;
        this.reciever = reciever;
    }

    info() {
        console.log(`Date of Payment: ${this.date}`);
        console.log(`Method of Payment: ${this.method}`);
        console.log(`Payee: ${this.payee}`);
        console.log(`Description: ${this.description}`);
        console.log(`Amount Paid: $${this.amount}`);
        console.log(`Reciever: ${this.reciever}`);
    }
}

const payment1 = new Payment('2023-12-01', 'Card', 'USAF', 'Expert Mental Help', 50000000, 'kneel the grass thyphoid');
const payment2 = new Payment('2025-1-09', 'Online', 'SST Inc', 'final cut pro', 499, 'Apple.inc');
const payment3 = new Payment('2024-8-15', 'Online', 'Boeing', '737 fines', 3000000000000000000, 'various countries around the globe');

payment1.info();
payment2.info();
payment3.info();