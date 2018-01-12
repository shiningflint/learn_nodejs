function greet(callback, timer) {
  console.log('Hello!')
  const data = {name: 'John Doe'}

  setTimeout(() => { callback(data) }, timer)
}

greet((data) => {
  console.log('Callback was invoked!')
  console.log(data)
}, 1500)

greet((data) => {
  console.log('A different callback was invoked!')
  console.log(data.name)
}, 500)
