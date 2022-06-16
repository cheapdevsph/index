window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.width = "calc(100% - 10px)";
    document.getElementById("navbar").style.padding = "5px";
    document.getElementById("navbar").style.boxShadow = "0px 0px 4px #aaaaaa";
  } else {
    document.getElementById("navbar").style.width = "calc(100% - 30px)";
    document.getElementById("navbar").style.padding = "15px";
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px";
  }
}