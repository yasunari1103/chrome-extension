(function () {
  let urls_list = document.querySelectorAll(".page_no ul a");
  let url1 = urls_list.item(0).href;
  let url2 = urls_list.item(1).href;
  let url3 = urls_list.item(2).href;
  let url4 = urls_list.item(3).href;
  fetch(url1)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const boxs = html.querySelectorAll("#search_result_img_box");
      const file_area = document.getElementById("search_result_img_box");

      // 全ての <li> 要素を現在のページの search_result_img_box に追加
      boxs.forEach((box) => {
        const img = box.querySelector("img");
        if (img) {
          const imgUrl = new URL(img.src, url1); // 現在のページの URL を基に画像の絶対 URL を作成
          img.src = imgUrl.href; // 修正した絶対 URL を設定
        }
        file_area.appendChild(box);
      });
    });
  fetch(url2)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const boxs = html.querySelectorAll("#search_result_img_box");
      const file_area = document.getElementById("search_result_img_box");

      // 全ての <li> 要素を現在のページの search_result_img_box に追加
      boxs.forEach((box) => {
        file_area.appendChild(box);
      });
    });
  fetch(url3)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const boxs = html.querySelectorAll("#search_result_img_box");
      const file_area = document.getElementById("search_result_img_box");

      // 全ての <li> 要素を現在のページの search_result_img_box に追加
      boxs.forEach((box) => {
        file_area.appendChild(box);
      });
    });
  fetch(url4)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const boxs = html.querySelectorAll("#search_result_img_box li");
      const file_area = document.getElementById("search_result_img_box");

      // 全ての <li> 要素を現在のページの search_result_img_box に追加
      boxs.forEach((box) => {
        file_area.appendChild(box);
      });
    });
})();
