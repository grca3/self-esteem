// // selh-男性

'use strict';

{

  const question = document.getElementById('question');
  const clickA = document.getElementById('clikcA');
  const btn = document.getElementById('btn');

  const man = shuffle([

    
    { q: '月曜日の朝より、日曜日の夕方〜の方が…意識しちゃうよね、せっかくの休日なのに', a: 'これさ、「わかる〜...」て話すよね。皆、心は同じだね' },
  //  繰り返す
  
  ]);


  let currentNum = 0;

  //  if currentNum === 0-2
  //  return

  question.textContent = man[currentNum].q;

  //フィッシャーイエーツシャッフル
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {   //iを１づつズラしていく−１    
      const j = Math.floor(Math.random() * (i + 1));
      [array[j], array[i]] = [array[i], array[j]];
    }

    return array;
  }


  clickA.addEventListener('click', () => {

    btn.textContent = man[currentNum].a;
    seeyou.textContent = 'また明日ね '

    // console.log(clickA);
  });

}

