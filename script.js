mainContent = document.querySelector(".main__content");
rectangleOne = document.querySelector(".rectangle__one");
rectangleTwo = document.querySelector(".rectangle__two");
rectangleThree = document.querySelector(".rectangle__three");

mainContent.addEventListener("click", () => {
    rectangleOne.classList.toggle("rectangle__one--js");
    rectangleTwo.classList.toggle("rectangle__two--js");
    rectangleThree.classList.toggle("rectangle__three--js");
});