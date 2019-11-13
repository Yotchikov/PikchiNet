  function openNav() {
    document.getElementById("menuSideNav").style.width = "250px";
    document.getElementById("page").style.cssText += "position: absolute; left: 250px; right: 0; transition: 0.5s;";
    document.getElementById("bg-dark").style.cssText = "position: absolute; z-index: 1300; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); transition: 0.5s;";
  }

  function closeNav() {
    document.getElementById("menuSideNav").style.width = "0";
    document.getElementById("bg-dark").style.background = "rgba(255, 255, 255, 0)";
    setTimeout(() => document.getElementById("bg-dark").style.cssText = "", 500);
    document.getElementById("page").style.cssText = "position: absolute; left: 0; right: 0; transition: 0.5s;";
  }
