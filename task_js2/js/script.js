function createArrayNames(size) {
    var data = [];

    for (var i=0; i < size; i++) {
        var names = prompt('Введите случайные имена', '');
        data.push(names) ;
    }

    return data;
}

function searchName(name, data) {
    for (var i=0; i < data.length; i++) {
        if (name === data[i]) {
            return true;
        }
    }
    return false;
}