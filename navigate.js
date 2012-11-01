function checkIsNumber(n){
    return (n - 0) == n && n.length > 0;
}

function goto_id(){
  var target = prompt("Enter image number 1 - "+N_IMAGES+": ","1");
  // Validate
  if(checkIsNumber(target)){
    var target_n = parseInt(target);
    if((target_n > 0) && (target_n <= N_IMAGES)){
      document.location.href = "main.html?"+target_n;
      return true;
    }
  }
  return false;
}

function goto_rand(){ 
  document.location.href = "main.html?"+(Math.floor(Math.random()*N_IMAGES)+1);
}