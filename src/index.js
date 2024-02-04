function displayPoem(poem) {
  console.log("poem generated");
  poemDisplay.innerHTML = "";

  new Typewriter(poemDisplay, {
    strings: poem, // Use the poem directly as the string
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#poem-generator-form");
  const poemDisplay = document.querySelector("#poem");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    const userInstructions = document
      .querySelector("#user-instructions")
      .value.trim();

    if (!userInstructions) {
      console.error("No instructions provided.");
      return;
    }

    generatePoem(userInstructions);
  });

  function generatePoem(topic) {
    const apiKey = "c9b0ec623aacc60coeb8df5a545t1489";
    const prompt = `Generate a Dutch Poem about ${topic}`;
    const context =
      "User instructions are: You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with <br> Sign the poem with generated by ShecodesAI. Make sure to follow the user instructions. Do not include a title in the Poem";
    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    console.log("Generating poem");
    axios
      .get(apiUrl)
      .then((response) => {
        displayPoem(response.data.answer); // Assuming 'answer' contains the poem
      })
      .catch((error) => {
        console.error("Error fetching poem:", error);
      });
  }

  function displayPoem(poem) {
    if (!poem) {
      poemDisplay.innerHTML =
        "Sorry, we could not generate a poem at this time.";
      return;
    }
    // Assuming the poem is already in HTML format as specified in the API's context
    poemDisplay.innerHTML = poem;
  }
});
