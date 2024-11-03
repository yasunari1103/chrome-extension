(function () {
  //css-175oi2r r-1mmae3n r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l             <= 削除するかどうかの要素
  //css-146c3p1             <= divの中のテキストを見る
  let button = document.createElement("button");
  button.textContent = "ボタン";
  button.style.width = "100%";
  button.style.position = "fixed";
  button.style.zIndex = "5";
  button.id = "hiddenButton";
  function zip(...arrays) {
    // mapクソ便利
    const minLength = Math.min(...arrays.map((arr) => arr.length));

    const zipped = [];
    for (let i = 0; i < minLength; i++) {
      zipped.push(arrays.map((arr) => arr[i]));
    }
    return zipped;
  }
  button.addEventListener("click", function () {
    button.textContent = "フォロー中非表示";
  });

  const target = document.body; // 対象とするノードを取得

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        document.getElementById("hiddenButton").textContent ==
        "フォロー中非表示"
      ) {
        let boxes = document.getElementsByClassName(
          "css-175oi2r r-1mmae3n r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"
        );
        let TFchecks = document.getElementsByClassName(
          "css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"
        );
        const followersZip = zip([...boxes], [...TFchecks]);
        followersZip.forEach((element) => {
          let box = element[0];
          let TFcheck = element[1];
          if (TFcheck.textContent == "フォロー中") {
            box.remove();
          }
        });
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

  document.body.prepend(button);
})();
