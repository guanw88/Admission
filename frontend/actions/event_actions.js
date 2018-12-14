import * as EventApiUtil from "../util/event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
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
