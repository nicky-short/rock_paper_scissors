# rock_paper_scissors
TOP Project #2 - Rock Paper Scissors!


Hello!  Init. commit for this will be the index.html file, with the script.js linked.  Will update with plan.

1.  for "getComputerChoice" I will use the math.random fucntion, multiplied it by 3, add 1, and round down to the nearest integer.
    - this will give me the computerChoice, a random number generation of 1, 2, or 3.
        - 1 will be rock
        - 2 will be paper
        - 3 will be scissors
2. Site will prompt user to enter Rock/Paper/Scissors, and will log result as the humanChoice.  will be lowercased to match computerchoice
3. Game logic of RPS will be declared in the "playround" function -->rules for who will win are in here
4. playGame function will direct program to play 5 rounds, and increment human and computer scores depending on winner
5. winner of the 5 round game will be announced (logged) at the end of the 5 rounds

--------------------------------------------------------------------------------------------------------
 RPS UI

 1.  alternate git branch for UI version of RPS game
 2.  built layout of the site with HTML and CSS
 3.  removed console log gameplay elements in the JS, added logic to process player choices though button clicks
 4.  created manitupaltable dom elements to show player score, computer and human choices, and result of rounds
 5.  crated game over screen that would show winner of the 5 round game - with play again button
