function Calculator(leftOperand, rightOperand, operator) {
    this.left = leftOperand;
    this.right = rightOperand;
    this.op = operator;

    this.calculate = function () {
        let result = 0;
        switch (this.op) {
            case "+":
                result = this.left + this.right;
                break;
        }

        return result;
    }
}




module.exports = Calculator;