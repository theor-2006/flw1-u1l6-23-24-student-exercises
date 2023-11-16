// 1. Create a variable called changeTextButton.
// - Store the button with the id of "change-text" using document.querySelector.
let changeTextButton = document.querySelector("#change-text");

// DO NOT CHANGE THIS
changeTextButton.addEventListener('click', function() {
    
    // 2. Create a variable called introTextParagraph.
    // - Store the paragraph with the class of "intro-text" using document.querySelector.
let introTextParagraph = document.querySelector(".intro-text");

    
    // DO NOT CHANGE THIS
    introTextParagraph.innerHTML = "The text has been changed!";
});
