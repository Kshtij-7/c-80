var namearray = [];

function Submit() {
   var dis_array = [];

   for(var i = 1; i<= 5; i++){
    var name = document.getElementById("name"+i).value
    console.log(name)
    namearray.push(name);
   }
   var length = namearray.length
   for(var k = 0 ; k < length; k++){
       dis_array.push("<h4> Name - " + namearray[k] + "</h4>")
       console.log(dis_array)
   }   
    document.getElementById("div1").innerHTML = dis_array;
    var dis_array_2 = dis_array.join(" ")
    console.log(dis_array_2);
    document.getElementById("div2").innerHTML = dis_array_2

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("update_button").style.display = "inline-block"; 
    
}

function Sort(){
    namearray.sort();
    var namearray_2 = [];
    var length2 = namearray.length
    for(var j = 0; j < length2; j++){
        namearray_2.push("<h4> Name - " + namearray[j] + "</h4>")
    }
    var no_comma = namearray_2.join(" ");

    console.log(no_comma)
    document.getElementById("div2").innerHTML = no_comma;
}

function Update() {
    document.getElementById("div2").innerHTML = "<h1>"+namearray+"</h1>";
    console.log(namearray);
}