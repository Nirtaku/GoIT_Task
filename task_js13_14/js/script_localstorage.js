$(function() {
    "use strict";

    var testObj = {
        question1:{
            question : "Зачем используется ключевое слово var?",
            answer1: "Для выполнения написанного выше кода",
            answer2: "Для создания новой переменной",
            answer3: "Для вывода сообщения в отдельном окне"
        },

        question2:{
            question : "Правильный вариант комментариев в javascript",
            answer1: "/*закомментированный текст*/",
            answer2: "верны варианты //закомментированный текст и /*закомментированный текст*/",
            answer3: "//закомментированный текст"
        },

        question3:{
            question : "Какого типа данных нет в javascript?",
            answer1: "Decimal",
            answer2: "Array",
            answer3: "Boolean"
        },

        answers:{
            question1: "answer2",
            question2: "answer2",
            question3: "answer1"
        }
    };

    localStorage.setItem('Questions',JSON.stringify(testObj));

    var getItem = localStorage.getItem('Questions');
    var html = $('#templating').html();
    var data = JSON.parse(getItem);
    var content = tmpl(html, data);

    $('div.wrapper').append(content);

    $('input#button').click(function() {
        var inputs = $('input[type=radio]:checked:not(script input[type=radio])');
        var count = 0;
        var numberQuestion = $('.list-questions li:not(script li)').length;
        var numberAnswer = inputs.length;

        if (numberAnswer == numberQuestion && numberAnswer != 0) {
            for (var i = 0, j = 1; i < inputs.length; j++, i++) {
                if (inputs[i].getAttribute('value') == data.answers["question" + j]) ++count;
            }

            var result = {result: "Правильные ответы: <br/>" + count + " / " + numberQuestion};
            $('div.wrapper').append(tmpl($('#templating_modal').html(), result));
            $('input[type=radio]:checked:not(script input[type=radio])').each(function(){$(this).removeAttr("checked");});
        } else {
            $('div.wrapper').append(tmpl($('#templating_modal').html(), {result: "Ответьте на все вопросы!"}));
        }
    });

    $('body').click(function(){
        $('div.modal-backdrop.fade.in').remove();
        $('div.modal.fade.bs-example-modal-sm.in').remove();
        $('div.modal').remove;
    });
});