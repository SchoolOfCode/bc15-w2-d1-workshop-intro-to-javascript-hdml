# INTRO TO JAVASCRIPT 👩‍💻

JavaScript is a superpower 🦸‍♀️ for building fun, interactive web apps! In the real world, web apps solve problems. Devs use JS to add flare ✨ beyond HTML & CSS. Learning JS unlocks possibilities - you can create way cooler features than HTML/CSS alone! 😎 But first, you need to learn the JS basics. 🧑‍🏫

This workshop will teach core JS concepts to get you started. We'll cover the key building blocks before applying JS to dynamic web apps. 🧱 Get ready to level up your JS skills! 💪

## Learning Objectives ✨

By the end of this workshop, you'll have gained skills in these core JavaScript fundamentals:

- **Linking JavaScript** - You'll be able to correctly link a JavaScript file to an HTML file.

- **JavaScript Concepts** - You'll understand and be able to use fundamental JS concepts like:

  - Data types - Strings, numbers, booleans, etc.

  - Variables - Declaring and using variables.

  - Operators - Arithmetic, comparison, and logical operators.

  - Control flow - Using conditionals and loops to control program flow.

- **JavaScript Questions** - You'll be able to answer common JS questions like:

  - What are the main data types in JS?

  - Why do we use variables and how do we declare them?

  - What are some useful operators in JS?

  - How can we use conditionals and loops to control program flow in JS?

By the end, you'll have new JavaScript skills to start building more dynamic sites! 🎉

## 🎟️ TICKETS

Time to dive into action! 🏊‍♀️ Here's what you'll be working on:

### 🎫 Ticket 1 - GETTING SET UP

🚨 You should currently have this README file open in VS Code. This indicates that you have cloned the repository for this workshop onto your local computer and opened the README in VS Code.

Tip: To view the README in a more readable format, right-click on the file and select 'Open Preview'. This will display the markdown contents nicely formatted.

**Tasks**:

1. Create an HTML file in this workshop folder (can you remember what we typically name HTML files?)
2. Copy and paste the following code into the HTML file you just created. Take some time to look over the code and get familiar with it. If there are any parts you don't fully understand, feel free to ask ChatGPT (or a similar tool) to explain them better.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Intro to JavaScript</title>
  </head>
  <body>
    <h1>Intro to JavaScript</h1>
    <h2>🎉 Congratulations on successfully loading the page! 🎉</h2>
    <img src="./celebration.webp" alt="celebration-background" />
  </body>
