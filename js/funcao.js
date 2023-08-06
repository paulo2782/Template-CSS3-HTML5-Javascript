    const itensMenu = document.getElementById('itens-menu')
    const barraMenu = document.querySelector('.barra-menu')

    barraMenu.addEventListener('click', function () {
        if (itensMenu.style.display === 'none') {
            itensMenu.style.display = 'block'
        } else {
            itensMenu.style.display = 'none'
        }
    });

    itensMenu.style.display = 'none'

