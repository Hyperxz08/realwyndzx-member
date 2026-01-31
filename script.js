// ค้นหาสมาชิก
document.getElementById("search").addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();
    let rows = document.querySelectorAll("#memberList tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(keyword) ? "" : "none";
    });
});

// ===== เพลง =====
const music = document.getElementById("bgm");
const btn = document.getElementById("playMusic");

btn.addEventListener("click", () => {
  music.play();
  btn.style.display = "none"; // ซ่อนปุ่มหลังคลิก
});
