window.onload = () => load();

function load() {
  document.getElementById('floaty').addEventListener("click", spy);
  setOrder();
  window.onresize = () => setOrder();
}

function spy() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const fl = document.getElementById("floaty");
  // Add thresholds
  const scrollPercentage = winScroll / height;
  const smooth = {behavior: 'smooth'};
  if (scrollPercentage < 0.33) {
    document.getElementById("2").scrollIntoView(smooth);
  } else if (scrollPercentage < 0.65) {
    document.getElementById("3").scrollIntoView(smooth);
  } else if (scrollPercentage < 1) {
    fl.style.transform = "rotateZ(180deg)";
    document.getElementsByTagName("footer")[0].scrollIntoView(smooth);
  } else if (scrollPercentage === 1) {
    fl.style.transform = "rotateZ(0deg)";
    document.getElementById("1").scrollIntoView(smooth);
  }
}

function setOrder() {
  const imgs = document.getElementsByTagName("img");
  if (window.innerWidth > 1000) {
    for (let i = 0; i < imgs.length; i++) {
      if (i % 2 !== 0) {
        imgs[i].style.order = "2";
      }
    }
  } else {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.order = "";
    }
  }
}