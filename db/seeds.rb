# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
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


#   user2 = User.create!(name: 'Flarnie')
#   user3 = User.create!(name: 'Jeff')
#   user4 = User.create!(name: 'Georges St. Pierre')
#   user5 = User.create!(name: 'Ned')
#
    Event.destroy_all
    event1 = Event.create([
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
      organizer_id: 2
    ])

    #  id                    :bigint(8)        not null, primary key
    #  event_date            :date             not null
    #  event_name            :string           not null
    #  num_tickets_available :integer          not null
    #  start_datetime        :datetime         not null
    #  end_datetime          :datetime         not null
    #  address               :string           not null
    #  city                  :string           not null
    #  state                 :string           not null
    #  zip                   :string           not null
    #  description           :text             not null
    #  image_url             :string
    #  private_event_yn      :boolean          not null
    #  created_at            :datetime         not null
    #  updated_at            :datetime         not null
    #  organizer_id          :integer
#
#   Enrollment.destroy_all
#   Enrollment.create!(student_id: user3.id, course_id: course1.id)
#   Enrollment.create!(student_id: user4.id, course_id: course1.id)
#   Enrollment.create!(student_id: user1.id, course_id: course2.id)
#   Enrollment.create!(student_id: user2.id, course_id: course2.id)
end
