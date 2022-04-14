function Atividade(link, id) {
    let resp
    let http = new XMLHttpRequest()
    http.open('GET', link, true)
    http.onload = function () {
        if (http.readyState == 4 && (http.status >= 200 && http.status < 400)) {
            resp = http.response;
            document.getElementById(id).innerText = resp.substring(10, resp.length - 2)
        }
    }
    http.send();
}
Atividade("https://api.kanye.rest", "p")
function atualizar(){
    window.location.reload();
}
