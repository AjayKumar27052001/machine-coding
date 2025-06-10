let countDown;
const timer = document.getElementsByClassName("timer")[0];
const progressInner = document.getElementsByClassName("progress-inner")[0];

const btn = document.getElementById("btn-start");
btn.addEventListener("click", () => {
  const intervalValue = parseInt(
    document.getElementById("intervalValue").value
  );
  clearInterval(countDown);
  let interval = intervalValue;
  countDown = setInterval(() => {
    let progressWidth = (interval * 100) / intervalValue;
    if (interval > 0) {
      progressInner.style.width = progressWidth + "%";
      timer.innerHTML = interval + "s";
      interval--;
    } else {
      clearInterval(countDown);
      progressInner.style.width = "0%";
      timer.innerHTML = "Game Over";
    }
  }, 1000);
});
