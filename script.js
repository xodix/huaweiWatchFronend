window.onload = () => document.getElementById('floaty').addEventListener("click", spy);

function spy() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const fl = document.getElementById("floaty");
  // Add thresholds
  const scrollPercentage = winScroll / height;
  const smooth = {behavior: 'smooth'};
  if (scrollPercentage < 0.35) {
    document.getElementById("2").scrollIntoView(smooth);
  } else if (scrollPercentage < 0.67) {
    document.getElementById("3").scrollIntoView(smooth);
  } else if (scrollPercentage < 1) {
    fl.style.transform = "rotateZ(180deg)"
    document.getElementById("4").scrollIntoView(smooth);
  } else if (scrollPercentage === 1) {
    fl.style.transform = "rotateZ(0deg)"
    document.getElementById("1").scrollIntoView(smooth);
  }
}