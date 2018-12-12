class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :event_date, null: false
      t.string :event_name, null: false
      t.integer :organizer_id, null: false
      t.integer :num_tickets_available, null: false
      t.datetime :start_datetime, null: false
      t.datetime :end_datetime, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.text :description, null: false
      t.string :image_url
      t.boolean :private_event_yn, null: false
      t.timestamps
    end

    add_index :events, :event_date
  end
end
