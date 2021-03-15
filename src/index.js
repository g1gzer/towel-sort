
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length == 0) return [];

    const tempArr = [];
    for (let i = 0; i < matrix.length; i++){
        if (i == 0 || i % 2 == 0) {
            matrix[i].sort((a, b) => a - b);
        } else matrix[i].sort((a, b) => b - a);

        matrix[i].forEach((el) => tempArr.push(el));
    }
    return tempArr;
}
