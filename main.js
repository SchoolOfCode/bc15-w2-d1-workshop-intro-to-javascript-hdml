// Ticket: 1
console.log("Hello World!");

// Ticket: 2
let age = 25;
let name = "Lee";
let isAdmin = false;

console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof isAdmin); // boolean

//Ticket: 3
console.log(7000 / 10 + 100 - 11); // 789

console.log(10 + 5 * 2); // 20

console.log(true || (false && true)); // true

console.log(7 > 6); // true
console.log(3 < 3); // false

console.log(2 === 2); // true
console.log("2" === 2); // false

//Ticket: 4a
let favoriteFood = "apple"; // in console favoriteFood === 'guess' will return false

//Ticket: 4b
let firstSentence = "It was a bright sunny day.";
let secondSentence = "The winter sun was warm on my skin.";
let thirdSentence = "The robin sang for his breakfast.";
let lastSentence = "His song was mournful.";
let startOfStory = firstSentence + " " + secondSentence;
let endOfStory = `${thirdSentence} ${lastSentence}`;
let finalStory = startOfStory + ` ${endOfStory}`;
console.log(finalStory);

//Ticket: 5a
if (6 > 2) {
  console.log("That's correct.");
}

let youLikeCake = true; // try using false or changing if (!youLikeCake)
if (youLikeCake) {
  console.log("Yum yum yum, yes, cake is yummy :P");
}

let favoriteNumber = 4; // try using a different number
if (favoriteNumber === 4) {
  console.log("Four is the best number.");
}

//Ticket: 5b
let fullName = "David de Jong"; // try using Max Power
if (fullName === "Max Power") {
  console.log("'What a great name!'");
} else {
  console.log("That's a good name, but it's not as great as Max Power's name.");
}

let yourAge = 12; // try using a number greater or equal to 18
if (yourAge >= 18) {
  console.log("Welcome to our wonderful nightclub!");
} else {
  console.log("You’re not old enough to come in - get lost!");
}

let userGuess = "Happy day"; //try using super-secret-123
if (userGuess === "super-secret-123") {
  console.log(
    "Congratulations! You guessed the super secret word, welcome to our super secret club!"
  );
} else {
  console.log("You got it wrong.");
}

//Ticket: 5c
let weatherToday = "cloudy"; //try using sunny and raining
if (weatherToday === "sunny") {
  console.log("Don’t forget your sunnies");
} else if (weatherToday === "raining") {
  console.log("Don’t forget your umbrella!");
} else {
  console.log("It's a pretty boring weather day!");
}

//Ticket: 5d
let accountStatus = "admin"; //try using user, guest, or banned
switch (accountStatus) {
  case "admin":
    console.log(
      "Hello admin! There are currently no issues that require your attention."
    );
    break;
  case "user":
    console.log(
      "Welcome back! Your favourite services have been prepared for your use."
    );
    break;
  case "guest":
    console.log(
      "Welcome back! Please sign up for an account to gain access to even more features."
    );
    break;
  case "banned":
    console.log(
      "Unfortunately, you are currently unable to access our services. Please try again once your ban expires."
    );
    break;
  default:
    console.log(
      "How embarrassing, something went wrong and we can't tell if it's you or us. You'll be unable to access our services, but please try again later."
    );
}

// Final Ticket

let score = 55; // try using different numbers out of 100
let subject = "Maths"; // try using different subjects
let criticalSubject = true; // try using false
if (criticalSubject && score >= 95) {
  console.log(
    `Phenomenal work in ${subject}! You've reached a critical milestone.`
  );
} else if (score >= 90 && !criticalSubject) {
  console.log(
    `Great job in ${subject}! It's non-critical but still impressive.`
  );
} else if (score >= 70 && criticalSubject) {
  console.log(
    `Keep up the good work! ${subject} is critical, so keep working on improvements.`
  );
} else if (score >= 60 && criticalSubject) {
  console.log(`Nice job, keep up the good work in ${subject}!`);
} else if (criticalSubject) {
  console.log(
    `You've scored ${score} out of 100, so keep trying! It's critical to do well in ${subject}. Make a list of the topics you're struggling with and systematically tackle them one by one.`
  );
} else {
  console.log(`Keep trying!`);
}
