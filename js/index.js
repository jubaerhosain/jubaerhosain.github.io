function moreDescribe() {
  document.getElementById("hideDescribe").innerHTML =
    " I am interested in competitive programming.";
}

function downloadPDF() {
  const url = "";
  const link = document.createElement("a");
  link.href = url;
  link.download = "my-pdf-file.pdf";
  link.click();
}
