import PointView from '../view/point-view.js';
import PointsList from '../view/points-list-view.js';
import CreateForm from '../view/create-form-view.js';
import EditForm from '../view/edit-form-view.js';
import { render } from '../render.js';

export default class Presenter {
  createFormViewComponent = new CreateForm();
  pointsListViewComponent = new PointsList();

  constructor({container, pointsModel, destinationsModel, offersModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    const points = this.pointsModel.getPoints();
    const destinations = this.destinationsModel.getDestinations();
    const offers = this.offersModel.getOffers();
    render(this.pointsListViewComponent, this.container);
    render(new EditForm(points[0], destinations, offers), this.pointsListViewComponent.getElement());
    // render(this.createFormViewComponent, this.pointsListViewComponent.getElement());
    for (const point of points) {
      render(new PointView(point, destinations, offers), this.pointsListViewComponent.getElement());
    }
  }

}
