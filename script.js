let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      console.log(string);
      document.querySelector('.output_disp').textContent = string;
    } else if (e.target.innerHTML == "CE") {
      string = "";
      document.querySelector('.output_disp').textContent = string;
    } else if (e.target.innerHTML == "*") {
      string += "*";
      document.querySelector('.output_disp').textContent = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector('.output_disp').textContent = string;
    }
  });
});
