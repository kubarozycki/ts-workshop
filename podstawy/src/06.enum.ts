enum LanguagesEnum {
    'EN',
    'ES',
    'PL',
}

console.log(`Index: ${LanguagesEnum.EN}`);

const chosenLang = LanguagesEnum.ES;

console.log(`Enum key: ${LanguagesEnum[chosenLang]}`);

export default LanguagesEnum;