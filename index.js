const btnEl = document.getElementById("btn");

const RawAmount1 = document.getElementById("Amount1");
const RawWireSize1 = document.getElementById("WireSize1");
const RawWireSize2 = document.getElementById("WireSize2");
const result = document.getElementById("result");
const RawType = document.getElementById("type");
const RawCType = document.getElementById("Ctype");

const RRRU6 = {
    "14": 8.87, "12": 11.58, "10": 15.69, "8": 28.18, "6": 37.94, "4": 52.42, "3": 61.93, "2": 73.9, "1": 99.05, 
    "0": 118.24, "00": 141.87, "000": 170.64, "0000": 206.37, "250": 251.65, "300": 292.55, "350": 331.03, 
    "400": 372.91, "450": 412.23, "500": 450.51, "600": 561.58, "700": 640.18, "750": 679.33, "800": 718.69, 
    "900": 796.73, "1000": 871.97, "1250": 1108, "1500": 1299.73, "1750": 1491.64, "2000": 1681.47 
};

const RM = {
    "16": 80.93, "21": 141.6, "27": 229.02, "35": 393.91, "41": 534.56, "53": 879.48, "63": 1255.62, 
    "78": 1935.43, "91": 2583.29, "103": 3324.51, "129": 5215.77, "155": 7524.32
};

function findLargestValueKey(obj, target) {
    var closestValue = Infinity;
    var closestValueKey = null;
  
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] >= target && obj[key] < closestValue) {
            closestValue = obj[key];
            closestValueKey = key;
        }
    }
  
    return closestValueKey;
    // if (largestValueKey !== null) {
    //   console.log("Key:", largestValueKey);
    // } else {
    //   console.log("No key found that satisfies the condition.");
    // }
}

function calc() {
    const amount1 = RawAmount1.value;
    const wireSize1 = RawWireSize1.value;
    const wireSize2 = RawWireSize2.value;
    const type = RawType.value;
    const Ctype = RawCType.value;

    if (type == "RRRU6") {
        var area = parseInt(amount1) * parseInt(RRRU6[wireSize1]) + parseInt(RRRU6[wireSize2]);
    } 

    if (Ctype == "RM") {
        var diamter = findLargestValueKey(RM, parseInt(area));
    }

    result.innerText = `Your conduit size is ${diamter}mm`;
}

btnEl.addEventListener("click", calc);