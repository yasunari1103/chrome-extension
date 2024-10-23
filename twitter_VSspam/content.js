(function () {
    //css-175oi2r r-1mmae3n r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l             <= 削除するかどうかの要素
    //css-146c3p1             <= divの中のテキストを見る
    let boxes = document.getElementsByClassName('css-175oi2r r-1mmae3n r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l');
    let TFchecks = document.getElementsByClassName('css-146c3p1 ')
    let button = document.createElement('button');
    button.textContent = "ボタン";
    button.style.width = "100%";
    button.addEventListener("click",function () {
        alert('unti');
    })
    document.body.prepend(button);
}) ()