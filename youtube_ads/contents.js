{
  const hostName = location.hostname;
  const subDomain = hostName.split(".")[0];

  const newStyle = document.createElement("style");
  newStyle.innerText = ".ytp-ad-overlay-container{display:none!important;}";
  document.getElementsByTagName("head").item(0).appendChild(newStyle);

  const returnPlayerId = (v) => {
    switch (v) {
      case "music":
        return "player";
        break;
      case "www":
      default:
        return "ytd-player";
        break;
    }
  };

  const clickSkipButton = () => {
    const $skipButton = document.getElementsByClassName(
      "ytp-ad-skip-button-container"
    )[0];
    if ($skipButton) $skipButton.click();
  };

  const obConfig = {
    childList: true,
    subtree: true,
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.addedNodes.length &&
        mutation.addedNodes[0].className === "ytp-ad-player-overlay"
      )
        clickSkipButton();
    });
  });

  const playerId = returnPlayerId(subDomain);
  const initInterval = setInterval(() => {
    if (document.getElementById(playerId) != null) {
      const obTarget = document.getElementById(playerId);
      observer.observe(obTarget, obConfig);
      clearInterval(initInterval);
    }
    clickSkipButton();
  }, 1000);
}
