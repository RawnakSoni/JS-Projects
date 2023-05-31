function display()
{
    filter = document.getElementById("myinput").value.toUpperCase()
    table = document.getElementById("mytable")
    tablerow = table.getElementsByTagName('tr')

    for(i=1;i<tablerow.length;i++)
    {
        tabledata = tablerow[i].getElementsByTagName("td")[1]

        if(tabledata)
        {
            data = tabledata.textContent||tabledata.innerHTML

            if(data.toUpperCase().indexOf(filter)>-1)
            {
                tablerow[i].style.display=""
            }
            else
            {
                tablerow[i].style.display="none"
            }
        }
    }
}