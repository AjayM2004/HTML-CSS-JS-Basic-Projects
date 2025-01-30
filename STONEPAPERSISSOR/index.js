let choices = ["scissor","stone","paper"];
const player = document.getElementById("yourDetails");
const computer = document.getElementById("computerDetails");
const result = document.getElementById("results");
function playGame(choice){
       let final="";
       let computer_value = choices[Math.floor(Math.random()*3)];
      if(computer_value === choice)
      {
          final = "IT'S A TIE";
      }
      else{
      switch(choice)
      {
        case "stone":
          final = (computer_value==="scissor")?"YOU WIN":"YOU LOSE";
          break;
        case "scissor":
          final = (computer_value==="paper")?"YOU WIN":"YOU LOSE";
          break;
        case "paper":
          final = (computer_value==="stone")?"YOU WIN":"YOU LOSE";
          break;
      }}
      result.classList.remove("win","lose","tie");
      player.textContent =`PLAYER=> ${choice}`;
      computer.textContent =`COMPUTER=> ${computer_value}`;
      result.textContent =final;
      switch(final)
      {
         case "YOU WIN":
            result.classList.add("win");
            break;
         case "YOU LOSE":
            result.classList.add("lose");
            break;
         case "IT'S A TIE":
            result.classList.add("tie");
            break;
      }
}
