javascript:(function(){const a = document.URL.match(/dp\/[A-Z0-9]{10}/);const b = "https://amazon.co.jp/" + a[0] + "?&tag=hoge-22";var d = document;var e = d.createElement(%27textarea%27);e.textContent = b;d.body.appendChild(e);e.select();d.execCommand(%27copy%27);d.body.removeChild(e);})();