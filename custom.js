// 霸都丶傲天 2019.10.10
$(function () {
    var images = config.albumImages || [];
    var pages = config.albumPages || [];
    var pageCount = images.length || 1;
    var stage = document.createElement("div");
    stage.className = "album-stage";
    for (var p = 0; p < pageCount; p++) {
        var lines = pages[p] || [];
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
            close.querySelector(".album-close-name").textContent = "李梦云";
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
