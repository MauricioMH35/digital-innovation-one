const bodyHeight = document.body.clientHeight;

function clickMostrarModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar');
    fecharModalAberto(modalId);
    setHeightModal(modalId);
}

function fecharModalAberto(modalId) {
    const modal = document.getElementById(modalId);
    modal.addEventListener('click', e => {
        var isContainsMostrar = modal.classList.contains('mostrar');
        var whenModalId = e.target.id == modalId;

        if(isContainsMostrar && whenModalId) {
            modal.classList.remove('mostrar');
        }
    });
}

function setHeightModal(modalId) {
    const modal = document.getElementById(modalId);
    const body = document.body;

    var sizeHeightModal;
    if(modal.clientHeight < bodyHeight) {
        sizeHeightModal = bodyHeight;
    } else {
        sizeHeightModal = modal.clientHeight;
    }

    var valStyleHeight = 'height: ' + sizeHeightModal + 'px;';
    var valAlignItems = 'align-items: start;';
    modal.style.cssText = valStyleHeight + valAlignItems;
}

function clickFecharModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('mostrar');
}