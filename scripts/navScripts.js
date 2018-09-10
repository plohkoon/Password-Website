
function hideNav() {

    if(document.getElementById('nav-list').style.marginLeft !== "-70px") {

        document.getElementById('nav-list').style.marginLeft = '-70px';

        document.getElementById('login').style.display = 'block';

    }
    else {

        document.getElementById('nav-list').style.marginLeft = '-175px';

        document.getElementById('login').style.display = 'none';

    }

}
