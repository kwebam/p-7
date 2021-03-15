var menu = [ "Chicken Tandoori Pizza",
    "Deluxe Veggie Pizza",
    "Paneer Tikka Pizza",
    "Veg extravaganza Pizza",
    "Veg Supreme Pizza"];
    function get_menu() {
        var htmldata ;
        htmldata = "<ol class='menu_list'>" ;
        menu.sort();
       for (var i = 0; i<menu.length; i++ ) {
           htmldata = htmldata+ '<li>' + menu[i] + '</li>'
       }
       htmldata = htmldata + "</ol>" ;
       document.getElementById("display_menu").innerHTML=htmldata;
    }
    function add_item() {
        var htmldata ;
        var item = document.getElementById("add_item").Value;
        menu.push(item);
        menu.sort();
        htmldata = "<section class='cards' >";
        for ( var i = 0 ; i<menu.length ; i++ ) {
        htmldata = htmldata + "<div class='card'>" + '<img scr="pizzaImg.png" />' + menu[i] + '</div>' ;    
        }
         htmldata = htmldata + "</section>" ; 
         document.getElementById("display_addedmenu").innerHTML=htmldata;
    }