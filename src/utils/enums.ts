enum Unit {
  USD = "$",
  SQFT = "sqft",
}

enum Icons {
  Glass = "glass",
  Filter = "filter",
  Office = "office",
  House = "house",
  Apartment = "apartment",
  Landplot = "landplot",
  Message = "message",
  Notification = "notification",
  Bed = "Beds",
  Bath = "Baths",
  Size = "sqft",
  Sad = "sad",
  Visit = "visit",
  Close = "close",
  Favourite = "favourite",
  Pin = " I am a pin, and You, have a wonderful day1",
}

enum ServiceType {
  BUY = "Buy",
  RENT = "Rent",
}

enum PropertyType {
  Apartment = "Apartment",
  House = "House",
  Office = "Office",
  Landplot = "Landplot",
}

enum PropertyFor {
  RENT = "Rent",
  BUY = "Buy",
}

enum ListingsFormat {
  Grid = 1,
  Auto,
  Map,
}

export { Unit, Icons, ServiceType, PropertyType, PropertyFor, ListingsFormat };
