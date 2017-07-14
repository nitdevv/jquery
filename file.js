$(document).ready(function () {
	$("#sub").click(function (e) {
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
			success: function (data) {}
		});
	});
	setTimeout(function () {
		fetchData();
	}, 2000); // this will call your fetchData function for every 10 Sec.
	var sta = 0;
	var len = 0;
	var limit = 3;

	function fetchData() {
		$.ajax({
			type: 'POST',
			url: 'fetch.php',
			dataType: "json", //to parse string into JSON object,
			success: function (data) {
				console.log('json');
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
									txt += "<tr><td>" + data[i].name + "</td><td>" + data[i].email +                                                                     "<td><td>" + data[i].message + "</td><td>" + data[i].date + "</td></tr>";
								}
							}
						}
						if (txt != "") {
							$("#table ").append(txt);
						}
					}
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert('error: ' + textStatus + ': ' + errorThrown);
			}
		});
		return false;
	}
	$('#nextValue').click(function () {
		sta = sta + limit;
		fetchData();
	});
	$('#PreeValue').click(function () {
		sta = sta - limit;
		fetchData();
	})
  
});
// });

