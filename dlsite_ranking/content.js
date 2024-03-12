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

rankingButton.textContent = "全年齢ランキングはこちら！";
table_outline.appendChild(rankingButton);

// R18
let rankingButton_R18 = document.createElement("button");
rankingButton_R18.addEventListener("click", function button() {
  if (
    category === "マンガ" ||
    category === "CG・イラスト" ||
    category === "ノベル"
  ) {
    location.assign(
      "https://www.dlsite.com/maniax/ranking/day?category=comic&date=30d"
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
      "https://www.dlsite.com/maniax/ranking/day?category=game&date=30d"
    );
  } else if (category === "音楽" || category === "ボイス・ASMR") {
    location.assign(
      "https://www.dlsite.com/maniax/ranking/day?category=voice&date=30d"
    );
  }
});

rankingButton_R18.textContent = "R18ランキングはこちら！";
table_outline.appendChild(rankingButton_R18);

let OverallRanking = document.createElement("button");
OverallRanking.addEventListener("click", function OverallRankingButton() {
  location.assign("https://www.dlsite.com/home/ranking/week?date=30d");
});
OverallRanking.textContent = "全年齢総合ランキングはこちら！";
table_outline.appendChild(OverallRanking);
// R18
let OverallRanking_R18 = document.createElement("button");
OverallRanking_R18.addEventListener("click", function OverallRankingButton() {
  location.assign("https://www.dlsite.com/maniax/ranking/day?date=30d");
});
OverallRanking_R18.textContent = "R18総合ランキングはこちら！";
table_outline.appendChild(OverallRanking_R18);
