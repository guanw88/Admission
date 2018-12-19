export const restrictToPublicEvents = (events) => {
  return Object.values(events).filter(event =>
    event.private_event_yn === false
  );
};

export const restrictToCurrentUser = (events, currentUserId) => {
  return Object.values(events).filter(event =>
    event.organizer_id === currentUserId
  );
};
