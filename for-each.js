// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:
['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const nameA = []
    arr.forEach(item => {
        nameA.push(item.name)
    })
    return nameA;
}
/*
Output:
['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArr = [];
    arr.reverse().forEach(item => newArr.push(item.type))
    return newArr;
}

/*
Output:
[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanish = [];
    arr.forEach(item => {
        spanish.push({ nombre: item.name, tipo: item.type });
    })
    return spanish;
}