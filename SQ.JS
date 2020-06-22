const inputField=document.querySelector(".search-value");
inputField.addEventListener("keyup", searchValue);
const contacts =document.querySelector(".contacts");

function searchValue(){
   const inputValue=inputField.value.toUpperCase();
   const ul=document.querySelector(".ulii");
    const lii=ul.getElementsByTagName("li");
   console.log(lii);

   for(let i=0; i < lii.length; i++){
        const a=lii[i].getElementsByTagName("a")[0];
        const contactValue=a.innerHTML.toUpperCase();
          if(contactValue.indexOf(inputValue) > -1){
             lii[i].style.display="block";
             lii[i].addEventListener("click", inputText);
         }else{
              lii[i].style.display= "none";
          }
        
    
   }



}
function inputText(){
    console.log("ckikkdkdkdee");
    inputField.value=this.textContent;

}



const inputField2=document.querySelector(".search-value2");
inputField2.addEventListener("keyup", searchValue2);

function searchValue2(){
const inputField2Value=inputField2.value.toUpperCase();
//console.log(inputField2Value);
const ul=document.querySelector(".ulo");
const li=document.querySelectorAll(".ulo li");
//const li=ul.getElementsByTagName("li");
//console.log(li);

for(let i=0; i < li.length; i++){
    const a=li[i].getElementsByTagName("a")[0];
    const avalue=a.innerHTML.toUpperCase();
    if(avalue.indexOf(inputField2Value) > -1){
        li[i].style.display="";

    }else{
        li[i].style.display="none";
    }

}


}















//baddddddd
// for(let i=0; i < lii.length; i++){
//     const a=lii[i].getElementsByTagName("a")[0];
//     const contactValue=a.innerHTML.toUpperCase();
//      if(contactValue.indexOf(inputValue) > -1){
//          lii[i].style.display= " ";
//      }else{
         
//          lii[i].style.display= "none";
//      }


     //gooooddd
    //  for(let i=0; i < li.length; i++){
    //     const a=li[i].getElementsByTagName("a")[0];
    //     const avalue=a.innerHTML.toUpperCase();
    //     if(avalue.indexOf(inputField2Value) > -1){
    //         li[i].style.display="";
    
    //     }else{
    //         li[i].style.display="none";
    //     }
    

    //replace with this

    // for(let i=0; i < lii.length; i++){
    //     const a=lii[i].getElementsByTagName("a")[0];
    //     const avaluee=a.innerHTML.toUpperCase();
    //     if(avaluee.indexOf(inputValue) > -1){
    //         lii[i].style.display="";
    
    //     }else{
    //         lii[i].style.display="none";
    //     }
        