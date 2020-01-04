// // selh-女性

'use strict';

{

  const question = document.getElementById('question');
  const clickA = document.getElementById('clikcA');
  const btn = document.getElementById('btn');

  const man = shuffle([

    { q: '今の悩みは？', a: 'いっぱいあるよね。結構、世界中 皆そんなもんだよ' },
  //  繰り返す
  
  ]);


  let currentNum = 0;

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

