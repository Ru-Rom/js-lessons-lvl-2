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
        this.dLoadConfig();
        //this.tumblr(config);
    }
    dLoadConfig() {
        var url = "http://localhost/gallery_conf.json";
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        var self = this;

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var config = JSON.parse(xhr.responseText);
                    self.tumblr(config);
                    self.write();
                }
            }
        };
    }
    tumblr(config) {
        console.log(config);
        for (let i = 0; i < config.length; i++) {
            console.log(config[i].alt);
            this.tumbs.push(this.tumb(config[i].href, config[i].alt)); // Наполняем массив tumbs готовыми блоками ссылок
        }
    }
    tumb(href, alt) {
        return '<a href="' + href + '">' +
            '<img src="' + href + '" alt="' + alt + '" style="width:222px;height:222px;border:0;"></a>';
    }
    render() {
        
        console.log(this.tumbs);
        let result;
        for (let i = 0; i < this.tumbs.length; i++) {
            console.log(this.tumbs[i]);
            result += this.tumbs[i];
        }
        return result;
    }
    write() {
        document.write(this.render());
    }
}

let gallery = new Gallery();
//gallery.write();
//setTimeout(function(){gallery.write()}, 2000);