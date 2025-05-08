import { UpdateType } from '../const.js';
import Observable from '../framework/observable.js';

export default class OffersModel extends Observable {
  #offers = [];
  #pointsApiService = null;

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  async init() {
    try {
      this.#offers = await this.#pointsApiService.offers;
    } catch (error) {
      this.#offers = [];
    }
    this._notify(UpdateType.INIT);
  }

  get offers() {
    return this.#offers;
  }
}
