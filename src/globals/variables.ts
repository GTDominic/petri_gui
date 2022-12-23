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

let Menu_Elements: Array<Menu_Element> = [{
    element: new Place(80, 160, 150),
    func: () => MoveHelper.pickElement('Place'),
}, {
    element: new Transition(80, 310, 150),
    func: () => MoveHelper.pickElement('Transition'),
}];

let Mouse_Element: PetriElement = null;

let Grid_Scale = 150;
let Grid_Xdif = 0;
let Grid_Ydif = 0;