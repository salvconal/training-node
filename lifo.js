const bar = () => {
    console.log("bar");
};
const baz = () => {
    console.log("baz");
};
const foo = () => {
    console.log("foo");
    setTimeout(bar, 0);
    new Promise((resolve,reject) => {
        resolve("Debería ejecutarse justo despues de baz, pero antes de bar")
    }).then(resolve => console.log(resolve));
    baz();
};
foo();


