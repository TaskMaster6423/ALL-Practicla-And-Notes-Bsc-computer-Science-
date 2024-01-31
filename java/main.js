function nextPage() {
    let currentpage = parseInt(document.getElementById('page').innerHTML[5]);
    currentpage++;
    let page = 'page'+currentpage+'.html';
    location.replace(page);
}

function previousPage() {
    let currentpage = parseInt(document.getElementById('page').innerHTML[5]);
    currentpage--;
    let page = 'page'+currentpage+'.html';
    location.replace(page);
}