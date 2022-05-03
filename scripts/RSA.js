var p;
var q;
var d;
var mod;
var F;
var e;
var arr = [ null, null, 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М',
'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э','Ю', 'Я'
];
function GetKeys () {
    p = document.getElementById('p').value;
    q = document.getElementById('q').value;
    d = document.getElementById('d').value;
    let result = document.getElementById('result');
    if (!(p.length>5 || q.length>5 || d.length>5)) {
        mod = p*q;
        F = (p-1)*(q-1);
        for (i = 0; i < F; i++) {
            if ((d*i)%F==1){
                e = i;
                break;
            }
        }
        result.innerHTML = "Открытый ключ = " + " {" + e + ", " + mod + "}<br>Закрытый ключ = =" + " {" + d + ", " + mod + "}<br>";
    } else {
        result.innerHTML = "Значения p, q, Kc не должны быть больше 99999";
    }
}

function Enc () {
    function EncChar (x) {
        return Math.pow(arr.indexOf(x),e)%mod;
    }
    let encStr = document.getElementById('encStr').value;
    let resultStr = "";
    for (let i = 0; i < encStr.length; i++) {
        resultStr+=EncChar(encStr[i])+" ";
    }
    let result = document.getElementById('result_enc');
    result.innerHTML = "Зашифрованная строка: " + resultStr;
}

function Dec () {
    function DecInt (x) {
        return Math.pow(x,d)%mod;
    }
    //DecInt(27) => 30 ???
    let decStr = document.getElementById('decStr').value;
    arrDec = decStr.split(' ');
    let resultStr = "";
    for (let i = 0; i < arrDec.length; i++) {
        resultStr+=arr[DecInt(arrDec[i])];
    }
    let result = document.getElementById('result_dec');
    result.innerHTML = "Расшифрованная строка: " + resultStr;
}