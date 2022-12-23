class MoveHelper {
    public static pickElement(type: string): void {
        if(type === 'Place') Mouse_Element = new Place(null, null);
        if(type === 'Transition') Mouse_Element = new Transition(null, null);
    }

    public static drawElement(): void {
        if(!Mouse_Element) return;
        push();
        scale(Grid_Scale);
        translate(Grid_Xdif, Grid_Ydif);
        let mouseXTemp = mouseX / Grid_Scale - Grid_Xdif;
        let mouseYTemp = mouseY / Grid_Scale - Grid_Ydif;
        Mouse_Element.setPosition(mouseXTemp, mouseYTemp);
        Mouse_Element.draw();
        pop();
    }

    public static removeElement(): void {
        Mouse_Element = null;
    }
}