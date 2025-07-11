function tabd(tabId){
    var contents = document.querySelectorAll('.para');
    contents.forEach(function(content){
        content.style.display = 'none' ;
       
    });
    document.getElementById(tabId).style.display = 'block' ;
    console.log(tabd)
}