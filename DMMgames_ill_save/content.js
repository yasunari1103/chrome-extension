let page = document.getElementsByClassName("page-inner")[0]; //HTMLCollection object ＜＝配列なのでhtml文じゃない
let saveCanvasButton = document.createElement("button");

saveCanvasButton.textContent = "画像を保存！！！";
page.appendChild(saveCanvasButton);

