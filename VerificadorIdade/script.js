function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value)> ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id','foto')



        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 14){
                img.setAttribute('src', 'img/criancaMeninoCortado.png')
            } else if(idade < 18){
                img.setAttribute('src', 'img/meninoAdolescenteCortado.png')
            }
            else if (idade < 60){
                img.setAttribute('src', 'img/homemAdultoCortado.png')
            } else{
                img.setAttribute('src', 'img/homemIdosoCortado.png')
            }
        }    


    else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 14){
                img.setAttribute('src', 'img/criancaMeninaCortada.png')
            } else if(idade < 18){
                img.setAttribute('src', 'img/meninaAdolescenteCortada.png')
            }
            else if (idade < 60){
                img.setAttribute('src', 'img/mulherAdultaCortada.png')
            } else{
                img.setAttribute('src', 'img/mulherIdosaCortada.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}