export const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
export const DATE_FORMAT = {
  'full-date': 'YYYY-MM-DD',
  'month-day': 'MMM DD',
  'hours-minutes': 'HH:mm',
  'full-date-and-time': 'YYYY-MM-DDTHH:mm',
  'full-date-and-time-slash': 'DD/MM/YYYY HH:mm'
};
export const SORT_TYPE = {
  DAY:
  {
    text: 'day',
    isDisabled: false,
    isChecked: true
  },
  EVENT:
  {
    text: 'event',
    isDisabled: true,
    isChecked: false
  },
  TIME:
  {
    text: 'time',
    isDisabled: false,
    isChecked: false
  },
  PRICE:
  {
    text: 'price',
    isDisabled: false,
    isChecked: false
  },
  OFFER:
  {
    text: 'offer',
    isDisabled: true,
    isChecked: false
  }
};

export const FILTERS_TYPE = {
  EVERYTHING:'everything',
  FUTURE:'future',
  PRESENT: 'present',
  PAST:'past',
};

export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

export const TIME_LIMIT = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export const NO_POINT_MESSAGES = {
  EVERYTHING: 'Click New Event to create your first point',
  PAST: 'There are no past events now',
  PRESENT: 'There are no present events now',
  FUTURE: 'There are no future events now'
};

export const MODE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};
