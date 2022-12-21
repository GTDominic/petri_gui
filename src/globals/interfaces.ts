interface TopMenu_Button {
    name: string,
    x: number,
    func: () => void,
}

interface Menu_Element {
    element: Place | Transition,
    func: () => void,
}
