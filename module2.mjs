import ui,{a,c,d} from './module1.mjs'
//also focus on ui ,default element can be imported through any name like here instead of ui,we can write dza,fkerf etc. but we can not do the same for a,c and d eg if we replace a by a1 it will not print the result or the variable will not get imported using a different name
//cury brackets for non default elements
console.log(ui);
// it will print the element of export default
console.log(a);
console.log(c);
console.log(d);

