const req = require('req-fast');
window.onload = function () {
  load_neko();
}

function load_neko() {
  req("https://nekos.life/api/neko", (err, res) => {
    const img = document.getElementById('a')
    img.src = res.body.neko;
  });
}