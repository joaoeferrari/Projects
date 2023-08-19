function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=6 && hora < 12){
        img.src = 'img/manhaCortada.png'
        document.body.style.background = '#fde0c1'
    } else if (hora >= 12 && hora <19){
        img.src = 'img/tardeCortada.png'
        document.body.style.background = '#9da9b6'

    } else{
        img.src = 'img/noiteCortada.png'
        document.body.style.background = '#002133'

    }
}