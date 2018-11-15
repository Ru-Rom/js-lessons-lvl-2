/*

1) На сайте в форме обратной связи добавьте следующие поля:
a) поле даты рождения;
b) ошибочные поля подсветить с помощью какого-нибудь эффекта, например, Bounce.
2) Все возвращаемые ошибки выводить с помощью виджета Dialog.

*/

// управление полем, форматирование пользовательского ввода

$('#exampleInputDate').mask("00/00/0000", { placeholder: "__/__/____" });

// проверка введеных данных на корректную дату, не старше 1900 и не младше 2000
const yearOld = 1900;
const yearYoung = 2000;

function dateValidate() {
    let s = document.forms.dateForm.elements.exampleInputDate.value;
    //console.log(s);
    var digs = s.split('/');
    var y = digs[2],
        m = digs[1],
        d = digs[0];
    // Считаем по умолчанию что не високосный год
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Если делится на 4 но не на 100, или делится на 400, то это високосный год
    if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29; // Добавляем в феврале 1 день
    }
    // test если проходит патерн выдаем true
    // return !(/\D/.test(String(d))) && d > 0 && d <= daysInMonth[--m];
    result = !(/\D/.test(String(d))) && d > 0 && d <= daysInMonth[--m] && y >= yearOld && y <= yearYoung;
    console.log(result);

    // Если функция dateValidate вернула не true то выводим сообщение об ошибке
    if (!result) {
        $("#dialog").dialog({ modal: true });
        let options = {
            color: "#FF5F00"
        };
        for (let i = 0; i < 3; i++) 
        	{ $("#exampleInputDate").effect('highlight', options, 460); }
    }
}

// ['0/10/2017', '29/2/2016', '01/02'].forEach(function(s) {
//     console.log(s + ' : ' + dateValidate(s));
// });

// $(document).ready(function() {
//     window.cart = new Cart();
// });
