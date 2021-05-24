function operate(event)
{
    document.getElementById("tempiv").value = parseFloat(document.getElementById("display").value)
    document.getElementById("display").value = ""
    document.getElementById("operation").value = event.target.innerText 
}

function invert()
{
    let n1 = parseFloat(document.getElementById("display").value)*(-1)
    if(!(isNaN(n1)))
    document.getElementById("display").value = n1;
}

function GH()
{
    window.open('https://www.github.com/daniel-oliveira42', '_blank');
}

function CL()
{
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1); 
}

function AC()
{
    document.getElementById("display").value = ""
}

function result()
{
    let temp
    const n1 = parseFloat(document.getElementById("tempiv").value)
    const n2 = parseFloat(document.getElementById("display").value)
    if(document.getElementById("operation").value == "+")
    {
        temp = n1+n2
    }
    else if(document.getElementById("operation").value == "-")
    {
        temp = n1-n2
    }
    else if(document.getElementById("operation").value == "/")
    {
        temp = n1/n2
    }
    else if(document.getElementById("operation").value == "X")
    {
        temp = n1*n2
    }
    if(!isNaN(temp))
        if(temp.toString().length > 8)
        {
            document.getElementById("display").value = "ERR"
            document.getElementById("tempiv").value = ""
            document.getElementById("operation").value = ""
        }
        else
        {
            console.log(temp.length)
            document.getElementById("display").value = temp;
            document.getElementById("tempiv").value = ""
            document.getElementById("operation").value = ""
        }
}

function computar(event)
{
    let temp = document.getElementById("display").value
    temp = document.getElementById("display").value + event.target.innerText 
    if(temp.length <= 8)
    {
        document.getElementById("display").value = temp
    }
    else
    {
        document.getElementById("display").value = document.getElementById("display").value
    }
}

