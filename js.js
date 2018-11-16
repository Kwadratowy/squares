for (i=0; i<100; i++){
    var newDiv = document.createElement('div');
    newDiv.style.width = '50px';
    newDiv.style.height = '50px';
    newDiv.style.backgroundColor = 'blue';
    newDiv.style.position = 'absolute';

    var container = document.getElementById('container');
    container.appendChild(newDiv);

    newDiv.style.top = `${Math.floor((Math.random() * 100)).toString()}%`;
    newDiv.style.left = `${Math.floor((Math.random() * 100)).toString()}%`;
}

