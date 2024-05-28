const data = [
    { id: "1", src: "./img/house1.webp", title: "Будинки" },
    {
      id: "2",
      src: "./img/studios2.webp",
      title: "Студії",
    },
    {
      id: "3",
      src: "./img/quartieri3.webp",
      title: "Квартири",
    },
    {
      id: "4",
      src: "./img/rooms4.webp",
      title: "Кімнати",
    },
  ];
  
  const modalEl = document.querySelector(".bak");
  const closeModalBtn = document.querySelector(".close-btn-img");
  const modalInerEl = document.querySelector(".modal-iner-wrap");
  const openeModalBtn = document.querySelector(".open-btn");
  const listEl = document.querySelector(".criteria-list");
  
  listEl.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      return;
    }
    const listEl = event.target.closest(".criteria-list-item");
    modalEl.classList.remove("is-hiden");
    const idx = listEl.dataset.id;
    const dataCard = data.find((elem) => {
      return elem.id === idx;
    });
    modalInerEl.innerHTML = `
  <div class="bak-modal_1">
            <img class="bak-modal_1-img" src="${dataCard.src}" alt="">
            <h3 class="bak-modal_1-title">${dataCard.title}</h3>
          </div>
            `;
  });
  
  
  closeModalBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    modalEl.classList.add("is-hiden");
    window.removeEventListener("keydown", pressEsc);
  });
  modalEl.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      modalEl.classList.add("is-hiden");
      window.removeEventListener("keydown", pressEsc);
    }
  });
  
  function pressEsc(event) {
    console.log(event);
    if (event.code === "Escape") {
      modalEl.classList.add("is-hiden");
    }
  }
  