</html>
```

3. Create a CSS file named `styles.css` in this workshop folder.
4. Copy and paste the following code into your newly created CSS file and familiarise yourself with the code.

```css
body {
  text-align: center;
}
```

5. Now link your CSS file to the HTML file. If you need a refresher on how to do this, feel free to search online for examples. Once linked properly, you should see the text center on the page.

6. Create a JavaScript file named `main.js` in this workshop folder.

7. Temporarily add a line of code to log a message (for example, "Hello World!") to the console, which will let you know if the JS file is linked properly and running. If necessary, search online for examples on how to log messages to the console.

8. Link your JS file to your HTML file. If you need a refresher on how to do this, feel free to search online for examples. Once linked properly, you should see the message display in the console.

9. Now open the HTML file in a web browser to view it. There are a couple options to do this:

   - Right-click on the HTML file, copy the file path, and paste it into your browser's address bar.
   - Use a tool like the Live Server VS Code extension. If installed, you can click "Go Live" In VS Code or right-click the HTML file and select "Open with Live Server" to view it.

   The goal is to open the HTML file in a browser, either by direct file path or using a local development server like Live Server. Choose whichever method you are most comfortable with.

10. When you open the page in a browser, you should see the text centered on the screen. If you also open the developer tools (make sure you are on the "Console" tab), you should see the message that was logged from the JavaScript file. This verifies that the JavaScript file is properly connected and its code is being executed.

11. Congratulate yourselves on a job well done 🎉

### 🎫 Ticket 2 - DATA TYPES

In JavaScript, data types allow us to represent different types of information, like numbers, strings, booleans, etc. Choosing the right data type for each data value enables useful functionality for that specific data, and helps prevent bugs.

**Tasks**:

- Discuss as a team some common JS data types like strings, numbers, booleans. When might you use each?

- In your `main.js` file:

  - Create variables to store some different data types:

    ```js
    let age = 25; 
    let name = "Lee"; 
    let isAdmin = false;
    ```

  - Use `console.log()` and `typeof` to check the types:

    ```js
    console.log(typeof age); // number
    console.log(typeof name); // string 
    console.log(typeof isAdmin); // boolean
    ```

- Notice how different types suit different data:

  - `number` for age to allow math operations 
  - `string` for name to enable text functions
  - `boolean` for isAdmin to represent true/false status

- Thinking about data types helps prevent bugs! 🐞

### 🎫 Ticket 3 - OPERATORS

Operators are symbols that perform actions on values to produce a new result. Learning common operators expands what you can do in code beyond just storing data. You can start manipulating values to achieve your programming goals. Operators are essential tools for any JavaScript developer. Mastering them will level up your coding skills! In this activity we'll explore some basic operators

**Tasks:**

1. Research and discuss what these operators do:

    - Math: `+`, `-`, `*`, `/`, `%`
    - Comparison: `===`, `!==`, `>`, `<` 
    - Logical: `&&`, `||`, `!`

2. In your JS file try this!:

    ```js
    console.log(7000 / 10 + 100 - 11);
    ```

    _You can now tell this joke: Why was 6 afraid of 7? 😆_  

  Try evaluating these expressions yourself before checking the answers:

   - What is the result of 10 + 5 * 2? 

   - What is the result of true || false && true?

3. Log comparisons like:

    ```js 
    console.log(7 > 6); // true
    console.log(3 < 3); // false

    console.log(2 === 2); // true
    console.log('2' === 2); // false
    ```

4. Use the console to experiment with some other operators. See if there are any unexpected results!

### 🎫 Ticket 4 - VARIABLES

Variables allow us to store values and refer to them by a descriptive name. They are like named telescopes pointing to data. 

Before continuing, use online resources (for example: https://javascript.info/variables), discuss the following questions:

- What you understand about variables?
- What are the differences between `let`, `const`, `var`?
- What are some naming conventions when declaring variables?

### Ticket 4a - Favourite Food Guessing Game!

In this exercise, you will play a guessing game to practice using variables and operators in JavaScript. 

**How the game works:**

- Players take turns being the "driver" and "navigators"
- The driver privately sets a `favoriteFood` variable 
- The navigators try to guess the food by using the equality operator
- After 3 guesses or 1 correct guess, switch roles

By the end, everyone will get a chance to be the driver and navigators!

### Instructions

1. **Declare a `favoriteFood` variable**

   - The driver declares `favoriteFood` in main.js
   - Set it to your favorite food as a string
   - Do this without sharing your screen yet
   
2. **Log and validate the variable**

   - Log `favoriteFood` to validate it
   - Then clear the console to hide it for now

3. **Take turns guessing**

   - Driver shares screen
   - Navigators have 3 guesses using the equality operator
   
     ```js
     favoriteFood === 'guess' 
     ```
     
   - Console log each evaluation to see true/false
   - Swap driver after 3 guesses or 1 correct guess

4. **Reassign the variable**

   - New driver reassigns `favoriteFood` to their food  
   - Navigators guess again (3 tries)  
   

### Ticket 4b - Storytelling Activity!

Let's write a story together using variables and concatenation in JavaScript! 

### Instructions

1. **Declare story variables**

   - Declare several sentence variables, as many as you need for the story!  
   - Assign each to a line of story
   - Switch drivers for each new sentence
   - Commit and push after adding each sentence to practice your git flow!
   
2. **Build the story string**

   - Declare `ourStory` variable
   - Concatenate your sentences and assign them to the ourStory variable
   - Log to console to check
   
3. **Reflect on variable names**

   - Are the variable names clear?
   - How could they be improved?

<details>
<summary>If you're stuck on concatenating 😉</summary>
<ul>
<li>You can concatenate using '+', or you can use interpolation using backticks `` --> read more here: https://www.codecademy.com/resources/docs/javascript/strings</li>
<li>Your story could look something like:

`'One day some bootcampers went out to learn some JavaScript.' + ' Unfortunately, ' + secondSentence + ' Fortunately, ' + nextSentence + ' Unfortunately, ' + nextNextSentence`

</li>
</ul>
</details>

### 🎫 Ticket 5 - CONTROL FLOW

Wow, what a journey so far?! So far you've mostly learned about expressions in JavaScript - code that evaluates to a value. Expressions are useful for calculating, manipulating, and assigning data. However, JavaScript also provides control flow structures that allow you to control the order of execution in code. Some common examples:

- Making decisions with conditionals like if/else statements. For example, showing a congratulations message only if a user has unlocked an achievement requires deciding whether to show it.
- Repeating blocks of code using loops, while some condition remains true. Allowing only 3 login attempts involves repeatedly running the login code while the attempts left is above 0.

Read through https://javascript.info/ifelse and use it to complete the following tasks:

### Ticket 5a

_Exploring 'if statements'._ Translate each of the following to JavaScript using if statements (and any other required concepts e.g. variable declarations) in your `main.js` file:

1. If 6 is greater than 2, log a message to the console saying 'That's correct.'
2. Create a variable called `youLikeCake` and assign it a value of either true or false. If this condition is true, log a message to the console saying 'Yum yum yum, yes, cake is yummy :P'

3. If your favourite number is 4, log a message to the console saying 'Four is the best number.' (How will you store 'your favourite number' to compare it to 4? What happens if your favourite number is 7?)

### Ticket 5b

_Exploring 'if/else statements'._ Translate each of the following to JavaScript using if-else statements (and any other required concepts e.g. variable declarations) in your `main.js` file:

1. What's your name?

   - Create a variable called `fullName` and assign it a name of your choice.
   - Use an if-else statement to implement the following logic:
     - If the variable's value is equal to `'Max Power'`, log a message to the console saying 'What a great name!'
     - Otherwise, log a message to the console saying 'That's a good name, but it's not as great as Max Power's name.'

2. Nightclub bouncer

   - Create a variable called `yourAge` and assign it an age of your choice
   - If `yourAge` is equal to or greater then 18, then log a message to the console saying ‘Welcome to our wonderful nightclub!’
   - Otherwise, log a message to the console saying ‘You’re not old enough to come in - get lost!’

3. Super Secret Word

   - Create a variable called `userGuess` and assign it a string of your choice
   - If `userGuess` is exactly the same as "super-secret-123", print an appropriate message (e.g."Congratulations! You guessed the super secret word, welcome to our super secret club!")
   - Otherwise, log a message of your choice telling the user they’ve got it wrong.

### Ticket 5c

_Exploring 'else if statements'._ Translate each of the following to JavaScript using if-else if-else statements (and any other required concepts e.g. variable declarations) in your `main.js` file:

- Create a variable called `weatherToday` and assign it a string of your choice (for example "cloudy")
- If `weatherToday` is equal to ‘raining’, log a message to the console saying ‘Don’t forget your umbrella!’
- Otherwise, if `weatherToday` is equal to ‘sunny’, log a message to the console saying "Don’t forget your sunnies!"
- Otherwise log a message to the console saying "It's a pretty boring weather day!"

### Ticket 5d

_Exploring 'switch statements'._ Another control structure that JavaScript provides is a `switch` statement. Have a read through https://javascript.info/switch and use the information to translate the following to JavaScript using a switch statement:

- Create a constant called `accountStatus` and assign it one of the following values of your choosing: `admin`, `user`, `guest`, `banned`
- When `accountStatus` is exactly `admin`, log to the console:
  > Hello admin! There are currently no issues that require your attention.
- When `accountStatus` is exactly `user`, log to the console:
  > Welcome back! Your favourite services have been prepared for your use.
- When `accountStatus` is exactly `guest`, log to the console:
  > Welcome back! Please sign up for an account to gain access to even more features.
- When `accountStatus` is exactly `banned`, log to the console:
  > Unfortunately, you are currently unable to access our services. Please try again once your ban expires.
- When `accountStatus` is any other value, log to the console:
  > How embarassing, something went wrong and we can't tell if it's you or us. You'll be unable to access our services, but please try again later.

### 🎫 Final Ticket - REAL-WORLD EXAMPLE: AUTOMATED MARKING APPLICATION

You've recently landed a job as a developer at an ed-tech company and the company is looking to plan, build software that automates feedback for teachers.

Since this is just a proof of concept, your manager wants you to display information by simply logging to the console for now.

You'll be working with three pieces of information (how these are stored and best represented in JavaScript is for you and your team to decide):

  - score (which will be a numerical value out of 100)
  - subject (which will be some text for the name of the subject)
  - whether or not the subject is critical (boolean)

- The rules for feedback are as follows:

  - When the score is above 95 and the subject is critical, display the message:
    > Phenomenal work in REPLACE_ME_WITH_SUBJECT! You've reached a critical milestone.
  - Otherwise, when the score is above 90 and the subject is not critical, display the message:
    > Great job in REPLACE_ME_WITH_SUJBECT! It's non-critical but still impressive.
  - Otherwise, when the score is above 70 and the subject is critical, display the message::
    > Keep up the good work! REPLACE_ME_WITH_SUBJECT is critical, so keep working on improvements.
  - Otherwise, when the score is above 60 and the subject is critical, display the message:
    > Nice job, keep up the good work in REPLACE_ME_WITH_SUBJECT.
  - Otherwise, if subject is critical, display the message:
    > You've scored REPLACE_ME_WITH_SCORE out of 100, so keep trying! It's critical to do well in REPLACE_ME_WITH_SUBJECT. Make a list of the topics you're struggling with and systematically tackle them one by one.
  - Otherwise:
    > Keep trying!

---

Well done on making it through the workshop! Time to reflect on what you've learnt and pat yourselves on the back 🎉
