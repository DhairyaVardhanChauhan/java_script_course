let scores = JSON.parse(localStorage.getItem('score'));  // since this part of code load immediatly when the code runs we keep it out of function
        if(scores === null){
            console.log("hello");   
            scores = {
                win: 0,
                lose: 0,
                draw: 0
            };
        };
        let ans = '';
        updateScore();

        function updateScore(){
            document.querySelector('.js-score').innerHTML = `Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.draw}`;

        }
        function pickmove(usermove){
            let rnd = Math.random();
            if(rnd<=1/3){
                ans = 'Rock';
            }
            else if(rnd>1/3 && rnd<=2/3){
                ans = 'Paper';
            }
            else{
                ans = 'Scissors';
            }

             
            if(ans === usermove){
                scores.draw++;
                document.querySelector('.js-result').innerHTML = "Tie.";
                // alert(`Draw.\nUser: ${usermove} , Computer:${ans}\n wins: ${scores.win} loss: ${scores.lose} draw: ${scores.draw}`)
            }
            else if((ans === 'Paper'&& usermove === 'Rock') || (ans === 'Rock'&& usermove == 'Scissors') ||(ans === 'Scissors' && usermove === 'Paper')){
                scores.lose++;
                document.querySelector('.js-result').innerHTML = "You lose."
                // alert(`Computer won.\nUser: ${usermove} , Computer:${ans}\n wins: ${scores.win} loss: ${scores.lose} draw: ${scores.draw}`)
            }
            else{
                document.querySelector('.js-result').innerHTML = "You win."
                scores.win++;
                // alert(`User won.\nUser: ${usermove}  , Computer:${ans}\n wins: ${scores.win} loss: ${scores.lose} draw: ${scores.draw}`)
                
            }
            localStorage.setItem("score",JSON.stringify(scores)) // when ever the score is update save it to local storage
            document.querySelector('.js-moves').innerHTML = `You
        <img src="rock-paper/${usermove}-emoji.png" alt="">
        <img src="rock-paper/${ans}-emoji.png" alt="">
        Computer`;
            updateScore();
        }