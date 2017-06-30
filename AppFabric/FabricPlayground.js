(function init(){
    let ver = window.location.search.slice(1);
    if("undefined" !== typeof ver && "" !== ver){
        let path = "fabric_files/" + ver + "/fabric.min.css";  
        document.getElementById('fabric_css').setAttribute('href', path)
    }

    if("undefined" !== typeof ver && "" !== ver){
        document.getElementById("fabric_ver").value = ver;
		document.getElementById("loadedFabVer").innerText = ver;
    }
    document.querySelector("#fabric_ver").onchange = function (e) {
        let sel = document.getElementById("fabric_ver");
        ver = sel.options[sel.selectedIndex].value;
        let url = document.location.origin + document.location.pathname + "?" + ver;
        document.location.href=url ;
    }
})();