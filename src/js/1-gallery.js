const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
// Визначити спільного предка групи елементів для відстеження подій.
const gallery = document.querySelector(".gallery");

// Створюємо розмітку. спочатку одну <li></li>, потім масив.
function galleryItem(image) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"width = "360" height = "300"
    />
  </a>
</li>`;
}
function galleryItems(arr) {
  return arr.map(galleryItem).join(" ");
}

const markup = galleryItems(images);
// Додаємо створену розмітку в DOM
gallery.innerHTML = markup;
// Делегування
//Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
gallery.addEventListener("click", selectImage);
// В обробнику використовувати event.target для вибору цільового елемента, на якому безпосередньо відбулась подія.
// import * as basicLightbox from "basiclightbox";
function selectImage(event) {
  if (event.target === event.currentTarget) {
    return;
    // користувач клікнув між кнопками
  }
  const selectedImage = event.target.closest("IMG");
  const source = selectedImage.dataset.source;
  const image = images.find((el) => el.original == source);
  console.log(source);
  console.log(image);
  showModal(image);
}
function showModal(image) {
  const markup = `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"width="1112" height="640"
    />
  </a>
</li>`;

  const instance = basicLightbox.create(markup, {
    onShow: (instance) => {
      window.addEventListener("keydown", onModalClose);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onModalClose);
    },
  });
  instance.show();

  function onModalClose(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}