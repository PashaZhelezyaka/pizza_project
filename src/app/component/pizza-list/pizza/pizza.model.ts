export class PizzaModel {
  public id: number;
  public img: string;
  public title: string;
  public description: string;

  constructor(
    id: number, img: string, title: string, description: string
  ) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.description = description;
  }
}
