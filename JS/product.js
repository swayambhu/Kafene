$(document).ready(function(){

  //Getting Data from the API
  $.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
    function (data, status) {
    //   <tr>
    //     <td class="faint-text">56104-020</td>
    //     <td class="normal-text">Miconazole Nitrate</td>
    //     <td class="faint-text">Premier Brands of America Inc.</td>
    //     <td class="normal-text">14 Aug, 2012</td>
    //     <td class="faint-text">$993.01</td>
    //     <td class="faint-text">725</td>
    //   </tr>;
      for (var i = 0; i < data.length; i++) {
        let row = $(
          `<tr>
                  <td class="faint-text">` +
              data[i].id +
            `</td>
                <td class="normal-text">` +
            data[i].medicineName +
            `</td>
                <td class="faint-text">` +
            data[i].medicineBrand +
            `</td>
                <td class="normal-text">` +
            data[i].expiryDate +
            `</td>
                <td class="faint-text">` +
            data[i].unitPrice +
            `</td>
                <td class="faint-text">` +
            data[i].stock +
            `</td>
            </tr>`
        );
        $(".filter-options-wrapper p").html("Count : " + data.length);
        $("#products-data").append(row);
      }
    }
  );

  // let getCount = () =>{
  //   $(".filter-options-wrapper p").html("Count : " + $("#products-data tr:visible").length);
  // }

  function sortProduct(status) {
    if (status === "Expired") {
      $("#products-data tr").filter(function () {
        if ( Date.parse(new Date()) >= Date.parse($(this).children('td:eq("3")').text())) {
          $(this).hide();
        }
      });
    }

    if (status === "Low Stock") {
      $("#products-data tr").filter(function () {
        if ($(this).children('td:eq("4")').text() < 100) {
          $(this).hide();
        }
      });
    }
  }

  function showProduct(status) {
    if (status === "Expired") {
      $("#products-data tr").filter(function () {
        if (
          Date.parse(new Date()) >=
          Date.parse($(this).children('td:eq("3")').text())
        ) {
          $(this).show();
        }
      });
    }

    if (status === "Low Stock") {
      $("#products-data tr").filter(function () {
        if ($(this).children('td:eq("4")').text() < 100) {
          $(this).show();
        }
      });
    }
  }
  
  $('.filter input[type="checkbox"]').on("change", function () {
    let sortData = $(this).parent().text().trim();
    if ($(this).prop("checked") === false) {
      console.log(sortData+" unchecked");
      sortProduct(sortData);
      
    } else {
      console.log(sortData+" checked");
      showProduct(sortData)
    }
    getCount();
  });

  let getCount = (id) => {
    $(".filter-options-wrapper p").html(
      "Count : " + $("#products-data tr:visible").length
    );
  };

 
  
})