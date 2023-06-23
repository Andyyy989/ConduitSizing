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

const RU1020 = {
    "14": 18.78, "12": 22.56, "10": 28.18, "8": 47.42, "6": 59.86, "4": 77.76, "3": 89.25, "2": 103.51, "1": 137.89, 
    "1/0": 159.93, "2/0": 187.23, "3/0": 220.62, "4/0": 261.01, "250": 319.84, "300": 365.76, "350": 411.15, 
    "400": 455.03, "450": 498.36, "500": 540.36, "600": 622.34, "700": 747.48, "750": 789.74, "800": 830.6, 
    "900": 915.95, "1000": 996.5, "1250": 1247.86, "1500": 1450.85, "1750": 1653.24, "2000": 1852.79
};

const RJ1020 = {
    "14": 25.07, "12": 29.42, "10": 35.78, "8": 67.78, "6": 82.52, "4": 103.33, "3": 116.52, "2": 148.71, "1": 189.42, 
    "1/0": 215.12, "2/0": 246.61, "3/0": 284.72, "4/0": 364.06, "250": 433, "300": 486.17, "350": 538.36, 
    "400": 588.36, "450": 637.49, "500": 684.88, "600": 821.43, "700": 915.95, "750": 962.66, "800": 1007.72, 
    "900": 1101.52, "1000": 1189.69, "1250": 1567.89, "1500": 1794.51, "1750": 2018.86, "2000": 2238.77
};

const RU20 = {
    "14": 18.78, "12": 22.56, "10": 28.18, "8": 41.51, "6": 53.2, "4": 70.14, "3": 81.07, "2": 94.69, "1": 132.94, 
    "1/0": 154.6, "2/0": 181.46, "3/0": 214.34, "4/0": 254.19, "250": 312.28, "300": 357.67, "350": 402.57, 
    "400": 446, "450": 488.91, "500": 530.52, "600": 650.54, "700": 734.93, "750": 776.84, "800": 817.37, 
    "900": 902.06, "1000": 982.01, "1250": 1247.86, "1500": 1450.85, "1750": 1653.24, "2000": 1852.79
};

const RJ10 = {
    "14": 18.78, "12": 22.56, "10": 28.18, "8": 44.3, "6": 66.91, "4": 85.77, "3": 97.82, "2": 112.72, "1": 171.34, 
    "1/0": 195.82, "2/0": 225.91, "3/0": 262.45, "4/0": 306.35, "250": 396.2, "300": 447.13, "350": 497.18, 
    "400": 545.32, "450": 592.66, "500": 638.39, "600": 732.53, "700": 821.94, "750": 866.22, "800": 908.99, 
    "900": 998.18, "1000": 1082.2, "1250": 1461.67, "1500": 1680.74, "1750": 1898.08, "2000": 2111.48
};

const RJ20 = {
    "14": 25.07, "12": 29.42, "10": 44.3, "8": 60.68, "6": 74.66, "4": 94.52, "3": 107.15, "2": 138.09, "1": 183.61, 
    "1/0": 208.93, "2/0": 239.98, "3/0": 277.59, "4/0": 355.99, "250": 424.19, "300": 476.84, "350": 528.48, 
    "400": 578.08, "450": 626.8, "500": 673.8, "600": 808.27, "700": 902.06, "750": 948.42, "800": 993.15, 
    "900": 1086.28, "1000": 1173.85, "1250": 1567.89, "1500": 1794.51, "1750": 2018.86, "2000": 2388.77
};

const TT = {
    "14": 8.87, "12": 11.85, "10": 15.69, "8": 28.18, "6": 46.69, "4": 62.63, "3": 72.99, "2": 85.93, "1": 122.52, 
    "1/0": 143.78, "2/0": 169.72, "3/0": 201.06, "4/0": 239.7, "250": 296.51, "300": 340.45, "350": 381.86, 
    "400": 426.75, "450": 468.75, "500": 509.5, "600": 627.24, "700": 710.16, "750": 751.36, "800": 792.73, 
    "900": 874.59, "1000": 953.34, "1250": 1199.5, "1500": 1398.67, "1750": 1597.51, "2000": 1793.76
};

