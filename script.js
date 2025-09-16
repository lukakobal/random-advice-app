const getAdviceBtn = document.getElementById("getAdviceBtn");
const advice = document.getElementById("advice");
const history = document.getElementById("history");

getAdviceBtn.addEventListener("click", () => {
  getAdviceBtn.disabled = true;
  advice.textContent = "Pridobivam nasvet...";
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
      getAdviceBtn.disabled = false;

      const li = document.createElement("li");
      li.textContent = data.slip.advice;
      history.appendChild(li);
    })
    .catch((error) => {
      advice.textContent = "Prišlo je do napake";
      console.error(error);
    });
});
