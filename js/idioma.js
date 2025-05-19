const translations = {
  es: {
    title: "Elige un componente",
    description: "Selecciona un solo componente para generar el código QR de tu caja personalizada.",
    button: "Generar QR",
    noComponent: "⚠️ Debes seleccionar un componente.",
    selected: "Has seleccionado:",
    home: "Inicio",
    about: "Sobre Nosotros",
    products: "Productos",
    help: "Ayuda",
    contact: "Contacto",
    langLabel: "🌐 Español ▾"
  },
  en: {
    title: "Choose a component",
    description: "Select a single component to generate the QR code for your custom box.",
    button: "Generate QR",
    noComponent: "⚠️ You must select a component.",
    selected: "You selected:",
    home: "Home",
    about: "About Us",
    products: "Products",
    help: "Help",
    contact: "Contact",
    langLabel: "🌐 English ▾"
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = translations[lang];
  document.getElementById("current-lang").innerText = t.langLabel;
  document.querySelector("h1").innerText = t.title;
  document.querySelector("p").innerText = t.description;
  document.querySelector(".btn").innerText = t.button;

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks[0].innerText = t.home;
  navLinks[1].innerText = t.about;
  navLinks[2].innerText = t.products;
  navLinks[3].innerText = t.help;
  navLinks[4].innerText = t.contact;

  // Actualizar texto del resultado si ya hay selección
  const selected = document.querySelector(".component.selected");
  const result = document.getElementById("result");
  if (selected) {
    const index = parseInt(selected.id.split("-")[1]);
    const comp = components[index];
    result.innerHTML = `${t.selected} <strong>${comp.name}</strong>`;
  } else {
    result.innerHTML = "";
  }
}

  // Cierra el menú si se hace clic fuera
  window.addEventListener("click", function (e) {
    const langMenu = document.getElementById("lang-options");
    const langButton = document.getElementById("current-lang");
    if (!langButton.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add("hidden");
    }
  });

  function setLanguage(lang) {
    localStorage.setItem("language", lang);
    location.reload();
  }