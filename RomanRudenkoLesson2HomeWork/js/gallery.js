var config = [{
        href: './img/01.jpg',
        alt: "Картинка 1"
    },
    {
        href: './img/02.jpg',
        alt: "Картинка 2"
    },
    {
        href: './img/03.jpg',
        alt: "Картинка 3"
    },
    {
        href: './img/04.jpg',
        alt: "Картинка 4"
    },
    {
        href: './img/05.jpg',
        alt: "Картинка 5"
    },
    {
        href: './img/06.jpg',
        alt: "Картинка 6"
    },
];

class Gallery {
    /*
    1. Получить сведения о картинке
    2. Сформировать хтмл код
    3. Вставить код на страницу
    */
    constructor() {
        this.tumbs = [];
        this.tumblr(config);
    }

    tumblr(config) {
        for (let i = 0; i < config.length; i++) {
            this.tumbs.push(this.tumb(config[i].href, config[i].alt));
        }
    }
    tumb(href, alt) {
        return '<a href="' + href + '">' +
            '<img src="' + href + '" alt="' + alt + '" style="width:222px;height:222px;border:0;"></a>';
    }
    render() {
        let result;
        for (let i = 0; i < this.tumbs.length; i++) {
            result += this.tumbs[i];
        }
        return result;
    }
    write() {
        document.write(this.render());
    }
}

let gallery = new Gallery();
gallery.write();