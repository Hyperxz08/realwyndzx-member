// ค้นหาสมาชิก
document.getElementById("search").addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();
    let rows = document.querySelectorAll("#memberList tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(keyword) ? "" : "none";
    });
});

// เพลง
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = () => {
    if (music.paused) {
        music.play();
        btn.textContent = "⏸ ปิดเพลง";
    } else {
        music.pause();
        btn.textContent = "▶️ เปิดเพลง";
    }
};
function toggleSection(id) {
  const table = document.getElementById(id);
  const title = event.target;

  if (table.style.display === "none") {
    table.style.display = "table";
    title.innerHTML = title.innerHTML.replace("▶", "▼");
  } else {
    table.style.display = "none";
    title.innerHTML = title.innerHTML.replace("▼", "▶");
  }
}
