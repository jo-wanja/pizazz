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
$("#order").click(function(){
  var size = $(".size option:selected").val();
    var top = $(".top :checked").val();
    var crust = $(".crust option:selected").val();
    var total = parseInt(size) + parseInt(top) + parseInt(crust);
    var orderr = 1;
    var grandTotal = 0;

    $(".onOrder").show();
    $(".table").show();
    $("#order").hide();

    function Pizza(order,size,top,crust,total){
      this.orderNo=order;
      this.size=size;
      this.top=top;
      this.crust=crust;
      this.total=total;
    }
    
     
    $("#orderr").append(orderr)
    $("#size").append($(".size option:selected").text()+"-"+size)
    $("#toppings").append($(".top :checked").attr("id")+"-"+top)
    $("#crust").append($(".crust option:selected").text()+"-"+crust)
    $("#total").append(total)



    $("#add").click(function(){
      var size = $(".size option:selected").val();
        var top = $(".top :checked").val();
        var crust = $(".crust option:selected").val();
        var total = parseInt(size) + parseInt(top) + parseInt(crust);
        orderr = orderr+1;
        grandTotal = grandTotal+total 

        var addPizza= new Pizza(orderr,size,top,crust,total)

        $("#pizza").append("<tr><td id='orderr'>"+addPizza.orderNo+"</td><td id='size'>"+$(".size option:selected").text()+"-"+addPizza.size+"</td><td id='toppings'>"+$(".top :checked").attr("id")+addPizza.top+"</td><td id='crust'>"+$(".crust option:selected").text()+"-"+addPizza.crust+"</td><td id='total'>"+addPizza.total+"</td></tr>")
        


      })

})

})