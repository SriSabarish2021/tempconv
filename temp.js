
/* BODY */
const body=document.getElementById("body")

body.style.backgroundImage="URL('image0_0 (2).jpg')"
body.style.backgroundSize="cover"
body.style.backgroundRepeat="no-repeat"
body.style.display="flex"
body.style.flexDirection="column"
body.style.justifyContent="center"
body.style.alignItems="center"

/* BODY TITLE */
const bodyH1=body.querySelector(".body-h1")

bodyH1.style.fontFamily="'Sedgwick Ave Display, cursive"
bodyH1.style.textShadow="2px 3px 4px"

/* TEMP BOX */
const tempbox=document.getElementById("tempbox")

tempbox.style.borderRadius="400px"
tempbox.style.border="2px solid black"
tempbox.style.textAlign="center"
tempbox.style.padding="20px"
tempbox.style.display="flex"
tempbox.style.flexDirection="column"
tempbox.style.justifyContent="center"
tempbox.style.alignItems="center"


/* SUBMIT BTN */

const btn=tempbox.querySelector("#btn")
btn.style.backgroundColor="black"
btn.style.color="white"
btn.style.fontWeight="10px"
btn.style.padding="10px"
btn.style.fontFamily="Georgia, 'Times New Roman', Times, serif"
btn.style.borderRadius="50%"

/* RESULT */

const result=document.getElementById("result")
result.style.fontSize="30px"
result.style.fontFamily="Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
result.style.fontWeight="bolder"
result.style.fontStyle="italic"

/* CONDITION */


const temp=document.getElementById("box")
const celsius=document.getElementById("temp1")
const fahrenheit=document.getElementById("temp2")


btn.addEventListener("click",()=>{
    const tempvalue=Number(temp.value)
    if(tempvalue !== null && celsius.checked ){
        let cont=(tempvalue * 9/5) + 32;
        result.textContent=`${cont}°Fahrenheit`
    }
    else if(tempvalue !== null && fahrenheit.checked){
        let cont=(tempvalue - 32) * 5/9
        result.textContent=`${cont.toFixed(1)}°Celsius`
    }
    else{
        result.textContent="Please Select the Conversion Form"
    }
}) 

temp.addEventListener("mouseover",()=>{
    event.target.style.backgroundColor="#9cdede"
    event.target.style.transitionDuration="0.5s"
})
temp.addEventListener("mouseout",()=>{
    event.target.style.backgroundColor="white"
})

btn.addEventListener("mouseover",()=>{
    btn.style.cursor="pointer"
    btn.style.transform="scale(120%,120%)"
    btn.style.backgroundColor="#c4be9e"
    btn.style.color="black"
    btn.style.transitionDuration="0.3s"


})
btn.addEventListener("mouseout",()=>{
    btn.style.cursor="pointer"
    btn.style.transform="scale(100%,100%)"
    btn.style.backgroundColor="black"
    btn.style.color="white"
    btn.style.transitionDuration="0.3s"
})


function addi(add1,add2,sub){
    console.log(add1+add2)
    sub(8,3,multi)
}

function sub(sub1,sub2,multi){
    console.log(sub1-sub2)
    multi(2,3,div)
}

function multi(mul1,mul2,div){
    console.log(mul1*mul2)
    div(10,2)
}

function div(div1,div2){
    console.log(div1/div2)
}

addi(4,5,sub)



function callback(){
    setTimeout(()=>{
        console.log("hello")
        setTimeout(() => {
            console.log("vellumm")
            setTimeout(()=>{
                console.log("order place")
            },6000)
        },4000);
    },2000)
}
callback()