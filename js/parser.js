window.addEventListener('DOMContentLoaded', () =>{
  const body = document.querySelector('body');
  function recursy (element, deleteString) {
    const regexp = new RegExp(deleteString, 'i');
    element.childNodes.forEach((node) => {
      if(node.textContent.match(regexp) && node.nodeName === '#text') {
        const searchString = node.textContent.replace(regexp, '');
        node.textContent = searchString;
      }
      if(element.childNodes.length > 1) {
        recursy(node, deleteString);
      }
    });
  }
  recursy(body, 'petr');
});


