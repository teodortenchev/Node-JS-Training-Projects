let Calculator = require('../models/Calculator')
module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let calculatorData = req.body.calculator;
        let leftNumber = Number(calculatorData.leftOperand);
        let rightNumber = Number(calculatorData.rightOperand);
        let operator = calculatorData.operator;
        let calculator = new Calculator(leftNumber, rightNumber, operator);
        calculator.calculate();

        res.render('home/index', {
            result: result,
            calculator: {
                leftOperand: leftNumber,
                rightOperand: rightNumber,
                operator: operator
            }
        });
    }
};