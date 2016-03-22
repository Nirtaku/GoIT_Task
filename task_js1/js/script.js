function pow (number, stepen) {
    if (stepen == 0 && number != 0) {
        return 1;
    }

    if (stepen <=0 && number == 0) {
        return NaN;
    }

    var new_stepen = Math.abs(stepen);
    var result = 1;

    for (var i = 0; i < new_stepen; i++) {
        result *= number;
    }

    if (stepen > 0) {
        return result;
    }

    return 1 / result;
}