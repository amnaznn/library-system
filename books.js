const searchInput = document.getElementById("searchBook");

searchInput.addEventListener("keyup", function () {

    const filter = searchInput.value.toLowerCase();

    const rows = document.querySelectorAll("#bookTable tbody tr");

    rows.forEach(function(row){

        const text = row.textContent.toLowerCase();

        if(text.includes(filter)){
            row.style.display = "";
        }else{
            row.style.display = "none";
        }

    });

});