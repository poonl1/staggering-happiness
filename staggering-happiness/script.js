var sectionElems = document.querySelectorAll("section[data-id]");
var navAElems = document.querySelectorAll("nav a[href]");

var handleHash = function(hash){
    if (hash) {
        hash = hash.substring(1);
        
        var targetSection = document.querySelectorAll("section[data-id='" + hash + "']")[0];
        var targetNavAElem = document.querySelectorAll("a[href='#" + hash + "']")[0];

        for (var sectionElem of [].slice.call(sectionElems)) {
            sectionElem.classList.remove("visible");
        }
        
        for (var navAElem of [].slice.call(navAElems)) {
            navAElem.classList.remove("current");
        }
        
        targetNavAElem.classList.add("current");
        targetSection.classList.add("visible");
    } else {
        handleHash(navAElems[0].getAttribute("href"));
    }
};

window.addEventListener("hashchange", function(){
    handleHash(window.location.hash);
});

handleHash(window.location.hash);

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
