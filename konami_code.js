const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//code = [65, 65]
var index = 0;

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
}
// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
  console.log(key);
  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("Success!")
      index = 0
    }
  } else {
    index = 0
  }
}

init()
