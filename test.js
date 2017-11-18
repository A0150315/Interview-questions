function searchTwitter(term, onload, onerror) {

     var xhr, results, url;
     url = 'http://search.twitter.com/search.json?rpp=100&q=' + term;
     xhr = new XMLHttpRequest();
     xhr.open('GET', url, true);

     xhr.onload = function (e) {
         if (this.status === 200) {
             results = JSON.parse(this.responseText);
             onload(results);
         }
     };

     xhr.onerror = function (e) {
         onerror(e);
     };

     xhr.send();
 }

 function handleError(error) {
     /* handle the error */
 }

 function concatResults() {
     /* order tweets by date */
 }

 function loadTweets() {
     var container = document.getElementById('container');

     searchTwitter('#IE10', function (data1) {
         searchTwitter('#IE9', function (data2) {
             /* Reshuffle due to date */
             var totalResults = concatResults(data1.results, data2.results);
             totalResults.forEach(function (tweet) {
                 var el = document.createElement('li');
                 el.innerText = tweet.text;
                 container.appendChild(el);
             });
         }, handleError);
     }, handleError);
 }