const TTN = {
    "14": 6.16, "12": 8.45, "10": 13.66, "8": 23.67, "6": 32.67, "4": 53.2, "3": 62.77, "2": 74.82, "1": 100.82, 
    "1/0": 120.18, "2/0": 143.99, "3/0": 172.96, "4/0": 208.93, "250": 255.6, "300": 296.81, "350": 355.56, 
    "400": 377.72, "450": 417.28, "500": 455.79
};

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

const RR = {
    "53": 810.73, "78": 1824.15, "91": 2455.02, "103": 3147.88, "129": 5015.34, "155": 7045.04
};

const MLF = {
    "12": 47.45, "16": 78.43, "21": 136.3, "27": 219.62, "35": 385.95, "41": 502.91, "53": 827.09,
    "63": 1246.5, "78": 1910.36, "91": 2482.87, "103": 3242.93
};  

const NMLF = {
    "12": 45.77, "16": 75.38, "21": 131.38, "27": 210.9, "35": 374.8, "41": 502.91, "53": 839.39
};

const EM = {
    "16": 74.51, "21": 132.03, "27": 215.65, "35": 376.1, "41": 515.3, "53": 852.76, "63": 1513.1, 
    "78": 2280.49, "91": 2980.35, "103": 3801.33
};

const ENM = {
    "16": 66.78, "21": 121.43, "27": 202.2, "35": 357.42, "41": 491.91, "53": 822.91
};

const RRCMI = {
    "16": 93.7, "21": 160.6, "27": 270.44, "35": 456.04, "41": 613.5, "53": 994.37, "63": 1521.84,
    "78": 2261.26, "103": 3782, "129": 5822.66, "155": 8249.89
};

const RRCMD = {
    "16": 44.79, "21": 105.09, "27": 190.74, "35": 301.71, "41": 438.02, "53": 794.54, "63": 1246.9,
    "78": 1799.81, "91": 2454.46, "103": 3210.45, "129": 5006.61
};

const HDPE4 = {
    "16": 67.61, "21": 122.91, "27": 202.68, "35": 359.33, "41": 493.4, "53": 822.91, "63": 1173.97,
    "78": 1821.28, "103": 3157.95, "129": 4980.47, "155": 7210.66, "200": 12521.17
};

const HDPE8 = {
    "16": 51.07, "21": 98.42, "27": 167.06, "35": 303.86, "41": 421.53, "53": 718.4, "63": 1019.63,
    "78": 1600.67, "103": 2809.08, "129": 4467.52, "155": 6411.67
};

const HDPE9 = {
    "16": 75.18, "21": 121.3, "27": 194.16, "35": 311.92, "41": 409.42, "53": 641.56, "63": 937.59,
    "78": 1391.8, "103": 2289.07, "129": 3499.32, "155": 4958.34, "200": 8406.4, "275": 13053.55
};

const HDPE11 = {
    "16": 83.47, "21": 135, "27": 215.82, "35": 348.58, "41": 460.12, "53": 721.11, "63": 1053.92,
    "78": 1565.88, "103": 2574.18, "129": 3935.89, "155": 5575.56, "200": 9455.81, "275": 14683.21
};

const HDPE135 = {
    "16": 91.01, "21": 146.98, "27": 234.65, "35": 378.93, "41": 500.9, "53": 791.06, "63": 1156.75,
    "78": 1718.01, "103": 2825.15, "129": 4318.92, "155": 6119.75, "200": 10376.5, "275": 16115.65
};

const HDPE155 = {
    "16": 95.44, "21": 153.99, "27": 245.77, "35": 396.81, "41": 524.24, "53": 830, "63": 1217,
    "78": 1807.43, "103": 2973.63, "129": 4545.79, "155": 6441.33, "200": 10918.96, "275": 16960.37
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
    
    if (closestValueKey !== null) {
        return closestValueKey;
    } else {
        return null;
    }
}

