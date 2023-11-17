function moreDesignation() { 
    let text = "Knight coder in LeetCode<br>4 star coder in CodeChef<br>Specialist coder in Codeforces";
    document.getElementById("hideDesignation").innerHTML = text;
}

function moreDescribe() { 
    document.getElementById("hideDescribe").innerHTML = " I am interested in competitive programming.";
}

function downloadPDF() {
    const url = '';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-pdf-file.pdf';
    link.click();
}