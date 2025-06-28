const greetTexts = ["こんにちは", "Hello", "Bonjour", "Guten Tag", "Hola", "Ciao", "Добрий день", "Olá", "Γειά σας", "Здравствуйте", "你好", "สวัสดี"];

const greet = document.getElementsByClassName("greet")[0];
var index = 0;

function changegreet() {
    greet.innerHTML = greetTexts[index];
    index++;
    if (index >= greetTexts.length) {
        index = 0;
    }
}

setInterval(changegreet, 2000);