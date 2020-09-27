let edtDiagram = document.querySelector("#edtDiagram")
let pnlDiagram = document.querySelector("#pnlDiagram")
var oldText = ""
setInterval(function() {
    var v = edtDiagram.value
    if (v != oldText) {
        oldText = v
        mermaid.mermaidAPI.render('mermaid', v, function(svgCode, bindFunctions) {
            pnlDiagram.innerHTML = svgCode;
        })
        console.log("diagram updated")
    }
    edtDiagram.style.height = "" + (window.innerHeight * 0.8) + "px"
}, 300);

mermaid.initialize({startOnLoad:false});