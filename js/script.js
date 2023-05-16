//viewport
const viewport=(elements)=>{
   let viewTag = elements.getBoundingClientRect();
   return(
        viewTag.top>=0 &&
        viewTag.left>=0 &&
        viewTag.bottom <=(window.innerHeight || document.documentElement.clientHeight)&&
        viewTag.right<=(window.innerWidth || document.documentElement.clientWidth)
   )
};

let typeTag = document.querySelector(".type-text");
let typeText = typeTag.innerHTML;
typeTag.innerHTML = ""
let textArray = typeText.split("");
let count = -1;
let isViewTag =true;
//scroll
window.addEventListener('scroll',()=>{
    if(viewport(typeTag) && isViewTag){
        isViewTag = false;
        typeTag.innerHTML = '';
        const typeJs =()=>{
            if(count<typeText.length){
                count++;
                typeTag.innerHTML +=`${typeText.charAt(count)}`;
                textArray = typeText.split("");
            }else{
                textArray.pop();
                typeTag.innerHTML = textArray.join("");
                if(textArray.length==0){
                    count = -1
                }
        
            }
        }
        //setInterval
        setInterval(()=>{
        typeJs()
        },500);
    }
    
})


