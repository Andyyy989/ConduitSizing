const btnEl = document.getElementById("btn");

const RawAmount1 = document.getElementById("Amount1");
const RawWireSize1 = document.getElementById("WireSize1");
const RawWireSize2 = document.getElementById("WireSize2");
const result = document.getElementById("result");
const RawType = document.getElementById("type");
const RawCType = document.getElementById("Ctype");

const RRRU6 = {
    "14": 8.87, "12": 11.58, "10": 15.69, "8": 28.18, "6": 37.94, "4": 52.42, "3": 61.93, "2": 73.9, "1": 99.05, 
    "1/0": 118.24, "2/0": 141.87, "3/0": 170.64, "4/0": 206.37, "250": 251.65, "300": 292.55, "350": 331.03, 
    "400": 372.91, "450": 412.23, "500": 450.51, "600": 561.58, "700": 640.18, "750": 679.33, "800": 718.69, 
    "900": 796.73, "1000": 871.97, "1250": 1108, "1500": 1299.73, "1750": 1491.64, "2000": 1681.47 
};

const RRRU10 = {
    "14": 13.33, "12": 16.62, "10": 21.48, "8": 28.18, "6": 46.69, "4": 62.63, "3": 72.99, "2": 85.93, "1": 122.52, 
    "1/0": 134.78, "2/0": 169.72, "3/0": 210.06, "4/0": 239.7, "250": 288.63, "300": 332, "350": 372.91, 
    "400": 417.28, "450": 458.82, "500": 499.16, "600": 582.78, "700": 622.8, "750": 702.62, "800": 742.64, 
    "900": 821.94, "1000": 898.33, "1250": 1153.3, "1500": 1348.74, "1750": 1544.12, "2000": 1737.16 
};

const RRRRRRJ6 = {

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
    var area = 0;
    var diameter = 0;

    switch (type) {
        case "RRRU6":
            area = parseInt(amount1) * parseFloat(RRRU6[wireSize1]) + parseFloat(RRRU6[wireSize2]);
            break;
        case "RRRU10":
            area = parseInt(amount1) * parseFloat(RRRU10[wireSize1]) + parseFloat(RRRU10[wireSize2]);
            break;
        default:
            area = 0;
    }

    switch (Ctype) {
        case "RM":
            diameter = findLargestValueKey(RM, parseFloat(area));
            break;
        default:
            diameter = 0;
    }

    result.innerText = `Your conduit size is ${diameter}mm`;
}

btnEl.addEventListener("click", calc);