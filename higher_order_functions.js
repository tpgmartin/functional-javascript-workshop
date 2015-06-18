function repeat(operation, num) {
    while (num > 0) {
        return operation();
        num--;
    }
}

module.exports = repeat