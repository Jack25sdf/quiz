const quiz = [
  {
    question: '一番持っている夏服の色は？',
    answers: [
      '紫',
      '黒',
      '白',
      'グレー',
    ],
    correct: '白'
  },{
    question: '神谷朋孝の趣味で、当てはまってないものは？',
    answers: [
      'カラオケ',
      'お菓子作り',
      '農業',
      '読書',
    ],
    correct: 'お菓子作り'
  },{
    question: 'テニスを始めた年齢は？',
    answers: [
      '3歳',
      '4歳',
      '5歳',
      '6歳',
    ],
    correct:'4歳'
  },{
    question:'一番速く泳げる型は？',
    answers:[
      '平泳ぎ',
      'クロール',
      'バタフライ',
      '毛伸び',
    ],
    correct:'平泳ぎ'
  },
  {
    question:'名前の由来は？',
    answers:[
      '友達をいっぱい作る',
      '友達に優しくする',
      '友達と幸せになる',
      '友達を蹴落とす',
    ],
    correct:'友達にやさしくする'
  },
  {
    question:'バイト先は？',
    answers:[
      'シーリーベッド',
      'セーリーベッド',
      'ソーリーベッド',
      'サーリーベッド',
    ],
    correct:'シーリーベッド'
  },
  {
    question:'視力は？（大雑把）',
    answers:[
      '両目1.0',
      '両目0.3',
      '左目0.1、右目0.8',
      '左目0.3、右目0.1',
    ],
    correct:'左目0.3、右目0.1'
  },
  {
    question:'何型？',
    answers:[
      'A型',
      'B型',
      'AB型',
      'O型',
    ],
    correct:'B型'
  },
  {
    question:'持っている定期券の範囲は？',
    answers:[
      '下地・豊橋間',
      '下地・豊橋・名古屋間',
      '豊橋・名古屋間',
      '名古屋・上社間',
    ],
    correct:'豊橋・名古屋間'
  },
  {
    question:'パソコンのタイピングはなぜ得意？',
    answers:[
      '2歳からPC',
      '2歳からタイピング教室',
      '2歳から父親に教えてもらう',
      '2歳から従妹とPCゲーム',
    ],
    correct:'2歳からPC'
  },{
    question:'誇りに思っている顔のパーツはどこ？',
    answers:[
      '鼻',
      '歯',
      'おでこ',
      '眉毛',
    ],
    correct:'鼻'
  },{
    question:'一番最初に踏み入れた海外の国はどこ？（空間にいるということ）',
    answers:[
      '韓国',
      'フランス',
      '中国',
      'アメリカ（ハワイ）',
    ],
    correct:'韓国'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文と選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
//関数の呼び出し
setupQuiz();

//正誤判定の関数
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent
    ){
      window.alert('正解！');
      score++;
    } else {
      window.alert('不正解！');
    }

    quizIndex++;
    if(quizIndex < quizLength) {
      setupQuiz();
    } else {
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
  };

//正誤判定の関数の繰り返し
  let handlerIndex = 0;
  while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
      clickHandler(e);
    });
    handlerIndex++;
  };