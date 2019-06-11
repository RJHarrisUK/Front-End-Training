// functions.js

function calculate(operator) {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    switch (operator) {

        case '1':
            document.getElementById('result').value = num1 + num2
            return num1 + num2;
        case '2':
            document.getElementById('result').value = num1 - num2
            return num1 - num2;
        case '3':
            document.getElementById('result').value = num1 / num2
            return num1 / num2;
        case '4':
            document.getElementById('result').value = num1 * num2
            return num1 * num2;
    }

    document.getElementById('result').innerHTML
}