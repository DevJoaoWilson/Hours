function carregar(){
    var img = document.getElementById('img')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = (`Agora são exatamente ${hora} horas`)

    if(hora > 0 && hora < 12){
        img.src = "/assets/img/manha.png"
        document.body.style.background = '#f9d487'
    } else if(hora > 12 && hora < 18){
        img.src = "/assets/img/tarde.png"
        document.body.style.background = "#bf7d75"
    }else{
        img.src = "/assets/img/noite.png"
        document.body.style.background = '#193d4b'
    }
}
