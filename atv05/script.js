(function () {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    const catContainer = document.getElementById('cat-container');
    const btnCarregarGato = document.getElementById('btn-carregar-gato');

    function carregarGato() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const imgElement = document.createElement('img');
                imgElement.src = data[0].url;
                catContainer.innerHTML = '';
                catContainer.appendChild(imgElement);
            })
            .catch(error => {
                console.error(error);
            });
    }

    btnCarregarGato.addEventListener('click', carregarGato);
})();
