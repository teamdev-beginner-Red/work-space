function makeOmikuji(omikuji){
    let omikujiDiv = document.createDiv("div");
    
    //おみくじの運勢
    let fortuneDiv = document.createElement("div");
    
    let fortune = document.createElement("h1");
    fortune = omikuji.fortune;

    //おみくじの画像
    let imgUrl = document.createElement("img");
    imgUrl.src = omikuji.imgUrl;

    fortuneDiv.append(fortune);
    fortuneDiv.append(imgUrl);


    //おみくじの内容
    let contentDiv = document.createElemet("div");

    let content = document.createELement("p");
    content = omikuji.content;

    contentDiv.append(omikujiContent);



    //ラッキー言語
    let luckyLangDiv = document.createElement("div");
    //タイトル
    let luckyLang = document.createElement("h4");
    luckyLang = "ラッキー言語";
    //内容
    let luckyLangContent = document.createElement("p");
    luckyLangContent = omikuji.luckyLang;//内容

    luckyLangDiv.append(luckyLang);
    luckyLangDiv.append(luckyLangContent);



    //ラッキーデータベース
    let luckyDatabaseDiv = document.createElement("div");   
    //タイトル
    let luckyDatabase = document.createElement("h4");
    luckyDatabase = "ラッキーデータベース";
    //内容
    let luckyDatabaseContent = document.createELement("p");
    luckyDatabaseContent = omikuji.luckyDatabase;

    luckyDatabaseDiv.append(luckyDatabase);
    luckyDatabaseDiv.append(luckyDatabaseContent);



    //ラッキーエディタ
    let luckyEditaDiv = document.createElement("div");  
    //タイトル
    let luckyEdita = document.createElement("h4");
    luckyEdita = "ラッキーエディタ";
    //内容
    let luckyEditaContent = document.createELement("p");
    luckyEditaContent = omikuji.luckyEdita;

    luckyEditaDiv.append(omikujiLuckyDatabase);
    luckyEditaDiv.append(omikujiLuckyDatabaseContent);


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