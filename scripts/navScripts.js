function hideNav() {

    if(document.getElementById('navbar').style.marginLeft !== "-70px") {

        document.getElementById('navbar').style.marginLeft = '-70px';
        
        document.getElementById('login').classList.add("active");

    }
    else {

        document.getElementById('navbar').style.marginLeft = '-160px';
        
        document.getElementById('login').classList.remove('active');

    }

}

