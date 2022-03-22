$(function(){
  $(".size ").on('change',function(){
    selectedSize= $(".size :selected").text();
  
    if (selectedSize==="small"){
      $(".smtop").show();
      $(".mdtop").hide();
      $(".ltop").hide();
    }
    else if(selectedSize==="medium"){
      $(".smtop").hide();
      $(".mdtop").show();
      $(".ltop").hide();
    }
    else {
      $(".smtop").hide();
      $(".mdtop").hide();
      $(".ltop").show();
    }
  })

        var orderr = 1;
        var grandtotal=0;
        // var top = [];
        function Pizza(order,size,top,crust,total){
          this.orderNo=order;
          this.size=size;
          this.top=top;
          this.crust=crust;
          this.total=total;
          
        }

  $("#order").click(function(){
    
      var size = $(".size option:selected").val();

      var top= $(".top :checked").val();
        
        // $('input[type="checkbox"]:checked').each(function(){
        //  num=parseInt($(this).val())
        //   top.push(num);
        //   return parseInt(top);

        // });

        // topReduce= top.reduce((a,b)=>a+b,0);

        var crust = $(".crust option:selected").val();
        var total = parseInt(size) + parseInt(top) + parseInt(crust);
         orderr = 1;
        grandtotal += total
        $(".onOrder").show();
        $(".table").show();
        $("#order").hide();
        
    
    
    
     
    $("#orderr").append(orderr)
    $("#size").append($(".size option:selected").text()+"-"+size)
    $("#toppings").append($(".top :checked").attr("id")+"-"+top)
    $("#crust").append($(".crust option:selected").text()+"-"+crust)
    $("#total").append(total)

    $("#checkout").click(function(){
      $("#delivery").hide();
      $("#del").hide();
      $("#add").hide();
      $("#checkoutMsg").text("your total is Ksh"+grandtotal+"/ you can come pick up you order in 10 minutes")

    })

    $("#delivery").click(function(){
      $(".onDelivery").show();
      grandtotal=grandtotal+300;
      $("#delivery").hide();
      $("#del").hide();
      $("#add").hide();
      $("#checkout").hide();
      $("#Dcheckout").hide();


      $("#location").click(function(){
        $("#Dcheckout").show();

      let local= $("#loc").val();
      console.log($("#loc").val())
      console.log("your total is "+grandtotal+" and will be delivered to "+local)
      
      $("#Dcheckout").click(function(){
        $("#DcheckoutMsg").text("your total is Ksh"+grandtotal+"/ and will be delivered to "+local)
      })
      })
    })

})

      // var top2 = [];

    $("#add").click(function(){
      
      var size = $(".size option:selected").val();

      console.log($('.top :checked').val())
      
      var top= $(".top :checked").val();
      //  $('input[type="checkbox"]:checked').each(function(){
      //     num1=parseInt($(this).val())
      //     return top2.push(num1);
      //  });

      //  topReduce1= top2.reduce((a,b)=>a+b,0);

        var crust = $(".crust option:selected").val();
        var total = parseInt(size) + parseInt(top) + parseInt(crust);
         orderr += 1;
         grandtotal+=total

         
        var addPizza= new Pizza(orderr,size,top,crust,total)

        $("#pizza").append("<tr><td id='orderr'>"+addPizza.orderNo+"</td><td id='size'>"+$(".size option:selected").text()+"-"+addPizza.size+"</td><td id='toppings'>"+$(".top :checked").attr("id")+addPizza.top+"</td><td id='crust'>"+$(".crust option:selected").text()+"-"+addPizza.crust+"</td><td id='total'>"+addPizza.total+"</td></tr>")
        
        $("#checkout").click(function(){
          $("#delivery").hide();
          $("#del").hide();
          $("#add").hide();
          $("#checkoutMsg").text("your total is Ksh"+grandtotal+"/ you can come pick up you order in 10 minutes")
          $("#checkout").hide();
        })
    

     

    $("#delivery").click(function(){
      $(".onDelivery").show();
      grandtotal=grandtotal+300;
      $("#delivery").hide();
      $("#del").hide();
      $("#add").hide();
      $("#checkout").hide();
      $("#Dcheckout").hide();

      $("#location").click(function(){
        $("#Dcheckout").show();
      let local= $("#loc").val();
      console.log($("#loc").val())
      console.log("your total is "+grandtotal+" and will be delivered to "+local)
      
      $("#Dcheckout").click(function(){
        $("#DcheckoutMsg").text("your total is Ksh"+grandtotal+"/ and will be delivered to "+local)
      })
    })

    })

    })

    


    


})