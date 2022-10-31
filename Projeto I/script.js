const dados = [document.getElementById("nome"), document.getElementById("cpf"), document.getElementById("end"), 
document.getElementById("data_nas"),document.getElementById("renda"), document.getElementById("profi")]

function validar() {
    if(dados[0].value.length > 100){
        alert("Nome contém mais que 100 caracteres. Por gentileza, abrevie");
    }

    validarcpf(dados[1].value);
    
    if(dados[2].value.length > 100){
        alert("Endereço contém mais que 100 caracteres. Por gentileza, abrevie");
    }
    
    let data = dados[3].value.split("-");
    let mes_atu = new Date().getMonth()+1;
    let dia_atu = new Date().getDate();
    let ano_atu = new Date().getFullYear();
    let i;
    let idd = ano_atu - data[0];
    if( mes_atu < data[1] || mes_atu == data[1] && dia_atu < data[2]) {
        idd--;
    }
    alert("Você tem " + idd + " anos.");
    
    
    if(dados[4].value < 2548)
    alert("Renda média mensal menor que a renda média mensal dos brasileiros");
    else
    alert("Renda média mensal maior que a renda média mensal dos brasileiros");

    
}

function validarcpf(x){
    let vet = x.split("")
    let vet2 = []
    for(i=0;i<x.length;i++){
        vet2[i]= parseInt(vet[i])
        vet[i]= parseInt(vet2[i])
    }

    
    
    let flag = 0
    let y = 9
    let soma = 0
    for(let i=0;i<vet.length;i++){
        if((vet[i]=="." || vet[i]=="-") && flag==0){
            alert("CPF incorreto!!!")
            flag=1
        }
    }

    if(vet.length<11){
        alert("CPF incorreto, insira o CPF todo!")
        flag=1
    }

    if(flag==0){
        for(let i=1; i<vet.length-2;i++){
            soma+=(vet[i]*y)
            y--
        }
        soma+=10

        

        if(soma%11<2){
            vet2[9] = 0
        }else{
            vet2[9]=11-(soma%11)
        }

        soma = 0
        y=10

        for(let i=1;i<vet2.length-1;i++){
            soma +=(vet2[i]*y)
            y--
        }
        soma+=11

        alert(soma%11)

        

        if(soma%11<2){
            vet2[10] = 0
        }else{
            vet2[10]=11-(soma%11)
        }

        for(i=0;i<vet.length;i++){
            if(vet[i]!=vet2[i])
                flag=1
        }

        if(flag==0){
            alert("CPF aceito!!!")
        }else{
            alert("CPF incorreto!!! O CPF correto é " +vet2)
        }

    }

}