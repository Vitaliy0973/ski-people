export const layout = (child, classList) => {
    const el = document.createElement('div');
    el.classList.add('container');

    if (classList) {
        el.classList.add(classList);
    }

    el.innerHTML = child;
    return el;
}

export const layoutMain = (childs) => {
    const main = document.createElement('main');

    childs.forEach(el => {
        main.append(el);
    });
    
    return main;
}