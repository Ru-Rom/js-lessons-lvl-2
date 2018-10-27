$.getJSON("http://localhost/cities.json", function(data) {

    for (let i = 0; i < data.city.length; i++) {
        $("#citySelect").append('<option>' + data.city[i].name + '</option>');
    }

});