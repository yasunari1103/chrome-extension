(function () {
var carts = document.getElementsByClassName('');
var carts = [...carts] ///配列に変換
carts.forEach((cart) => {
    console.log(cart);
});}) ()