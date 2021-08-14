const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What\'s your name? ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal of the day is your favourite? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you\'re amazing at! ', (answer7) => {
          
            console.log(`PROFILE:\n
            Name: ${answer}\n
            Preferred Activity: ${answer2}\n
            Preferred Activity Music: ${answer3}\n
            Favourite Meal of the Day: ${answer4}\n
            Favourite Food: ${answer5}\n
            Favourite Sport: ${answer6}\n
            Superpower: ${answer7}`);

            rl.close();
            });
          });
        });
      });
    });
  }); 
});

