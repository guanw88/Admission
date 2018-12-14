export const fetchEvents = () => {
  return $.ajax({
    type: "GET",
    url: "/api/events"
  });
};
