export function add(x, y) { //if you don't export, you can't use it in other files
    return x+y;
}

export const subtract = (x, y ) => {
    return x-y;
}

export const multiply = (x, y) => x*y;

export const divide = (x, y) => y ? x/y : "Can't divide by zero";

export default 'This is the default export';