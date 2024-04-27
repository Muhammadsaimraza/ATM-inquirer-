var ATM = /** @class */ (function () {
    function ATM(initialBalance) {
        this.accountBalance = initialBalance;
    }
    ATM.prototype.checkBalance = function () {
        return this.accountBalance;
    };
    ATM.prototype.withdraw = function (amount) {
        if (amount > this.accountBalance) {
            return "Insufficient funds";
        }
        else {
            this.accountBalance -= amount;
            return "Withdrawal successful. Remaining balance: ".concat(this.accountBalance);
        }
    };
    ATM.prototype.deposit = function (amount) {
        this.accountBalance += amount;
        return "Deposit successful. New balance: ".concat(this.accountBalance);
    };
    return ATM;
}());
// Example usage
var atm = new ATM(1000); // Starting balance of $1000
console.log("Current Balance:", atm.checkBalance());
console.log(atm.withdraw(500)); // Withdraw $500
console.log(atm.deposit(200)); // Deposit $200
console.log(atm.checkBalance()); // Check remaining balance
