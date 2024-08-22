import React from 'react'

export default function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-12 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:gap-8 gap-4 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-2">
          <div className="rounded-lg">
            <div className="container grid max-w-6xl items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
                <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Hotels</h2>
                <p className="text-muted-foreground md:text-xl">
                    Discover the rich history and values behind our exceptional hotel experiences.
                </p>
                </div>
                <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Our History</h3>
                    <p className="text-muted-foreground">
                    Founded in 1985, our hotel group has a legacy of providing unparalleled hospitality and luxury
                    experiences to our guests. From our humble beginnings as a single property, we've grown to become a
                    renowned leader in the industry, with a portfolio of award-winning hotels and resorts across the globe.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="text-muted-foreground">
                    At the heart of our company is a commitment to delivering exceptional experiences that exceed our
                    guests' expectations. We strive to create a welcoming and comfortable environment where our guests can
                    relax, rejuvenate, and create lasting memories.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Our Values</h3>
                    <p className="text-muted-foreground">
                    Sustainability, innovation, and community are the core values that guide our operations. We are
                    dedicated to reducing our environmental impact, investing in cutting-edge technologies, and fostering
                    strong relationships with the local communities where our hotels are located.
                    </p>
                </div>
                </div>
            </div>
            <div className="relative">
                <img
                src="https://www.blueprintrf.com/wp-content/uploads/2021/09/What-Does-a-Hotel-Management-Company-Do-.jpg"
                width={800}
                height={600}
                alt="Hotel"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            </div>
            <div className="container mt-12 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                <img
                    src="https://www.shutterstock.com/image-photo/adult-female-avatar-image-on-260nw-2419909023.jpg"
                    width={48}
                    height={48}
                    alt="Avatar"
                    className="h-12 w-12 rounded-full"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                />
                <div>
                    <h4 className="text-lg font-semibold">Jane Doe</h4>
                    <p className="text-sm text-muted-foreground">Satisfied Customer</p>
                </div>
                </div>
                <p className="text-muted-foreground">
                "The service and attention to detail at this hotel was truly exceptional. I felt like royalty during my stay
                and can't wait to return."
                </p>
            </div>
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                <img
                    src="https://www.shutterstock.com/image-photo/adult-female-avatar-image-on-260nw-2419909023.jpg"
                    width={48}
                    height={48}
                    alt="Avatar"
                    className="h-12 w-12 rounded-full"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                />
                <div>
                    <h4 className="text-lg font-semibold">John Smith</h4>
                    <p className="text-sm text-muted-foreground">Satisfied Customer</p>
                </div>
                </div>
                <p className="text-muted-foreground">
                "I've stayed at many hotels, but this one truly stands out. The attention to detail and commitment to
                sustainability is truly impressive."
                </p>
            </div>
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                <img
                    src="https://www.shutterstock.com/image-photo/adult-female-avatar-image-on-260nw-2419909023.jpg"
                    width={48}
                    height={48}
                    alt="Avatar"
                    className="h-12 w-12 rounded-full"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                />
                <div>
                    <h4 className="text-lg font-semibold">Sarah Lee</h4>
                    <p className="text-sm text-muted-foreground">Satisfied Customer</p>
                </div>
                </div>
                <p className="text-muted-foreground">
                "This hotel has exceeded all of my expectations. The staff was incredibly attentive, and the facilities were
                truly world-class. I can't wait to visit again."
                </p>
            </div>
            </div>
            </div>
            </div>
        
    </section>
  )
}
