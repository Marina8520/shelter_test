const burgerBtn = document.querySelector('.burger');
const burgerBtn2 = document.querySelector('.burger2');
const burgerNavigation = document.querySelector('.burger-navigation');
const burgerLine1 = document.querySelector('.line1');
const burgerLine2 = document.querySelector('.line2');
const burgerLine3 = document.querySelector('.line3');
const header = document.querySelector('.header');
const LEFT_BTN = document.querySelector('#left-arrow');
const RIGHT_BTN = document.querySelector('#right-arrow');
const imgPets1 = document.querySelector('.img-pets1');
const imgPets2 = document.querySelector('.img-pets2');
const imgPets3 = document.querySelector('.img-pets3');
const PetsName1 = document.querySelector('.name1');
const PetsName2 = document.querySelector('.name2');
const PetsName3 = document.querySelector('.name3');


let petsNumbers = [];
let jsonPets1 = [
    {
      "name": "Jennifer",
      "img": "../../assets/img/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/img/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/img/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/img/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/img/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/img/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/img/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/img/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

burgerBtn.addEventListener('click', function(){
	burgerNavigation.classList.toggle('active-burger');
    header.style.visibility = 'hidden';
    burgerBtn.classList.toggle('burger-rotate');
    burgerBtn2.classList.toggle('burger-rotate');
})

burgerNavigation.addEventListener('click', () => {
    burgerNavigation.classList.toggle('active-burger');
    header.style.visibility = 'visible';
    burgerBtn.classList.toggle('burger-rotate');
    burgerBtn2.classList.toggle('burger-rotate');
})


LEFT_BTN.addEventListener('click', async () => {

  while (petsNumbers.length < 6)   {
    let i1 = Math.floor(Math.random()*8);
    if(petsNumbers.indexOf(i1) === -1) {
      petsNumbers.unshift(i1);
    } 
  }

  jsonPets = await getCard();

  imgPets1.src = jsonPets[petsNumbers[0]].img;
  PetsName1.textContent = jsonPets[petsNumbers[0]].name;
  imgPets2.src = jsonPets[petsNumbers[1]].img;
  PetsName2.textContent = jsonPets[petsNumbers[1]].name;
  imgPets3.src = jsonPets[petsNumbers[2]].img;
  PetsName3.textContent = jsonPets[petsNumbers[2]].name;
  
  petsNumbers.pop();
  petsNumbers.pop();
  petsNumbers.pop();
})


RIGHT_BTN.addEventListener('click', async () => {

  while (petsNumbers.length < 6)   {
    let i1 = Math.floor(Math.random()*8);
    if(petsNumbers.indexOf(i1) === -1) {
      petsNumbers.unshift(i1);
    } 
  }

  jsonPets = await getCard();

  imgPets1.src = jsonPets[petsNumbers[0]].img;
  PetsName1.textContent = jsonPets[petsNumbers[0]].name;
  imgPets2.src = jsonPets[petsNumbers[1]].img;
  PetsName2.textContent = jsonPets[petsNumbers[1]].name;
  imgPets3.src = jsonPets[petsNumbers[2]].img;
  PetsName3.textContent = jsonPets[petsNumbers[2]].name;
  
  petsNumbers.pop();
  petsNumbers.pop();
  petsNumbers.pop();
})


function showImg(data)  {
    imgPets.src = data.img;
    imgPets.alt = data.name;   
  }

async function getCard() {
    const card = 'text.json';
    const res = await fetch(card);
    return await res.json();
}
