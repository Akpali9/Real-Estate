"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Eye, Upload, Home, Users, DollarSign, TrendingUp } from "lucide-react"
import Image from "next/image"
import { upload } from "@vercel/blob/client"

interface Property {
  id: number
  title: string
  price: string
  location: string
  beds: number
  baths: number
  sqft: string
  type: "For Sale" | "For Rent"
  status: "Active" | "Pending" | "Sold"
  image: string
  description: string
  dateAdded: string
}

const initialProperties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$850,000",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "For Sale",
    status: "Active",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    description: "Beautiful modern villa with stunning views and luxury amenities",
    dateAdded: "2024-01-15",
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: "$4,500/month",
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    type: "For Rent",
    status: "Active",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    description: "Luxury penthouse in the heart of Manhattan with city views",
    dateAdded: "2024-01-10",
  },
]

export default function AdminDashboard() {
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    beds: "",
    baths: "",
    sqft: "",
    type: "For Sale" as "For Sale" | "For Rent",
    status: "Active" as "Active" | "Pending" | "Sold",
    description: "",
    image: "/placeholder.svg?height=200&width=300",
  })

  const [isUploading, setIsUploading] = useState(false)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("")

  const handleImageUpload = async (file: File) => {
    if (!file) return

    setIsUploading(true)
    try {
      const blob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload",
      })

      setUploadedImageUrl(blob.url)
      setFormData((prev) => ({ ...prev, image: blob.url }))
    } catch (error) {
      console.error("Upload failed:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData({
      title: "",
      price: "",
      location: "",
      beds: "",
      baths: "",
      sqft: "",
      type: "For Sale",
      status: "Active",
      description: "",
      image: "",
    })
    setUploadedImageUrl("")
  }

  const handleSubmit = () => {
    if (editingProperty) {
      // Update existing property
      setProperties((prev) =>
        prev.map((prop) =>
          prop.id === editingProperty.id
            ? {
                ...prop,
                ...formData,
                beds: Number(formData.beds),
                baths: Number(formData.baths),
              }
            : prop,
        ),
      )
      setEditingProperty(null)
    } else {
      // Add new property
      const newProperty: Property = {
        id: Date.now(),
        ...formData,
        beds: Number(formData.beds),
        baths: Number(formData.baths),
        dateAdded: new Date().toISOString().split("T")[0],
      }
      setProperties((prev) => [...prev, newProperty])
    }

    // Reset form
    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleEdit = (property: Property) => {
    setEditingProperty(property)
    setFormData({
      title: property.title,
      price: property.price,
      location: property.location,
      beds: property.beds.toString(),
      baths: property.baths.toString(),
      sqft: property.sqft,
      type: property.type,
      status: property.status,
      description: property.description,
      image: property.image,
    })
    setIsAddDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setProperties((prev) => prev.filter((prop) => prop.id !== id))
  }

  const stats = {
    totalProperties: properties.length,
    activeListings: properties.filter((p) => p.status === "Active").length,
    totalValue: properties.reduce((sum, prop) => {
      const price = Number.parseFloat(prop.price.replace(/[$,]/g, "").split("/")[0])
      return sum + (isNaN(price) ? 0 : price)
    }, 0),
    pendingSales: properties.filter((p) => p.status === "Pending").length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RE</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Admin Dashboard</span>
            </div>
            <Button onClick={() => (window.location.href = "/")} variant="outline">
              Back to Website
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalProperties}</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeListings}</div>
                  <p className="text-xs text-muted-foreground">+1 from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${stats.totalValue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Portfolio value</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Sales</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.pendingSales}</div>
                  <p className="text-xs text-muted-foreground">Awaiting completion</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Properties */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {properties.slice(0, 3).map((property) => (
                    <div key={property.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={80}
                        height={60}
                        className="rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-sm text-gray-600">{property.location}</p>
                        <Badge variant={property.status === "Active" ? "default" : "secondary"}>
                          {property.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-blue-600">{property.price}</p>
                        <p className="text-sm text-gray-500">{property.dateAdded}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="properties" className="space-y-6">
            {/* Properties Management */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Property Management</h2>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => {
                      setEditingProperty(null)
                      setFormData({
                        title: "",
                        price: "",
                        location: "",
                        beds: "",
                        baths: "",
                        sqft: "",
                        type: "For Sale",
                        status: "Active",
                        description: "",
                        image: "/placeholder.svg?height=200&width=300",
                      })
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Property
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingProperty ? "Edit Property" : "Add New Property"}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        placeholder="Property title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        placeholder="$500,000 or $2,500/month"
                      />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="beds">Bedrooms</Label>
                      <Input
                        id="beds"
                        type="number"
                        value={formData.beds}
                        onChange={(e) => handleInputChange("beds", e.target.value)}
                        placeholder="3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="baths">Bathrooms</Label>
                      <Input
                        id="baths"
                        type="number"
                        value={formData.baths}
                        onChange={(e) => handleInputChange("baths", e.target.value)}
                        placeholder="2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sqft">Square Feet</Label>
                      <Input
                        id="sqft"
                        value={formData.sqft}
                        onChange={(e) => handleInputChange("sqft", e.target.value)}
                        placeholder="2,500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="For Sale">For Sale</SelectItem>
                          <SelectItem value="For Rent">For Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Sold">Sold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Property description..."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="image">Property Image</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) handleImageUpload(file)
                            }}
                            disabled={isUploading}
                          />
                          <Button variant="outline" size="sm" disabled={isUploading}>
                            <Upload className="h-4 w-4 mr-2" />
                            {isUploading ? "Uploading..." : "Upload"}
                          </Button>
                        </div>
                        {formData.image && formData.image !== "/placeholder.svg?height=200&width=300" && (
                          <div className="mt-2">
                            <img
                              src={formData.image || "/placeholder.svg"}
                              alt="Property preview"
                              className="w-32 h-24 object-cover rounded border"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSubmit}>{editingProperty ? "Update Property" : "Add Property"}</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Properties Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {properties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Image
                              src={property.image || "/placeholder.svg"}
                              alt={property.title}
                              width={50}
                              height={40}
                              className="rounded object-cover"
                            />
                            <div>
                              <p className="font-medium">{property.title}</p>
                              <p className="text-sm text-gray-500">
                                {property.beds} bed • {property.baths} bath • {property.sqft} sqft
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{property.location}</TableCell>
                        <TableCell className="font-semibold text-blue-600">{property.price}</TableCell>
                        <TableCell>
                          <Badge variant={property.type === "For Sale" ? "default" : "secondary"}>
                            {property.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              property.status === "Active"
                                ? "default"
                                : property.status === "Pending"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {property.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{property.dateAdded}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleEdit(property)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(property.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Property Types Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>For Sale</span>
                      <span className="font-semibold">{properties.filter((p) => p.type === "For Sale").length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>For Rent</span>
                      <span className="font-semibold">{properties.filter((p) => p.type === "For Rent").length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Active</span>
                      <Badge>{properties.filter((p) => p.status === "Active").length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pending</span>
                      <Badge variant="secondary">{properties.filter((p) => p.status === "Pending").length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sold</span>
                      <Badge variant="outline">{properties.filter((p) => p.status === "Sold").length}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
