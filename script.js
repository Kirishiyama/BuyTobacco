$(function () {




var calc = {
    summ: 0, // сумма изначально 0
    valueArray: (function () { //массив изначально создается на основе данных value выбранных кнопок
        var array = [],
            arrayLength = $("#form--calc .calc__group--input").length;
        for (var i = 0; i < arrayLength; i++) {
            array[i] = parseInt($("#form--calc .calc__group--input").eq(i).find("input:checked").attr("value")) || 0;
        };
        return array;
    })(),
    summation: function () { //суммирует значения массива с данными
        var summ = 0,
            i = this.valueArray.length - 1;
        for (; i >= 0; i--) {
            summ += this.valueArray[i];
        };
        this.summ = summ;
        $("#summ").html(calc.summ);
    },
    changeEvent: function () {	//подключение обработчика событий
        $("input[type='radio']").change(function () {	//для радиокнопок
            var element = event.target,
                elementValue = parseInt(element.value),
                elementId = $(element).parents(".calc__group--input").index();
            calc.valueArray[elementId] = elementValue;
            calc.summation ();
        });
        $("input[type='checkbox']").change(function () {	//для чекбоксов
            var element = event.target,
                elementValue = parseInt(element.value),
                elementId = $(element).parents(".calc__group--input").index();
            if (!element.checked) {
                elementValue = 0;
            };
            calc.valueArray[elementId] = elementValue;
            calc.summation ();
        });
    },
    init: function () {
        calc.summation ();
        calc.changeEvent ();
    }
};
calc.init ();


});