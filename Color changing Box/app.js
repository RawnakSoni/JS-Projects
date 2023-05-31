function color()
{
    var result = Math.random()*10
    var code = Math.floor(result)
    console.log(code)

    var tag = document.getElementById("box")

    if(code==0)
    {
        tag.style.background="green"
    }
    else if(code==1)
    {
        tag.style.background="blue"
    }
    else if(code==2)
    {
        tag.style.background="gray"
    }
    else if(code==3)
    {
        tag.style.background="yellow"
    }
    else if(code==4)
    {
        tag.style.background="orange"
    }
    else if(code==5)
    {
        tag.style.background="cian"
    }
    else if(code==6)
    {
        tag.style.background="black"
    }
    else if(code==7)
    {
        tag.style.background="lime"
    }
    else if(code==8)
    {
        tag.style.background="pink"
    }
    else
        tag.style.background="silver"
}
