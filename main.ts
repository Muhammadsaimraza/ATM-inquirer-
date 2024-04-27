class ATM {
    private accountBalance: number;

    constructor(initialBalance: number) {
        this.accountBalance = initialBalance;
    }

    checkBalance(): number {
        return this.accountBalance;
    }

    withdraw(amount: number): string {
        if (amount > this.accountBalance) {
            return "Insufficient funds";
        } else {
            this.accountBalance -= amount;
            return `Withdrawal successful. Remaining balance: ${this.accountBalance}`;
        }
    }

    deposit(amount: number): string {
        this.accountBalance += amount;
        return `Deposit successful. New balance: ${this.accountBalance}`;
    }
}

// Example usage
const atm = new ATM(1000); // Starting balance of $1000
console.log("Current Balance:", atm.checkBalance());
console.log(atm.withdraw(500)); // Withdraw $500
console.log(atm.deposit(200)); // Deposit $200
console.log(atm.checkBalance()); // Check remaining balance