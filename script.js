let outputScreen=document.getElementById('outputScreen')

let display=(num)=>{
    outputScreen.value+=num
}

let Calculate=()=>{
    try{
        outputScreen.value=eval(outputScreen.value)
    }
    catch(err){
        alert('Invalid')
    }
}

let Clear=()=>{
    outputScreen.value=null
}

let del=()=>{
    outputScreen.value=outputScreen.value.slice(0,-1)
}