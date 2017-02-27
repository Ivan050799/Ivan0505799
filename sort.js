var mas = [1,5,6.-5,4,10,34,31,123,0,-3,8];
for (var i = 0; i < mas.length; i++) {
    var min = mas[i];
    for (var j = i + 1; j < mas.length +1; j++) {
        if (mas[j] < min) {
            var k = mas[i];
            min = mas[j];
            mas[i] = min;
            mas[j] = k;
        }
    }
}
document.write(mas);