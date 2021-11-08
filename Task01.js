function res(str){

    const a = str.padStart(9, 'wood');
    const b = str.padStart(13, 'wood');
    const c = str.padStart(8);
    const d = str.padStart(3, 'wood');
    const e = str.padStart(6, 'wood');
    return {a, b, c, d, e};

}
console.log(res('Table'));

function res(str){

    const a = str.padEnd(5, 'new');
    const b = str.padEnd(8, 'new');
    const c = str.padEnd(0);
    const d = str.padEnd(20, 'new');
    const e = str.padEnd(6, 'new');

    return {a, b, c, d, e};

}
console.log(res('Happy'));