json.extract! product, :id, :name, :desc, :price, :light, :watering, :temp, :pet_friendly, :img, :created_at, :updated_at
json.url product_url(product, format: :json)
