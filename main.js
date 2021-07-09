var pizza_types=["peperoni ","buffalo chicken ","BBQ chicken ","pineapple "];
function showmenu(){
   document.getElementById("allpizzas").innerHTML=pizza_types;
}
var recomended_pizzas=[];
function submit(){
    var recentpizza = document.getElementById("myInput").value;
    document.getElementById("myInput").innerHTML="";
    recomended_pizzas.push(recentpizza);
    document.getElementById("newpizzas").innerHTML=recomended_pizzas;
    pizza_types.push(recentpizza);
}