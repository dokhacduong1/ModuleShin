


function submitShin(e) {
    function handleSubmitShin() {
        const shinForm = e.target
        const shinFormItem = shinForm.querySelectorAll(".shin-form-item")
        const formData = {};
        
        shinFormItem.forEach(item => {
           
            const input = item.querySelector('input, textarea');
            if (input) {
                const name = input.parentNode.getAttribute('name');
                const checkType = input.getAttribute("type")
                
                if(checkType === "radio" || checkType === "checkbox"){         
                    if(input.checked){
                        const value = input.value;         
                        formData[name] = value;
                    }
                }else{
                    if (name !== null) {
                        const value = input.value;
                        formData[name] = value;
                    }
                }
               

            }
        });

        return formData
    }
    return handleSubmitShin()

}
const handleSubmit = (e)=>{
    e.preventDefault();
    const dataForm = submitShin(e)
    console.log(dataForm)
}

const handleSubmit1 = (e)=>{
    e.preventDefault();
    const dataForm = submitShin(e)
    console.log(dataForm)
}
const handleSubmit2 = (e)=>{
    e.preventDefault();
    const dataForm = submitShin(e)
    console.log(dataForm)
}