function hideOption(selectElement, optionValue) {
    var options = selectElement.options;
    for (var i = 0; i < options.length; i++) {
        if (options[i].value === optionValue) {
            options[i].style.display = 'none';
            break;
        }
    }
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
        case "RU1020":
            area = parseInt(amount1) * parseFloat(RU1020[wireSize1]) + parseFloat(RU1020[wireSize2]);
            break;
        case "RJ1020":
            area = parseInt(amount1) * parseFloat(RJ1020[wireSize1]) + parseFloat(RJ1020[wireSize2]);
            break;
        case "RU20":
            area = parseInt(amount1) * parseFloat(RU20[wireSize1]) + parseFloat(RU20[wireSize2]);
            break;
        case "RJ10":
            area = parseInt(amount1) * parseFloat(RJ10[wireSize1]) + parseFloat(RJ10[wireSize2]);
            break;
        case "RJ20":
            area = parseInt(amount1) * parseFloat(RJ20[wireSize1]) + parseFloat(RJ20[wireSize2]);
            break;
        case "TT":
            area = parseInt(amount1) * parseFloat(TT[wireSize1]) + parseFloat(TT[wireSize2]);
            break;
        case "TTN":
            area = parseInt(amount1) * parseFloat(TTN[wireSize1]) + parseFloat(TTN[wireSize2]);
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
        case "RR":
            diameter = findLargestValueKey(RR, parseFloat(area));
            break;
        case "MLF":
            diameter = findLargestValueKey(MLF, parseFloat(area));
            break
        case "NMLF":
            diameter = findLargestValueKey(NMLF, parseFloat(area));
            break;
        case "EM":
            diameter = findLargestValueKey(EM, parseFloat(area));
            break;
        case "ENM":
            diameter = findLargestValueKey(ENM, parseInt(area));
            break;
        case "RRCMI":
            diameter = findLargestValueKey(RRCMI, parseInt(area));
            break;
        case "RRCMD":
            diameter = findLargestValueKey(RRCMD, parseInt(area));
            break;
        case "HDPE4":
            diameter = findLargestValueKey(HDPE4, parseInt(area));
            break;
        case "HDPE8":
            diameter = findLargestValueKey(HDPE8, parseInt(area));
            break;
        case "HDPE9":
            diameter = findLargestValueKey(HDPE9, parseInt(area));
            break;
        case "HDPE11":
            diameter = findLargestValueKey(HDPE11, parseInt(area));
            break;
        case "HDPE135":
            diameter = findLargestValueKey(HDPE135, parseInt(area));
            break;
        case "HDPE155":
            diameter = findLargestValueKey(HDPE155, parseInt(area));
            break;
        default:
            diameter = 0;
    }

    if (diameter != null){
        result.innerText = `Your conduit size is ${diameter}mm`;
    } else {
        result.innerText = `Can't Find a Suitable Conduit`;
    }
}

function hide() {
    const type = RawType.value;
    if (type == "TTN") {
        hideOption(RawWireSize1, "600");
        hideOption(RawWireSize1, "700");
        hideOption(RawWireSize1, "750");
        hideOption(RawWireSize1, "800");
        hideOption(RawWireSize1, "900");
        hideOption(RawWireSize1, "1000");
        hideOption(RawWireSize1, "1250");
        hideOption(RawWireSize1, "1500");
        hideOption(RawWireSize1, "1750");
        hideOption(RawWireSize1, "2000");
        
        hideOption(RawWireSize2, "600");
        hideOption(RawWireSize2, "700");
        hideOption(RawWireSize2, "750");
        hideOption(RawWireSize2, "800");
        hideOption(RawWireSize2, "900");
        hideOption(RawWireSize2, "1000");
        hideOption(RawWireSize2, "1250");
        hideOption(RawWireSize2, "1500");
        hideOption(RawWireSize2, "1750");
        hideOption(RawWireSize2, "2000");
    } else {
        for (var i = 0; i < RawWireSize1.options.length; i++) {
            RawWireSize1.options[i].style.display = 'block';
        }
        for (var i = 0; i < RawWireSize2.options.length; i++) {
            RawWireSize2.options[i].style.display = 'block';
        }
    }
}

btnEl.addEventListener("click", calc);
RawType.addEventListener("click", hide);