//verificar
const body = document.getElementById("body");
const html = document.getElementById("html");
const head = document.getElementById("head");
const doc = document.getElementById("doc");
const btn = document.getElementById("btn");

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
          btn.style.background = "#F2E205";
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
      window.alert("Vencemo");
      btn.style.background = "green";
      btn.classList.remove("button");
      btn.classList.add("invisivel");
      parte1.classList.remove("quadro");
      parte1.classList.add("invisivel");
      parte3.classList.remove("invisivel");
      parte3.classList.add("parte-3");
      btn.onclick = null;
      lista = [];
    } else {
      window.alert("Perdeuuuu, tente dnv");
    }
  }