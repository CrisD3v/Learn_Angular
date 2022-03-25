export class DestinoViaje {
    Nombre: string;
    ImagenUrl: string;
    private selected!: boolean;
    constructor(public n :string, public i : string){
        this.Nombre = n;
        this.ImagenUrl = i;
    }
    isSelected(): Boolean {
        return this.selected;
    }
    setSelected(s : boolean){
        this.selected = s;
    }
}