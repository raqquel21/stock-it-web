const components = [
  { name: "CPU Intel", img: "img/componentes/cpu-intel.jpg", qr: "intel" },
  { name: "Ventilador 120mm", img: "img/componentes/ventilador.jpg", qr: "ventilador"},
  { name: "Cable SATA", img: "img/componentes/cable-sata.jpg", qr: "sata" },
  { name: "RAM 16GB", img: "img/componentes/ram-16gb.jpg", qr: "ram16" },
  { name: "Disco SSD", img: "img/componentes/disco-ssd.jpg", qr: "ssd" },
  { name: "Fuente 500W", img: "img/componentes/fuente-500w.jpg", qr: "fuente500" },
  { name: "Tarjeta gráfica", img: "img/componentes/tarjeta-grafica.jpg", qr: "gpu" },
  { name: "Placa base ATX", img: "img/componentes/placa-base-atx.jpg", qr: "placa" }
];

const container = document.getElementById("components");

components.forEach((comp, index) => {
  const div = document.createElement("div");
  div.className = "component";
  div.id = `component-${index}`;
  div.innerHTML = `
    <img src="${comp.img}" alt="${comp.name}" />
    <p>${comp.name}</p>
  `;
  div.addEventListener("click", () => {
    // Deseleccionar todos
    document.querySelectorAll(".component").forEach(el => el.classList.remove("selected"));
    // Seleccionar el actual
    div.classList.add("selected");
  });
  container.appendChild(div);
});

function generateQR() {
  const selected = document.querySelector(".component.selected");
  const result = document.getElementById("result");
  const qr = document.getElementById("qr-container");

  const lang = localStorage.getItem('lang') || 'es';
  const t = translations[lang];

  if (!selected) {
    result.innerHTML = t.noComponent;
    qr.innerHTML = "";
    return;
  }

  const index = parseInt(selected.id.split("-")[1]);
  const comp = components[index];

  result.innerHTML = `${t.selected} <strong>${comp.name}</strong>`;
  qr.innerHTML = `<img src="img/qr/${comp.qr}.png" alt="QR de ${comp.name}" style="max-width: 200px;" />`;
}
