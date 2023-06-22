const btnEl = document.getElementById("btn");

const RawAmount1 = document.getElementById("Amount1");
const RawWireSize1 = document.getElementById("WireSize1");
const RawAmount2 = document.getElementById("Amount2");
const RawWireSize2 = document.getElementById("WireSize2");
const result = document.getElementById("result");
const RawType = document.getElementById("type");

// const typeToDict {

// };

function add() {
    const amount1 = RawAmount1.value;
    const wireSize1 = RawWireSize1.value;
    const amount2 = RawAmount2.value;
    const wireSize2 = RawWireSize2.value;
    const type = RawType.value;

    // const result_1 = parseInt(amount1) + parseInt(wireSize1) + parseInt(amount2) + parseInt(wireSize2);
    // result.innerText = `Your size is ${result_1}`;
    result.innerText = `Your type is ${type}`;
}

btnEl.addEventListener("click", add);