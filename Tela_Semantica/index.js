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
          btn2.style.background = "#F2E205";
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
      lista = [];
    } else {
      window.alert("Perdeuuuu, tente dnv");
    }
  }