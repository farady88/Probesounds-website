import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-900/50 backdrop-blur-sm bg-black/80">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-900/50 transition-all duration-300"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </Button>
          </Link>
          <h1 className="text-2xl font-light tracking-wide">
            Brand Documentation
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-8 text-gray-300 pr-4">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-light tracking-wide text-white mb-6">
                  Welcome to Probe & Co.
                </h2>
                <p className="text-lg leading-relaxed">
                  This comprehensive guide outlines the brand identity, visual
                  language, and future vision of Probe & Co. and its flagship
                  branch, ProbeSounds.
                </p>
              </section>

              <Separator className="bg-gray-800" />

              {/* About Probe & Co */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  About Probe & Co.
                </h3>
                <p className="leading-relaxed">
                  Probe & Co. is a multifaceted creative enterprise dedicated to
                  exploring, serving, and producing exceptional content across
                  various domains. Founded in 2025, we embody a philosophy of
                  curiosity, service excellence, and creative production. Our
                  mission is to seek new frontiers, serve our community with
                  dedication, and produce meaningful content that resonates and
                  inspires.
                </p>
              </section>

              <Separator className="bg-gray-800" />

              {/* Slogan Meaning */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  The Slogan: "Seek. Serve. Produce."
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Seek:
                    </span>
                    <p className="mt-2">
                      We explore new frontiers, investigate possibilities, and
                      probe the depths of creativity and innovation. Our
                      curiosity drives us to discover what lies beyond the
                      obvious.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Serve:
                    </span>
                    <p className="mt-2">
                      We are committed to serving our audience, community, and
                      craft with dedication and excellence. Service is at the
                      heart of everything we do.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Produce:
                    </span>
                    <p className="mt-2">
                      We create tangible, meaningful content that resonates and
                      inspires. Production is our commitment to bringing ideas
                      to life.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-gray-800" />

              {/* Logo Usage */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Logo Usage Guidelines
                </h3>
                <div className="mb-6 space-y-4">
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <h4 className="font-semibold text-white mb-2">
                      Responsive Logo Positioning
                    </h4>
                    <p className="text-sm leading-relaxed mb-3">
                      The Probe logo adapts dynamically to screen size to
                      maintain optimal visual balance and user experience across
                      all devices.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-medium text-white min-w-[80px]">
                          Mobile:
                        </span>
                        <span>
                          Logo is centered with all other page elements,
                          creating visual harmony and balance.
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium text-white min-w-[80px]">
                          Desktop:
                        </span>
                        <span>
                          Logo moves to the top left corner with reduced size,
                          creating a dynamic layout while maintaining consistent
                          spacing from page borders and nearby text.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <h4 className="font-semibold text-white mb-2">
                      Layout Adaptation
                    </h4>
                    <p className="text-sm leading-relaxed">
                      All other elements (slogan, EST 2025, Coming Soon message,
                      and social links) adjust their positioning relative to the
                      logo on larger screens, ensuring consistent spacing and
                      visual hierarchy across all breakpoints.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    The Probe logo should always maintain clear space around it
                  </li>
                  <li>Minimum size: 120px width for digital applications</li>
                  <li>
                    Always use on black or very dark backgrounds for optimal
                    contrast
                  </li>
                  <li>
                    Do not distort, rotate, or modify the logo proportions
                  </li>
                  <li>
                    Maintain the grayscale aesthetic of the original design
                  </li>
                  <li>
                    Ensure proper loading and fallback handling for all logo
                    assets
                  </li>
                  <li>
                    Responsive sizing: larger on mobile (centered), smaller on
                    desktop (top-left)
                  </li>
                </ul>
              </section>

              <Separator className="bg-gray-800" />

              {/* Brand Colors */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Brand Colors
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <div className="w-16 h-16 bg-black border border-gray-700 rounded flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-lg">
                        Pure Black
                      </div>
                      <div className="text-gray-400">#000000</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Primary background color
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <div className="w-16 h-16 bg-white border border-gray-700 rounded flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-lg">
                        Pure White
                      </div>
                      <div className="text-gray-400">#FFFFFF</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Logo and slogan text
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <div className="w-16 h-16 bg-gray-400 border border-gray-700 rounded flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-lg">
                        Medium Gray
                      </div>
                      <div className="text-gray-400">Gray-400</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Supporting text (EST 2025, Coming Soon)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <div className="w-16 h-16 bg-gray-500 border border-gray-700 rounded flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-lg">
                        Grayscale Spectrum
                      </div>
                      <div className="text-gray-400">Various grays</div>
                      <div className="text-sm text-gray-500 mt-1">
                        For depth and visual hierarchy
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-gray-800" />

              {/* Typography */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Typography Guidelines
                </h3>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Primary font: Clean sans-serif (Inter, Helvetica, or
                    similar)
                  </li>
                  <li>Headings: Bold weight with tight tracking for impact</li>
                  <li>
                    Body text: Light to regular weight with generous line
                    spacing
                  </li>
                  <li>
                    Taglines: Wide letter-spacing for elegance and emphasis in
                    white
                  </li>
                  <li>
                    Supporting text: Gray tones for visual hierarchy and balance
                  </li>
                  <li>
                    Maintain clear hierarchy through size, weight, and color
                    variations
                  </li>
                  <li>
                    Consistent font family across all text elements for cohesion
                  </li>
                </ul>
              </section>

              <Separator className="bg-gray-800" />

              {/* Layout & Composition */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Layout & Composition
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Responsive Balance
                    </span>
                    <p className="mt-2">
                      The layout adapts to screen size: mobile maintains
                      centered harmony for all elements, while desktop creates
                      dynamic visual interest with the logo in the top left
                      corner.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Adaptive Positioning
                    </span>
                    <p className="mt-2">
                      Logo positioning and sizing respond to viewport width,
                      ensuring optimal presentation on phones (larger, centered)
                      and desktops (smaller, top-left).
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Consistent Spacing
                    </span>
                    <p className="mt-2">
                      All elements maintain balanced spacing relative to the
                      logo and page borders, with adjustments that preserve
                      visual hierarchy across breakpoints.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-gray-800" />

              {/* Visual Elements */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Visual Elements & Animations
                </h3>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Ambient background effects with subtle radial gradients
                  </li>
                  <li>
                    Smooth fade-in animations with staggered delays for content
                    hierarchy
                  </li>
                  <li>
                    Hover effects on interactive elements with scale and color
                    transitions
                  </li>
                  <li>Elegant motion that enhances without distracting</li>
                  <li>
                    Consistent transition durations (300-500ms) for cohesive
                    feel
                  </li>
                  <li>Backdrop blur effects for depth and layering</li>
                  <li>Responsive animations that adapt to screen size</li>
                </ul>
              </section>

              <Separator className="bg-gray-800" />

              {/* Future Sub-Brands */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Future Sub-Brands
                </h3>
                <p className="mb-6 leading-relaxed">
                  Probe & Co. is expanding into multiple creative domains, each
                  with its own dedicated branch:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="font-semibold text-white text-xl mb-2">
                      ProbeArt
                    </div>
                    <div className="text-gray-400">
                      Visual arts and creative expression. Exploring the
                      boundaries of artistic innovation and creative
                      storytelling.
                    </div>
                  </div>
                  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="font-semibold text-white text-xl mb-2">
                      ProbeFashion
                    </div>
                    <div className="text-gray-400">
                      Style, design, and fashion innovation. Curating trends and
                      celebrating individual expression through fashion.
                    </div>
                  </div>
                  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="font-semibold text-white text-xl mb-2">
                      ProbeSports
                    </div>
                    <div className="text-gray-400">
                      Athletic content and sports culture. Celebrating the
                      spirit of competition and athletic excellence.
                    </div>
                  </div>
                  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <div className="font-semibold text-white text-xl mb-2">
                      ProbeCars
                    </div>
                    <div className="text-gray-400">
                      Automotive excellence and culture. Exploring the
                      intersection of engineering, design, and automotive
                      passion.
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="bg-gray-800" />

              {/* Design Principles */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Design Principles
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Minimalism
                    </span>
                    <p className="mt-2">
                      Less is more; every element serves a purpose. We eliminate
                      the unnecessary to highlight what truly matters.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Balance
                    </span>
                    <p className="mt-2">
                      Visual harmony through careful composition. We create
                      equilibrium between elements to guide the eye naturally.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Elegance
                    </span>
                    <p className="mt-2">
                      Refined aesthetics with subtle sophistication. We pursue
                      beauty in simplicity and attention to detail.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Motion
                    </span>
                    <p className="mt-2">
                      Purposeful animations that enhance without distracting.
                      Movement adds life while maintaining focus.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                    <span className="font-semibold text-white text-lg">
                      Clarity
                    </span>
                    <p className="mt-2">
                      Clear communication through thoughtful hierarchy. We
                      prioritize readability and intuitive navigation.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-gray-800" />

              {/* Technical Implementation */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Technical Implementation
                </h3>
                <p className="mb-4 leading-relaxed">
                  The ProbeSounds website is built with modern web technologies
                  to ensure optimal performance and user experience:
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    React with TypeScript for type-safe component development
                  </li>
                  <li>
                    Tailwind CSS for utility-first styling and responsive design
                  </li>
                  <li>
                    Radix UI primitives for accessible interactive components
                  </li>
                  <li>Custom OKLCH color system for precise color control</li>
                  <li>
                    Optimized animations using CSS transitions and keyframes
                  </li>
                  <li>
                    Mobile-first responsive design approach with adaptive
                    breakpoints
                  </li>
                  <li>Proper asset loading with fallback handling</li>
                  <li>
                    Responsive positioning system using Tailwind's breakpoint
                    utilities
                  </li>
                  <li>Dynamic layout adaptation based on viewport width</li>
                </ul>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2025 Probe & Co. All rights reserved.</p>
          <Link
            to="/"
            className="text-gray-500 hover:text-white transition-colors duration-300 tracking-wide"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
