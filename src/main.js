import Presenter from './presenter/main-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationModel from './model/destinatione-model.js';
import OffersModel from './model/offers-model.js';

const filtersContainer = document.body.querySelector('.trip-controls__filters');
const eventsContainer = document.body.querySelector('.trip-events');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationModel();
const offersModel = new OffersModel();
pointsModel.init();
destinationsModel.init();
offersModel.init();

const presenter = new Presenter({eventsContainer, filtersContainer, pointsModel, destinationsModel, offersModel});

presenter.init();
