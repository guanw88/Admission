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

export const createEvent = (formData) => {
  return $.ajax({
    method: "POST",
    url: `api/events`,
    data: formData,
    contentType: false,
    processData: false
  });
}

export const updateEvent = (formData) => {
  return $.ajax({
    method: "PATCH",
    url: `api/events/${formData.get("event[id]")}`,
    data: formData,
    contentType: false,
    processData: false
  });
}

export const deleteEvent = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/events/${id}`
  });
}
