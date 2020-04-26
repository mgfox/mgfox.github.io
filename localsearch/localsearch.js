
var parseParams = function() {
  params = location.hash;
  res = {}
  if (params.lenth == 0) {
    return res;
  }
  if (params[0] != "#") {
    return res;
  }
  params.split("#")[1].split("&").forEach(function(item) {
    var param = item.split("=");
    if (param.length > 1) {
      res[param[0]] = decodeURIComponent(param[1]);
    } else {
      res[param[0]] = "";
    }
  });
  return res;
}

var openSearch = function(url, text) {
  var site = url.split("/")[2];
  console.log("searching " + site + ": '" + text + "' ....");
  var redirectUrl = url + encodeURIComponent(text);
  location.href = redirectUrl;
}

var params = parseParams();
var queryString = params["q"] || "";
var settings = params["s"] || "gby";

console.log("queryString: " + queryString);
console.log("settings: " + settings);

var app = new Vue({
  el: '#app',
  data: {
    text: queryString
  },
  mounted: function () {
    this.$refs.searchText.focus();
  },
  methods: {
    searchByEnter: function(e) {
      if (e.keyCode === 13) {
        this.searchGoogle();
      }
    },

    searchGoogle: function () {
      openSearch("https://www.google.com/search?q=", this.text);
    },

    searchBing: function () {
      openSearch("https://www.bing.com/search?q=", this.text);
    },

    searchYandex: function () {
      openSearch("https://yandex.ru/search/?text=", this.text);
    }

  }
});
