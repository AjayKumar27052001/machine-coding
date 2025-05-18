function generateTable(e) {
  e.preventDefault();

  const rowVal = parseInt(document.getElementById("rows").value);
  const colVal = parseInt(document.getElementById("cols").value);
  const container = document.getElementById("tableContainer");
  console.log("rows", rowVal + "and cols", colVal);
  let table = "<table>";
  let count = 1;
  for (let i = 0; i < rowVal; i++) {
    let row = [];
    for (let j = 0; j < colVal; j++) {
      row.push(count++);
    }
    if (i % 2 !== 0) row.reverse();
    let rowData = "<tr>";
    for (let k = 0; k < row.length; k++) {
      rowData += "<td>" + row[k] + "</td>";
    }
    rowData += "</tr>";
    table += rowData;
  }
  table += "</table";
  container.innerHTML = table;
}
