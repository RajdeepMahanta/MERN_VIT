function reverseNumber(number) {
    const reversedString = number.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}