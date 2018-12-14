import * as EventApiUtil from "../util/event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

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
