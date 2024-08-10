let canvas = document.getElementById("unity-canvas");
document.getElementById("saveCanvas").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: saveCanvasAsImage,
    });
  });
});

function saveCanvasAsImage() {
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

console.log("a");
