import React from "react";
import {
  PaperAirplaneIcon,
  MapPinIcon,
  SunIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  HomeIcon,
  BoltIcon,
  GiftIcon,
  TicketIcon,
  EyeIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  FilmIcon,
  MegaphoneIcon,
  RocketLaunchIcon,
  StarIcon,
  HeartIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  FireIcon,
  PlayIcon,
  ShoppingCartIcon,
  CalendarIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export const heroData = {
  headline: "MALL OF AMERICA",
  subheadline: "THE ULTIMATE DESTINATION FOR RETAIL, ENTERTAINMENT & EXPERIENCES",
  description:
    "The nation's largest retail and entertainment destination, attracting over 40 million visitors annually across 5.6 million square feet of immersive experiences.",
  stats: [
    { value: 40, suffix: "M+", label: "Annual Visitors" },
    { value: 520, suffix: "+", label: "Retail Stores" },
    { value: 5.6, suffix: "M", label: "Square Feet" },
    { value: 1, suffix: "st", label: "Largest in USA" },
  ],
  videoUrl: "https://assets.mixkit.co/videos/1171/1171-720.mp4",
};

export const whyMoaData = {
  headline: "WHY MALL OF AMERICA",
  subheadline: "An Unmatched Destination",
  description:
    "Mall of America is more than a shopping center — it's a cultural landmark, an economic engine, and the most visited destination in the United States.",
  stats: [
    { value: 40, suffix: "M+", label: "Annual Visitors", description: "More than Times Square, Disneyland, and Graceland combined" },
    { value: 8, suffix: "", label: "States in Trade Area", description: "Drawing visitors from a massive Upper Midwest region" },
    { value: 33, suffix: "%", label: "Tourists", description: "One in three visitors is a tourist from 60+ miles away" },
    { value: 2, suffix: "B+", label: "Annual Economic Impact", prefix: "$", description: "Driving billions into the Minnesota economy" },
  ],
  highlights: [
    { title: "MSP Airport Access", description: "Direct light rail connection from MSP International Airport — 12 minutes to destination.", icon: React.createElement(PaperAirplaneIcon, { className: "w-8 h-8" }) },
    { title: "Regional Dominance", description: "The #1 retail destination in the Upper Midwest with unmatched brand density.", icon: React.createElement(MapPinIcon, { className: "w-8 h-8" }) },
    { title: "Year-Round Traffic", description: "Climate-controlled environment ensures consistent foot traffic 365 days a year.", icon: React.createElement(SunIcon, { className: "w-8 h-8" }) },
    { title: "Global Recognition", description: "Internationally recognized brand attracting visitors from 50+ countries annually.", icon: React.createElement(GlobeAltIcon, { className: "w-8 h-8" }) },
  ],
};

export const retailData = {
  headline: "RETAIL EXPERIENCE",
  subheadline: "520+ World-Class Stores",
  description:
    "From flagship destinations to exclusive boutiques, Mall of America offers an unmatched retail ecosystem spanning every category.",
  categories: [
    { name: "Fashion & Apparel", count: 180, icon: React.createElement(ShoppingBagIcon, { className: "w-8 h-8" }), brands: ["Nordstrom", "Zara", "H&M", "Uniqlo", "Macy's"] },
    { name: "Electronics & Tech", count: 45, icon: React.createElement(ComputerDesktopIcon, { className: "w-8 h-8" }), brands: ["Apple", "Microsoft", "Samsung", "Best Buy"] },
    { name: "Health & Beauty", count: 65, icon: React.createElement(SparklesIcon, { className: "w-8 h-8" }), brands: ["Sephora", "MAC", "Lush", "Bath & Body Works"] },
    { name: "Home & Lifestyle", count: 50, icon: React.createElement(HomeIcon, { className: "w-8 h-8" }), brands: ["Crate & Barrel", "West Elm", "Pottery Barn"] },
    { name: "Sports & Outdoors", count: 40, icon: React.createElement(BoltIcon, { className: "w-8 h-8" }), brands: ["Nike", "Adidas", "Lululemon", "The North Face"] },
    { name: "Specialty & Gifts", count: 140, icon: React.createElement(GiftIcon, { className: "w-8 h-8" }), brands: ["Disney Store", "Build-A-Bear", "LEGO"] },
  ],
  stats: [
    { value: 520, suffix: "+", label: "Retail Stores" },
    { value: 12, suffix: "K", label: "Employees" },
    { value: 4, suffix: "", label: "Anchor Stores" },
    { value: 2.5, suffix: "M", label: "Sq Ft Retail" },
  ],
};

export const luxuryData = {
  headline: "LUXURY COLLECTION",
  subheadline: "Elevated Shopping Experience",
  description:
    "An exclusive enclave of premium brands and luxury retailers, curated for the discerning shopper seeking the finest in fashion, jewelry, and lifestyle.",
  brands: [
    { name: "Burberry", category: "Fashion" },
    { name: "Coach", category: "Fashion" },
    { name: "Michael Kors", category: "Fashion" },
    { name: "Tiffany & Co", category: "Jewelry" },
    { name: "David Yurman", category: "Jewelry" },
    { name: "Omega", category: "Watches" },
    { name: "TAG Heuer", category: "Watches" },
    { name: "Montblanc", category: "Accessories" },
    { name: "Hugo Boss", category: "Fashion" },
    { name: "Ted Baker", category: "Fashion" },
    { name: "kate spade", category: "Fashion" },
    { name: "Stuart Weitzman", category: "Fashion" },
  ],
  features: [
    { title: "VIP Shopping Services", description: "Personal shopping, private viewings, and concierge-level retail experiences." },
    { title: "Exclusive Events", description: "Private trunk shows, seasonal collections, and brand launch events." },
    { title: "Premium Environment", description: "Dedicated luxury wing with elevated architecture and premium finishes." },
  ],
};

export const diningData = {
  headline: "DINING & LIFESTYLE",
  subheadline: "A Culinary Destination",
  description:
    "From Michelin-inspired dining to fast-casual favorites, Mall of America's 50+ restaurants create a world-class culinary experience.",
  restaurants: [
    { name: "FireLake Grill House", type: "Fine Dining", description: "Upscale American cuisine featuring locally sourced ingredients." },
    { name: "Cantina Laredo", type: "Mexican", description: "Modern Mexican cuisine with tableside guacamole." },
    { name: "Twin City Grill", type: "American", description: "Classic American dishes in a timeless setting." },
    { name: "Crave", type: "Sushi & American", description: "A fusion of sushi, American, and cocktail culture." },
    { name: "The Cheesecake Factory", type: "American", description: "Iconic dining with over 250 menu items." },
    { name: "Shake Shack", type: "Fast Casual", description: "Premium burgers, shakes, and a cult following." },
  ],
  stats: [
    { value: 50, suffix: "+", label: "Restaurants" },
    { value: 20, suffix: "K", label: "Daily Diners" },
    { value: 15, suffix: "+", label: "Cuisines" },
    { value: 4, suffix: "", label: "Food Districts" },
  ],
};

export const entertainmentData = {
  headline: "ATTRACTIONS & ENTERTAINMENT",
  subheadline: "Beyond Shopping",
  description:
    "Home to Nickelodeon Universe, SEA LIFE Aquarium, FlyOver America, and dozens of unique attractions — Mall of America is the nation's premier entertainment destination.",
  attractions: [
    {
      name: "Nickelodeon Universe",
      description: "America's largest indoor theme park with 27 rides and attractions.",
      metric: "27 Rides",
      icon: React.createElement(TicketIcon, { className: "w-8 h-8" }),
    },
    {
      name: "SEA LIFE Aquarium",
      description: "1.2 million gallons of underwater exhibits featuring sharks, rays, and sea turtles.",
      metric: "1.2M Gallons",
      icon: React.createElement(GlobeAltIcon, { className: "w-8 h-8" }),
    },
    {
      name: "FlyOver America",
      description: "An immersive flight ride experience soaring over America's iconic landscapes.",
      metric: "4D Experience",
      icon: React.createElement(EyeIcon, { className: "w-8 h-8" }),
    },
    {
      name: "Crayola Experience",
      description: "25 hands-on attractions where color, chemistry, and creativity collide.",
      metric: "25 Activities",
      icon: React.createElement(PaintBrushIcon, { className: "w-8 h-8" }),
    },
    {
      name: "Hard Rock Cafe",
      description: "Live music, legendary memorabilia, and world-famous burgers.",
      metric: "Live Music",
      icon: React.createElement(MusicalNoteIcon, { className: "w-8 h-8" }),
    },
    {
      name: "CMX Cinemas",
      description: "Luxury dine-in movie theater with reclining seats and full bar service.",
      metric: "13 Screens",
      icon: React.createElement(FilmIcon, { className: "w-8 h-8" }),
    },
  ],
  stats: [
    { value: 520, suffix: "+", label: "Events Per Year" },
    { value: 7, suffix: "", label: "Major Attractions" },
    { value: 30, suffix: "K", label: "Daily Entertainment Visitors" },
  ],
};

export const eventsData = {
  headline: "EVENTS PLATFORM",
  subheadline: "Where Brands Come Alive",
  description:
    "Mall of America hosts over 400 events annually, from major concert series to brand activations, product launches, and cultural celebrations.",
  eventTypes: [
    { name: "Brand Activations", description: "Immersive branded experiences reaching millions of engaged consumers.", icon: React.createElement(MegaphoneIcon, { className: "w-8 h-8" }) },
    { name: "Concert Series", description: "Live performances on the main rotunda stage featuring top artists.", icon: React.createElement(MusicalNoteIcon, { className: "w-8 h-8" }) },
    { name: "Product Launches", description: "Exclusive debut events for major brands and product lines.", icon: React.createElement(RocketLaunchIcon, { className: "w-8 h-8" }) },
    { name: "Cultural Celebrations", description: "Holiday events, seasonal festivals, and community celebrations.", icon: React.createElement(StarIcon, { className: "w-8 h-8" }) },
    { name: "Fashion Shows", description: "Runway events showcasing seasonal collections and emerging designers.", icon: React.createElement(HeartIcon, { className: "w-8 h-8" }) },
    { name: "Corporate Events", description: "Conferences, galas, and corporate gatherings in premium venues.", icon: React.createElement(BuildingOfficeIcon, { className: "w-8 h-8" }) },
  ],
  stats: [
    { value: 400, suffix: "+", label: "Annual Events" },
    { value: 3, suffix: "B+", label: "Media Impressions" },
    { value: 100, suffix: "K+", label: "Event Attendees Monthly" },
    { value: 12, suffix: "", label: "Event Venues" },
  ],
};

export const venuesData = {
  headline: "VENUE COLLECTION",
  subheadline: "World-Class Event Spaces",
  description:
    "From intimate boardrooms to grand ballrooms, Mall of America offers versatile venues for events of every scale and style.",
  venues: [
    { name: "Grand Ballroom", capacity: "2,500", sqft: "25,000", type: "Ballroom", features: ["Full AV", "Catering", "Stage"] },
    { name: "North Atrium", capacity: "5,000", sqft: "40,000", type: "Open Air", features: ["Natural Light", "Rotunda Access", "Branding"] },
    { name: "Conference Center", capacity: "500", sqft: "8,000", type: "Corporate", features: ["Breakout Rooms", "Tech Suite", "WiFi"] },
    { name: "Rotunda Stage", capacity: "10,000", sqft: "15,000", type: "Performance", features: ["Concert Sound", "LED Screens", "VIP Area"] },
    { name: "VIP Lounge", capacity: "150", sqft: "3,000", type: "Exclusive", features: ["Premium Bar", "Private Entry", "Concierge"] },
    { name: "Outdoor Plaza", capacity: "3,000", sqft: "20,000", type: "Outdoor", features: ["Seasonal", "Food Trucks", "Live Stage"] },
  ],
};

export const demographicsData = {
  headline: "DEMOGRAPHICS",
  subheadline: "Know Your Audience",
  description:
    "Mall of America delivers a diverse, affluent, and engaged audience — the ideal consumers for premium brands and innovative activations.",
  audience: [
    { label: "Ages 25-44", percentage: 42, color: "#D4AF37" },
    { label: "Ages 18-24", percentage: 22, color: "#E8D48B" },
    { label: "Ages 45-64", percentage: 24, color: "#B8960C" },
    { label: "Ages 65+", percentage: 12, color: "#8A8A8D" },
  ],
  income: [
    { label: "$100K+", percentage: 35 },
    { label: "$75K-$100K", percentage: 25 },
    { label: "$50K-$75K", percentage: 22 },
    { label: "Under $50K", percentage: 18 },
  ],
  insights: [
    { metric: "3.2 hrs", label: "Average Visit Duration" },
    { metric: "$162", label: "Average Spend Per Visit" },
    { metric: "72%", label: "Female Visitors" },
    { metric: "4.2x", label: "Annual Visit Frequency" },
    { metric: "88%", label: "Brand Recall Rate" },
    { metric: "67%", label: "Social Media Sharers" },
  ],
};

export const sponsorshipData = {
  headline: "SPONSORSHIP OPPORTUNITIES",
  subheadline: "Partner With America's Mall",
  description:
    "Align your brand with the nation's most iconic retail destination. Our partnership tiers deliver unmatched visibility, engagement, and ROI.",
  tiers: [
    {
      name: "Platinum",
      price: "$500K+",
      features: [
        "Exclusive category rights",
        "Premium rotunda naming",
        "Year-round digital signage",
        "VIP event hosting",
        "Custom brand activations",
        "Executive concierge suite",
      ],
      highlight: true,
    },
    {
      name: "Gold",
      price: "$250K+",
      features: [
        "Seasonal category rights",
        "Digital signage network",
        "Quarterly event hosting",
        "Brand activation space",
        "Social media integration",
      ],
      highlight: false,
    },
    {
      name: "Silver",
      price: "$100K+",
      features: [
        "Event sponsorship",
        "Digital display access",
        "Co-branded content",
        "Social media mentions",
      ],
      highlight: false,
    },
  ],
  stats: [
    { value: 3, suffix: "B+", label: "Annual Media Impressions" },
    { value: 40, suffix: "M+", label: "On-Site Impressions" },
    { value: 15, suffix: "M+", label: "Social Media Reach" },
    { value: 92, suffix: "%", label: "Partner Renewal Rate" },
  ],
};

export const leasingData = {
  headline: "LEASING OPPORTUNITIES",
  subheadline: "Your Next Flagship Location",
  description:
    "Join 520+ world-class retailers in America's most iconic shopping destination. From permanent storefronts to pop-up concepts, we have the perfect space.",
  opportunities: [
    {
      type: "Flagship Retail",
      description: "Premium full-size retail spaces in high-traffic zones with maximum brand visibility.",
      sizes: "2,000 - 20,000 sq ft",
      icon: React.createElement(BuildingStorefrontIcon, { className: "w-8 h-8" }),
    },
    {
      type: "Pop-Up Concepts",
      description: "Short-term retail spaces perfect for seasonal launches, brand testing, and limited editions.",
      sizes: "200 - 2,000 sq ft",
      icon: React.createElement(BoltIcon, { className: "w-8 h-8" }),
    },
    {
      type: "Luxury Wing",
      description: "Exclusive positioning in the premium retail corridor alongside world-class luxury brands.",
      sizes: "1,500 - 10,000 sq ft",
      icon: React.createElement(StarIcon, { className: "w-8 h-8" }),
    },
    {
      type: "Food & Beverage",
      description: "Restaurant and food service locations in high-traffic dining districts.",
      sizes: "1,000 - 8,000 sq ft",
      icon: React.createElement(FireIcon, { className: "w-8 h-8" }),
    },
    {
      type: "Entertainment",
      description: "Large-format entertainment and experience venues for unique concepts.",
      sizes: "5,000 - 50,000 sq ft",
      icon: React.createElement(PlayIcon, { className: "w-8 h-8" }),
    },
    {
      type: "Kiosk & Cart",
      description: "Strategic common-area locations with high visibility and impulse-buy traffic.",
      sizes: "50 - 200 sq ft",
      icon: React.createElement(ShoppingCartIcon, { className: "w-8 h-8" }),
    },
  ],
};

export const contactData = {
  headline: "LET'S CREATE SOMETHING EXTRAORDINARY",
  subheadline: "Connect With Our Team",
  description:
    "Ready to join America's most iconic retail destination? Our leasing and partnership team is ready to craft the perfect opportunity for your brand.",
  contactOptions: [
    { label: "Schedule a Tour", description: "Visit Mall of America and see available spaces in person.", icon: React.createElement(CalendarIcon, { className: "w-8 h-8" }) },
    { label: "Request a Proposal", description: "Get a customized leasing or sponsorship proposal.", icon: React.createElement(DocumentTextIcon, { className: "w-8 h-8" }) },
    { label: "Download Deck", description: "Get the full Mall of America sales presentation.", icon: React.createElement(ArrowDownTrayIcon, { className: "w-8 h-8" }) },
  ],
};
