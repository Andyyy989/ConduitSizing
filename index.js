const btnEl = document.getElementById("btn");

const amount_1 = document.getElementById("inputBox2");
const wire_size_1 = document.getElementById("inputBox3");
const amount_2 = document.getElementById("inputBox4");
const wire_size_2 = document.getElementById("inputBox5");
const result = document.getElementById("result");

function add() {
    const amount1 = amount_1.value;
    const wireSize1 = wire_size_1.value;
    const amount2 = amount_2.value;
    const wireSize2 = wire_size_2.value;

    const result_1 = parseInt(amount1) + parseInt(wireSize1) + parseInt(amount2) + parseInt(wireSize2);
    result.innerText = `Your size is ${result_1}`;
}

btnEl.addEventListener("click", add);