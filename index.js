const searchSymbol = function() {
    const moon = prompt(`Введіть місяць народження (цифрами)`);
    const data = prompt(`Введіть число (цифрами)`)
    const symbol = document.querySelector('#symbol');
    const name = document.querySelector('#paraphraf');

    if (moon == 3 && data >= 21 || moon == 4 && data <= 20) {
        symbol.src = 'img/oven.png';
        name.innerText = 'Овен';
    } else if (moon == 4 && data >= 21 || moon == 5 && data <= 20) {
        symbol.src = 'img/byk.png';
        name.innerText = 'Телець';
    } else if (moon == 5 && data >= 21 || moon == 6 && data <= 20) {
        symbol.src = 'img/blezneci.png';
        name.innerText = 'Близнюкі';
    } else if (moon == 6 && data >= 21 || moon == 7 && data <= 22) {
        symbol.src = 'img/cancer.png';
        name.innerText = 'Рак';
    } else if (moon == 7 && data >= 23 || moon == 8 && data <= 22) {
        symbol.src = 'img/lev.png';
        name.innerText = 'Лев';
    } else if (moon == 8 && data >= 23 || moon == 9 && data <= 22) {
        symbol.src = 'img/diva.png';
        name.innerText = 'Діва';
    } else if (moon == 9 && data >= 23 || moon == 10 && data <= 22) {
        symbol.src = 'img/vagy.png';
        name.innerText = 'Вагі';
    } else if (moon == 10 && data >= 23 || moon == 11 && data <= 22) {
        symbol.src = 'img/skorpion.png';
        name.innerText = 'Скорпіон';
    } else if (moon == 11 && data >= 23 || moon == 12 && data <= 21) {
        symbol.src = 'img/strilec.png';
        name.innerText = 'Стрілець';
    } else if (moon == 12 && data >= 22 || moon == 1 && data <= 19) {
        symbol.src = 'img/kozerog.png';
        name.innerText = 'Козеріг';
    } else if (moon == 1 && data >= 20 || moon == 2 && data <= 19) {
        symbol.src = 'img/vodoman.png';
        name.innerText = 'Водолій';
    } else if (moon == 2 && data >= 20 || moon == 3 && data <= 20) {
        symbol.src = 'img/ryby.png';
        name.innerText = 'Риби';
    } else {
        alert('помилка!');
    }
}