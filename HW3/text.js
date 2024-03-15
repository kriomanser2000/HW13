function applyStyles() 
{
    var text = document.getElementById("textInput").value;
    var styles = "";
    var checkboxes = document.getElementsByName("style");
    checkboxes.forEach(function(checkbox) 
    {
        if (checkbox.checked) 
        {
            styles += checkbox.value + " ";
        }
    });
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p style='" + styles + "'>" + text + "</p>";
}