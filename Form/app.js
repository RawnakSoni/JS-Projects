var cal = document.getElementById("cal")

cal.addEventListener("click",
function(d)
{
    var phy = document.getElementById("phy").value;
    var che = document.getElementById("che").value;
    var mat = document.getElementById("mat").value;
    var bio = document.getElementById("bio").value;

    var total = parseInt(phy)+parseInt(che)+parseInt(mat)+parseInt(bio)

    perc = total/400.0*100;

    d.preventDefault();

    var res = document.getElementById("res")
    res.textContent="Percentage = "+perc 
}
);

