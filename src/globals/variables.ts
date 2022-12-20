let TopMenu_Buttons: Array<TopMenu_Button> = [{
    name: 'Zoom +',
    x: null,
    func: () => TopMenu.zoom(true)
}, {
    name: 'Zoom -',
    x: null,
    func: () => TopMenu.zoom(false)
}, {
    name: 'X +',
    x: null,
    func: () => TopMenu.moveX(true)
}, {
    name: 'X -',
    x: null,
    func: () => TopMenu.moveX(false)
}, {
    name: 'Y +',
    x: null,
    func: () => TopMenu.moveY(true)
}, {
    name: 'Y -',
    x: null,
    func: () => TopMenu.moveY(false)
}];

let Grid_Scale = 150;
let Grid_Xdif = 0;
let Grid_Ydif = 0;