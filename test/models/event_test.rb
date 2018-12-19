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
#  organizer_id          :integer
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
