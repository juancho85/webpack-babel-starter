// MODULES
// const {me} = require('./module')
import { me } from './module'

console.log(`I am ${me.name} ${me.lastname}`);

// TRANSFORM TO ES2016
const arr = [1, 2, 3, 4]
const odds = arr.filter(item => item % 2 !== 0)
console.log(odds);

// Use ES2017 async await
async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);

    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts))

