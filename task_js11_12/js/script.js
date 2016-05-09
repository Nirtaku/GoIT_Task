$(function() {
    $(document).script_slider();

    var html = $('#second_task_tmpl').html();
    var data = {
        name: "Шмелёва Екатерина Васильевна",
        photo: "img/foto.jpg",
        about: "В декрете",
        reason1: "Сменить род деятельности",
        reason2: "Интересно",
        reason3: "Хочу развиваться",
        mobile: "+380123456789",
        link: "https://facebook.com",
        feedback: "Развиваться, учиться новому, не стоять на месте."
    };

    var content = tmpl(html, data);
    $('body').append(content);
});
