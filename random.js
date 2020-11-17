

  var randomQuote;
  var randomNum;
  var author;
  var background;
  var fonts;
var getQuote = function(){
  //Made quotes array to global var
  var quotes = [" Got to catch them all!", " Would you kindly?", " But it's me Mario.", " Do a barrel roll!", " Welcome to Summoner's Rift.", " Hey! Listen!", " Jobs done.", " You must construct additional pylons.", " Finish him!" , " Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless." , " The only way to do great work is to love what you do."];
  var author1 =["-Ash Kethchum", "-Bioshock", "-Mario", "-Star Fox", 
              "-League of Legends", "-Legend of Zelda: Ocarina of Time", "-Warcraft II", "-StarCraft", "-Mortal Combat" , "- Jamie Paolinetti" , "- Steve Jobs"];
  var color =[
    "red" , "yellow" , "green" , "brown" ,"yellow", "pink" , "gray" , "purple" , "orange" , "hotpink" , "silver"
  ]
  var font = [
    "Arial" , "sans-serif", "Helvetica" , "monospace" , "Fantasy" , "impact" , "cursive" , "Oldtown" , "Brushstroke" , "Florence" , "Comic sans"
  ]
    randomNum = Math.floor(Math.random()*quotes.length);
   randomQuote = quotes[randomNum];
   author = author1[randomNum];
  background = color[randomNum];
  fonts = font[randomNum];
document.getElementById('text').innerHTML = randomQuote;
document.getElementById('author').innerHTML = author;
document.getElementById('wholePage').style.backgroundColor = background;
document.getElementById('text').style.fontFamily = fonts;
document.getElementById('author').style.fontFamily = fonts;
document.getElementById('new-quote').style.backgroundColor = background;
document.getElementById('click').style.backgroundColor = background;
document.getElementById('beqa').style.backgroundColor = background;
document.getElementById('clicksec').style.backgroundColor = background;

  
  

 

}
   
document.getElementById("new-quote").addEventListener("click" , getQuote)

  
