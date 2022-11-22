export function amount() {
    const amountBtn = document.getElementById("amountBtn");
    let numOfItem = amountBtn.value
    numOfItem = parseInt(numOfItem);
    if(numOfItem < 0) {
        amountBtn.value = 1
        numOfItem = 1
    }else {
        let cost = document.getElementById("cost")
        cost = parseFloat(cost.value)
        document.getElementById("total").textContent = cost * numOfItem
    }
}