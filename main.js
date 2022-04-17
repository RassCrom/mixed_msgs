let random = arr => {
    return Math.floor(Math.random() * arr.length)
}

let rndmPhrase = {
	phrases: ['Today is a good day to learn code', 'Try to figure out the most difficult tasks', 'Nice day to start working out', 'Have a stroll if it is not rainy', 'Have no idea', 'do not bother me'],
  appearance: ["you're beatiful", 'you have good haircut', 'astonishing eyes', 'you are awesome'],
  wish: ['gl', 'bl', 'gg', 'hf']
}

let yourPhrase = []

const taskGenerator = () => {
	let str1 = rndmPhrase.phrases[random(rndmPhrase.phrases)]
  let str2 = rndmPhrase.appearance[random(rndmPhrase.appearance)]
  let str3 = rndmPhrase.wish[random(rndmPhrase.wish)]
  console.log(`${str1}. By the way, ${str2}, ${str3}`)
}

taskGenerator()