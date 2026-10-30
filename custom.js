// 霸都丶傲天 2019.10.10
$(function () {
    var images = config.albumImages || [];
    var texts = config.texts || [];
    var pageCount = images.length || 1;
    var base = Math.floor(texts.length / pageCount);
    var extra = texts.length % pageCount;
    var stage = document.createElement("div");
    var cursor = 0;
    stage.className = "album-stage";
    for (var p = 0; p < pageCount; p++) {
        var count = base + (p < extra ? 1 : 0);
        var lines = texts.slice(cursor, cursor + count);
        cursor += count;
        var page = document.createElement("div");
        var sheet = document.createElement("div");
        var img = document.createElement("img");
        var caption = document.createElement("div");
        var num = document.createElement("div");
        page.className = "album-page";
        page.style.zIndex = String(pageCount - p);
        page.setAttribute("data-lines", JSON.stringify(lines));
        sheet.className = "album-sheet";
        img.src = images[p];
        img.alt = lines[0] || "";
        caption.className = "album-caption";
        caption.textContent = "";
        num.className = "album-index";
        num.textContent = (p + 1) + " / " + pageCount;
        sheet.appendChild(img);
        sheet.appendChild(caption);
        sheet.appendChild(num);
        if (p === pageCount - 1) {
            var close = document.createElement("div");
            close.className = "album-close";
            close.innerHTML = '<div class="album-close-name"></div><div class="album-close-wish">生日快乐</div><div class="album-close-stay">我就在这里</div>';
            close.querySelector(".album-close-name").textContent = "梦云";
            sheet.appendChild(close);
        }
        page.appendChild(sheet);
        stage.appendChild(page);
    }
    $("#texts-container").append(stage);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
