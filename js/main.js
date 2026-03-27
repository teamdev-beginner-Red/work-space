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
    luckyLangContent.innerHTML = omikuji.luckyLang;

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

    // もう一度引くボタン
    let retryButton = document.createElement("a");
    retryButton.innerHTML = "もう一度引く";
    retryButton.classList.add("btn");
    retryButton.addEventListener("click", function () {
        topPage.classList.remove("hidden");
        resultPage.classList.add("hidden");
    });

    //omikujiDivにそれぞれappendする
    omikujiDiv.append(fortuneDiv);
    omikujiDiv.append(contentDiv);
    omikujiDiv.append(luckyLangDiv);
    omikujiDiv.append(luckyDatabaseDiv);
    omikujiDiv.append(luckyEditaDiv);
    omikujiDiv.append(retryButton);

    return omikujiDiv;
}

//おみくじクラス
class omikuji {
    //コンストラクタ
    constructor() {
        this.fortune = this.getFortune();
        this.content = this.getContent(this.fortune);
        this.imgUrl = this.getImgUrl(this.fortune);
        this.luckyLang = this.getLuckyLang();
        this.luckyDatabase = this.getLuckyDatabase();
        this.luckyEdita = this.getLuckyEdita();
    }

    // 配列形式運勢
    getFortune() {
        const fortunes = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
        return fortunes[getRandomNumber(fortunes.length)];
    }

    // 配列形式言語
    getLuckyLang() {
        const langs = ['C++', 'Java', 'Python', 'PHP', 'TypeScript', 'Ruby', 'C♯', 'JavaScript'];
        return langs[getRandomNumber(langs.length)];
    }

    // 配列形式データベース
    getLuckyDatabase() {
        const databases = ['Oracle Database', 'SQL Server', 'DB2', 'PostgreSQL', 'MySQL'];
        return databases[getRandomNumber(databases.length)];
    }

    // 配列形式エディタ
    getLuckyEdita() {
        const editors = ['Emacs', 'Vim', 'Atom', 'nano', 'Visual Studio Code'];
        return editors[getRandomNumber(editors.length)];
    }

    // 運勢ごとの説明文
    getContent(fortune) {
        const contents = {
            "大吉": "大吉内容",
            "吉": "吉内容",
            "中吉": "中吉内容",
            "小吉": "小吉内容",
            "末吉": "末吉内容",
            "凶": "凶内容",
            "大凶": "大凶内容"
        };
        return contents[fortune];
    }

    // 運勢ごとの画像パス
    getImgUrl(fortune) {
        const images = {
            "大吉": "img/daikichi.png",
            "吉": "img/kichi.png",
            "中吉": "img/chukichi.png",
            "小吉": "img/shokichi.png",
            "末吉": "img/suekichi.png",
            "凶": "img/kyo.png",
            "大凶": "img/daikyo.png"
        };
        return images[fortune];
    }
}

// ランダムな整数を返す関数
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// ページ要素の取得
const topPage = document.getElementById("top-page");
const resultPage = document.getElementById("result-page");
const drawButton = document.getElementById("draw-button");

// おみくじを引く処理
drawButton.addEventListener("click", function () {
    // おみくじのインスタンス作成
    const myOmikuji = new omikuji();
    // 結果のHTML要素を組み立て
    const omikujiElement = makeOmikuji(myOmikuji);
    // 結果ページの中身をクリアし、新しい結果を入れる
    resultPage.innerHTML = "";
    resultPage.appendChild(omikujiElement);
    //トップページを隠して、結果ページを表示
    topPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
});

