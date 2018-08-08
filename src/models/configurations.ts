export class Configurations {

    private _showSlide: boolean;
    private _name: string;
    private _username: string;

    constructor(showSlide?: boolean, name?: string, username?: string) {
        this._showSlide = showSlide;
        this._name = name;
        this._username = username;
    }

    public get showSlide(): boolean {
        return this._showSlide;
    }
    public set showSlide(value: boolean) {
        this._showSlide = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

}