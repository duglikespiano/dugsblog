"use strict";
const convertDate = (date, language) => {
    const sourceDate = date.split('-');
    if (language === 'ko') {
        return `${sourceDate[0]}년 ${sourceDate[1]}월 ${sourceDate[2]}일`;
    }
    else if (language === 'ja') {
        return `${sourceDate[0]}年 ${sourceDate[1]}月 ${sourceDate[2]}日`;
    }
    else if (language === 'en') {
        let convertedMonth = '';
        if (sourceDate[1] === '01') {
            convertedMonth = 'Jan';
        }
        else if (sourceDate[1] === '02') {
            convertedMonth = 'Feb';
        }
        else if (sourceDate[1] === '03') {
            convertedMonth = 'Mar';
        }
        else if (sourceDate[1] === '04') {
            convertedMonth = 'Apr';
        }
        else if (sourceDate[1] === '05') {
            convertedMonth = 'May';
        }
        else if (sourceDate[1] === '06') {
            convertedMonth = 'Jun';
        }
        else if (sourceDate[1] === '07') {
            convertedMonth = 'Jul';
        }
        else if (sourceDate[1] === '08') {
            convertedMonth = 'Aug';
        }
        else if (sourceDate[1] === '09') {
            convertedMonth = 'Sep';
        }
        else if (sourceDate[1] === '10') {
            convertedMonth = 'Oct';
        }
        else if (sourceDate[1] === '11') {
            convertedMonth = 'Nov';
        }
        else {
            convertedMonth = 'Dec';
        }
        return `${convertedMonth} ${sourceDate[1]} ${sourceDate[0]}`;
    }
    else {
        return false;
    }
};
const capitalizeText = (string) => {
    const stringToArray = string.split(' ');
    const convertedStringArray = [];
    stringToArray.forEach((word) => {
        const convertedWordArray = word.split('');
        convertedWordArray[0] = convertedWordArray[0].toUpperCase();
        convertedStringArray.push(convertedWordArray.join(''));
    });
    return convertedStringArray.join(' ');
};
//# sourceMappingURL=commonFunctions.js.map