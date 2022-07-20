# Object-Oriented-Programming--Team-Profile_generator

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## Planning Notes:

1. Create all the files required for developement and testing. Create the index.html and do the styling w/ tailwind and dummy text into html.

2. Write tests to structure the code - TDD ->
   index.js inquirer planning:
   -ask manager questions
   -then run the would you like to add employee question
   -then if Q === engineer then run the engineer quetsions
   -else if Q === intern then run the intern questions
   -else end the application and create the html file.

3. Using that html code impliment into the inquirer js file to ask employee questions and create the html document. The inquirer questions will populate the employee classes created.

BONUS: Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

## Screenshots:

![Finished product](./assets/images/)

## Links:

GitHub: https://github.com/NessJade96/Object-Oriented-Programming--Team-Profile_generator
Deploy: https://nessjade96.github.io/Object-Oriented-Programming--Team-Profile_generator/

## Commit notes:

Commit 1:
Setup folder structures and README for planning notes. Created the HTML structure into index.html so I could create styling. Installed Tailwind to impliment styling.

Commit 2:

## Heroicons used:

### manager:

<svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
<path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg>

### Engineer:

<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

### Intern:

<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

<path d="M12 14l9-5-9-5-9 5 9 5z" />
<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
