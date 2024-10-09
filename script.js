var textPath = document.querySelector("#text-path");

var textContainer = document.querySelector("#text-container");

var path = document.querySelector(textPath.getAttribute('href'));

var pathLength = path.getTotalLength();
console.log("path length: " + pathLength);

function updateTextPathOffset(offset){
    textPath.setAttribute('startOffset', offset);
}

// updateTextPathOffset(100);
updateTextPathOffset(pathLength);

function onScroll(){
    requestAnimationFrame(function(){
        var rect = textContainer.getBoundingClientRect();
        console.log("rect y: " + rect.y);
        var scrollPercent = rect.y / window.innerHeight;
        console.log("scroll percent: " + scrollPercent);
        // updateTextPathOffset(window.scrollY * 30);
        updateTextPathOffset(scrollPercent * pathLength * 1.5);
    });
}

window.addEventListener('scroll', onScroll);