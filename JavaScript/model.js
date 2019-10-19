function verificaCPF() {
    var cpf = formulario.cpf.value
    cpf = cpf.replace(/[^\d]+/g,'')
    var error = document.getElementById('erro')
    var certo = document.getElementById('certo')
    var insira =document.getElementById('insira')

    if(!cpf){
        insira.classList.remove('none')
        certo.classList.add('none')
        error.classList.add('none')
        }
        else if(TestaCPF(cpf)){
        insira.classList.add('none')
        certo.classList.remove('none')
        error.classList.add('none')
    }else{
        error.classList.remove('none')
        insira.classList.add('none')
        certo.classList.add('none')
    }

}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}
function fMascEx() {
    obj.value=masc(obj.value)
}

function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}