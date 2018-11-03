function hideNav() {

    if(document.getElementById('navbar').classList.contains("active")) {

        document.getElementById('navbar').classList.remove("active");

    }
    else {

        document.getElementById('navbar').classList.add("active");

    }

}

