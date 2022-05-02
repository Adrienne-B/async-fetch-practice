async function getRandomNumbers() //function
{
    return await new Promise(function(resolve, reject) //promise is returned  //We had to put new in front of promise b/c promise is an object. So whenever we have to call an object we have to put new in front of it.
        //You have resolve,reject because they are apart of the function. But in line 13
        {
            setTimeout(function() { //in the promise put setTImeout that will resolve the promise with a random number after .5seconds
                    resolve(Math.random() * 100); //math.random is used only for random numbers. Also we put 100 so there could be a range 1-100..or you can put how high or low a number you want it doesnt have to be up to 100.
                }, 5000) //this is still inside of the promise scope like function

        });


}


const rand = async ()=>{
    let no = await  getRandomNumbers()
    console.log(no)
}
rand()


/*

let no = getRandomNumbers().then((data) => {
    console.log(data)
})**/