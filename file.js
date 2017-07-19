$(document).ready(function() {
    $("#sub").click(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        var message = $('#msg').val();
        var date = $('#date').val();
        if (name != '' && email != '' && message != '' && date != '') {
            alert("submit");
            $("#name").val("");
            $("#email").val("");
            $("#msg").val("");
            $("#date").val("");
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
        fetchData();
    }, 2000);
    var sta = 0;
    var limit = 3;
    function fetchData() {
        $.ajax({
            type: 'POST',
            url: 'fetch.php',
            dataType: "json", //to parse string into JSON object,
            success: function(data) {
                console.log();
                if (data) {
                    $("#table tbody").empty();
                    var txt = "";
                    len = data.length;
                    console.log(data.length)
                    var txt = "";
                    var start = sta;
                    var endpoint = start + limit;
                    if (len > 0) {
                        for (var i = start; i < data.length; i++) {
                            if (i < endpoint) {
                                if (data[i].name && data[i].email && data[i].message && data[i].date) {
                                    txt += "<tr><td>" + data[i].name + "</td><td>" + data[i].email + "</td><td>" +
                                        data[i].message + "</td><td>" + data[i].date + "</td></tr>";
                                }
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
    $('#nextValue').click(function() {
        var rowCount = $('#table td').length;
        console.log(rowCount);
        if (rowCount < 12) {
            $("#nextValue").prop("disabled", true);
        } else {
            sta = sta + limit;
            fetchData();
        }
    });
    
    
    
    $(document).ready(function() {
        $('th').each(function(tr) {
            $(this).click(function() {
                if ($(this).is('.asc')) {
                    $(this).removeClass('asc');
                    $(this).addClass('desc selected');
                    sortOrder = -1;
                } else {
                    $(this).addClass('asc selected');
                    $(this).removeClass('desc');
                    sortOrder = 1;
                }
                var arrData = $('#table').find('tbody >tr:has(td)').get();
                console.log(arrData);
                arrData.sort(function(a, b) {
                    var val1 = $(a).children('td').eq(tr).text();
                    console.log(val1);
                    var val2 = $(b).children('td').eq(tr).text();
                    if ($.isNumeric(val1) && $.isNumeric(val2))
                        return sortOrder == 1 ? val1 - val2 : val2 - val1;
                    else
                        return (val1 < val2) ? -sortOrder : (val1 > val2) ? sortOrder : 0;
                    console.log(sortOrder);
                });
                $.each(arrData, function(index, row) {
                    $('tbody').append(row);
                });
            });

        });
    });
    var pages = Math.ceil(10 / 3);
    var pageref = function() {
        for (var i = 1; i <= pages; i++) {
            $("#page_navigation").append("<a href='#' id='" + i + "'>" + i + "</a><span></span>");
        }
    }
    pageref();
    var tab = function(start) {}
    tab("1");
    $("a").click(function() {
        var pageno = $(this).attr('id');
        sta = (pageno - 1) * 3;
        fetchData();
    });
});
