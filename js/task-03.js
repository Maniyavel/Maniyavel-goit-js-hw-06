const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list= document.querySelector('.gallery');
const element=images
.map((image)=>`<li class="gallery__items"><img src ="${image.url}" class="gallery__img" alt="${image.alt}"</li>`)
.join('');

list.insertAdjacentHTML('beforeend', element);

//const items = list.querySelectorAll('li');
//items.forEach((item)=>{item.classList.add('gallery__items')});

//const styleImg = list.querySelectorAll('img');
//styleImg.forEach((img)=>{
  //img.classList.add('gallery__img')
//})