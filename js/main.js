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
    luckyLang.innerHTML = "🌸ラッキー言語🌸";
    //内容
    let luckyLangContent = document.createElement("p");
    luckyLangContent.innerHTML = omikuji.luckyLang;

    luckyLangDiv.append(luckyLang);
    luckyLangDiv.append(luckyLangContent);



    //ラッキーデータベース
    let luckyDatabaseDiv = document.createElement("div");
    //タイトル
    let luckyDatabase = document.createElement("h4");
    luckyDatabase.innerHTML = "🌸ラッキーデータベース🌸";
    //内容
    let luckyDatabaseContent = document.createElement("p");
    luckyDatabaseContent.innerHTML = omikuji.luckyDatabase;

    luckyDatabaseDiv.append(luckyDatabase);
    luckyDatabaseDiv.append(luckyDatabaseContent);



    //ラッキーエディタ
    let luckyEditaDiv = document.createElement("div");
    //タイトル
    let luckyEdita = document.createElement("h4");
    luckyEdita.innerHTML = "🌸ラッキーエディタ🌸";
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
        switch(fortune){
            case "大吉":
                const daikichi = ["「誰も思いつかなかったエレガントなアルゴリズムが、深夜の静寂の中で完成する。」" , "「あなたのプルリクエストが、一切の指摘なく『LGTM』で埋め尽くされる。」"];
                return daikichi[getRandomNumber(daikichi.length)];
                break;

            case "吉":
                const kichi = ["「新しい技術スタックのドキュメントを読んだとき、スッと脳内にアーキテクチャが描ける。」" , "「数時間悩んだバグの正体が、タイポ（打ち間違い）ではなく、深い仕様の理解によって解明される。」"];
                return kichi[getRandomNumber(kichi.length)];
                break;

            case "中吉":
                const chukichi = ["「プルリクエストに指摘は入るが、それはあなたの技術を一段階引き上げる良質なアドバイスである。」" , "「コードの書き直しは発生する。しかし、それはより良い設計への近道である。」"];
                return chukichi[getRandomNumber(chukichi.length)];
                break;

            case "小吉":
                const shokichi = ["「仕様変更の依頼が来るが、ちょうどその部分のコードを書き始める直前だったため、工数は増えない。」" , "「原因不明の挙動に悩まされるが、PCを再起動したら直る。深追いしなくて済む幸運。」"];
                return shokichi[getRandomNumber(shokichi.length)];
                break;

            case "末吉":
                const suekichi = ["「深夜まで解決しなかったバグが、翌朝のデバッグで『なぜこんなことに悩んでいたのか』と思うほどあっけなく解明される。」" , "「「一度書いたコードを全捨てすることになるが、二度目に書くコードは驚くほど洗練されたものになる。」"];
                return suekichi[getRandomNumber(suekichi.length)];
                break;

            case "凶":
                const kyo = ["「Gitのコンフリクトが100ファイル以上発生。しかも、競合相手は先週退職したメンバーのコードだ。」" , "「昨日まで動いていたコードが、一行も変えていないのに動かなくなる。環境の魔物に魅入られている。」"];
                return kyo[getRandomNumber(kyo.length)];
                break;

            case "大凶":
                const daikyo = ["「「世界規模のクラウドサービスがダウン。あなたのコードに落ち度はないが、できることも何一つない。」" , "「数年かけて育てた秘伝のソースコードが、新人の git push --force によって宇宙の彼方へ消え去る。」"];
                return daikyo[getRandomNumber(daikyo.length)];
                break;

            default:
                return "「もう一度、お試しください。」";
                break;
            
        }

    }

    // 運勢ごとの画像パス
    getImgUrl(fortune) {
        
        switch(fortune){
            case "大吉":
                const daikichiUrl = ["img/daikichi1.png", "img/daikichi2.png"];
                return daikichiUrl[getRandomNumber(daikichiUrl.length)];
                break;

            case "吉":
                const kichiUrl = ["img/kichi1.png" , "img/kichi2.png"];
                return kichiUrl[getRandomNumber(kichiUrl.length)];
                break;

            case "中吉":
                const chukichiUrl = ["img/chukichi1.png" , "img/chukichi2.png"];
                return chukichiUrl[getRandomNumber(chukichiUrl.length)];
                break;

            case "小吉":
                const shokichiUrl = ["img/shokichi1.png", "img/shokichi2.png",];
                return shokichiUrl[getRandomNumber(shokichiUrl.length)];
                break;

            case "末吉":
                const suekichiUrl = ["img/suekichi1.png" , "img/suekichi2.png"];
                return suekichiUrl[getRandomNumber(suekichiUrl.length)];
                break;

            case "凶":
                const kyoUrl = ["img/kyo1.png" , "img/kyo2.png"];
                return kyoUrl[getRandomNumber(kyoUrl.length)];
                break;

            case "大凶":
                const daikyoUrl = ["img/daikyo1.png" , "img/daikyo2.png"];
                return daikyoUrl[getRandomNumber(daikyoUrl.length)];
                break;

            default:
                return "";
                break;
            
        }
                
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

