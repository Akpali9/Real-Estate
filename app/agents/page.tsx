import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    specialization: "Luxury Homes",
    experience: "8 years",
    phone: "(555) 123-4567",
    email: "sarah@realestatepro.com",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    propertiesSold: 156,
    languages: ["English", "Spanish"],
    bio: "Sarah is a dedicated real estate professional with over 8 years of experience in luxury home sales. She has a proven track record of helping clients find their dream homes and achieving top dollar for sellers.",
    achievements: ["Top Agent 2023", "Million Dollar Club", "Customer Choice Award"],
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Commercial Real Estate Specialist",
    specialization: "Commercial Properties",
    experience: "12 years",
    phone: "(555) 234-5678",
    email: "michael@realestatepro.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 89,
    propertiesSold: 203,
    languages: ["English", "Mandarin"],
    bio: "Michael specializes in commercial real estate with extensive experience in office buildings, retail spaces, and investment properties. His analytical approach helps clients make informed decisions.",
    achievements: ["Commercial Expert", "Investment Specialist", "Top Performer 2023"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "First-Time Buyer Specialist",
    specialization: "Residential Homes",
    experience: "5 years",
    phone: "(555) 345-6789",
    email: "emily@realestatepro.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 94,
    propertiesSold: 87,
    languages: ["English", "Spanish", "Portuguese"],
    bio: "Emily is passionate about helping first-time buyers navigate the real estate market. Her patient approach and attention to detail make the buying process smooth and stress-free.",
    achievements: ["Rising Star Award", "First-Time Buyer Expert", "Community Champion"],
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Investment Property Advisor",
    specialization: "Investment Properties",
    experience: "15 years",
    phone: "(555) 456-7890",
    email: "david@realestatepro.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.7,
    reviews: 156,
    propertiesSold: 298,
    languages: ["English", "French"],
    bio: "David brings 15 years of experience in investment property advisory. He helps investors identify profitable opportunities and build successful real estate portfolios.",
    achievements: ["Investment Guru", "Portfolio Builder", "Market Analyst"],
  },
  {
    id: 5,
    name: "Lisa Park",
    title: "Luxury Home Specialist",
    specialization: "Luxury Estates",
    experience: "10 years",
    phone: "(555) 567-8901",
    email: "lisa@realestatepro.com",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 78,
    propertiesSold: 134,
    languages: ["English", "Korean", "Japanese"],
    bio: "Lisa specializes in luxury estates and high-end properties. Her sophisticated approach and extensive network help clients find exclusive properties that match their lifestyle.",
    achievements: ["Luxury Specialist", "Elite Circle", "Prestige Award"],
  },
  {
    id: 6,
    name: "Robert Wilson",
    title: "Relocation Specialist",
    specialization: "Corporate Relocations",
    experience: "9 years",
    phone: "(555) 678-9012",
    email: "robert@realestatepro.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 112,
    propertiesSold: 167,
    languages: ["English", "German"],
    bio: "Robert specializes in corporate relocations and helps families transition smoothly to new cities. His comprehensive relocation services make moving stress-free.",
    achievements: ["Relocation Expert", "Corporate Partner", "Service Excellence"],
  },
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RE</span>
              </div>
              <span className="text-xl font-bold text-gray-900">RealEstate Pro</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/properties" className="text-gray-600 hover:text-blue-600">
                Properties
              </Link>
              <Link href="/agents" className="text-gray-900 hover:text-blue-600 font-medium">
                Agents
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">List Property</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Agents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced real estate professionals is dedicated to helping you find the perfect property or
            sell your home for the best possible price.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600">{agent.specialization}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                    <p className="text-gray-600 mb-2">{agent.title}</p>
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{agent.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({agent.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{agent.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Properties Sold:</span>
                      <span className="font-medium">{agent.propertiesSold}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Languages:</span>
                      <span className="font-medium">{agent.languages.join(", ")}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{agent.bio}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {agent.achievements.slice(0, 2).map((achievement, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Experts?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our team today and let us help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/list-property">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RE</span>
                </div>
                <span className="text-xl font-bold">RealEstate Pro</span>
              </div>
              <p className="text-gray-400 mb-4">Your trusted partner in finding the perfect property.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="hover:text-white">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Buy Property
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sell Property
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Rent Property
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Property Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Real Estate St.</p>
                <p>City, State 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@realestatepro.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RealEstate Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
