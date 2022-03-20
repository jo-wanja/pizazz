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
})