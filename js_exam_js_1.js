'use strict';

//要素の取得
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const jpId = document.getElementById('japanese');
const mtId = document.getElementById('math');
const egId = document.getElementById('english');

const confirmId = document.getElementById('numConfirm');


/**
 * イベントリスナー（計算ボタン）
 */
btn1.addEventListener('click', e => {
    //値の取得
    let japaneseScore = Number(document.getElementById('japanese').value);
    let mathScore = Number(document.getElementById('math').value);
    let englishScore = Number(document.getElementById('english').value);

    //値の確認（ログ表示）
    console.log(japaneseScore);
    console.log(mathScore);
    console.log(englishScore);

    if (isNaN(japaneseScore) || isNaN(mathScore) || isNaN(englishScore)) {
        //エラーメッセージ表示
        confirmId.textContent = 'エラー!! 数字以外が入力されています!!';
    } else {
        //エラーメッセージ非表示
        confirmId.textContent = '';

        //計算
        let totalScore = japaneseScore + mathScore + englishScore;
        let averageScore = totalScore / 3;

        //計算結果の表示
        document.getElementById('sum').textContent = totalScore;
        document.getElementById('avr').textContent = averageScore;
    }
});

/**
 * イベントリスナー（リセット）
 */
btn2.addEventListener('click', e => {
    //値をリセット
    jpId.value = '0';
    mtId.value = '0';
    egId.value = '0';
    confirmId.textContent = '';

    //計算結果の表示
    document.getElementById('sum').textContent = " ";
    document.getElementById('avr').textContent = " ";
});


