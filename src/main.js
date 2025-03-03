import { render } from './render.js';
import Sort from '../src/view/sort-view.js';
import Filters from '../src/view/filters-view.js';
import Presenter from './presenter/main-presenter.js';
import TripInfo from './view/trip-info-view.js';
import PointsModel from './model/points-model.js';
import DestinationModel from './model/destinatione-model.js';
import OffersModel from './model/offers-model.js';

const filtersContainer = document.body.querySelector('.trip-controls__filters');
const eventsContainer = document.body.querySelector('.trip-events');
const tripMainContainer = document.body.querySelector('.trip-main');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationModel();
const offersModel = new OffersModel();
pointsModel.init();
destinationsModel.init();
offersModel.init();

render(new TripInfo(), tripMainContainer, 'afterbegin');
render(new Filters(), filtersContainer);
render(new Sort(), eventsContainer);

const presenter = new Presenter({container: eventsContainer, pointsModel, destinationsModel, offersModel});

presenter.init();
