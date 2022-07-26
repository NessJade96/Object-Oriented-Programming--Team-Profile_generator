# Object-Oriented-Programming--Team-Profile_generator

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## User setup:

To run the style sheets run the following commands into the terminal:

- npm run css

Then open a new terminal window and type:

- npm run start

## Planning Notes:

1. Create all the files required for developement and testing. Create the index.html and do the styling w/ tailwind and dummy text into html.

2. Write tests to structure the code - TDD ->
   index.js inquirer planning:
   -ask manager questions
   -then run the would you like to add employee question
   -then if Q === engineer then run the engineer quetsions
   -else if Q === intern then run the intern questions
   -else end the application and create the html file.

3. Once the user inputs answers, I need to store the user answers into the Classes (Manager, inter, engineer). Then I will be able to call those classes into HTML to generate the document in the next step.

4. Using that html code impliment into the inquirer js file to ask employee questions and create the html document. The inquirer questions will populate the employee classes created.

BONUS: Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

## Screenshots:

![Finished product](./assets/images/Final%20product.PNG)

## Links:

GitHub: https://github.com/NessJade96/Object-Oriented-Programming--Team-Profile_generator
Deploy: https://nessjade96.github.io/Object-Oriented-Programming--Team-Profile_generator/
Video Walkthough: https://watch.screencastify.com/v/2RRoQZOjBZkoSV9F3TTs

## Commit notes:

Commit 1:
Setup folder structures and README for planning notes. Created the HTML structure into index.html so I could create styling. Installed Tailwind to impliment styling.

Commit 2:
started the index.js code using inquirer - Inquirer to prompt questions and receive answers. Functions with promises to eventually return all of the answers, looping through the different engineers/interns.

Commit 3:
Used require() to import the other js pages. All the promise functions to also add a new key into each element of the array - role. Then I used map to go through each of the elements in the array and if they equaled to Manager - then use the constructor to create a manager element. And so on for each of the intern and engineers.

Commit 4:
Updated the HTML (removed the icons because it was breaking the html? might troubleshoot and add back in later). Copied the HTML I will be using into the index.js -> and seperated out the Manager, Enginner, and Inter HTML into variables (still need to create variables and call in html to generate the users answers.)

Commit 5:
In the index.js file I created functions within the innerHTML to add in the employee cards, depending on what the user inputs.

Commit 6:
links to Github and Email work in html :)

Commit 7:
Added in the validations on the prompt questions, tidied up code in the index.js. Changed my if statement to a switch/case. Added in a few changes to styling (background color and link text decorations). Wrote tests for all four classes. Deleted the dummy HTML page.
