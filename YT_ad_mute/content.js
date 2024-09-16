window.addEventListener("load", main, false);

function main() {
  const target = document.body; // 対象とするノードを取得

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const ads = document.getElementsByClassName("ytp-preview-ad");
      const muteButton = document.getElementsByClassName(
        "ytp-mute-button ytp-button"
      )[0];
      if (muteButton) {
        //広告ある
        if (ads.length > 0) {
          if (muteButton.title !== "ミュート解除（m）") {
            muteButton.click();
          }
        }
        //広告ない
        else if (ads.length === 0) {
          if (muteButton.title === "ミュート解除（m）") {
            muteButton.click();
          }
        }
      }
    });
  });

  //監視対象の設定
  const config = {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true,
  };

  observer.observe(target, config);
}
