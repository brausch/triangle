$(function(){
 $(".tri").submit(function(event){
   event.preventDefault();
   var tri1 = parseInt($("#tri-1").val());
   var tri2 = parseInt($("#tri-2").val());
   var tri3 = parseInt($("#tri-3").val());

   $(".not").hide();
   $(".equil").hide();
   $(".isos").hide();
   $(".scal").hide();

   if (tri1 + tri2 <= tri3 || tri1 + tri3 <= tri2 || tri2 + tri3 <= tri1){
     $(".not").show();
   } else if (tri1, tri2 == tri3) {
     $(".equil").show();
   } else if (tri1 === tri2 || tri1 === tri3 || tri2 === tri3){
     $(".isos").show();
   } else if (tri1 !== tri2 && tri1 !== tri3 && tri2 !== tri3){
     $(".scal").show();
   }

 });
});
