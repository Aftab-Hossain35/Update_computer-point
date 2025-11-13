"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Computer, Printer, ImageIcon, GraduationCap, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const services = [
  {
    title: "কম্পিউটার কম্পোজিং",
    description: "প্রফেশনাল ডকুমেন্ট টাইপিং, বই কম্পোজিং, প্রশ্নপত্র তৈরি এবং অন্যান্য টেক্সট রিলেটেড কাজ।",
    icon: Computer,
    href: "/services/computer-composing",
    features: ["বাংলা ও ইংরেজি টাইপিং", "বই কম্পোজিং", "প্রশ্নপত্র তৈরি", "সিভি ও রিজিউম"],
  },
  {
    title: "স্ক্যানিং ও প্রিন্টিং",
    description: "উচ্চ মানের স্ক্যানিং এবং প্রিন্টিং সেবা। ডকুমেন্ট, ছবি এবং অন্যান্য কাগজপত্র।",
    icon: Printer,
    href: "/services/scanning-printing",
    features: ["হাই কোয়ালিটি স্ক্যান", "কালার ও ব্ল্যাক প্রিন্ট", "ফটোকপি", "বাইন্ডিং সেবা"],
  },
  {
    title: "ছবি কাস্টমাইজেশন",
    description: "ছবি এডিটিং, রিসাইজিং, ব্যাকগ্রাউন্ড রিমুভ এবং অন্যান্য ফটো এডিটিং সেবা।",
    icon: ImageIcon,
    href: "/services/photo-customization",
    features: ["ব্যাকগ্রাউন্ড রিমুভ", "ছবি রিসাইজ", "কালার কারেকশন", "ফটো রিটাচিং"],
  },
  {
    title: "কম্পিউটার প্রশিক্ষণ",
    description: "বেসিক থেকে এডভান্স লেভেল পর্যন্ত কম্পিউটার প্রশিক্ষণ। অভিজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে।",
    icon: GraduationCap,
    href: "/services/computer-training",
    features: ["বেসিক কম্পিউটার", "মাইক্রোসফট অফিস", "গ্রাফিক্স ডিজাইন"],
  },
  {
    title: "অনলাইন সেবাসমূহ",
    description: "বিভিন্ন অনলাইন সেবা যেমন ফর্ম পূরণ, অনলাইন আবেদন, ইমেইল সেটআপ ইত্যাদি।",
    icon: Globe,
    href: "/services/online-services",
    features: ["অনলাইন ফর্ম পূরণ", "ইমেইল সেটআপ", "সোশ্যাল মিডিয়া", "অনলাইন পেমেন্ট"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">আমাদের সেবাসমূহ</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              কম্পিউটার পয়েন্টে আমরা বিভিন্ন ধরনের প্রফেশনাল সেবা প্রদান করি। আমাদের অভিজ্ঞ টিম আপনার সকল প্রয়োজন মেটাতে প্রস্তুত।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">বিশেষ সুবিধা:</h4>
                      <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={service.href}>
                      <Button className="w-full group">
                        বিস্তারিত দেখুন
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
