// Hover Over Header Item

const ExtraHeader = document.querySelector(".ExtraHeader")
const MainHeaderBG = document.getElementById("MainHeaderBG")
var HeaderItemFocused = false

function OnHover(Item) {
    
    if (Item.className == "HeaderItem"){

        Item.style["background-color"] = "white"
        Item.style.color = "black"

        var rect = Item.getBoundingClientRect();
        ExtraHeader.style.top = rect.bottom + "px"
        ExtraHeader.style.left = rect.left + "px"
        ExtraHeader.style.opacity = "100%"

        document.querySelector(".WindowFrame").style.opacity = "50%"
        MainHeaderBG.style.opacity = "0%"
        
        HeaderItemFocused = true
        LoadExtraHeader(Item.id)

    } else if (Item.className == "ExtraHeader" && HeaderItemFocused == true){

        ExtraHeader.style.opacity = "100%"

        MainHeaderBG.style.opacity = "0%"
        document.querySelector(".WindowFrame").style.opacity = "50%"

        HeaderItemFocused = false
    }
}

function OffHover(Item) {

    if (Item.className == "HeaderItem") {

        Item.style["background-color"] = null
        Item.style.color = "white"
    }

    document.querySelector(".WindowFrame").style.opacity = "0%"
    ExtraHeader.style.opacity = "0%" 
    MainHeaderBG.style.opacity = "100%"
}

// ExtraHeader Reader

function LoadExtraHeader (ClassSelection) {

    var CSTable = GetExtraHeaderInfo(ClassSelection)

    // Reset elements first
    ExtraHeader.innerHTML = " "

    for (let i = 0; i < CSTable.length; i++) {

        let NewElement = document.createElement("div")
        NewElement.className = "ExhSelection"
        NewElement.innerHTML = '<div class="Block"></div><h3>' + CSTable[i] + '</h3>'

        ExtraHeader.append(NewElement)
    }
}

/// Get data for ExtraHeader

function GetExtraHeaderInfo (TypeOfCLSS) {

    switch (TypeOfCLSS) {

        case "Newsletter":

            return ["データを待っています...", "東京で人質に取られている"]
            break;
        
        
        case "MapQueue":

            return ["マップキューについて", "リストを見る", "検索", "新しいエントリを作成する"]
            break;
        
        case "MyWork":

            return ["TRIA.os/FE2CM 関連事業", "YouTube 関連事業", "プロジェクト一覧"]
            break;

        case "About":

            return ["プレースホルダービデオ", "自分自身", "私が使用しているソフトウェア", "私の作品を利用しますか？", "手数料ポリシー"]
            break;
        
        case "Contact":

            return ["コミッションを受け取る", "私のソーシャル", "ディスコードサーバー"]
            break;
    }
}