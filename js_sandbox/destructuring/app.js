// [a, b, ...baghi] = [100, 200, 300, 400, 500, 600]
;({ a, b, ...baghimandeh } = { d: 400, e: 500, a: 100, b: 200, c: 300 })

console.log(a, b, baghimandeh)

const people = ['john', 'jack', 'mark']

let [person1, person2, person3] = people

function getPeople() {
  return ['jo', 'ja', 'ma']
}

;[person1, person2, person3] = getPeople()

console.log(person1, person2, person3)

const person = {
  name: 'joah doe',
  age: 32,
  gender: 'male',
  movie: { movieName: 'good bad ugly', mainActor: 'clint eastwood' },
}

const { name, age, gender, movie } = person

console.log(name, age, gender, movie.movieName, movie.mainActor)
