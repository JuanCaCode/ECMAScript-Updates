const user = {username : 'camilo', age:27, country:'CO'}

const {username, ...values} = user

console.log(username)
console.table(values)