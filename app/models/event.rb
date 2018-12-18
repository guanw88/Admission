# == Schema Information
#
# Table name: events
#
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
#

class Event < ApplicationRecord
  validates :event_date, :event_name, :num_tickets_available, :start_datetime, :end_datetime,
    :address, :city, :state, :zip, :description, presence: true
  validates :private_event_yn, inclusion: { in: [ true, false ] }

  has_one_attached :photo

  # belongs_to :organizer,
  #   primary_key: :id,
  #   foreign_key: :organizer_id,
  #   className: :User

# add validation that start time cannot be before end time
# validate that state and zip are of valid length
# validate that num_tickets_available is positive

  # does jbuilder see methods that are listed here?
  def substr1(str)
    str[0]
  end

end
