//site
const site = document.getElementById("site");
const input = document.getElementById("tags-input");
const value_tag = document.getElementById("value-input");
const complementary_tag = document.getElementById("value-input2");

//tags
const tags_text = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "pre", "code"];
const tags_img = ["img"];
const tags_link = ["a"];
const tags_list = ["ul", "ol", "li"];
const tags_table = ["th", "tr", "td", "table"];
const btn_send = document.getElementById("send");
const parte1 = document.getElementById("parte-1");
const parte3 = document.getElementById("parte3");
const exitLink = document.getElementById("exit");
const enunciado = document.getElementById("enunciado");
// Função para obter os parâmetros da query string
function getQueryParams() {
  const params = {};
  window.location.search
    .replace(/^\?/, "")
    .split("&")
    .forEach(function (param) {
      const parts = param.split("=");
      params[parts[0]] = parts[1];
    });
  return params;
}
const queryParams = getQueryParams();
const param = queryParams.param;

if (param == 1) {
  enunciado.textContent = "Crie 3 tags de texto, as tags devem ser diferentes.";
  enunciado.classList.add("p");
} else if (param == 2) {
  enunciado.textContent = "Crie um link.";
  enunciado.classList.add("p");
} else if (param == 3) {
  enunciado.textContent = "Crie uma imagem";
  enunciado.classList.add("p");
} else if (param == 4) {
  enunciado.textContent = "Crie uma lista ordenada e uma lista não ordenada. ";
  enunciado.classList.add("p");
}

//fase 4
const list4 = [];
function verificaFase4() {
  console.log("entrei na função");
  console.log("Tamanho lista: " + list4.length);
  if (list4.length < 2) {
    console.log("entrei no if");
    if (tags_list.includes(input.value)) {
      console.log("entrei no if do text");
      if (list4.indexOf(input.value) > -1) {
        window.alert("Não pode repetir tag!!!");
      } else {
        complementary_tag.classList.remove("invisivel");
        complementary_tag.classList.add("input");
        complementary_tag.type = "text";
        console.log("lista 4: " + list4);
        btn_send.onclick = function () {
          enviarValueComplementar();
        };
      }
    } else {
      window.alert("Você deve criar uma lista!!!");
    }
  } else {
    window.alert("Você conseguiu!!!");
    complementary_tag.classList.add("invisivel");
    complementary_tag.classList.remove("input");
    btn_send.classList.remove("button");
    btn_send.classList.add("invisivel");
  }
}

function enviarValuefase4(){
  if (input.value == "ul" || input.value == "ol" && complementary_tag.value == "li") {
    if(list4.indexOf(input.value)>-1){
      window.alert("Tem que ser duas listas diferentes!!!")
    }
    list4.push(input.value)
    if(list4.length == 2){
    const valorTags = document.createElement(input.value);
    valorTags.classList.add("classUl");
    const ValueComplementar = document.createElement(complementary_tag.value);
    ValueComplementar.textContent = value_tag.value;
    ValueComplementar.classList.add("classLi");
    valorTags.appendChild(ValueComplementar);
    site.appendChild(valorTags);
    value_tag.classList.add("invisivel");
    value_tag.classList.remove("input");
    complementary_tag.classList.remove("input")
    complementary_tag.classList.add("invisivel")
    input.value = "";
    value_tag.value = ""
    complementary_tag.value = ""
    btn_send.onclick = function () {
      enviarTag();
    };
    window.alert("Você conseguiu!!!")
    input.classList.remove("input")
    input.classList.add("invisivel")
    btn_send.classList.add("invisivel")
    btn_send.classList.remove("button")
    exitLink.classList.remove("invisivel");
    exitLink.parentElement.href = "../Tela_Home/tela_home.html#lista";
  }
  const valorTags = document.createElement(input.value);
  valorTags.classList.add("classUl");
  const ValueComplementar = document.createElement(complementary_tag.value);
  ValueComplementar.textContent = value_tag.value;
  ValueComplementar.classList.add("classLi");
  valorTags.appendChild(ValueComplementar);
  site.appendChild(valorTags);
  value_tag.classList.add("invisivel");
  value_tag.classList.remove("input");
  complementary_tag.classList.remove("input")
  complementary_tag.classList.add("invisivel")
  input.value = "";
  value_tag.value = ""
  complementary_tag.value = ""
  btn_send.onclick = function () {
    enviarTag();
  };
}
}

function resetInputs() {
  input.value = "";
  complementary_tag.value = "";
  value_tag.value = "";
  input.classList.remove("input");
  input.classList.add("invisivel");
  exitLink.classList.remove("invisivel");
  exitLink.parentElement.href = "../Tela_Home/tela_home.html#lista";
  value_tag.classList.add("invisivel");
  value_tag.classList.remove("input");
}

btn_send.onclick = function () {
  enviarTag();
};

//fase 3
const list3 = [];
function verificaFase3() {
  console.log("entrei na funcão");
  console.log("Tamanho lista: " + list3.length);
  if (list3.length < 1) {
    console.log("entrei no if");
    if (tags_img.includes(input.value)) {
      console.log("entrei no if do text");
      if (list3.indexOf(input.value) > -1) {
        window.alert("Não pode repetir tag!!!");
      } else {
        list3.push(input.value);
        value_tag.classList.remove("invisivel");
        value_tag.classList.add("input");
        value_tag.type = "file";
        console.log("lista 3" + list3);
        btn_send.onclick = function () {
          enviarValue();
        };
      }
    } else {
      window.alert("Você deve criar uma imagem!!!");
    }
  } else {
    window.alert("Você conseguiu!!!");
  }
}

