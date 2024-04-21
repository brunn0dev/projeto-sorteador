function gerador() {
    const min = Math.ceil(document.querySelector(".one").value)
    const max = Math.floor(document.querySelector(".two").value)

    if (min>= max){
    alert("O Valor minimo tem que ser MENOR do que o que o valor MAXÌMO.")
    }
    else{   
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    }

   } 