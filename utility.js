export const generateRandomNumber = function (minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}


console.log(`from Utility ${generateRandomNumber(10,100)}`);