import Point from '../view/point-view.js';
import PointsList from '../view/points-list-view.js';
import CreateForm from '../view/create-form-view.js';
import EditForm from '../view/edit-form-view.js';
import { render } from '../render.js';

const PONTS_AMOUNT = 3;

export default class Presenter {
  createFormViewComponent = new CreateForm();
  editFormViewComponent = new EditForm();
  pointsListViewComponent = new PointsList();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.pointsListViewComponent, this.container);
    render(this.editFormViewComponent, this.pointsListViewComponent.getElement());
    render(this.createFormViewComponent, this.pointsListViewComponent.getElement());

    for (let i = 0; i < PONTS_AMOUNT; i++) {
      render(new Point(), this.pointsListViewComponent.getElement());
    }
  }

}
