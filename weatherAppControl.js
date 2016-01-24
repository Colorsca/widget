(function(){
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today = (days[d.getDay()]).slice(0,3);
    var weatherDataURL = "http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2222102%22&format=json";
    $.getJSON(weatherDataURL, function(data) {
        jsondata = data.query.results.channel.item;
        console.log("JSON Datas: ", jsondata);
        $.each(jsondata.forecast, function(i, f) {
            if(f.day == today){
                $('.current-temperature').text(f.high);
                $('.temperature-type').text(f.text);
            }
            var row = "<div class=\"day-div\"> <span class=\"day\">"+ f.day +"</span><br>"+ "<span class=\"temp\">"+ f.high+"&deg; /"+f.low+"&deg;</span></div>"
            $(row).appendTo("#week ");

        });
    }).done(function(json ) {
            console.log( "Success");
        }).fail(function(error) {
            console.log( "Request Failed: " , error);
        });
})();


