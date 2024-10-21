(function () {
  let button = document.createElement("button");
  button.textContent = "統合するカートを選択！";
  button.addEventListener("click", function () {
    var cartsCollection = document.querySelectorAll(
      ".cart-item__name .nav"
    );
    var carts = [...cartsCollection]; ///配列に変換
    carts.forEach((cart) => {
      console.log(cart.href);
    });
  });
  let title = document.getElementsByClassName("manage-page-head")[0];
  title.appendChild(button);
})();
