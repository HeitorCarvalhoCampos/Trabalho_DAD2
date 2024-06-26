//verificar
const body = document.getElementById("body");
const html = document.getElementById("html");
const head = document.getElementById("head");
const doc = document.getElementById("doc");
const btn = document.getElementById("btn");

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

function getNewPosition(zone, posY) {
  const cards = zone.querySelectorAll(".item:not(.dragging)");
  let result = null;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) {
      result = refer_card;
    } else {
      break;
    }
  }
  return result;
}

document.addEventListener("DOMContentLoaded", () => {
  const dropZones = document.querySelectorAll(
    "#doc, #home, #html, #head, #body"
  );

  document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("item")) {
      e.target.classList.add("dragging");
    }
  });

  document.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("item")) {
      e.target.classList.remove("dragging");
    }
  });

  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging");
      const existingItem = zone.querySelector(".item");
      // Permitir que a div #home receba mais de um item
      if (
        body.textContent.trim() &&
        html.textContent.trim() &&
        doc.textContent.trim() &&
        head.textContent.trim()
      ) {
        btn.style.background = "green";
        btn.onclick = function () {
          verifica();
        };
      } else {
        btn.style.background = "grey";
        btn.onclick = null;
      }
      if (zone.id === "home") {
        const applyAfter = getNewPosition(zone, e.clientY);
        if (applyAfter) {
          applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
          zone.prepend(dragging);
        }
      }
      if (!existingItem) {
        const applyAfter = getNewPosition(zone, e.clientY);
        if (
          body.textContent.trim() &&
          html.textContent.trim() &&
          doc.textContent.trim() &&
          head.textContent.trim()
        ) {
          btn.style.background = "red";
          btn.onclick = function () {
            verifica();
          };
        } else {
          btn.style.background = "grey";
          btn.onclick = null;
        }
        if (applyAfter) {
          applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
          zone.prepend(dragging);
        }
      }
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
    });
  });
});

//Verificar
console.log("Retornou isso: " + body.textContent.trim());
if (
  body.textContent.trim() &&
  html.textContent.trim() &&
  doc.textContent.trim() &&
  head.textContent.trim()
) {
  btn.style.background = "red";
  btn.onclick = function () {
    verifica();
  };
} else {
  btn.style.background = "grey";
  btn.onclick = null;
}

function verifica() {
  console.log("Cliquei");
  let lista = [];
  if (body.textContent.includes("BODY")) {
    lista.push(1);
  }
  if (head.textContent.includes("HEAD")) {
    lista.push(1);
  }
  if (html.textContent.includes("HTML")) {
    lista.push(1);
  }
  if (doc.textContent.includes("DOC")) {
    lista.push(1);
  }
  console.log("Lista: " + lista.length);
  if (lista.length == 4) {
    console.log("Deu bom");
    window.alert("Você conseguiu!!!");
    btn.style.background = "green";
    btn.classList.remove("button");
    btn.classList.add("invisivel");
    parte1.classList.remove("quadro");
    parte1.classList.add("invisivel");
    parte5.classList.remove("invisivel");
    parte5.classList.add("quadro");
    btn.onclick = null;
    btn2.classList.remove("invisivel")
    btn2.classList.add("button");
    lista = [];
  } else {
    window.alert("Perdeuuuu, tente dnv");
  }
}

// tags
btn_send.onclick = function () {
  enviarTag();
};

function enviarTag() {
  console.log("valor do input: " + input.value);
  if (
    tags_img.includes(input.value) ||
    tags_link.includes(input.value) ||
    tags_list.includes(input.value) ||
    tags_table.includes(input.value) ||
    tags_text.includes(input.value)
  ) {
    if (tags_text.includes(input.value)) {
      console.log("entrei no if do text")
      value_tag.classList.remove("invisivel");
      value_tag.classList.add("input");
      value_tag.type = "text";
      btn_send.onclick = function () {
        enviarValue();
      };
    }
    if (input.value == "ul") {
      complementary_tag.classList.remove("invisivel");
      complementary_tag.classList.add("input");
      value_tag.type = "text";
      btn_send.onclick = function () {
        enviarValueComplementar();
      };
    }

    if(input.value == "ol"){
      complementary_tag.classList.remove("invisivel");
      complementary_tag.classList.add("input");
      value_tag.type = "text";
      btn_send.onclick = function () {
        enviarValueComplementar();
      };
    }
    if (input.value == "li") {
      console.log("Valor site: "+site.innerHTML)
      console.log("Valor comparação: "+site.innerHTML.includes("<ol"))
      if (site.innerHTML.includes("<ul") && site.innerHTML.includes("<ol")) {
        value_tag.classList.remove("invisivel");
        value_tag.classList.add("input");
        value_tag.type = "text";
        btn_send.onclick = function () {
          enviarValue();
        };
      } 
      if (site.innerHTML.includes("<ul") || site.innerHTML.includes("<ol")) {
        value_tag.classList.remove("invisivel");
        value_tag.classList.add("input");
        value_tag.type = "text";
        btn_send.onclick = function () {
          enviarValue();
        };
      } 
      else {
        window.alert("Você deve criar uma ul primeiro.");
      }
    }
    if (tags_img.includes(input.value)) {
      value_tag.classList.remove("invisivel");
      value_tag.classList.add("input");
      value_tag.type = "file";
      btn_send.onclick = function () {
        enviarValue();
      };
    }

    if (tags_link.includes(input.value)) {
      value_tag.classList.remove("invisivel");
      value_tag.classList.add("input");
      value_tag.type = "text";
      btn_send.onclick = function () {
        enviarValue();
      };
    }
  }
  else{
    window.alert("Tag não reconhecida")
  }
}