function enviarValuefase3() {
  if (list3.length == 1) {
    if (tags_img.includes(input.value)) {
      var file = value_tag.files[0];

      if (tags_img.includes(input.value)) {
        var reader = new FileReader();
        console.log("Entrei no if");
        reader.onload = function (e) {
          // Criar o elemento <img>
          const valorImg = document.createElement("img");

          // Definir os atributos 'src' e 'alt'
          valorImg.src = e.target.result; // URL temporária da imagem
          valorImg.alt = "Descrição da imagem"; // Descrição da imagem
          // Adicionar a imagem ao DOM
          valorImg.style.width = "40%";
          site.appendChild(valorImg);
        };

        reader.readAsDataURL(file);
        console.log("Valor imagem: " + value_tag.value);
      }
      input.classList.remove("input");
      input.classList.add("invisivel");
      btn_send.classList.remove("button");
      btn_send.classList.add("invisivel");
      exitLink.classList.remove("invisivel");
      exitLink.parentElement.href = "../Tela_Home/tela_home.html#imagem";
      value_tag.classList.add("invisivel");
      value_tag.classList.remove("input");
      input.value = "";
      value_tag.value = "";
      window.alert("Você conseguiu!!!");
    }
  }
}

btn_send.onclick = function () {
  enviarTag();
};

//fase 2
const list2 = [];

function verificaFase2() {
  console.log("entrei na funcão");
  console.log("Tamanho lista: " + list2.length);
  if (list2.length < 1) {
    console.log("entrei no if");
    if (tags_link.includes(input.value)) {
      console.log("entrei no if do text");
      if (list2.indexOf(input.value) > -1) {
        window.alert("Não pode repetir tag!!!");
      } else {
        list2.push(input.value);
        value_tag.classList.remove("invisivel");
        value_tag.classList.add("input");
        value_tag.type = "text";
        console.log("lista 2" + list2);
        btn_send.onclick = function () {
          enviarValue();
        };
      }
    } else {
      window.alert("Você deve criar uma link!!!");
    }
  } else {
    window.alert("Você conseguiu!!!");
  }
}

function enviarValuefase2() {
  if (list2.length == 1) {
    if (tags_link.includes(input.value)) {
      const valor = document.createElement(input.value);
      valor.textContent = "Link";
      valor.href = value_tag.value;
      valor.target = "_blank"
      site.appendChild(valor);
      value_tag.classList.add("invisivel");
      value_tag.classList.remove("input");
      btn_send.onclick = function () {
        enviarTag();
      };
      input.classList.remove("input");
      input.classList.add("invisivel");
      btn_send.classList.remove("button");
      btn_send.classList.add("invisivel");
      exitLink.classList.remove("invisivel");
      exitLink.parentElement.href = "../Tela_Home/tela_home.html#nav";
      input.value = "";
      value_tag.value = "";
      window.alert("Você conseguiu!!!");
    }
  } else {
    window.alert("Algo deu errado!");
  }
}

btn_send.onclick = function () {
  enviarTag();
};

//fase 1
const list1 = [];
function verificaFase1() {
  console.log("entrei na funcão");
  console.log("Tamanho lista: " + list1.length);
  if (list1.length < 3) {
    console.log("entrei no if");
    if (tags_text.includes(input.value)) {
      console.log("entrei no if do text");
      if (list1.indexOf(input.value) > -1) {
        window.alert("Não pode repetir tag!!!");
      } else {
        list1.push(input.value);
        value_tag.classList.remove("invisivel");
        value_tag.classList.add("input");
        value_tag.type = "text";
        console.log("lista 1" + list1);
        btn_send.onclick = function () {
          enviarValue();
        };
      }
    } else {
      window.alert("Você deve criar tags de texto!!!");
    }
  } else {
    window.alert("Você conseguiu!!!");
  }
}

function enviarValuefase1() {
  if (list1.length == 3) {
    if (tags_text.includes(input.value)) {
      const valor = document.createElement(input.value);
      valor.textContent = value_tag.value;
      site.appendChild(valor);
      value_tag.classList.add("invisivel");
      value_tag.classList.remove("input");
      btn_send.onclick = function () {
        enviarTag();
      };
      window.alert("Você conseguiu!!!");
      input.classList.remove("input");
      input.classList.add("invisivel");
      btn_send.classList.remove("button");
      btn_send.classList.add("invisivel");
      exitLink.classList.remove("invisivel");
      exitLink.parentElement.href = "../Tela_Home/tela_home.html#texto";
      input.value = "";
      value_tag.value = "";
    }
  } else {
    if (tags_text.includes(input.value)) {
      const valor = document.createElement(input.value);
      valor.textContent = value_tag.value;
      site.appendChild(valor);
      value_tag.classList.add("invisivel");
      value_tag.classList.remove("input");
      btn_send.onclick = function () {
        enviarTag();
      };
      input.value = "";
      value_tag.value = "";
    }
  }
}

btn_send.onclick = function () {
  enviarTag();
};

function enviarTag() {
  if (param == 1) {
    verificaFase1();
  } else if (param == 2) {
    verificaFase2();
  } else if (param == 3) {
    verificaFase3();
  } else if (param == 4) {
    verificaFase4();
  }
}
function enviarValue() {
  if (param == 1) {
    enviarValuefase1();
  } else if (param == 2) {
    enviarValuefase2();
  } else if (param == 3) {
    enviarValuefase3();
  } else if (param == 4) {
    enviarValuefase4();
  }
}

function enviarValueComplementar() {
  if (input.value == "ul" || input.value == "ol") {
    if (complementary_tag.value == "li") {
      value_tag.classList.remove("invisivel");
      value_tag.classList.add("input");
      value_tag.type = "text";
      btn_send.onclick = function () {
        enviarValue();
      };
    }
  }
}
