(function () {
  let urls_list = document.querySelectorAll(".page_no ul a");
  let urls = [];
  if (urls_list.item(0)) {
    urls.push(urls_list.item(0).href);
  }
  if (urls_list.item(1)) {
    urls.push(urls_list.item(1).href);
  }
  if (urls_list.item(2)) {
    urls.push(urls_list.item(2).href);
  }
  if (urls_list.item(3)) {
    urls.push(urls_list.item(3).href);
  }
  urls.forEach((url) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const html = parser.parseFromString(data, "text/html");
        const boxs = html.querySelectorAll(
          "#search_result_img_box li.search_result_img_box_inner  " ||
            "#search_result_img_box li.search_result_img_box_inner type_exclusive_01 "
        );
        const file_area = document.getElementById("search_result_img_box");

        // 全ての <li> 要素を現在のページの search_result_img_box に追加
        boxs.forEach((box) => {
          let img = box.querySelector("img");
          if (img) {
            const before_img_url = img.getAttribute("data-src");
            if (before_img_url) {
              if (!img.hasAttribute("src")) {
                img.setAttribute("src", before_img_url);
              }
            }
          }
          file_area.appendChild(box);
        });
      });
  });
})();
