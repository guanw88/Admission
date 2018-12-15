import * as EventApiUtil from "../util/event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

export const removeEvent = (eventId) => {
  return {
    type: REMOVE_EVENT,
    eventId: eventId

  }
}

const dispatchErrors = (dispatch, xhr) => {
  dispatch (receiveErrors(xhr.responseJSON));
};

export const requestEvents = () => dispatch => {
  return EventApiUtil.fetchEvents()
    .then(
      events => dispatch( receiveEvents(events) ),
      xhr => dispatchErrors(dispatch, xhr)
    )
};

export const requestEvent = (id) => dispatch => {
  return EventApiUtil.fetchEvent(id)
    .then(
      event => dispatch( receiveEvent(event) ),
      xhr => dispatchErrors(dispatch, xhr)
    )
};

export const createEvent = (event) => dispatch => {
  return EventApiUtil.createEvent(event)
    .then( event => dispatch( receiveEvent(event) ) )
};

export const updateEvent = (event) => dispatch => {
  return EventApiUtil.updateEvent(event)
    .then( event => dispatch( receiveEvent(event) ) )
};

export const deleteEvent = (id) => dispatch => {
  return EventApiUtil.deleteEvent(id)
    .then( (id) => dispatch( removeEvent(id) ) )
};
