function highlight() {
    //Write your code here
var strong = document.querySelectorAll("strong");
      for (var i = 0; i < strong.length; i++) {
        strong[i].style.color = "green";
      }

}


function return_normal() {
     var strong = document.querySelectorAll("strong");
      for (var i = 0; i < strong.length; i++) {
        strong[i].style.color = "black";
      }

    
}
