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

document.getElementById("import").onclick = function(event) {
    openTab(event, 'import_tab');
}

document.getElementById("export").onclick = function(event) {
    openTab(event, 'export_tab');
}

document.getElementById("maintenance").onclick = function(event) {
    openTab(event, 'maintenance_tab');
}

document.getElementById("thongke").click();
