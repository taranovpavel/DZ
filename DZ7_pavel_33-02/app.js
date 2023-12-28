document.body.style.background = "#333";

const massive = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7]
console.log(massive)
console.log(massive.map((num) => num*5))
console.log(massive.filter((num) => num > 0 ))
console.log(massive.reduce((greatest, num) => greatest > num ? greatest:num ))
console.log(massive.reduce((smallest, num) => smallest < num ? smallest:num ))

const capitalize = function (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
function translator(word){
    var answer = '';
    var converter = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya',

        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
        'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };
    for (var i = 0; i < word.length; ++i ) {
        if (converter[word[i]] === undefined){
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }
    return answer;
}
let names = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]
console.log(names)
names = names.map((name) => capitalize(name))
console.log(names)
console.log(names.map((name) => translator(name)))
console.log(names.filter((name) => name[0] === "А"))
console.log(names.reduce((longest, name) => longest.length > name.length ? longest : name))
console.log(names.reduce((least, name) => least.length < name.length ? least : name))