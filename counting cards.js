//Exercise from freecodecamp.org

var count = 0;

function cc(card) {
  // I can only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count = count + 1;
    } 
    switch(card) {
    case 7:
    case 8:
    case 9:
    count = count + 0;
    } 
    switch(card){
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count = count - 1; 
  }

var play = "";
 if (count<=0) {
    play = count + " Hold";
  } else {
    play = count + " Bet";
  };

return play;

  // I can only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); //This is an example from freecodecamp

//In this case correct result is "0 Hold" 