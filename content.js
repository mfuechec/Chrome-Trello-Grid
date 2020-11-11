addEventListener('keypress', function(event) {
    if (event.key === 'g') {
        toggleGrid();
    }
})

function toggleGrid() {
    let board = document.getElementById('board');
    if (isNormal(board.classList)) {
        makeColumns();
        adjustMargins('grid');
        enableScrolling();
        styleAddAnother();
    } else if (isGrid(board.classList)){
        removeColumns();
        adjustMargins('normal');
    } else if (isVertical(board.classList)) {

    }
}

function makeColumns() {
    let board = document.getElementById('board');
    board.style.display = 'flex';
    board.style.flexDirection = 'row';
    let children = document.getElementsByClassName('js-list');
    let num = children.length / 4;
    let remainder = children.length % 4;
    for (let i = 0; i < Math.floor(num); i++) {
        let div = document.createElement('div');
        div.appendChild(children[0]);
        div.appendChild(children[0]);
        div.appendChild(children[0]);
        div.appendChild(children[0]);
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.className = 'grid-div'
        board.appendChild(div);
    }
    if (remainder > 0) {
        let div = document.createElement('div');
        for (let i = 0; i < remainder; i++) {
            div.appendChild(children[0]);
        }
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.className = 'grid-div';
        board.appendChild(div);
    }
    board.appendChild(board.children[0]);
    styleAddAnother();
    board.classList.add('grid')
}

function adjustMargins(style) {
    if (style === 'grid') {
        let elements = document.getElementsByClassName('list-wrapper');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.marginLeft = '0px';
            elements[i].style.margin = '15px';
            elements[i].style.minHeight = '15%';
            elements[i].style.height = 'auto';
        }
    } else {
        let elements = document.getElementsByClassName('list-wrapper');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.margin = '0 4px';
            elements[i].style.minWidth = '272px';
        }
        elements[0].style.marginLeft = '8px';
    }
}

function enableScrolling() {
    let elements = document.getElementsByClassName('list-wrapper');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.overflowY = 'auto'
    }
}

function styleAddAnother() {
    let element = document.getElementsByClassName('js-add-list');
    element[0].style.minHeight = '';
    element[0].style.overflow = 'hidden';
    element[0].style.height = '8vh';
}

function removeColumns() {
    let board = document.getElementById('board');
    let addNew = document.getElementsByClassName('js-add-list')[0];
    for (let i = 0; i < board.children.length; i++) {
        let child = board.children[0];
        if (child.classList[0] === 'grid-div') {
            while (child.children[0]) {
                board.insertBefore(child.children[0], addNew);
            }
            board.removeChild(child);
        }
    }
    board.style.display = '';
    board.classList.remove('grid');
    let element = document.getElementsByClassName('js-add-list');
    element[0].style.height = 'auto';
}

function isNormal(list) {
    let result = true;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'grid' || list[i] === 'vertical') {
            result = false;
        }
    }
    return result;
}

function isGrid(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'grid') {
            return true;
        }
    }
    return false;
}

function isVertical(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'vertical') {
            return true;
        }
    }
    return false;
}

addEventListener('keypress', function(event) {
    if (event.key === 'v') {
        toggleVertical();
    }
})