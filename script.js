let cursor = document.getElementById('cursor')
let main = document.getElementById('main')
console.log(main);


main.addEventListener('mousemove', function(dets){
    cursor.style.position = 'absolute';
    cursor.style.top = dets.y+'px'
    cursor.style.left = dets.x+'px'
    
})
