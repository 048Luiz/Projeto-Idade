function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let form = document.getElementById("nascimento");
  let res = document.getElementById("resultado");
  if (Number(form.value) < 1900 || Number(form.value) > ano) {
    alert("ERRO! Verifique seus dados novamente.");
  } else {
    let sex = document.getElementsByName("sex");
    let idade = ano - Number(form.value);
    let genero = "";
    let img = document.createElement("img");
    img.getAttribute("id", "foto");
    if (sex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'imagens/fotobebemasc.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'imagens/jovemmasc.jpg')
      } else if (idade < 58) {
        //adulto
        img.setAttribute('src', 'imagens/adultomasc.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'imagens/idosomasc.jpg')
      }
    } else if (sex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'imagens/fotobebefemin.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'imagens/jovemfemin.jpg')
      } else if (idade < 58) {
        //adulto
        img.setAttribute('src', 'imagens/adultofemin.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'imagens/idosofemin.jpg')
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img)
  }
}
