// Массив объектов
var config = [{
        href: '/',
        name: "Главная"
    },
    {
        href: '/catalog',
        name: "Каталог"
    },
    { // Объект с вложенными объектами
        href: '/gallery',
        name: "Галерея",
        items: [{
            href: '/1',
            name: "Фото 1"
        }, {
            href: '/2',
            name: "Фото 2"
        }],
    }
];

class Container {
    remove(id) {
        document.getElementById(id).remove();
    }
}


class Menu extends Container {
    static info() {
        console.log('show info');
    }
    constructor(id, config) {
        super();
        this.id = id;
        this.items = [];
        this.createItems(config);
    }
    createItems(config) {
        for (let i = 0; i < config.length; i++) {
            this.items.push(new MenuItem(config[i].href, config[i].name)); // Заполняем массив items сформированными пунктами меню
        }
    }
    create() {
        document.write(this.render()); // Пишем на страницу то что выдал render()
    }
    // Формирует основной ul элемент меню
    render() {
        let result = '<ul id="' + this.id + '">';

        for (let i = 0; i < this.items.length; i++) {
            result += this.items[i].render(); // Рекурсия, само вызов
        }

        result += '</ul>';
        return result;
    }
}

// MenuItem собирает li блок со ссылкой в меню
class MenuItem extends Container {
    constructor(href, name) {
        super();
        this.href = href;
        this.name = name;
    }
    // Формирует ссылки внутри меню
    render() {
        return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
    }
}

/*
 Если в объекте внутри config содержится вложенный массив items, то считаем что это вложенное меню
*/

let menu = new Menu("main-menu", config); // (id, config)
menu.create();
Menu.info();

let container = new Container();

setTimeout(function(){container.remove("main-menu")}, 2000);

