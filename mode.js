 
      const themeToggle = document.getElementById("themeToggle");
      themeToggle.addEventListener("click", () =>{
document.body.classList.toggle("dark");
if (document.body.classList.contains("dark")){
  themeToggle.innerHTML = "&#9728; ";
}
else{
  themeToggle.innerHTML = "&#127769; ";

}
});
   