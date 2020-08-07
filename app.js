
function background(n){
    var deactive = document.getElementsByClassName("active");
    if(deactive.length >0)
    {
      deactive[0].className = "";
    }
    var current = document.getElementById(n)
    current.className = "active";
}
