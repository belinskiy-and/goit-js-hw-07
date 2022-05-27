import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElement = document.querySelector(".gallery");

for (const galleryItem of galleryItems) {
    // <div>
    const newItem = document.createElement("div");

    newItem.classList.add("gallery__item");

    galleryElement.append(newItem);

    // <a>
    const linkElement = document.createElement("a");

    linkElement.classList.add("gallery__link");
    linkElement.setAttribute("href", galleryItem.original);

    newItem.append(linkElement);

    // <img>
    const image = document.createElement("img");
    
    image.classList.add("gallery__image");
    image.setAttribute("src", galleryItem.preview);
    image.setAttribute("data-source", galleryItem.original);
    image.setAttribute("alt", galleryItem.description);

    image.style.cursor = "zoom-in";

    linkElement.append(image);
}

const clickAction = event => {
    event.preventDefault();
    const original = event.target.getAttribute("data-source");

    console.log(original);

    basicLightbox.create(`
		<img width="1400" height="900" src="${original}">
	`).show()
};

galleryElement.addEventListener("click", clickAction);