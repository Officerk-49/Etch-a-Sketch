const grid = document.querySelector("#grid");
const button = document.querySelector("#button");
const color = document.getElementById('color');
const clear = document.getElementById('clear');

for (let i = 0; i < 256; i++) {
   let square = document.createElement("div");
   square.classList.add("square");
   grid.appendChild(square);
   square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = color.value;
      square.style.transition = 'none';
   });
}

let choice = 16;
button.addEventListener("click", () => {
   let userInput = Number(prompt("Choose the dimensions of your grid:"));
   let newChoice = userInput;

   if (!isNaN(userInput) && userInput !== 0 && userInput !== null) {
      choice = newChoice;
   }
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
         square.style.backgroundColor = color.value;
         square.style.transition = 'none';
      });

      let size = 320 / choice;
      square.style.width = size + "px";
      square.style.height = size + "px";
   }
});

clear.addEventListener('click', ()=> {
   const squares = document.querySelectorAll('.square');
   squares.forEach(square => {
      square.style.backgroundColor = '#fff';
      square.style.transition = 'background-color 0.25s ease, color 0.25s ease';
   });
})
