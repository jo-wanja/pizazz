$(function(){
$(".size ").on('change',function(){
  selectedSize= $(".size :selected").text();
 console.log(selectedSize);
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
    var order = 1;
    var grandTotal = 0;
    console.log(total)
})

})