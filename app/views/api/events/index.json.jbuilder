@events.each do |event|
  json.set! event.id do
    json.id event.id
    json.date event.event_date
    json.name event.event_name
    json.num_tickets_available event.num_tickets_available
    json.start_datetime event.start_datetime
    json.end_datetime event.end_datetime
    json.address event.address
    json.city event.city
    json.state event.state
    json.zip event.zip
    json.description event.description
    json.image_url event.image_url
    json.private_event_yn event.private_event_yn
  end
end
