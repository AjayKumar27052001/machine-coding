function generateTable(e) {
  e.preventDefault();

  const rows = parseInt(document.getElementById("rows").value);
  const cols = parseInt(document.getElementById("cols").value);

  console.log("rows", rows + "and cols", cols);
}

/*document.getElementById("zigzagform").addEventListener("submit", function (e) {
  e.preventDefault();
  const rows = parseInt(document.getElementById("rows").value);
  const cols = parseInt(document.getElementById("cols").value);
  console.log("rows", rows + "and cols", cols);
});*/
