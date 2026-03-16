const schools = [
  "Рівненський ліцей №1",
  "Ліцей №2",
  "Ліцей №3",
  "Ліцей №4",
  "Ліцей №5",
  "Ліцей №6",
  "Ліцей №7",
  "Ліцей №8",
  "Ліцей №9",
  "Ліцей №10",
  "Ліцей №11",
  "Ліцей №12"
];

const itemsPerPage = 4;
let currentPage = 1;

function renderPage() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageItems = schools.slice(start, end);

  pageItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = item;
    list.appendChild(div);
  });

  document.getElementById("page").textContent =
    `Сторінка ${currentPage}`;
}

document.getElementById("next").onclick = () => {
  if(currentPage * itemsPerPage < schools.length){
    currentPage++;
    renderPage();
  }
};

document.getElementById("prev").onclick = () => {
  if(currentPage > 1){
    currentPage--;
    renderPage();
  }
};

renderPage();