// Массив объектов
var config = [{
        href: '/',
        name: "Главная"
    },
    {
        href: '/catalog',
        name: "Каталог"
    },
    { // Объект с вложенным массивом объектов
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
        this.items = []; // Массив содержащий href и name
        this.createItems(config);
    }
    createItems(config) {

        for (let i = 0; i < config.length; i++) {
            // Если config[i].содержит items то создаем еще один array в items[i] = []
            if (config[i].hasOwnProperty('items')) {
                console.log(config[i]);
                //this.items = [];
                this.items.push(new MenuItem(config[i].items[0].href, config[i].items[0].name));
            } else {
                // При этом this.items становится экземпляром класса MenuItem
                this.items.push(new MenuItem(config[i].href, config[i].name)); // Заполняем массив items объектами с href и name
                console.log(this.items);
            }
        }
    }
    create() {
        document.write(this.render()); // Пишем на страницу то что выдал render()
    }
    // Формирует основной ul элемент меню и наполняем его ссылками подготовленными в MenuItem
    render() {
        let result = '<ul id="' + this.id + '">';
        console.log('render');
        for (let i = 0; i < this.items.length; i++) {
            result += this.items[i].render2(); // MenuItem.render(); 

            // если запись в массиве является вложенным массивом
            // выполняем метод this.items[2][i].render2();
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
    // Формирует полностью li, вызываясь как метод items в котором в свою очередь содержится массив объектов
    render2() {
        return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
        // 
    }
}

/*
 Если в объекте внутри config содержится вложенный массив items, то считаем что это вложенное меню
*/

let menu = new Menu("main-menu", config); // (id, config)
menu.create();
Menu.info();

let container = new Container();

// setTimeout(function(){container.remove("main-menu")}, 2000);