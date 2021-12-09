
function getNavBar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html) => {
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function adicionar(){
    console.log('click em inserir - 1')

    let nome = document.getElementById('nome').value
    let morada = document.getElementById('morada').value
    let email = document.getElementById('email').value
    let telemovel = document.getElementById('telemovel').value
    let datadenascimento = document.getElementById('datadenascimento').value

}
