let urls_list = document.querySelectorAll(".page_no ul a");
let url1 = urls_list.item(0).href;
let url2 = urls_list.item(1).href;
let url3 = urls_list.item(2).href;
let url4 = urls_list.item(3).href;
window.addEventListener("DOMContentLoaded", function () {
  fetch(url1) //【ロード元URL】
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const boxs = html.querySelectorAll("#search_result_img_box li"); //【ロード元ID】
      const file_area = document.getElementById("search_result_img_box"); //【ロード先ID】
      for (var box of boxs) {
        file_area.appendChild(box.textContent);
      }
    });
});
