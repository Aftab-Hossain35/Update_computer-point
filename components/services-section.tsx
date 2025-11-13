"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Computer, Printer, ImageIcon, GraduationCap, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "কম্পিউটার কম্পোজিং",
    description: "প্রফেশনাল ডকুমেন্ট টাইপিং ও বই কম্পোজিং",
    icon: Computer,
    href: "/services/computer-composing",
    gradient: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "স্ক্যানিং ও প্রিন্টিং",
    description: "উচ্চ মানের স্ক্যানিং এবং প্রিন্টিং সেবা",
    icon: Printer,
    href: "/services/scanning-printing",
    gradient: "from-green-500 to-teal-600",
    bgColor: "bg-green-50",
  },
  {
    title: "ছবি কাস্টমাইজেশন",
    description: "ছবি এডিটিং ও ব্যাকগ্রাউন্ড রিমুভ",
    icon: ImageIcon,
    href: "/services/photo-customization",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    title: "কম্পিউটার প্রশিক্ষণ",
    description: "বেসিক থেকে এডভান্স লেভেল প্রশিক্ষণ",
    icon: GraduationCap,
    href: "/services/computer-training",
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "অনলাইন সেবাসমূহ",
    description: "বিভিন্ন অনলাইন সেবা ও সহায়তা",
    icon: Globe,
    href: "/services/online-services",
    gradient: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium">আমাদের সেবাসমূহ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            যে সেবা আমরা প্রদান করি
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            আমরা বিভিন্ন ধরনের কম্পিউটার সেবা প্রদান করি যা আপনার সকল প্রয়োজন মেটাতে সক্ষম
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="h-full group"
            >
              <Link href={service.href}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    {/* Gradient Header */}
                    <div className={`h-32 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-4 right-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                      <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        <span>বিস্তারিত দেখুন</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              সকল সেবা দেখুন
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
