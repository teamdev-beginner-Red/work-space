function makeOmikuji(omikuji) {
    let omikujiDiv = document.createElement("div");

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
    constructor() {
        this.fortune = this.getFortune(getRandomNumber(7));
        this.luckyLang = this.getLuckyLang(getRandomNumber(8));
        this.luckyDatabase = this.getLuckyDatabase(getRandomNumber(5));
        this.luckyEdita = this.getLuckyEdita(getRandomNumber(5));
    }

    // 配列形式運勢
    getFortune(number) {
        const fortunes = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
        return fortunes[number];
    }

    // 配列形式言語
    getLuckyLang(number) {
        const langs = ['C++', 'Java', 'Python', 'PHP', 'TypeScript', 'Ruby', 'C♯', 'JavaScript'];
        return langs[number];
    }

    // 配列形式データベース
    getLuckyDatabase(number) {
        const databases = ['Oracle Database', 'SQL Server', 'DB2', 'PostgreSQL', 'MySQL'];
        return databases[number];
    }

    // 配列形式エディタ
    getLuckyEdita(number) {
        const editors = ['Emacs', 'Vim', 'Atom', 'nano', 'Visual Studio Code'];
        return editors[number];
    }
}

// ランダムな整数を返す関数
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


