// import {} from './55-Module' not passing in .js and stuff that we want to import
import {circumference, PI} from './55-Module.js'
console.log(PI);
const area=circumference(5);//forgot to pass arguments
console.log(area);