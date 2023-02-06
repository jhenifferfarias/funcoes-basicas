// get element by id

const nameParagrafo = document.getElementById('name');
nameParagrafo.addEventListener('click', changeName);

function changeName() {
    nameParagrafo.innerHTML= 'Agora clique nos nomes abaixo:';
};

// class name

const items = Array.from(document.getElementsByClassName('item'));

items.forEach(item => {
    item.addEventListener('click', onItemClick);
});

function onItemClick(event) {
    // alert('clicou', event.target.attributes.itemtype.value);
    const value = event.target.attributes.itemtype.value;    

    if (value === 'contato')
    alert('Parabéns, você conseguiu!');
    else(
    alert('Ok, clique no próximo'));
};




