 document.querySelector("span .fa-plus").addEventListener("click", function(){
  document.getElementById("form").style.display = "block";
  document.querySelector('input[name="add"]').focus();
  this.style.display = "none";
})

  document.querySelector('input[name="add"]').addEventListener("blur", function(){
  document.querySelector("span  .fa-plus").style.display = "flex";
  document.getElementById("form").style.display = "none";
}