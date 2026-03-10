const formulario = document.getElementById("cepForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit",async(evento)=>{
    evento.preventDefault();
    //sanitização de dados
    const cep = document.getElementById("cep").value.replace(/\D/g,"");
    if(cep.length!=8){
        alert("Por favor, digite um CEP com 8 dígitos.");
        return;
    }
    resultado.innerHTML="Buscando...";
    try{
        const endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await endereco.json();
        // console.log(endereco);
        if(dados.error){
            resultado.innerHTML("CEP inválido.")
        }else{
            resultado.innerHTML="Rua: "+dados.logradouro+"<br>"+"Bairro: "+dados.bairro+"<br> Cidade: "+dados.localidade+" - "+dados.uf;
        }
    }catch{

    }
});