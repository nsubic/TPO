   function showname () {
      var fi  = document.getElementById('fileInput'); 
       var totalFileSize = 0;

        // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
        if (fi.files.length > 0)
        {
            for (var i = 0; i <= fi.files.length - 1; i++)
            {
                var fsize = fi.files.item(i).size;
                totalFileSize = totalFileSize + fsize;
            }
        }
        document.getElementById('name').innerHTML = "Ime datoteke:  <b>" +fi.files.item(0).name+ "</b>";
        document.getElementById('type').innerHTML = "Tip datoteke:  <b>" +fi.files.item(0).type+ "</b>";
        document.getElementById('divTotalSize').innerHTML = "Velikost datoteke: <b>" + Math.round(totalFileSize / 1024) + "</b> KB";
        document.getElementById("buton").style.display = "block";
       
   }
   
   