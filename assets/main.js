$(function () {

    $.ajax({
        url: 'https://www.codeschool.com/users/1252290.json',
        dataType: 'jsonp',
        success: function (response) {
            var arr = response.courses.completed;
            for (var i = 0; i < arr.length; i++) {
                var h3 = $("<h3 />", {
                        text: arr[i].title
                    }),
                    img = $("<img />", {
                        src: arr[i].badge
                    }),
                    a = $("<a />", {
                        href: arr[i].url,
                        "class": "btn btn-primary",
                        target: "_blank",
                        text:"See Course"
                    });
                $('#badges').append(
                    $('<div/>')
                        .addClass("course")
                        .append(h3)
                        .append(img)
                        .append(a)
                );
            }
        }
    });
});

var httpRequest = new XMLHttpRequest();