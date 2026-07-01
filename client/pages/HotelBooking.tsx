import { Link } from "react-router-dom";
import { MapPin, Star, Wifi, UtensilsCrossed, ParkingCircle, Clock, ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function HotelBooking() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);
  const [selectedDates, setSelectedDates] = useState({ checkIn: "", checkOut: "" });
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [guests, setGuests] = useState("2");

  const hotelImage = "https://cdn.builder.io/api/v1/image/assets%2F5da6eca7dd6e4199bc30ad5929ebe0c5%2F1259c0d927864acca439a0006692a8df?format=webp&width=800&height=1200";

  const hotels = [
    {
      id: 1,
      name: "Hotel Darshan",
      location: "Kolhapur",
      rating: 4.8,
      image: hotelImage,
      amenities: ["Restaurant", "Parking", "Free WiFi", "Breakfast"],
      rooms: [
        { id: 1, name: "Standard Room", capacity: "2 Guests", price: "₹2,500", amenities: ["WiFi", "AC", "Parking"] },
        { id: 2, name: "Deluxe Room", capacity: "3 Guests", price: "₹3,500", amenities: ["WiFi", "AC", "Parking", "Balcony"] },
        { id: 3, name: "Suite", capacity: "4 Guests", price: "₹5,000", amenities: ["WiFi", "AC", "Parking", "Balcony", "Mini Bar"] },
      ],
    },
    {
      id: 2,
      name: "Hotel Darshan",
      location: "Kolhapur",
      rating: 4.6,
      image: hotelImage,
      amenities: ["Restaurant", "Parking", "Free WiFi", "Breakfast"],
      rooms: [
        { id: 1, name: "Standard Room", capacity: "2 Guests", price: "₹2,200", amenities: ["WiFi", "AC", "Parking"] },
        { id: 2, name: "Deluxe Room", capacity: "3 Guests", price: "₹3,200", amenities: ["WiFi", "AC", "Parking", "Balcony"] },
        { id: 3, name: "Suite", capacity: "4 Guests", price: "₹4,500", amenities: ["WiFi", "AC", "Parking", "Balcony", "Mini Bar"] },
      ],
    },
    {
      id: 3,
      name: "Hotel Darshan",
      location: "Kolhapur",
      rating: 4.5,
      image: hotelImage,
      amenities: ["Restaurant", "Parking", "Free WiFi", "Breakfast"],
      rooms: [
        { id: 1, name: "Standard Room", capacity: "2 Guests", price: "₹1,800", amenities: ["WiFi", "AC", "Parking"] },
        { id: 2, name: "Deluxe Room", capacity: "3 Guests", price: "₹2,800", amenities: ["WiFi", "AC", "Parking", "Balcony"] },
        { id: 3, name: "Suite", capacity: "4 Guests", price: "₹4,000", amenities: ["WiFi", "AC", "Parking", "Balcony", "Mini Bar"] },
      ],
    },
    {
      id: 4,
      name: "Hotel Darshan",
      location: "Rankala",
      rating: 4.7,
      image: hotelImage,
      amenities: ["Restaurant", "Parking", "Free WiFi", "Breakfast"],
      rooms: [
        { id: 1, name: "Standard Room", capacity: "2 Guests", price: "₹2,300", amenities: ["WiFi", "AC", "Parking"] },
        { id: 2, name: "Deluxe Room", capacity: "3 Guests", price: "₹3,300", amenities: ["WiFi", "AC", "Parking", "Balcony"] },
        { id: 3, name: "Suite", capacity: "4 Guests", price: "₹4,800", amenities: ["WiFi", "AC", "Parking", "Balcony", "Mini Bar"] },
      ],
    },
  ];

  const currentHotel = hotels.find((h) => h.id === selectedHotel);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ChevronLeft className="w-5 h-5 text-primary" />
            <div className="w-10 h-10 bg-primary rounded-[12px] flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <h1 className="font-bold text-xl text-foreground">ABC</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Select Hotel */}
        {!selectedHotel ? (
          <div>
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-2">Select Your Hotel</h1>
              <p className="text-lg text-muted-foreground">Choose from our premium accommodations in Kolhapur</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  onClick={() => setSelectedHotel(hotel.id)}
                  className="group rounded-[16px] overflow-hidden soft-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-border hover:border-primary"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{hotel.name}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" /> {hotel.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-foreground">{hotel.rating}</span>
                    </div>
                    <button className="w-full px-4 py-2 bg-primary text-white font-medium rounded-[12px] hover:bg-primary/90 transition text-sm">
                      Select Hotel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Step 2: Room Booking */
          <div>
            {/* Back Button */}
            <button
              onClick={() => {
                setSelectedHotel(null);
                setSelectedRoom(null);
                setSelectedDates({ checkIn: "", checkOut: "" });
              }}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Select Different Hotel</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2">
                {/* Hotel Header */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-4xl font-bold text-foreground mb-2">{currentHotel?.name}</h1>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span className="text-muted-foreground">{currentHotel?.location}, Maharashtra</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{currentHotel?.rating} Rating</p>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="rounded-[16px] overflow-hidden soft-shadow mb-8">
                  <img
                    src={currentHotel?.image}
                    alt={currentHotel?.name}
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Hotel Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {currentHotel?.amenities.map((amenity, idx) => {
                      let Icon = Wifi;
                      if (amenity === "Restaurant") Icon = UtensilsCrossed;
                      if (amenity === "Parking") Icon = ParkingCircle;
                      return (
                        <div key={idx} className="p-4 bg-card rounded-[12px] flex flex-col items-center gap-2 text-center">
                          <Icon className="w-6 h-6 text-primary" />
                          <p className="text-sm font-medium text-foreground">{amenity}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Available Rooms */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Available Rooms</h2>
                  <div className="space-y-4">
                    {currentHotel?.rooms.map((room) => (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoom(room.id)}
                        className={`p-6 rounded-[16px] border-2 cursor-pointer transition-all ${
                          selectedRoom === room.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-white hover:border-primary/50"
                        } soft-shadow`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{room.name}</h3>
                            <p className="text-sm text-muted-foreground">{room.capacity}</p>
                          </div>
                          <p className="text-2xl font-bold text-accent">{room.price}/night</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, idx) => (
                            <span key={idx} className="px-3 py-1 bg-card rounded-full text-xs font-medium text-muted-foreground">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Booking Summary */}
              <div>
                <div className="sticky top-24 bg-card rounded-[16px] p-6 soft-shadow border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">Booking Details</h3>

                  {/* Check-in Date */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-foreground mb-2">Check-in Date</label>
                    <input
                      type="date"
                      value={selectedDates.checkIn}
                      onChange={(e) => setSelectedDates({ ...selectedDates, checkIn: e.target.value })}
                      className="w-full px-4 py-2 bg-white border border-border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Check-out Date */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-foreground mb-2">Check-out Date</label>
                    <input
                      type="date"
                      value={selectedDates.checkOut}
                      onChange={(e) => setSelectedDates({ ...selectedDates, checkOut: e.target.value })}
                      className="w-full px-4 py-2 bg-white border border-border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Guests */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">Number of Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-2 bg-white border border-border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>

                  {/* Price Breakdown */}
                  {selectedRoom && (
                    <div className="bg-white rounded-[12px] p-4 mb-6 border border-border">
                      <p className="text-sm text-muted-foreground mb-3">Price Summary</p>
                      <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Room Price</span>
                          <span className="font-semibold text-foreground">₹2,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Taxes & Fees</span>
                          <span className="font-semibold text-foreground">₹400</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">Total</span>
                        <span className="text-2xl font-bold text-accent">₹2,900</span>
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <button
                    disabled={!selectedRoom || !selectedDates.checkIn || !selectedDates.checkOut}
                    className={`w-full py-3 px-4 font-semibold rounded-[12px] transition disabled:opacity-50 disabled:cursor-not-allowed ${
                      selectedRoom && selectedDates.checkIn && selectedDates.checkOut
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    Continue to Payment
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    ✓ Free cancellation until 24 hours before check-in
                  </p>

                  {/* Guest Info */}
                  <div className="mt-6 p-4 bg-primary/5 rounded-[12px]">
                    <div className="flex gap-2 mb-2">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-foreground font-medium">Free cancellation</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Cancel for free until 24 hours before your check-in date
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-foreground/95 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Travel Hub</h3>
              <p className="text-white/70 text-sm">Your gateway to exploring the beauty of Kolhapur with comfort and convenience.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-white/70 hover:text-white transition">Home</Link></li>
                <li><a href="#" className="text-white/70 hover:text-white transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>📞 +91 1234567890</li>
                <li>✉️ ABC.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/60">
              © 2026 ABC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
