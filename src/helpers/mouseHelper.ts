class MouseHelper {
    public static handleClick(): void {
        if(mouseY < 60) return TopMenu.mouseEvent();
        if(mouseX < 160) return Menu.mouseEvent();
    }
}