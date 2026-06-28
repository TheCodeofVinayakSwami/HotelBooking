import { useState } from "react";
import { MapPin, Star, Users, Zap, Shield, Headphones, Car, Calendar, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [bookingTab, setBookingTab] = useState<"cab" | "hotel">("cab");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-[12px] flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Travel Hub</h1>
              <p className="text-xs text-muted-foreground">Explore with Comfort</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition">
              Dashboard
            </Link>
            <button className="px-4 py-2 bg-primary text-white rounded-[12px] hover:bg-primary/90 transition font-medium text-sm">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] bg-gradient-to-br from-primary/10 via-white to-accent/5 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580537659466-c7f1c8f31281?w=1200&h=700&fit=crop"
            alt="Kolhapur Temple"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Explore Kolhapur
            </h1>
            <p className="text-xl sm:text-2xl text-primary font-semibold mb-2">
              Ride • Stay • Discover
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book trusted cabs, premium hotels, and unforgettable tours in Kolhapur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-[16px] hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                Book Cab
              </button>
              <Link to="/hotel-booking" className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-[16px] hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg text-center">
                Book Hotel
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Booking Widget */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20">
          <div className="glass rounded-[20px] p-6 sm:p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2">Hotel Room</label>
                <select className="w-full px-4 py-3 bg-white/80 border border-border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select hotel</option>
                  <option>Darshan Hotel</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full px-4 py-3 bg-white/80 border border-border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2">Travel Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/80 border border-border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2">Passengers</label>
                <select className="w-full px-4 py-3 bg-white/80 border border-border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>1-2</option>
                  <option>3-4</option>
                  <option>5-6</option>
                  <option>7+</option>
                </select>
              </div>
              <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-end">
                <button className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-[12px] hover:bg-accent/90 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for floating widget */}
      <div className="h-40"></div>

      {/* Popular Destinations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Popular Destinations</h2>
            <p className="text-lg text-muted-foreground">Explore the best attractions in Kolhapur</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Mahalaxmi Temple", desc: "Iconic hilltop temple with stunning views" },
              { name: "Panhala Fort", desc: "Historical fort with breathtaking landscape" },
              { name: "Rankala Lake", desc: "Serene lake perfect for evening walks" },
              { name: "New Palace Museum", desc: "Royal heritage and artifacts" },
              { name: "Jyotiba Temple", desc: "Ancient temple with spiritual significance" },
              { name: "Dajipur Wildlife Sanctuary", desc: "Nature and wildlife exploration" },
            ].map((dest, idx) => (
              <div
                key={idx}
                className="group rounded-[16px] overflow-hidden soft-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer p-6 bg-card"
              >
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-foreground">{dest.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{dest.desc}</p>
                <button className="px-4 py-2 bg-primary text-white font-medium rounded-[12px] hover:bg-primary/90 transition text-sm">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Cars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Fleet</h2>
            <p className="text-lg text-muted-foreground">Choose the perfect vehicle for your journey</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Eritga", seats: "4", ac: true, fuel: "Petrol", price: "₹12/km" },
              { name: "Kia Carens", seats: "7", ac: true, fuel: "Diesel", price: "₹15/km" },
              { name: "Mini Bus", seats: "17", ac: true, fuel: "Diesel", price: "₹25/km" },
            ].map((car, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[16px] p-6 soft-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[12px] mb-4 flex items-center justify-center">
                  <Car className="w-20 h-20 text-primary opacity-30" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{car.name}</h3>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> {car.seats} Seats
                  </p>
                  <p className="flex items-center gap-2">
                    <Zap className="w-4 h-4" /> {car.fuel}
                  </p>
                  <p className="font-semibold text-foreground text-base">{car.price}</p>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary/90 transition text-sm">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Premium Hotels</h2>
            <p className="text-lg text-muted-foreground">Stay in luxury and comfort</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                name: "Darshan Hotel",
                image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
                rating: 4.8,
                amenities: ["Restaurant", "Parking", "Free WiFi", "Breakfast"],
                price: "₹4,500/night",
              },
            ].map((hotel, idx) => (
              <div
                key={idx}
                className="group rounded-[16px] overflow-hidden soft-shadow hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="relative h-96 overflow-hidden bg-muted">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{hotel.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-muted"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-foreground">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{hotel.price}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                    {hotel.amenities.map((amenity, i) => (
                      <div key={i} className="text-center p-3 bg-card rounded-[12px]">
                        <p className="text-xs font-medium text-muted-foreground">{amenity}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary/90 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tour Packages</h2>
            <p className="text-lg text-muted-foreground">Curated experiences to explore Kolhapur</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Temple Tour", price: "₹999", duration: "8 Hours" },
              { title: "Heritage Tour", price: "₹1,499", duration: "10 Hours" },
              { title: "Weekend Tour", price: "₹4,999", duration: "2 Days" },
              { title: "Panhala Adventure", price: "₹1,299", duration: "6 Hours" },
              { title: "Nature Tour", price: "₹1,699", duration: "8 Hours" },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[16px] overflow-hidden soft-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-primary opacity-40" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.duration}</p>
                  <p className="text-2xl font-bold text-accent mb-4">{pkg.price}</p>
                  <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary/90 transition text-sm">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Drivers",
                desc: "Verified and experienced drivers for safe journeys",
              },
              {
                icon: Zap,
                title: "Affordable Prices",
                desc: "Best rates without compromising on quality",
              },
              {
                icon: Headphones,
                title: "24x7 Support",
                desc: "Round-the-clock customer support for your peace of mind",
              },
              {
                icon: Star,
                title: "Easy Booking",
                desc: "Simple and secure online booking in just minutes",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center p-8 rounded-[16px] bg-card soft-shadow hover:shadow-xl transition">
                  <div className="w-16 h-16 bg-primary/10 rounded-[12px] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Customer Reviews</h2>
            <p className="text-lg text-muted-foreground">What our customers say</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", city: "Pune", rating: 5, text: "Amazing service! Booked a cab and the driver was professional and courteous." },
              { name: "Rajesh Kumar", city: "Mumbai", rating: 5, text: "Hotel Pearl exceeded my expectations. Great location and excellent amenities." },
              { name: "Anjali Deshmukh", city: "Kolhapur", rating: 4.8, text: "The tour package was well-organized and affordable. Highly recommended!" },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-[16px] p-8 soft-shadow border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(review.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Explore Kolhapur?</h2>
          <p className="text-lg text-white/90 mb-8">Book your cab, hotel, or tour package today and create unforgettable memories.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-[16px] hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Start Booking
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-semibold rounded-[16px] border border-white/40 hover:bg-white/30 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/95 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
            <h3 className="font-bold text-lg mb-4">Travel Hub</h3>
            <p className="text-white/70 text-sm">Your gateway to exploring the beauty of Kolhapur with comfort and convenience.</p>
          </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-white/70 hover:text-white transition">Home</Link></li>
                <li><a href="#" className="text-white/70 hover:text-white transition">About Kolhapur</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>📞 +91 9876 543 210</li>
                <li>✉️ info@kolhapurtravelhub.com</li>
                <li>📍 Kolhapur, Maharashtra</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">f</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">𝕏</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">in</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/60">
              © 2024 Travel Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
