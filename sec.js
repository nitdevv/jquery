$(document).ready(function () {

var json = {

  "205100": {
      "success": true,
          "data": {
          "type": "pesron",
              "firstName": "nitesh",
              "lastName": "Singh",
              "dob": "24 April 1973",
      }
  }

};

var person_info = [];
for (var key in json) {
  if (json.hasOwnProperty(key)) {
      var item = json[key];
      person_info.push({
          firstName: item.data.firstName ,
           lastName: item.data.lastName,
           dob: item.data.dob
           // firstName: item.data.firstName
      });
  }
}
console.log(person_info);
var tr;
for (var i = 0; i < person_info.length; i++) {
  tr = $('<tr/>');
  tr.append("<td>" + person_info[i].firstName + "</td>");
  tr.append("<td>" + person_info[i].lastName + "</td>");
  tr.append("<td>" + person_info[i].dob + "</td>");

  $('table').append(tr);
}
});
