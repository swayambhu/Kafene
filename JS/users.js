$(document).ready(function () {
  //Getting Data from the API
  $.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
    function (data, status) {
      // <tr>
      //     <td class="faint-text">1</td>
      //     <td class="normal-text">
      //         <img src="https://robohash.org/estinvoluptas.jpg?size=50x50&set=set1" alt="profile-pic">
      //     </td>
      //     <td class="faint-text">Clementius McGillreich</td>
      //     <td class="normal-text">20 Feb, 1997</td>
      //     <td class="faint-text">Male</td>
      //     <td class="faint-text">Bayambang, Philippines</td>
      // </tr>

      for (var i = 0; i < data.length; i++) {
        let row = $(
          `<tr>
                <td class="faint-text">` +
            data[i].id +
            `</td>
                <td>
                    <img src="` +
            data[i].profilePic +
            `" alt="profile-pic">
                </td>
                <td class="faint-text">` +
            data[i].fullName +
            `</td>
                <td class="normal-text">` +
            data[i].dob +
            `</td>
                <td class="faint-text">` +
            data[i].gender +
            `</td>
                <td class="faint-text">` +
            data[i].currentCity + `, `+data[i].currentCountry+`
            </td>
            </tr>`
        );
        $(".filter-options-wrapper p").html("Count : " + data.length);
        $("#users").append(row);
      }
    }
  );


  //Search user
    $("#search-box").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#users tr").filter(function () {
        $(this).toggle(
          $(this).children("td:eq(2)").text().toLowerCase().indexOf(value) > -1
        );
      });
    });

});
