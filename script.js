const grid = document.querySelector("#grid");

function rgb() {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 256; i++) {
   let square = document.createElement("div");
   square.classList.add("square");
   grid.appendChild(square);
   square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = rgb();
   });
}

const button = document.querySelector("#button");

button.addEventListener("click", () => {
   let choice = Number(prompt("Choose the dimensions of your grid:"));
   if (choice > 100) {
      choice = 100;
   }
   grid.innerHTML = '';
   let dimensions = choice * choice;
   for (let i = 0; i < dimensions; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
      square.addEventListener("mouseenter", () => {
         square.style.backgroundColor = rgb();
      });

      let size = 320 / choice;
      square.style.width = size + "px";
      square.style.height = size + "px";
   }
});
