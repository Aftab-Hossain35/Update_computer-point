"use client"
import { Computer, Printer, ImageIcon, GraduationCap, Globe, Users, Award, Calendar } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ReviewsSection from "@/components/reviews-section"
import AchievementsSection from "@/components/achievements-section"
import GoogleMapSection from "@/components/google-map-section"

const services = [
  {
    title: "কম্পিউটার কম্পোজিং",
    icon: Computer,
    href: "/services/computer-composing",
  },
  {
    title: "স্ক্যানিং ও প্রিন্টিং",
    icon: Printer,
    href: "/services/scanning-printing",
  },
  {
    title: "ছবি কাস্টমাইজেশন",
    icon: ImageIcon,
    href: "/services/photo-customization",
  },
  {
    title: "কম্পিউটার প্রশিক্ষণ",
    icon: GraduationCap,
    href: "/services/computer-training",
  },
  {
    title: "অনলাইন সেবাসমূহ",
    icon: Globe,
    href: "/services/online-services",
  },
]

const reviews = [
  {
    name: "মো. হাসান",
    rating: 5,
    comment: "সার্ভিস অসাধারণ! টাইপিং একদম নিখুঁত এবং দ্রুত ডেলিভারি পেয়েছি।",
  },
  {
    name: "রাহেলা খাতুন",
    rating: 4,
    comment: "সিভি তৈরি করিয়েছিলাম, খুব প্রফেশনাল কাজ হয়েছে। Highly recommended!",
  },
  {
    name: "তানভীর আহমেদ",
    rating: 5,
    comment: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
  },
  {
    name: "মো: সিয়াম",
    rating: 4,
    comment: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
  },
  {
    name: "মো: সামির",
    rating: 5,
    comment: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
  },
  {
    name: "ইউসুফ হাসান",
    rating: 5,
    comment: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
  },
]

const achievements = [
  {
    number: "7",
    label: "Years of services",
    icon: Calendar,
  },
  {
    number: "10,000+",
    label: "Works done",
    icon: Award,
  },
  {
    number: "650+",
    label: "Students",
    icon: Users,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection services={services} />
      <ReviewsSection reviews={reviews} />
      <AchievementsSection achievements={achievements} />
      <GoogleMapSection />
      <Footer />
    </div>
  )
}
