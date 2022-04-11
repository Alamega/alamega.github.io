function hello() {
    let input = document.getElementById('input_hello');
    let result = document.getElementById('result_hello');
    if (input.value.length > 20) {
        result.innerHTML = "Ахахаха как смешно (нет)";
    } else {
        result.innerHTML = "Здравствуйте, " + input.value + " !";
    }
}