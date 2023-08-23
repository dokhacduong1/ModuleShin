//Lấy giá trị xem có class shin-form-item không
const shinFormItem = document.querySelectorAll(".shin-form-item")
shinFormItem.forEach(ItemFor => {
    //Lấy dữ liệu của input trong shin-form-item
    const getInput = ItemFor.querySelector("input")
    //Lấy dữ liệu của textarea trong shin-form-item
    const getTextArea = ItemFor.querySelector("textarea")
    //Lấy dữ lệu thuộc tính của name trong shin-form-item
    const nameItem = ItemFor.getAttribute("name")
     //Lấy dữ lệu thuộc tính của label trong shin-form-item
    const labelItem = ItemFor.getAttribute("label")
    //Đoạn này lấy input hoặc textarea nếu khác null ưu tiên sẽ lấy input 
    const getTextAll = (getInput != null) ? getInput : getTextArea

    //Kiểm tra nếu đủ thành phần sẽ vào trong if
    if (getTextAll != null && nameItem != null && labelItem != null) {
        //set cho cái input hoặc textarea bằng cái nameItem để định nghĩa id của nó
        getTextAll.setAttribute("id", nameItem)
        //Tạo một lable mới
        const labelNew = document.createElement("label")
        //set cho cái label bằng cái nameItem để định nghĩa for của nó
        labelNew.setAttribute("for", nameItem)
        //nhập dữ liệu labelItem đã cho ở phần thuộc tính trên vào labelNew
        labelNew.innerHTML = labelItem
        //gán cho nó lên trên input hoặc area
        ItemFor.insertBefore(labelNew, getTextAll)

    }
})


export function submitShin (e){
    function handleSubmitShin(){
        const shinForm = e.target.parentNode
        const shinFormItem = shinForm.querySelectorAll(".shin-form-item")
        const formData = {};
    
        shinFormItem.forEach(item => {
            const input = item.querySelector('input, textarea');
            if (input) {
                const name = input.parentNode.getAttribute('name');
                const value = input.value;
                formData[name] = value;
            }
        });
    
        return formData
    }
   return handleSubmitShin()
}
