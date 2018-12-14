class RemoveOrganizerIdFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :organizer_id
  end
end
