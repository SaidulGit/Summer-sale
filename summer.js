let total = 0;
function handleClick(target){
    const newItemContiner = document.getElementById("newitem");
    const itemName = target.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
   newItemContiner.appendChild(li);

   const price = target.parentNode.childNodes[3].innerText.split(" ")[3];
    total = parseInt(total) + parseInt(price);
     document.getElementById("total-price").innerText = total;   
}

const input = document.getElementById("input-field");
const applyBtn = document.getElementById("applybtn");

function applyClick(){
        const orginalPrice = total;
        const discountPercentage = 20;
        const discountAmount = (discountPercentage / 100) * orginalPrice;
        const discountPrice = orginalPrice - discountAmount;
        document.getElementById("Discount").innerText = discountAmount;
        document.getElementById("final").innerText = discountPrice;
    }
    

