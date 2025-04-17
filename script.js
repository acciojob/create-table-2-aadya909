function createTable() {
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  const rn = parseInt(rows);
  const cn = parseInt(cols);

  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numbers.");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear previous table

  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
