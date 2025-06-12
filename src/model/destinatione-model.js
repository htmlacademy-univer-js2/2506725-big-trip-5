import { UpdateType } from '../const.js';
import Observable from '../framework/observable.js';

export default class DestinationModel extends Observable {
  #destinations = [];
  #pointsApiService = null;

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#pointsApiService.destinations;
    } catch (error) {
      this.#destinations = [];
    }
    this._notify(UpdateType.INIT);
  }
}
