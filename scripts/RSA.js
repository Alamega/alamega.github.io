function GetKeys () {
    let p = document.getElementById('p').value;
    let q = document.getElementById('q').value;
    let d = document.getElementById('d').value;
    let result = document.getElementById('result');
    if (!(p.length>5 || q.length>5 || d.length>5)) {
        let mod = p*q;
        let F = (p-1)*(q-1);
        let e;
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