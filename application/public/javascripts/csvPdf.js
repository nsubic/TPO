function myFunction1() {
    console.log("oj")
  var titles = [];
  var data = [];

  /*
   * Get the table headers, this will be CSV headers
   * The count of headers will be CSV string separator
   */
  $('.table th').each(function() {
    titles.push($(this).text());
  });

  /*
   * Get the actual data, this will contain all the data, in 1 array
   */
  $('.table td').each(function() {
    data.push($(this).text());
  });
  
  /*
   * Convert our data to CSV string
   */
    var rows = document.querySelectorAll("TOTR");
    var row = ""
    for (var i = 0; i < rows.length-1; i++) {
        var cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++){
            row = row + cols[j].innerText;
            if(j < cols.length-1)  row = row +','
        }
        row=row+'\n'

    }

  /*
   * Make CSV downloadable
   */
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\ufeff", row]);
  console.log(blob)
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "data.csv";

  /*
   * Actually download CSV
   */
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
function myFunction() {
    console.log("oj")
  var titles = [];
  var data = [];

  /*
   * Get the table headers, this will be CSV headers
   * The count of headers will be CSV string separator
   */
  $('.table th').each(function() {
    titles.push($(this).text());
  });

  /*
   * Get the actual data, this will contain all the data, in 1 array
   */
  $('.table td').each(function() {
    data.push($(this).text());
  });
  
  /*
   * Convert our data to CSV string
   */
    var rows = document.querySelectorAll("table tr");
    var row = ""
    for (var i = 0; i < rows.length-1; i++) {
        var cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++){
            row = row + cols[j].innerText;
            if(j < cols.length-1)  row = row +','
        }
        row=row+'\n'

    }

  /*
   * Make CSV downloadable
   */
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\ufeff", row]);
  console.log(blob)
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "data.csv";

  /*
   * Actually download CSV
   */
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

function demoFromHTML() {

    var source = $('#source')[0];
console.log(source)
    DocRaptor.createAndDownloadDoc("YOUR_API_KEY_HERE", {
            test: true, // test documents are free, but watermarked
            type: "pdf",
            document_content: source.innerHTML, // use this page's HTML
            // document_content: "<h1>Hello world!</h1>",               // or supply HTML directly
            // document_url: "http://example.com/your-page",            // or use a URL
            // javascript: true,                                        // enable JavaScript processing
             prince_options: {
               media: "screen",                                       // use screen styles instead of print styles
             }
      })
}



function myFunction1() {
  var titles = [];
  var data = [];

  /*
   * Get the table headers, this will be CSV headers
   * The count of headers will be CSV string separator

  /*
   * Get the actual data, this will contain all the data, in 1 array
   */
  $('p').each(function() {
    data.push($(this).text());
  });
  /*
   * Convert our data to CSV string
   */
    var row = ""
    for (var i = 0; i < data.length-1; i++) {
        var cols = data[i].split(" ")
        var size = cols.length
        for(var j = 0; j < size; j++){
            cols[j] = cols[j].trim()
            if(cols[j] == "" && cols[j-1] == ""){
                cols.splice(j,1)
                j=0
                size = size-1;
            }
            if(cols[j] == "Šifra" || cols[j] == "predmeta:" || cols[j] == "Leto" || cols[j] == "izvajanja:" || cols[j] == "Število" || cols[j] == "vpisanih:" ){
                cols.splice(j,1)
                j=0
                size = size-1;
            }
            
        }
        console.log(cols)
        for (var j = 1; j < cols.length; j++){
            if(j!=1 && cols[j] != "") row = row + " "
            row = row + cols[j];
            if(cols[j] == ""){
                 row = row +','
                 row = row + cols[j+1]
                 row = row +','
                 row = row + cols[j+2]
                 row = row +','
                 row = row + cols[j+3]
                 j=cols.length
            } 
        }
        row=row+'\n'

    }

  /*
   * Make CSV downloadable
   */
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\ufeff", row]);
  console.log(blob)
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "data.csv";

  /*
   * Actually download CSV
   */
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

