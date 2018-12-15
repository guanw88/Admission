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

export const createEvent = (event) => {
  return $.ajax({
    method: "POST",
    url: `api/events`,
    data: {"event": event }
  });
}

export const updateEvent = (event) => {
  return $.ajax({
    method: "PATCH",
    url: `api/events/${event.id}`,
    data: {"event": event }
  });
}

export const deleteEvent = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/events/${id}`
  });
}
