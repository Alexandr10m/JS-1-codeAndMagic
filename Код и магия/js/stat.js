function renderStatistics(ctx, names, times) {
    // Тень
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    // Текстовое поле
    ctx.fillStyle = '#ffffff';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    // Текст
    ctx.fillStyle = '#000000'
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 140, 40);
    ctx.fillText('Список результатов:', 140, 60, );

    // Гистограмма
    // поиск максимального времени
    var max = times[0];
    // Ищем мах время
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
        }
    }
    // заносим данные по гистограмме
    var histoHeight = 150;
    var histoX = 140;
    var step = histoHeight / max;
    var columnIndent = 90;

    // Рисуем гистограмму и соединяем 2 массива
    for (i = 0; i < times.length; i++) {
        var name = names[i];
        time = times[i];
        var height = step * time;

        ctx.fillStyle = name === 'Вы' ? '#FF0000' : 'rgb(0, 0, ' + Math.round(80 + Math.random() * (255 - 80)) + ')';
        ctx.fillRect(histoX + columnIndent * i, 245 - height, 40, height);
        ctx.fillStyle = '#000';
        ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 230 - height);
        ctx.fillText(name, histoX + columnIndent * i, 260);
    }
};