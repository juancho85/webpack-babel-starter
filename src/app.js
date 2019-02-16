// const {me} = require('./module')
import { me } from './module'

console.log(`I am ${me.name} ${me.lastname}`);

const arr = [1, 2, 3, 4]

const odds = arr.filter(item => item % 2 !== 0)

console.log(odds);