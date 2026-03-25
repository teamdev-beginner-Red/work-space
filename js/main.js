function makeOmikuji(omikuji) {
    let omikujiDiv = document.createElement("div");

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
    constructor() {
        this.fortune = this.getFortune();
        this.luckyLang = this.getLuckyLang();
        this.luckyDatabase = this.getLuckyDatabase();
        this.luckyEdita = this.getLuckyEdita();
    }

    // 配列形式運勢
    getFortune(number) {
        const fortunes = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
        return fortunes[getRandomNumber(fortunes.length)];
    }

    // 配列形式言語
    getLuckyLang(number) {
        const langs = ['C++', 'Java', 'Python', 'PHP', 'TypeScript', 'Ruby', 'C♯', 'JavaScript'];
        return langs[getRandomNumber(langs.length)];
    }

    // 配列形式データベース
    getLuckyDatabase(number) {
        const databases = ['Oracle Database', 'SQL Server', 'DB2', 'PostgreSQL', 'MySQL'];
        return databases[getRandomNumber(databases.length)];
    }

    // 配列形式エディタ
    getLuckyEdita(number) {
        const editors = ['Emacs', 'Vim', 'Atom', 'nano', 'Visual Studio Code'];
        return editors[getRandomNumber(editors.length)];
    }
}

// ランダムな整数を返す関数
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


