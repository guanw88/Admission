@events.each do |event|
  json.set! event.id do
    json.id event.id
    json.event_date event.event_date
    json.event_name event.event_name
    json.num_tickets_available event.num_tickets_available
    json.start_datetime event.start_datetime
    json.end_datetime event.end_datetime
    json.address event.address
    json.city event.city
    json.state event.state
    json.zip event.zip
    json.description event.description
    if event.photo.attached?
      json.image_url url_for(event.photo)
    else
      json.image_url event.image_url
    end
    json.organizer_id event.organizer_id
    json.private_event_yn event.private_event_yn
  end
end
