function getRepos()
    {
        var user = document.getElementById("username").value;
        var repos = document.getElementById("repos");

        URL = "https://api.github.com/users/"+user.toString()+"/repos";  //Your URL


        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.send(null);
        repos.innerHTML = '';
        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if(req.status == 200) {

                    var response = req.responseText;
                    var info = JSON.parse(response);


                    var i;
                    for (i=0;i<info.length;i++){
                        repos.innerHTML += '<div class="row d-flex repoRow"><div class="mr-auto p-2">'+info[i].name+'</div><div class="p-2"><img class="icon" src="src/star.svg">'+info[i].stargazers_count+'<img class="icon" src="src/fork.png">'+info[i].forks_count+'</div></div><hr class="hr"/>';
                    }
                }
            }
        };
    }

    function getUserInfo()
    {
        var user = document.getElementById("username").value;
        var infouser = document.getElementById("infoUser");
        var etiqueta = document.getElementById("labelRepositories");

        URL = "https://api.github.com/users/"+user.toString();  //Your URL


        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.send(null);

        console.log(req);
        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if(req.status == 200) {
                    infouser.innerHTML = '';
                    etiqueta.innerHTML = '';
                    var response = req.responseText;
                    var info = JSON.parse(response);
                    console.log();
                    var user = '@'+info.login;
                    var fullName = info.name;
                    var bio = info.bio;
                    infouser.innerHTML +=

                        '<img class="giticon" src="src/git.svg">' +
                        '<div class="infoUser">' +
                        '<p1 class="">'+user+'</p1><br>'+
                        '<h1 class="name">'+fullName+'</h1>'+
                        '<p3 class="">'+bio+'</p3><br>'+
                    '</div>';
                    etiqueta.innerHTML += '<br><div class="row d-flex justify-content-start">Repositories</div>' +
                        '<hr class="mainhr">';
                }else{
                    infouser.innerHTML = '';
                    etiqueta.innerHTML = '';
                    infouser.innerHTML = '<div class="error"><h4>Does no exist</h4></div>';
                }
            }
        };
    }