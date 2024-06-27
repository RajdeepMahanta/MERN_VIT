function sortAlphabetically(inputStr) {
    const charArr = inputStr.split('');
    const sortedArr = charArr.sort();
    const sortedStr = sortedArr.join('');

    return sortedStr;
}