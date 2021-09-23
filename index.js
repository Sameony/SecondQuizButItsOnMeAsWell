const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));




var high=4, score=0;
var readlineSync = require("readline-sync");
var name = readlineSync.question("Who has awakened the almighty me? State your Name! ");
var choice = readlineSync.keyInYN("Welcome "+name+"! Would you care for a little quiz?");
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
          console.log("DING DING DING! Correct answer!!");
        }
        else
          console.log("OOPS! Wrong answer");
        var con=readlineSync.keyInYN("Would you like to continue?");
        if(!con)
          break;
       }
       console.log("Your score is: "+score);
       if(score>=high)
        {  
          console.log("It is a new high score!!!");
          high=score;
        }
        else
        {
          console.log("Oooh!you missed the high score by "+(high-score)+" points!");
        }
}