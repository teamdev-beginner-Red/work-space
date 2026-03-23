function makeOmikuji(omikuji){
    let omikujiDiv = document.createDiv("div");
    
    //おみくじの運勢
    let fortuneDiv = document.createElement("div");
    
    let fortune = document.createElement("h1");
    fortune.innerHTML = omikuji.fortune;

    //おみくじの画像
    let imgUrl = document.createElement("img");
    imgUrl.src = omikuji.imgUrl;

    fortuneDiv.append(fortune);
    fortuneDiv.append(imgUrl);


    //おみくじの内容
    let contentDiv = document.createElement("div");

    let content = document.createElement("p");
    content.innerHTML = omikuji.content;

    contentDiv.append(content);



    //ラッキー言語
    let luckyLangDiv = document.createElement("div");
    //タイトル
    let luckyLang = document.createElement("h4");
    luckyLang.innerHTML = "ラッキー言語";
    //内容
    let luckyLangContent = document.createElement("p");
    luckyLangContent.innerHTML = omikuji.luckyLang;//内容

    luckyLangDiv.append(luckyLang);
    luckyLangDiv.append(luckyLangContent);



    //ラッキーデータベース
    let luckyDatabaseDiv = document.createElement("div");   
    //タイトル
    let luckyDatabase = document.createElement("h4");
    luckyDatabase.innerHTML = "ラッキーデータベース";
    //内容
    let luckyDatabaseContent = document.createElement("p");
    luckyDatabaseContent.innerHTML = omikuji.luckyDatabase;

    luckyDatabaseDiv.append(luckyDatabase);
    luckyDatabaseDiv.append(luckyDatabaseContent);



    //ラッキーエディタ
    let luckyEditaDiv = document.createElement("div");  
    //タイトル
    let luckyEdita = document.createElement("h4");
    luckyEdita.innerHTML = "ラッキーエディタ";
    //内容
    let luckyEditaContent = document.createElement("p");
    luckyEditaContent.innerHTML = omikuji.luckyEdita;

    luckyEditaDiv.append(luckyEdita);
    luckyEditaDiv.append(luckyEditaContent);


    //omikujiDivにそれぞれappendする
    omikujiDiv.append(fortuneDiv);
    omikujiDiv.append(contentDiv);
    omikujiDiv.append(luckyLangDiv);
    omikujiDiv.append(luckyDatabaseDiv);
    omikujiDiv.append(luckyEditaDiv);

    return omikujiDiv;
}

//idの取得
const omikujiResult = document.getElementById("result-page");

//おみくじクラス
class omikuji {
    //コンストラクタ
    constructor (fortune , imgUrl , content , luckyLang , luckyDatabase , luckyEdita){
        this.fortune = fortune;
        this.imgUrl = imgUrl;
        this.content = content;
        this.luckyLang = luckyLang;
        this.luckyDatabase = luckyDatabase;
        this.luckyEdita = luckyEdita;
    }
}
