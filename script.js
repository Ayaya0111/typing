const inputBox = document.getElementById("input-box");
let lastValue = "";

function getKeySelector(key) {
  if (key === " ") return '.key[data-key=" "]';
  return `.key[data-key="${key.toLowerCase()}"]`;
}

inputBox.addEventListener("input", () => {
  const currentValue = inputBox.value;
  let newChar = "";

  if (currentValue.length > lastValue.length) {
    newChar = currentValue.slice(-1); // lấy ký tự mới nhập
  }

  const keyElement = document.querySelector(getKeySelector(newChar));
  if (keyElement) {
    keyElement.classList.add("active");

    // Sau 200ms thì tắt sáng
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 200);
  }

  lastValue = currentValue;
});
