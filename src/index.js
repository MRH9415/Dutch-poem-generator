function displayPoem (response){
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector ("user-instructions")
let apiKey = "c9b0ec623aacc60coeb8df5a545t1489";
let prompt = 'Generate a Dutch Poem about ${instructionsInput.value}';
let context ="User instructions are: You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML.Make sure to follow the user instructions";
let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}' 

console.log ("Generating poem");
console.log('prompt: $ {prompt}');
console.log('context: $ context}');

axios.get(apiURL).then(displayPoem);

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
