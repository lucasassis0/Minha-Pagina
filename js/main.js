function consultaCep() {
    var cep = document.getElementById("cep").value;
    if (cep) {
        var url = `http://viacep.com.br/ws/${cep}/json/`
        $.ajax({
            url: url,
            type: "GET",
            success: res => {
                console.log(res)
                $("#logradouro").html(res.logradouro)
                // document.getElementById("logradouro").innerHTML = res.logradouro
                $("#bairro").html(res.bairro)
                // document.getElementById("bairro").innerHTML = res.bairro
                $("#localidade").html(res.localidade)
                // document.getElementById("localidade").innerHTML = res.localidade
                $("#uf").html(res.uf)
                // document.getElementById("uf").innerHTML = res.uf
            }
        })
    } else {
        alert("Favor inserir o cep!")
    }
}