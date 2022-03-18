
window.onload=function() {

document.getElementById("here").addEventListener("click", function(){
    document.getElementById("main-1").style.display="none";
    document.getElementById("main-2").style.display="block";

})

document.getElementById("keepgoing").addEventListener("click", function(){
    document.getElementById("main-2").style.display="none";
    document.getElementById("main-3").style.display="block";

})

document.getElementById("yellow").addEventListener("click", function(){
    document.getElementById("main-3").style.display="none";
    document.getElementById("main-4").style.display="block";

    
})
document.getElementById("blue").addEventListener("click", function(){
    document.getElementById("main-3").style.display="none";
    document.getElementById("main-4").style.display="block";
})
}

let color = '';
 function setColor (c){
     color = c ;
    
 }
 
function go() {
    let final = document.getElementById("final");
    final.style.display="block";
    document.getElementById("main-4").style.display="none";
    
    let h1 = document.createElement('h1');
    h1.innerHTML = "&#128580 You wish &#128580";
    h1.style.color = color;

    final.append(h1);

    let num = document.getElementById("quantity").value;
    
    for (let i = 0; i < num; i++) {
         let img = document.createElement('img');
         img.setAttribute('src', 'assets/IMG_6510.jpg');
         final.append(img);
        
    }

   
   
}
        


