class Movie < ApplicationRecord
  has_many :actors, dependent: :destroy
  accepts_nested_attributes_for :actors, allow_destroy: true
end
