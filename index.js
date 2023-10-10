
// Count Down Function


function countDown(num){
    if(typeof(num)==='number'){
        var numInput = num
        if(num > 0){
            numInput -=1
            console.log(num)
            setTimeout(function(){countDown(numInput)},1000)
            
        }else{
            console.log("Done")
        }
    }else{
        throw new Error('This is function can only take an integer.')
    }
}

countDown(10)

//Random Game Function
function checkRandomNumber(){
    return Math.random(0,1)
}
function randomGame(counter_start){
    let counter = counter_start;
    let randomNumber = checkRandomNumber()
    if(randomNumber < .75){

        counter += 1;
        setTimeout(function(){randomGame(counter)},1000)
    }
    else{
        
        console.log("Tries: ",counter)
    }

}

randomGame(0)