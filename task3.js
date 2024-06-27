function multiplyAndDivide() {
    const num1 = parseFloat(prompt('Enter the first number:'));
    const num2 = parseFloat(prompt('Enter the second number:'));
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Invalid input. Please enter valid numbers.');
      return;
    }
  
    const product = num1 * num2;
    const quotient = num1 / num2;
  
    console.log(`Multiplication result: ${product}`);
    console.log(`Division result: ${quotient}`);
}
multiplyAndDivide();