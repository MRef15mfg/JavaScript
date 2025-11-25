const n = prompt("Введіть тризначне число:");

if (n.length === 3 && !isNaN(n)) {
  const a = n[0];
  const b = n[1];
  const c = n[2];

  if (a === b || a === c || b === c) {
    alert("Є однакові цифри");
  } else {
    alert("Усі цифри різні");
  }
} else {
  alert("Потрібно ввести саме тризначне число");
}
