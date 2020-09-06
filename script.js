document.addEventListener("scroll", spy);

function spy() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const fl = document.getElementById("floaty");
  // Add thresholds
  const scrollPercentage = winScroll / height;
  if (scrollPercentage < 0.35) {
    document.getElementById("floaty").setAttribute("href", "#2");
    fl.style.transform = "";
  } else if (scrollPercentage < 0.67) {
    document.getElementById("floaty").setAttribute("href", "#3");
    fl.style.transform = "";
  } else if (scrollPercentage < 1) {
    document.getElementById("floaty").setAttribute("href", "#4");
    fl.style.transform = "";
  } else if (scrollPercentage === 1) {
    fl.style.transform = "rotateX(180deg)"
    document.getElementById("floaty").setAttribute("href", "#1");
  }
}