let category = document.querySelector("#category_type span").textContent;

let table_outline = document.getElementById("work_outline");
let rankingButton = document.createElement("button");
rankingButton.addEventListener("click", function button() {
  if (
    category === "マンガ" ||
    category === "CG・イラスト" ||
    category === "ノベル"
  ) {
    location.assign(
      "https://www.dlsite.com/home/ranking/week?category=comic&date=30d"
    );
  } else if (
    category === "ロールプレイング" ||
    category === "アドベンチャー" ||
    category === "動画" ||
    category === "シミュレーション" ||
    category === "デジタルノベル" ||
    category === "アクション"
  ) {
    location.assign(
      "https://www.dlsite.com/home/ranking/week?category=game&date=30d"
    );
  } else if (category === "音楽" || category === "ボイス・ASMR") {
    location.assign(
      "https://www.dlsite.com/home/ranking/week?category=voice&date=30d"
    );
  }
});

rankingButton.textContent = "ランキングはこちら！";
table_outline.appendChild(rankingButton);

let OverallRanking = document.createElement("button");
OverallRanking.addEventListener("click", function OverallRankingButton() {
  location.assign("https://www.dlsite.com/home/ranking/week?date=30d");
});
OverallRanking.textContent = "総合ランキングはこちら！";
table_outline.appendChild(OverallRanking);
