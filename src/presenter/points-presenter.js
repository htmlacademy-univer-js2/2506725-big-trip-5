import { render } from '../framework/render';
import { updateItem } from '../utils';
import EmptyPoints from '../view/empty-points-list-view';
import PointPresenter from './point-presenter';


export default class PointsPresenter {
  #points = [];
  #offers = [];
  #destinations = [];

  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsListView = null;
  #container = null;

  #pointPresenters = new Map();

  constructor({ pointsModel, destinationsModel, offersModel, pointsListView, eventsContainer}) {
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsListView = pointsListView;
    this.#container = eventsContainer;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#offers = [...this.#offersModel.offers];
    this.#destinations = [...this.#destinationsModel.destinations];

    this.#renderComponents();
  }

  #renderComponents() {
    this.#renderPointsList();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderPointsList() {
    render(this.#pointsListView, this.#container);

    if (this.#points.length === 0) {
      render(new EmptyPoints(), this.#container);
    }

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: document.querySelector('.trip-events__list'),
      offers: this.#offers,
      destinations: this.#destinations,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }
}
