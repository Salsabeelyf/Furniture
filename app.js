function dropDownMenu(){
  var nav1Id = document.getElementById("nav");
  if (nav1Id.className === ""){
    nav1Id.className += "responsive";
  }else {
    nav1Id.className = "";
  }
}
