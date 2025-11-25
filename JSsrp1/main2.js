const num = prompt("Введіть число від 0 до 9:");

let symbol;

switch (num) {
  case "0": symbol = ")"; break;
  case "1": symbol = "!"; break;
  case "2": symbol = "@"; break;
  case "3": symbol = "#"; break;
  case "4": symbol = "$"; break;
  case "5": symbol = "%"; break;
  case "6": symbol = "^"; break;
  case "7": symbol = "&"; break;
  case "8": symbol = "*"; break;
  case "9": symbol = "("; break;
  default: symbol = "Некоректне число";
}

alert(symbol);
