function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/foto-de-perfil.jpg' )
    } else {
        img.setAttribute('src', './assets/foto-de-perfil2.jpg')
    }

    //Pegar a tag img

    // Se estiver em light mode, add img light
    //se estiver em dark mode, manter a img normal
    //Substituir a img
}