let page = document.getElementsByClassName("page-inner")[0]; //HTMLCollection object ＜＝配列なのでhtml文じゃない
let saveCanvasButton = document.createElement("button");
saveCanvasButton.addEventListener("click",function() {
  const canvas = document.querySelector("canvas");
  if (canvas) {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas-image.png";
    link.click();
  } else {
    alert("No canvas element found on this page.");
  }
}
)

saveCanvasButton.textContent = "画像を保存！！！";
page.appendChild(saveCanvasButton);

