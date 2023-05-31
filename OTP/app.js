
// It will generate Random Number b/w the range 0-1 floating value 
// var x = Math.random()
// console.log(x)



// Math.random()*(HN-LN)+LN
// this will give exact 4 digits
// var result = x*(9999-1000)+1000
// console.log(result)


// to remove after decimal value
// var OTP = Math.floor(result)
// console.log(OTP) // final OTP


function otp()
{
    var result = Math.random()*(9999-1000)+1000
    var OTP = Math.floor(result)
    console.log(OTP)

    var name = document.getElementById("inp1").value

    var phno = document.getElementById("inp2").value

    document.getElementById("output").innerHTML ="dear, "+name+" your OTP is : " +OTP+ " sent on "+phno

}
