var pageStart = 0;
var limit = 3;
var count = 0;
var newcount = 0;
var pageLimit = 3;
var offset = 0;
$(document).ready(function() {
    var sort = "name";
    var sortType = "ASC";
    $(".sort").click(function(e) {
        if (sort == e.target.id)
            (sortType == "ASC") ? sortType = "DESC" : sortType = "ASC";
        else
            sortType = "ASC";
        sort = e.target.id;

        fetchData(pageStart);
    })
    $("#sub").click(function(e) {
        e.preventDefault();
        var name = $('#nameuser').val();
        var email = $('#emailuser').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        var message = $('#msguser').val();
        var date = $('#dateuser').val();
        if (name != '' && email != '' && message != '' && date != '') {
            alert("submit");
            $("#nameuser").val("");
            $("#emailuser").val("");
            $("#msguser").val("");
            $("#dateuser").val("");
        } else if (!name) {
            alert("please enter name")
        } else if (!email) {
            console.log(email);
            alert("please enter email")
        } else if (!pattern.test(email)) {
            alert("please enter valid email address");
        } else if (!message) {
            alert("please enter message")
        } else if (!date) {
            alert("please select date")
        }
        $.ajax({
            context: document.body,
            type: "POST",
            url: "insert.php",
            data: {
                "name": name,
                "email": email,
                "message": message,
                "date": date
            },
            success: function(data) {

            }
        });
    });
    setTimeout(function() {
        fetchData(pageStart);
    }, 2000);

    function fetchData(pageStart) {
        console.log(pageLimit);
        console.log(pageStart);
        $.ajax({
            type: 'POST',
            url: 'fetch.php',
            dataType: "json",
            data: {
                "sort": sort,
                "sortType": sortType,
                "offset": offset,
                "limit": pageLimit,
                "pageStart": pageStart
            },
            success: function(data) {
                if (data) {
                    $("#table tbody").empty();
                    var txt = "";
                    count = data[0]['count'];
                    var pages = Math.ceil(count / pageLimit);
                    $('#page_navigation').empty();
                    for (var i = 1; i <= pages; i++) {
                        $("#page_navigation").append("<a href='#' class='pageNumber' id='" + i + "'>" + i + "</a><span></span>");
                    }
                    var data = data[1];
                    len = data.length;
                    newcount = data.length;
                    var txt = "";
                    var start = pageStart;
                    var endpoint = start + limit;
                    if (len > 0) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].name && data[i].email && data[i].message && data[i].date) {
                                txt += "<tr><td>" + data[i].name + "</td><td>" + data[i].email + "</td><td>" +
                                    data[i].message + "</td><td>" + data[i].date + "</td></tr>";
                            }
                        }
                        if (txt != "") {
                            $("#table ").append(txt);
                        }
                    }
                }
            },
        });
        return false;
    }
    $(document).ready(function() {
        $(window).load(function() {
            fetchData(pageStart);
        });
        $("body").on('click', '.pageNumber', function(e) {
            e.preventDefault();
            var pageStart = $(this).attr('id');
            pageStart = (pageStart - 1) * 3;
            fetchData(pageStart);
        });

    });
});
