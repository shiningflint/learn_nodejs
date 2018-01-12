class Person {
  constructor(kentang = 'John') {
    this.firstname = kentang
    this.lastname = 'Doe'
  }
}

class Policeman extends Person {
  constructor() {
    super()
    this.badgenumber = '1234'
  }
}

const officer = new Policeman()
console.log(officer)
