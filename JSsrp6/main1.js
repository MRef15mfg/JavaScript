function compareStringsLength(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str2.length > str1.length) {
        return -1;
    } else {
        return 0;
    }
}

function upperFirstChar(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

function countVowels(str) {
    const vowels = "аеєиіїоуюяАЕЄИІЇОУЮЯaeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    const spamPhrases = [
        "100% безкоштовно",
        "збільшення продажів",
        "тільки сьогодні",
        "не видаляйте",
        "ххх"
    ];
    for (let i = 0; i < spamPhrases.length; i++) {
        if (lowerStr.indexOf(spamPhrases[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    if (maxLength <= 3) {
        return "...".slice(0, maxLength);
    }
    return str.slice(0, maxLength - 3) + "...";
}

function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/[^a-zа-щьюяєіїґ0-9]/gi, "");
    let left = 0;
    let right = normalized.length - 1;
    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    if (sentence.trim() === "") {
        return 0;
    }
    return words.length;
}

function getLongestWord(sentence) {
    const words = sentence.trim().split(/\s+/);
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

function getAverageWordLength(sentence) {
    const words = sentence.trim().split(/\s+/);
    if (sentence.trim() === "") {
        return 0;
    }
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
    }
    return totalLength / words.length;
}

function findCharIndexes(str, char) {
    const indexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indexes.push(i);
        }
    }
    console.log("Індекси символу '" + char + "': " + (indexes.length > 0 ? indexes.join(", ") : "немає"));
    console.log("Кількість входжень: " + indexes.length);
}

console.log("1. Порівняння рядків:", compareStringsLength("Привіт", "Hello"));
console.log("2. Перший символ великий:", upperFirstChar("привіт"));
console.log("3. Кількість голосних:", countVowels("Привіт, як справи?"));
console.log("4. Чи є спам:", checkSpam("Це 100% безкоштовно!"));
console.log("5. Скорочення рядка:", truncate("Hello, world!", 8));
console.log("6. Паліндром:", isPalindrome("Я несу гусеня"));
console.log("7. Кількість слів:", countWords("Це тестове речення для функції"));
console.log("8. Найдовше слово:", getLongestWord("Це тестове речення для функції"));
console.log("9. Середня довжина слова:", getAverageWordLength("Це тестове речення для функції"));
findCharIndexes("Привіт, як справи?", "и");
