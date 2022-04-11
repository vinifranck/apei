function Atividade(link, id) {
    let resp
    let jason = new XMLHttpRequest()
    jason.open('GET', link, true)
    jason.onload = function () {
        if (jason.readyState == 4 && (jason.status >= 200 && jason.status < 400)) {
            resp = jason.response;
            document.getElementById(id).innerText = resp.substring(10, resp.length - 2)
        }
    }
    jason.onerror = function () {
        alert("Erro:" + jason);
    }
    jason.send();
}
Atividade("https://api.kanye.rest", "p")