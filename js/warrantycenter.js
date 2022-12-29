function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("thongke").onclick = function(event) {
    openTab(event, 'thongke_tab');
}

document.getElementById("return_product").onclick = function(event) {
    openTab(event, 'return_product_tab');
}

document.getElementById("broken_product").onclick = function(event) {
    openTab(event, 'broken_product_tab');
}

document.getElementById("thongke").click();