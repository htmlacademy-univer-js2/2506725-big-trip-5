import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate(filter, currentFilterType) {
  const count = filter.count;
  return (
    ` <div class="trip-filters__filter">
        <input id="filter-${filter.type}"
          class="trip-filters__filter-input  visually-hidden"
          type="radio"
          name="trip-filter"
          value="${filter.type}"
          ${filter.type === currentFilterType ? 'checked' : ''}
          ${count === 0 ? 'disabled' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.type}">${filter.type}</label>
      </div>`
  );
}

function createFiltersViewTemplate(filterItems, currentFilterType) {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join('');

  return `<form class="trip-filters" action="#" method="get">
               ${filterItemsTemplate}
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;
}

export default class Filters extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersViewTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
