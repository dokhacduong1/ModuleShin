import { submitShin1 } from "./Form.js"




const shinSubmit = document.querySelector(".shin-submit")
shinSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    const test =submitShin1(e)
    console.log(test)
})







