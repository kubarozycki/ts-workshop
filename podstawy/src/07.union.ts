type Languages = 'EN' | 'PL' | 'US';


function setLanguage(lang: Languages) {
    console.log(`changing language to:${lang}`);
}

setLanguage('EN');

type Article = { lang: Languages, title: string };
type Section = { lang: Languages };
type Content = Article | Section;

const someArticle: Article = { lang: 'EN', title: 'C# basics' };

function printContent(content: Content) {
    console.log(content.lang);
}

printContent(someArticle);

export { };