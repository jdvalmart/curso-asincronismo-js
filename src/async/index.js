const fnAsync = ()=>{
    return new Promise((resolve, reject) =>{
        (true)
        ?setTimeout(()=>resolve('hola soy el resultado que esperas'),2000)
        : reject(new error ('soy el error que no esperabas!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('no se quien eres!');
}


console.log('antes');
anotherFn();
console.log('despues');