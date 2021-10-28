import { Product } from "./Product";

export class User {
  private _idUser?: Number | undefined;
  name: string;
  email: string;
  age: number;
  private _password: string;
  private _shoppingCard: Array<Product> = [];

  constructor({
    name,
    age,
    password,
    email,
  }: {
    name: string;
    age: number;
    password: string;
    email: string;
  }) {
    this.name = name;
    this.age = age;
    this._password = password;
    this.email = email;
  }

  public getIdUser(): Number | undefined {
    return this._idUser;
  }

  public setIdUser(value: Number | undefined) {
    this._idUser = value;
  }

  public getShoppingCard(): Array<Product> {
    return this._shoppingCard;
  }

  public addProduct(product: Product) {
    this._shoppingCard.push(product);
  }

  public getPassword(): string {
    return this._password;
  }

  public setPassword(value: string) {
    this._password = value;
  }
}
