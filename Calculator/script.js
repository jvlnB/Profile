function clickedBtn(btn, val){
  if(btn!='operator'){
    $(".screen").val($(".screen").val()+val);
  }
  else{
    if(btn!=''){
      $(".screen").val($(".screen").val()+val);
    }
  }
}

function xclearx(){
  $(".screen").val('');
  $(".screen2").val('');

}


function compute(){
    var formula = $(".screen").val();
  $(".screen2").val(eval(formula));

}

function del(){
    var formula = $(".screen").val();
    var lastIndex=formula.length-1;
    var modifiedInput = formula.slice(0, lastIndex);

    console.log(modifiedInput);
    $(".screen").val(modifiedInput);


}

// compute if enter was clicked
$(document).keydown(function (e) {
    if (e.which == 13) {
     e.preventDefault();
     var formula = $(".screen").val();
     var lastIndex = formula.length-1;
     var endOfInput = formula.charAt(lastIndex);

     if(!isNaN(endOfInput)){
        //the formila/expression can be calculated
        compute();
     }  
    }
   });