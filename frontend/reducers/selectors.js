export const restrictToPublicEvents = (events) => {
  return Object.values(events).filter(event =>
    event.private_event_yn === false
  );
};
