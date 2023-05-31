const inputkey = document.getElementById("inputkey")
const inputvalue = document.getElementById("inputvalue")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

btn.onclick= function()
{
    const key1 = inputkey.value 
    const value1 = inputvalue.value 

    if(key1&&value1)
    {
        localStorage.setItem(key1,value1)
        location.reload()
    }
}

for(i=0;i<localStorage.length;i++)
{
    const k = localStorage.key(i)
    const v = localStorage.getItem(k)
    output.innerHTML = output.innerHTML + k+" : "+v+""+"<br>"
}