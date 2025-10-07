import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, TrendingUp, Shield, Heart, Target, Eye, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with the highest ethical standards and transparency in all our dealings.",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Our clients' needs and satisfaction are at the center of everything we do.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every transaction and continuously improve our services.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We believe in the power of collaboration and work together to achieve the best results.",
  },
]

const milestones = [
  {
    year: "2009",
    title: "Company Founded",
    description: "RealEstate Pro was established with a vision to revolutionize the real estate industry.",
  },
  {
    year: "2012",
    title: "First 100 Properties",
    description: "Successfully sold our first 100 properties, establishing our reputation in the market.",
  },
  {
    year: "2015",
    title: "Digital Innovation",
    description: "Launched our digital platform, making property search and management more accessible.",
  },
  {
    year: "2018",
    title: "Market Expansion",
    description: "Expanded operations to serve multiple cities and regions across the country.",
  },
  {
    year: "2021",
    title: "Award Recognition",
    description: "Received multiple industry awards for excellence in customer service and innovation.",
  },
  {
    year: "2024",
    title: "1000+ Properties",
    description: "Reached the milestone of over 1000 successful property transactions.",
  },
]

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "John founded RealEstate Pro with 20+ years of experience in real estate and business development.",
  },
  {
    name: "Maria Garcia",
    role: "COO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Maria oversees operations and ensures our high standards of service delivery across all departments.",
  },
  {
    name: "David Chen",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "David leads our sales team and has been instrumental in our growth and market expansion.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Sarah drives our marketing initiatives and brand development, ensuring we reach the right audience.",
  },
]

export default function AboutPage() {
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
              <Link href="/agents" className="text-gray-600 hover:text-blue-600">
                Agents
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 font-medium">
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About RealEstate Pro</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            For over 15 years, we've been helping families find their perfect homes and investors build successful
            portfolios. Our commitment to excellence and client satisfaction has made us a trusted name in real estate.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                To provide exceptional real estate services that exceed our clients' expectations while building lasting
                relationships based on trust, integrity, and results.
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Our Vision</span>
              </div>
              <p className="text-gray-600">
                To be the most trusted and innovative real estate company, transforming the way people buy, sell, and
                invest in properties through technology and personalized service.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="Modern office building"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships with clients, partners, and the
              communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-blue-100">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership, here are the key milestones that have shaped our company's
              growth and success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-blue-600">{milestone.year}</span>
                      <Badge variant="outline">{milestone.title}</Badge>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and clients alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Real Estate Company 2023</h3>
              <p className="text-gray-600">Awarded by the National Real Estate Association</p>
            </Card>

            <Card className="text-center p-6">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Choice Award</h3>
              <p className="text-gray-600">Recognized for outstanding customer satisfaction</p>
            </Card>

            <Card className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top Growth Company</h3>
              <p className="text-gray-600">Fastest growing real estate firm in the region</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the difference that expertise, integrity, and personalized service can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Started Today
              </Button>
            </Link>
            <Link href="/agents">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Meet Our Team
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
