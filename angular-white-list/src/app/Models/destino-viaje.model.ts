export class DestinoViaje {
    Nombre: string;
    ImagenUrl: string;
    private selected!: boolean;
    servicios : string[];
    constructor(public n :string, public i : string){
        this.Nombre = n;
        this.ImagenUrl = i;
        this.servicios = ['pileta', 'desayuno'];
    }
    isSelected(): Boolean {
        return this.selected;
    }
    setSelected(s : boolean){
        this.selected = s;
    }
}