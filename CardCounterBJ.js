var count = 0;

function cc(card) {
  if (card >= 2 && card <= 6){
    count++;
  } else if (card == 10){
    count--;
  } else if (card === "K" || card === "A" || card === "J" || card === "Q") {
    count = count - 1;
  } else if (count > 0) {
    console.log(count + ' Bet')
  } else if (count <= 0) {
    console.log(count + ' Hold')
  };

  if (count > 0) {
    return count + ' Bet'
  } else if (count <= 0) {
    return count + ' Hold'
  }

}

cc(10); cc('J'); cc('Q'); cc('K');cc('A');  
