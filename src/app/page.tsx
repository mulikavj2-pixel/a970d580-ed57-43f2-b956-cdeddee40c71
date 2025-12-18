"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function CoffeeShopPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="noise"
      cardStyle="outline"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="CoffeeHub"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Discover Your Perfect Cup"
          description="Premium coffee crafted with passion. Fresh beans, expert brewing, unforgettable taste."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071230856-tdfh94bo.jpg"
          imageAlt="Fresh coffee brewing"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Reserve a Table", href: "contact" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="Crafted with care since 2015. We source the finest arabica beans from around the world and roast them fresh daily. Every cup tells a story of quality, sustainability, and dedication to the perfect brew."
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Our Story", href: "https://example.com" },
            { text: "Learn More", href: "https://example.com" }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Coffee Selection"
          description="Hand-selected blends and single-origin specialties, expertly roasted and brewed fresh daily"
          products={[
            {
              id: "1",
              name: "Signature Cappuccino",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071233477-d02nryce.jpg",
              imageAlt: "Cappuccino"
            },
            {
              id: "2",
              name: "Dark Roast Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071234725-4zrrsm1x.jpg",
              imageAlt: "Espresso"
            },
            {
              id: "3",
              name: "Classic Americano",
              price: "$3.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071236008-pfw253wa.jpg",
              imageAlt: "Americano"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Coffee Lovers Say"
          description="Join thousands of happy customers who start their day with us"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson, Regular Customer",
              date: "Date: 15 November 2024",
              title: "Best coffee in town!",
              quote: "I visit CoffeeHub every morning. The quality of their espresso is unmatched, and the baristas truly care about perfecting every cup.",
              tag: "Coffee Enthusiast",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071237912-l3ena8b7.jpg"
            },
            {
              id: "2",
              name: "Michael Chen, Work Remote",
              date: "Date: 20 October 2024",
              title: "Perfect workspace atmosphere",
              quote: "Great coffee, reliable WiFi, and a welcoming environment. I work here most days and never have a bad experience.",
              tag: "Digital Nomad",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071239274-u8mbv0a4.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez, Student",
              date: "Date: 08 September 2024",
              title: "My study spot of choice",
              quote: "The ambiance is perfect for studying, the coffee keeps me focused, and the staff is always friendly and attentive.",
              tag: "Student",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071240837-1d65xjnq.jpg"
            },
            {
              id: "4",
              name: "David Thompson, Business Owner",
              date: "Date: 25 August 2024",
              title: "Professional and reliable",
              quote: "I host client meetings here regularly. The quality of service and coffee is always consistent. Highly recommended.",
              tag: "Professional",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071241837-andib1qc.jpg"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about our coffee or want to reserve a table? Reach out to us and we'll get back to you soon."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what you'd like to know...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Send Message"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="CoffeeHub"
          copyrightText="© 2025 CoffeeHub. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Seasonal", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Locations", href: "contact" },
                { label: "Careers", href: "https://example.com" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}