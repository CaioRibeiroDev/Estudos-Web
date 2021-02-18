const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: 'red',
    section: 'blue',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer:'#304ffe',
    form: '#9f6581',
    body: '#25b6da', 
    padaro: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padaro
    }
}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLocaleLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNode) 
    }
})