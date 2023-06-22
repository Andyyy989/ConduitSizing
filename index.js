const btnEl = document.getElementById("btn");

const RawAmount1 = document.getElementById("Amount1");
const RawWireSize1 = document.getElementById("WireSize1");
const RawWireSize2 = document.getElementById("WireSize2");
const result = document.getElementById("result");
const RawType = document.getElementById("type");
const RawCType = document.getElementById("Ctype");


// Data for the wire sizes
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
    "14": 13.33, "12": 16.62, "10": 21.48, "8": 35.78, "6": 56.35, "4": 73.75, "3": 84.95, "2": 98.87, "1": 143.35, 
    "1/0": 166.27, "2/0": 194.09, "3/0": 227.51, "4/0": 268.51, "250": 353.32, "300": 401.15, "350": 446, 
    "400": 494.41, "450": 539.54, "500": 583.21, "600": 708.74, "700": 796.73, "750": 840.33, "800": 884.05, 
    "900": 970.38, "1000": 1053.24, "1250": 1410.63, "1500": 1625.97, "1750": 1839.84, "2000": 2050.04 
};

const TTRU = {
    "14": 18.7, "12": 22.56, "10": 27.99, "8": 47.29, "6": 59.72, "4": 77.76, "3": 89.42, "2": 103.51, "1": 137.89, 
    "1/0": 160.16, "2/0": 187.48, "3/0": 22062, "4/0": 262.45, "250": 320.47, "300": 364.4, "350": 408.64, 
    "400": 455.03, "450": 498.36, "500": 540.78, "600": 661.43, "700": 746.03, "750": 788.74, "800": 831.11, 
    "900": 914.88, "1000": 995.38, "1250": 1199.5, "1500": 1499.5, "1750": 1651.8, "2000": 1851.26 
};

// const a = {
//     "14": , "12": , "10": , "8": , "6": , "4": , "3": , "2": , "1": , 
//     "1/0": , "2/0": , "3/0": , "4/0": , "250": , "300": , "350": , 
//     "400": , "450": , "500": , "600": , "700": , "750": , "800": , 
//     "900": , "1000": , "1250": , "1500": , "1750": , "2000": 
// };

// Data for conduit types
const RM = {
    "16": 80.93, "21": 141.6, "27": 229.02, "35": 393.91, "41": 534.56, "53": 879.48, "63": 1255.62, 
    "78": 1935.43, "91": 2583.29, "103": 3324.51, "129": 5215.77, "155": 7524.32
};

const FM = {
    "12": 28.47, "16": 79.22, "21": 133.58, "27": 202.68, "35": 316.69, "41": 456.04, "53": 810.73,
    "63": 1266.77, "78": 1824.15, "91": 2482.87, "103": 3242.93
};

const RP = {
    "16": 66.69, "21": 122.79, "27": 202.68, "35": 316.69, "41": 456.04, "53": 810.3, "63": 1180.51, 
    "78": 1824.15, "91": 2455.02, "103": 3147.88, "129": 4795.72, "155": 7045.04, "200": 12489.83
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
        case "RRRRRRJ6":
            area = parseInt(amount1) * parseFloat(RRRRRRJ6[wireSize1]) + parseFloat(RRRRRRJ6[wireSize2]);
            break;
        case "TTRU":
            area = parseInt(amount1) * parseFloat(TTRU[wireSize1]) + parseFloat(TTRU[wireSize2]);
            break;
        default:
            area = 0;
    }

    switch (Ctype) {
        case "RM":
            diameter = findLargestValueKey(RM, parseFloat(area));
            break;
        case "FM":
            diameter = findLargestValueKey(FM, parseFloat(area));
            break;
        case "RP":
            diameter = findLargestValueKey(RP, parseFloat(area));
            break;
        default:
            diameter = 0;
    }

    result.innerText = `Your conduit size is ${diameter}mm`;
}

btnEl.addEventListener("click", calc);