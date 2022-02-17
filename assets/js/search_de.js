(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        if ( item.status != "default" ) {
          appendString += '<article id="' + item.article + '-article"><div><p>' + item.journal + '</p><p>&emsp;<em>' + item.status + '</em>&emsp;<time datetime="' + item.date +'">' + item.date + '</time></p></div>';
        } else {
          appendString += '<article><div><p>' + item.journal + '</p><p>&emsp;<time datetime="' + item.date +'">' + item.date + '</time></p></div>';
        }
        appendString += '<h2 class="subtitle"><a href="' + item.url + '" target="_blank"><div data-icon="ei-external-link" data-size="s"></div> ' + item.title + '</a></h2>';
        appendString += '<p>Autoren: ' + item.author + '</p>';
        appendString += '<blockquote cite="' + item.url + '"><p class="content">„' + item.content + '...“</p></blockquote>';
        appendString += '<p>Schlüsselworte: ' + item.category + '</p>';
        appendString += '<aside class="group"><a href="/studies_de_' + item.group + '.html#' + item.article + '"><div data-icon="ei-chevron-right" data-size="s"></div><p>' + item.groupname + '</p></a></aside>';
        appendString += '</article>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<article><h3>No results found.</h3></article>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('article');
      this.field('date');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('journal');
      this.field('group');
      this.field('groupname');
      this.field('status');
      this.field('category', { boost: 5 });
      this.field('content', { boost: 5 });

      // Add data to lunr
      for (var key in window.store) {
        this.add({
          'id': key,
          'article': window.store[key].article,
          'date': window.store[key].date,
          'title': window.store[key].title,
          'author': window.store[key].author,
          'journal': window.store[key].journal,
          'group': window.store[key].group,
          'groupname': window.store[key].groupname,
          'status': window.store[key].groupname,
          'category': window.store[key].category,
          'content': window.store[key].content
        });
      }
    });

    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
})();

