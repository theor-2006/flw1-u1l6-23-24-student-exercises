// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.

placeholder.src = "https://www.travelandleisure.com/thmb/OGOS_pA8ZIC5JIK5BZzfxsHlYc0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-amsterdam-AMSTERDAMTGGHOG0823-a2f9a769f3c44a23b08649daf25e1c8c.jpg";

  

});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.


placeholder.src = "https://m.media-amazon.com/images/I/41PzW6gu3tL._SX700_SY500_QL70_ML2_.jpg";
    

});