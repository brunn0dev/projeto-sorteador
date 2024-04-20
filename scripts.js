function gerador() {
    const min = Math.ceil(document.querySelector(".one").value)
    const max = Math.floor(document.querySelector(".two").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    }