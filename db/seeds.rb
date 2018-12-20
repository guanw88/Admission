# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  # Clear out existing db
  User.destroy_all
  Event.destroy_all
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('events')

  # Create Seed Users
  user1 = User.create([
    username: "GuestLogin",
    password: "123456",
    email: "demologinemail@eventfull.com",
    first_name: "Guest",
    last_name: "GuestLN"
  ])

  user2 = User.create([
    username: "george1",
    password: "123456",
    email: "george@eventfull.com",
    first_name: "George",
    last_name: "Wang"
  ])

  # Create Seed Events
  event1 = Event.create(
    event_date: "2019-10-05",
    event_name: "California Capital Air Show",
    num_tickets_available: 9999,
    start_datetime: "2019-10-05 15:00:00 GMT-0700",
    end_datetime: "2019-10-05 17:00:00 GMT-0700",
    address: "10425 Norden Ave",
    city: "Mather",
    state: "CA",
    zip: "95655",
    description: "Established in 2004, the California Capital Airshow 501(c)3 plans and operates the exciting, family-friendly annual event designed to honor the Sacramento region’s rich aviation heritage and veterans while using the power and magic of flight to inspire young people. CCA gives back to the community through scholarships, charitable group donations and exciting educational youth programming throughout the year.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/aircraft-2795557_1280.jpg')
  event1.photo.attach(io: file, filename: 'aircraft-2795557_1280.jpg')
  event1.save!

  event2 = Event.create(
    event_date: "2019-01-16",
    event_name: "East Bay Green Drinks: Free Snacks & Networking | Oakland",
    num_tickets_available: 9999,
    start_datetime: "2019-1-16 17:30:00 GMT-0700",
    end_datetime: "2019-1-16 19:30:00 GMT-0700",
    address: "2040 Telegraph Ave",
    city: "Oakland",
    state: "CA",
    zip: "94612",
    description: "East Bay Green Drinks, started in 2000, and is a monthly community and networking event for people involved in sustainable business, environmental and social causes, local and organic food, green architecture and design, media, communications, education, construction, clean energy and more.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/alcohol-1281704_1280.jpg')
  event2.photo.attach(io: file, filename: 'alcohol-1281704_1280.jpg')
  event2.save!

  event3 = Event.create(
    event_date: "2019-02-16",
    event_name: "“Fringe” Indie Music Video Party | Madrone Art Bar",
    num_tickets_available: 9999,
    start_datetime: "2019-02-16 21:00:00 GMT-0800",
    end_datetime: "2019-02-17 02:00:00 GMT-0800",
    address: "500 Divisadero Street",
    city: "San Francisco",
    state: "CA",
    zip: "94117",
    description: "Fringe, the indie music video dance party, happens every third Saturday at Madrone Art Bar. DJs Blondie K and subOctave will spin your favorite indie music videos plus the latest remixes to create a buzz on the dance floor.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/audience-1835431_1280.jpg')
  event3.photo.attach(io: file, filename: 'audience-1835431_1280.jpg')
  event3.save!

  event4 = Event.create(
    event_date: "2019-06-09",
    event_name: "Sonoma County Hot Air Balloon Classic",
    num_tickets_available: 9999,
    start_datetime: "2019-06-09 04:30:00 GMT-0700",
    end_datetime: "2019-06-10 22:30:00 GMT-0700",
    address: "700 Windsor River Rd",
    city: "Windsor",
    state: "CA",
    zip: "95492",
    description: "Set your alarm early and make the beautiful drive to the north coast for the annual Sonoma County Hot Air Balloon Classic in wine country. You’ll be treated to the dawn balloon launch off a field full of classic and character shaped hot air balloons. Tethered rides* are also available if you would like a taste of what a view from a balloon is like.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/balloons-3879722_1280.jpg')
  event4.photo.attach(io: file, filename: 'balloons-3879722_1280.jpg')
  event4.save!

  event5 = Event.create(
    event_date: "2019-07-05",
    event_name: "SF Giants - Christmas in July",
    num_tickets_available: 9999,
    start_datetime: "2019-07-05 19:15:00 GMT-0700",
    end_datetime: "2019-07-05 23:00:00 GMT-0700",
    address: "24 Willie Mays Plaza",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    description: "What's better than celebrating Christmas in July? Celebrating Christmas in July at AT&T Park with your fellow Giants fans! Your Christmas in July Special Event ticket includes a ticket to the Friday night game, as well as a special Giants Ugly Sweater Beanie! Come experience an Orange Christmas at AT&T Park on Friday, July 5th!",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/baseball-field-1149153_1280.jpg')
  event5.photo.attach(io: file, filename: 'baseball-field-1149153_1280.jpg')
  event5.save!

  event6 = Event.new(
    event_date: "2019-07-22",
    event_name: "Wine School: Wine 101 @ Vino Locale",
    num_tickets_available: 9999,
    start_datetime: "2019-07-22 18:30:00 GMT-0700",
    end_datetime: "2019-07-22 20:00:00 GMT-0700",
    address: "431 Kipling St",
    city: "Palo Alto",
    state: "CA",
    zip: "94301",
    description: "Join us for an evening of wine exploration! Regardless of your palette and tasting experience, this class is perfect for all wine lovers. Local wine expert, Judy Koo, will guide students through two of California’s most iconic wine growing regions: Sonoma and Napa Valley. We will taste wines from four notable wineries, and learn about their history as well as their specific production techniques that result in such unique wines.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/champagner-1071356_1280.jpg')
  event6.photo.attach(io: file, filename: 'champagner-1071356_1280.jpg')
  event6.save!

  event7 = Event.new(
    event_date: "2019-12-22",
    event_name: "Circus Bella Presents: Kaleidoscope",
    num_tickets_available: 9999,
    start_datetime: "2019-12-22 13:30:00 GMT-0700",
    end_datetime: "2019-12-22 15:30:00 GMT-0700",
    address: "699 Avenue of the Palms",
    city: "San Francisco",
    state: "CA",
    zip: "94130",
    description: "Get ready for a full-force, non-stop show of thrilling feats in Circus Bella’s upcoming winter showcase Kaleidoscope, a celebration of diversity and color! Join us for an evening of performances by aerialists, acrobats, a family of foot jugglers, clowns, and more – all performed to original music written by local music legend Rob Reich and performed by a live six-piece band! Located at the restaurant Mersea in the heart of Treasure Island, there’s no better place to celebrate and have fun this holiday season.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/circus-828680_1280.jpg')
  event7.photo.attach(io: file, filename: 'circus-828680_1280.jpg')
  event7.save!

  event7 = Event.new(
    event_date: "2019-07-19",
    event_name: "Art in the Park: Live Music, Arts & Spoken Word | Tenderloin",
    num_tickets_available: 9999,
    start_datetime: "2019-12-22 15:00:00 GMT-0700",
    end_datetime: "2019-12-22 17:00:00 GMT-0700",
    address: "295 Eddy St",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    description: "An urban oasis in the Tenderloin, Boeddeker Park hosts “Art in the Park” every third Saturday for an afternoon of free live music, visual art and spoken word from 3pm to 5pm with free refreshments.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/concert-1838412_1280.jpg')
  event7.photo.attach(io: file, filename: 'concert-1838412_1280.jpg')
  event7.save!

  event8 = Event.new(
    event_date: "2019-08-03",
    event_name: "New Filmmakers Open Screening",
    num_tickets_available: 9999,
    start_datetime: "2019-08-03 20:00:00 GMT-0700",
    end_datetime: "2019-08-03 23:00:00 GMT-0700",
    address: "992 Valencia Ave",
    city: "San Francisco",
    state: "CA",
    zip: "94110",
    description: "The Bay Area’s only Open Screening for up and coming filmmakers takes place each month at Artists’ Television Access in the Mission.",
    private_event_yn: false,
    organizer_id: 1
  )

  file = File.open('app/assets/images/demonstration-767982_1280.jpg')
  event8.photo.attach(io: file, filename: 'demonstration-767982_1280.jpg')
  event8.save!


end
