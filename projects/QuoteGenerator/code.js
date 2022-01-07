/*
  Sean Coughlin
  Quote Machine & Create PT
  2/15/18 - 3/20/18, write-up 4/10/18

  All quotes taken off the website BrainyQuote - https://www.brainyquote.com/
  Author of each quote listed following their quote when program runs
*/

/*
  Variables
*/

//Variables set background to draw and quote category
//Empty variables trigger warning to user
var background;
var category;

//Arrays for both quotes and their authors in each category
//Inspired
var inspirationQuotes = [
  "The best preparation for tomorrow is doing your best today.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", 
  "The only way to discover the limits of the possible is to go beyond them into the impossible.",
  "Nothing is impossible, the word itself says 'I'm possible'!"
];
var inspirationAuthors = [
  "H. Jackson Brown, Jr.", "Jimmy Dean", "Arthur C. Clarke", "Audrey Hepburn"
];

//Wise
var wisdomQuotes = [
  "There are many ways of going forward, but only one way of standing still.",
  "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail",
  "The only true wisdom is in knowing you know nothing."
];
var wisdomAuthors = [
  "Franklin D. Roosevelt", "Satchel Paige", "Ralph Waldo Emerson", "Socrates"
];

//Haha funny
var funnyQuotes = [
  "Do not take life too seriously. You will never get out of it alive.", 
  "Always remember that you are unique. Just like everyone else.",
  "If you're going to do something tonight that you'll be sorry for tomorrow morning, sleep late.",
  "A day without sunshine is like, you know, night."
];
var funnyAuthors = [
  "Elbert Hubbard", "Margaret Mead", "Henny Youngman", "Steve Martin"
];

//Witty
var wittyQuotes = [
  "Better a witty fool than a foolish wit.",
  "Brevity is the soul of wit.",
  "Next to being witty, the best thing is being able to quote another's wit.",
  "At twenty years of age the will reigns; at thirty, the wit; and at forty, the judgment."
];
var wittyAuthors = [
  "William Shakespeare", "William Shakespeare", "Christian Nestell Bovee", "Benjamin Franklin"
];

//Art
var artQuotes = [
  "The purpose of art is washing the dust of daily life off our souls.",
  "Only through art can we emerge from ourselves and know what another person sees.",
  "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.", 
  "This world is but a canvas to our imagination."
];
var artAuthors = [
  "Pablo Picasso", "Marcel Proust", "Scott Adams", "Henry David Thoreau"
];

//Famous
var famousQuotes = [
  "Don't cry because it's over, smile because it happened.", 
  "Be the change that you wish to see in the world.",
  "You miss 100% of the shots you don't take.",
  "Imagination is more important than knowledge."
];
var famousAuthors = [
  "Dr. Seuss", "Mahatma Gandhi", "Wayne Gretzky", "Albert Einstein"
];

//Personal
var personalCounter = 0;
var personalQuotes = [

];
var personalAuthors = [
  
];

//Sets initial canvases which allow for drawing of backgrounds
setScreen("screen2");
createCanvas("canvas1", 320, 450);
setScreen("screen3");
createCanvas("canvas2", 320, 450);
setScreen("screen1");

/*
  onEvents
*/

//Start button triggers drawing of background and writing of quote
//Will display a warning if no category or background has been selected
onEvent("start", "click", function(event) {
  start();
});

//Back buttons for user navigation
onEvent("back1", "click", function(event) {
  goBack(1);
});

onEvent("back2", "click", function(event) {
  goBack(2);
});

onEvent("back3", "click", function(event) {
  goBack(3);
});

//Sets background to draw
//Warning triggered if no background selected before start clikced
onEvent("background1", "click", function(event) {
  setBackground(1);
});

onEvent("background2", "click", function(event) {
  setBackground(2);
});

onEvent("background3", "click", function(event) {
  setBackground(3);
});

//Sets category to pull quote from
//Will trigger warning if no category is selected before start clicked
onEvent("category1", "click", function(event) {
  setCategory(1);
});

onEvent("category2", "click", function(event) {
  setCategory(2);
});

onEvent("category3", "click", function(event) {
  setCategory(3);
});

onEvent("category4", "click", function(event) {
  setCategory(4);
});

onEvent("category5", "click", function(event) {
  setCategory(5);
});

onEvent("category6", "click", function(event) {
  setCategory(6);
});

onEvent("category7", "click", function(event) {
  setCategory(7);
});

//Sets screen to quote entry screen
onEvent("entry1", "click", function(event) {
  console.log("entry clicked!");
  setScreen("screen4");
});

//Adds currently typed quote and author to the personal quote arrays
onEvent("entry2", "click", function(event) {
  console.log("entry2 clicked!");
  updatePersonalQuotes();
  console.log(personalQuotes);
  console.log(personalAuthors);
});

