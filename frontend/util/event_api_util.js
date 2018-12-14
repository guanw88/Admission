export const fetchEvents = () => {
  return $.ajax({
    type: "GET",
    url: "/api/events"
  });
};

export const fetchEvent = (id) => {
  return $.ajax({
    type: "GET",
    url: `/api/events/${id}`
  });
};
