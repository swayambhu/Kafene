$(document).ready(function(){
    
  // Global variables

  
    //Getting Data from the API
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders", function(data, status){
        // <tr>
        //     <td class="faint-text">714-69-5617</td>
        //     <td class="normal-text">Sally Whebell</td>
        //     <td class="normal-text">07 Aug, 2020
        //         <br>
        //         <span class="faint-text">2:29 AM</span>
        //     </td>
        //     <td class="faint-text"> $634.2</td>
        //     <td class="normal-text">Delivered</td>
        // </tr>
        for(var i = 0; i < data.length; i++){
            let row = $(
                `<tr>
                    <td class="faint-text">` + data[i].id +`</td>
                    <td class="normal-text">` +data[i].customerName +`</td>
                    <td class="normal-text">` + data[i].orderDate +`
                        <br>
                        <span class="faint-text">` +data[i].orderTime +`</span>
                    </td>
                    <td class="faint-text"> ` +data[i].amount +`</td>
                    <td class="normal-text">` +data[i].orderStatus +`</td>
                </tr>`
            );
            $(".filter-options-wrapper p").html("Count : "+data.length);
            $("#orders-data").append(row);
        }
      
    })
    
    // $("#search-box").on("keyup", function () {
    //   var value = $(this).val().toLowerCase();
    //   $("#users tr").filter(function () {
    //     $(this).toggle(
    //       $(this).children("td:eq(2)").text().toLowerCase().indexOf(value) > -1
    //     );
    //   });
    // });
    function sortOrder(status){
        status = status.toLowerCase()
        console.log(status);
        $("#orders-data tr").filter(function () {
          if ($(this).children("td:eq(4)").text().toLowerCase() === status) {
            $(this).hide();
          }
        });
    }

    function showOrder(status) {
      status = status.toLowerCase();
      console.log(status);
      $("#orders-data tr").filter(function () {
        if ($(this).children("td:eq(4)").text().toLowerCase() === status) {
          $(this).show();
        }
      });
    }

    $('.filter input[type="checkbox"]').on('change', function(){
        let sortData = $(this).parent().text().trim();
        if($(this).prop("checked") === false){
            console.log(sortData);
            sortOrder(sortData);
        }else{
            showOrder(sortData);
        }
        getCount()
    });
    

    let getCount = (id) => {
      $(".filter-options-wrapper p").html(
        "Count : " + $("#orders-data tr:visible").length
      );
    };
})