// Массив объектов
// var config = [{
//         href: '/',
//         name: "Главная"
//     },
//     {
//         href: './gallery.html',
//         name: "Каталог"
//     },
//     { // Объект с вложенным массивом объектов
//         href: './gallery.html',
//         name: "Товары",
//         items: [{
//                 href: './img/01.jpg',
//                 name: "Кот 1"
//             }, {
//                 href: './img/02.jpg',
//                 name: "Кот 2"
//             }, {
//                 href: './gallery.html',
//                 name: "Еще товары",
//                 items: [{
//                     href: './img/03.jpg',
//                     name: "Полосатый кот 1",
//                 }, {
//                     href: './gallery.html',
//                     name: "Третий под каталог",
//                     items: [{
//                         href: './img/04.jpg',
//                         name: "Рыжий кот 1",
//                     }, {
//                         href: './img/05.jpg',
//                         name: "Шерстистый кот 2",
//                     }]
//                 }]
//             }


//         ],
//     }
// ];

class Container {
    remove(id) {
        document.getElementById(id).remove();
    }
}

// Собирает и хранит все пункты меню в items, рисует меню через render
class Menu extends Container {
    static info() {
        console.log('show info');
    }
    constructor(id, config) {
        super();
        this.id = id;
        this.items = []; // Массив содержащий href и name
        if (!config) {
            this.dLoadMenu();
        } else {
            this.createItems(config);
        }
    }
    dLoadMenu() {
        var url = "http://localhost/menu_conf.json";
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        var self = this;

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var config = JSON.parse(xhr.responseText);
                    self.createItems(config); // Инициализируем сборку меню
                    self.create(); // Запускаем рисовку
                }
            }
        };
    }
    createItems(config) {

        for (let i = 0; i < config.length; i++) {
            // При этом this.items становится экземпляром класса MenuItem
            this.items.push(new MenuItem(config[i].href, config[i].name)); // Заполняем массив items объектами с href и name
            // Если config[i].содержит items вызываем Menu с найденным ...[i].items
            if (config[i].hasOwnProperty('items')) {
                this.items.push(new Menu("child-menu", config[i].items));
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
            result += this.items[i].render(); // MenuItem.render(); 
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
    render() {
        return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
        // 
    }
}

/*
 Если в объекте внутри config содержится вложенный массив items, то считаем что это вложенное меню
*/

let menu = new Menu("main-menu"); // (id, config)
menu.create();
Menu.info();

let container = new Container();

// setTimeout(function(){container.remove("main-menu")}, 2000);