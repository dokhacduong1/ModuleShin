

import { submitShin } from "./shin.js"


const shinSubmit = document.querySelector(".shin-submit")
shinSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    const test =submitShin(e)
    console.log(test)
})







