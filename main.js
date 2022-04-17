var text = document.getElementById('text')
var btn = document.getElementById('btn')

let random = arr => {
    return Math.floor(Math.random() * arr.length)
}

let link = './resources/img/'
let sakura = link + 'sakura.jpg';
let obito = link + 'obito.webp';
let naruto = link + 'bg-1.webp';
let jiraiya = link + 'jiraiya.jpeg';
let itachi = link + 'itachi.jpg';
let shino = link + 'shino.webp';
let orochimaru = link + 'orochimaru.jpg'

let rndmPhrase = [
  {
    nameChar: 'Naruto Uzumaki',
    bg: naruto,
    phrase: "Hard work is worthless for those that don’t believe in themselves."
  },
  {
    nameChar: 'Naruto Uzumaki',
    bg: naruto,
    phrase: "If you don’t like the hand that fate’s dealt you with, fight for a new one."
  },
  {
    nameChar: 'Obito Uchiha',
    bg: obito,
    phrase: "The moment people come to know love, they run the risk of carrying hate."
  },
  {
    nameChar: 'Jiraiya',
    bg: jiraiya,
    phrase: "When people get hurt, they learn to hate… When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind. Pain allows people to grow… and how you grow is up to you."
  },
  {
    nameChar: 'Sakura Haruno',
    bg: sakura,
    phrase: "A smile is the easiest way out of a difficult situation."
  },
  {
    nameChar: 'Itachi Uchiha',
    bg: itachi,
    phrase: "Growth occurs when one goes beyond one’s limits. Realizing that is also part of training."
  },
  {
    nameChar: 'Orochimaru',
    bg: orochimaru,
    phrase: "It’s human nature not to realize the true value of something, unless they lose it."
  },
  {
    nameChar: 'Shino Aburame',
    bg: shino,
    phrase: "Never underestimate your opponent, no matter how small they may seem."
  },
  {
    nameChar: 'Obito Uchiha',
    bg: obito,
    phrase: "In the ninja world, those who don’t follow the rules are trash. But, those who abandon their friends are even worse than trash."
  },
  {
    nameChar: 'Sakura Haruno',
    bg: sakura,
    phrase: "Every one of us must do what’s in their power! If we’re going to die anyway, then it’s better to die fighting than to do nothing!"
  },
]

let yourPhrase = []

const taskGenerator = () => {
  let rnd = random(rndmPhrase)
	let str1 = rndmPhrase[rnd].nameChar
  let str2 = rndmPhrase[rnd].phrase
  let str3 = rndmPhrase[rnd].bg
  text.innerHTML = str1 + '. - ' + str2
  document.body.style.backgroundImage = `url(${str3})`
}

btn.addEventListener('click', function() {
  return taskGenerator()
})