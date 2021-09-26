const chalk = require('chalk');
const log = console.log;
var score=0;
var high = [{
  Name:"Sameer",
  Score: 2,
},
{
  Name: "Sahil",
  Score: 4,
}]
var readlineSync = require("readline-sync");
log(chalk.blueBright.bold("Who has awakened the almighty me? State your Name!"));
var name = readlineSync.question();
var choice = properKeyInYN(readlineSync.question(chalk.blue("Welcome "+chalk.red(name)+"! Would you care for a little quiz? [y/n]:")));

function properKeyInYN(answerOfUser){
  if(answerOfUser.toUpperCase()==="Y")
    return true;
  return false;
}


if(!choice)
  log(chalk.greenBright("Understandable. Have a great day."));
else
{
  ques=["What is the name of my creator?",
        "which season is his favorite? ",
        "What kind of weather can my creator not stand?",
        "Does my creator like chocolates?",
        "Does he like milk chocolates over Dark chocolates?",
        "Does he like cool things or cute things?",
        "What is the powerhouse of the cell?",
        "Which Color is my favourite?"
        ]
  ans = ["Sameer",
        "Rainy",
        "Sunny",
        "Yes",
        "No",
        "Cute",
        "Mitochondria",
        "Gray"
       ]
       for(var i=0;i<ques.length;i++)
       {
         var userAns = readlineSync.question(ques[i]);
         if(userAns.toUpperCase()===ans[i].toUpperCase())
        {
          score+=1;
          console.log(chalk.greenBright("DING DING DING! Correct answer!!"));
        }
        else
          console.log(chalk.red("OOPS! Wrong answer"));
        log(chalk.blueBright("The Correct answer is: ")+chalk.greenBright(ans[i]));
        var con=properKeyInYN(readlineSync.question(chalk.blueBright("Would you like to continue? [Y/N]: ")));
        if(!con)
          break;
       }
       console.log(chalk.green.bgBlack("Your score is: "+score));
       //High Score Evaluation 
       
       var max_Score=0;
       for (let i = 0; i < high.length; i++) {
         if(high[i].Score > max_Score)
         {
           max_Score=high[i].Score;
         }
}
let person = {
  Name : name,
  Score  : score,
};
      high.push(person);
       
       if(score>=max_Score)
        {  
          console.log(chalk.greenBright("It is a new high score!!!"));
          log("You beat the previous high score by "+chalk.greenBright(score-max_Score)+" points!");
          
        }
        else
        {
          log("Oooh!you missed the high score by "+chalk.red(high-score)+" points!");
        }
}
console.log(chalk.bold.black.bgWhite("High Scores: "))
for(let i=0;i<high.length;i++)
{
  
  console.log("\n Name: "+high[i].Name+"\t Score: "+high[i].Score);
  
}