/*
  Functions
*/

function start () {
  if (!background) {
    setText("backgroundWarning", "Pick A Background Please");
  }
  if (!category) {
    setText("categoryWarning", "Pick A Category Please");
  }
  if (getText("backgroundWarning") === "" && getText("categoryWarning") === "") {
    if (category == 7) {
      setScreen("screen3");
      setActiveCanvas("canvas2");
      quoteGetter();
      backgroundGetter();
    } else {
      setScreen("screen2");
      setActiveCanvas("canvas1");
      quoteGetter();
      backgroundGetter();
    }
  }
}

function backgroundGetter () {
  if (background == 1) {
    drawBackground1();
  } else if (background == 2) {
    drawBackground2();
  } else {
    drawBackground3();
  }
}

function quoteGetter () {
  var randomQuote = randomNumber(0,3);
  if (category == 1) {
    setText("quote1", inspirationQuotes[randomQuote]);
    setText("author1", inspirationAuthors[randomQuote]);
  } else if (category == 2) {
    setText("quote1", wisdomQuotes[randomQuote]);
    setText("author1", wisdomAuthors[randomQuote]);
  } else if (category == 3) {
    setText("quote1", funnyQuotes[randomQuote]);
    setText("author1", funnyAuthors[randomQuote]);
  } else if (category == 4) {
    setText("quote1", wittyQuotes[randomQuote]);
    setText("author1", wittyAuthors[randomQuote]);
  } else if (category == 5) {
    setText("quote1", artQuotes[randomQuote]);
    setText("author1", artAuthors[randomQuote]);
  } else if (category == 6) {
    setText("quote1", famousQuotes[randomQuote]);
    setText("author1", famousAuthors[randomQuote]);
  } else {
    personalQuoteGetter();
  }
}

function setBackground (backgroundCategory) {
  console.log("background" + backgroundCategory + " clicked!");
  background = backgroundCategory;
  backgroundColorReset();
  setProperty("background" + backgroundCategory, "background-color", "red");
  setText("backgroundWarning", "");
}

function setCategory (quoteCategory) {
  console.log("category" + quoteCategory + " clicked!");
  category = quoteCategory;
  categoryColorReset();
  setProperty("category" + quoteCategory, "background-color", "red");
  setText("categoryWarning", "");
}

function updatePersonalQuotes () {
  personalQuotes[personalCounter] = getText("quoteInput");
  personalAuthors[personalCounter] = getText("authorInput");
  personalCounter++;
}

function personalQuoteGetter () {
  if (!personalQuotes[0] || !personalAuthors[0]) {
    setText("quote2", "Enter a Quote to your Collection");
  } else {
    var randomQuote = randomNumber(0, personalCounter - 1);
    setText("quote2", personalQuotes[randomQuote]);
    setText("author2", personalAuthors[randomQuote]);
  }
}

function goBack (backBtn) {
  console.log("back" + backBtn + " clicked!");
  if (backBtn == 1 || backBtn == 2) {
    clearCanvas();
    setScreen("screen1");
  } else {
    setScreen("screen3");
    personalQuoteGetter();
  }
}

function categoryColorReset () {
  setProperty("category1", "background-color", "#1abc9c");
  setProperty("category2", "background-color", "#1abc9c");
  setProperty("category3", "background-color", "#1abc9c");
  setProperty("category4", "background-color", "#1abc9c");
  setProperty("category5", "background-color", "#1abc9c");
  setProperty("category6", "background-color", "#1abc9c");
  setProperty("category7", "background-color", "#1abc9c");
}

function backgroundColorReset () {
  setProperty("background1","background-color","#1abc9c");
  setProperty("background2","background-color","#1abc9c");
  setProperty("background3","background-color","#1abc9c");
}

function drawBackground1 () {
  for (var i = 0; i < 550; i++) {
    randomColor(1);
    circle(randomNumber(-10,320), randomNumber(-10,450), 30);
  }
}

function drawBackground2 () {
  for (var i = 0; i < 550; i++) {
    randomColor(2);
    rect(randomNumber(-10,320), randomNumber(-10,450), 50, 50);
  }
}

function drawBackground3 () {
  for (var i = -50; i < 550; i++) {
    randomColor(3);
    line(0,i - 150,320,i + 50);
  }
}

function randomColor (background) {
  var r = randomNumber(0, 255);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);
  setFillColor(rgb(r,g,b,0.2));
  if (background == 1 || background == 2) {
    setStrokeColor(rgb(r,g,b,0.35));
  } else {
    setStrokeColor(rgb(r,g,b,1.0));
  }
}