function enviarValueComplementar() {
  if (input.value == "ul" || input.value == "ol") {
    if (complementary_tag.value == "li") {
      value_tag.classList.remove("invisivel");
      value_tag.classList.add("input");
      btn_send.onclick = function () {
        enviarValue();
      };
    }
  }
}
function enviarValue() {
  console.log("Entrei na EnviarValue");
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
    }
  }
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
    value_tag.classList.add("invisivel");
    value_tag.classList.remove("input");
    btn_send.onclick = function () {
      enviarTag();
    };
    input.value = "";
    value_tag.value = "";
  }

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

  if(input.value == "li"){
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
  if (input.value == "ul" || input.value == "ol" && complementary_tag.value == "li") {
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
  else {
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


//tags não semântica
const home2 = document.getElementById("home2");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const main = document.getElementById("main");
const nav = document.getElementById("nav");
const btn2 = document.getElementById("btn2");
const parte5 = document.getElementById("parte-5");

function getNewPosition(zone, posY) {
    const cards = zone.querySelectorAll(".item:not(.dragging)");
    let result = null;
  
    for (let refer_card of cards) {
      const box = refer_card.getBoundingClientRect();
      const boxCenterY = box.y + box.height / 2;
  
      if (posY >= boxCenterY) {
        result = refer_card;
      } else {
        break;
      }
    }
    return result;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const dropZones = document.querySelectorAll(
      "#header, #home2, #footer, #main, #nav"
    );
  
    document.addEventListener("dragstart", (e) => {
      if (e.target.classList.contains("item")) {
        e.target.classList.add("dragging");
      }
    });
  
    document.addEventListener("dragend", (e) => {
      if (e.target.classList.contains("item")) {
        e.target.classList.remove("dragging");
      }
    });
  
    dropZones.forEach((zone) => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const existingItem = zone.querySelector(".item");
        // Permitir que a div #home receba mais de um item
        if (
          header.textContent.trim() &&
          footer.textContent.trim() &&
          main.textContent.trim() &&
          nav.textContent.trim()
        ) {
          btn2.style.background = "red";
          btn2.onclick = function () {
            verifica2();
          };
        } else {
          btn2.style.background = "grey";
          btn2.onclick = null;
        }
        if (zone.id === "home2") {
          const applyAfter = getNewPosition(zone, e.clientY);
          if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
          } else {
            zone.prepend(dragging);
          }
        }
        if (!existingItem) {
          const applyAfter = getNewPosition(zone, e.clientY);
          if (
            header.textContent.trim() &&
            footer.textContent.trim() &&
            main.textContent.trim() &&
            nav.textContent.trim()
          ) {
            btn2.style.background = "red";
            btn2.onclick = function () {
              verifica2();
            };
          } else {
            btn2.style.background = "grey";
            btn2.onclick = null;
          }
          if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
          } else {
            zone.prepend(dragging);
          }
        }
      });
  
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
      });
    });
  });


  function verifica2() {
    console.log("Cliquei");
    let lista = [];
    if (header.textContent.includes("HEADER")) {
      lista.push(1);
    }
    if (nav.textContent.includes("NAV")) {
      lista.push(1);
    }
    if (main.textContent.includes("MAIN")) {
      lista.push(1);
    }
    if (footer.textContent.includes("FOOTER")) {
      lista.push(1);
    }
    console.log("Lista: " + lista.length);
    if (lista.length == 4) {
      console.log("Deu bom");
      window.alert("Você conseguiu!!!");
      btn2.style.background = "green";
      btn2.classList.remove("button");
      btn2.classList.add("invisivel");
      parte5.classList.remove("quadro");
      parte5.classList.add("invisivel");
      parte3.classList.remove("invisivel");
      parte3.classList.add("parte-3");
      btn2.onclick = null;
      lista = [];
    } else {
      window.alert("Perdeuuuu, tente dnv");
    }
  }