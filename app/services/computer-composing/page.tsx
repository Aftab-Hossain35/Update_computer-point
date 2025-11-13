"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Computer, FileText, BookOpen, GraduationCap, CheckCircle, Clock, Star, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const features = [
  {
    title: "বাংলা টাইপিং",
    description: "অভিজ্ঞ টাইপিস্ট দ্বারা নিখুঁত বাংলা টাইপিং সেবা",
    icon: FileText,
  },
  {
    title: "ইংরেজি টাইপিং",
    description: "প্রফেশনাল ইংরেজি ডকুমেন্ট টাইপিং",
    icon: FileText,
  },
  {
    title: "বই কম্পোজিং",
    description: "বই, ম্যাগাজিন এবং পুস্তিকা কম্পোজিং",
    icon: BookOpen,
  },
  {
    title: "প্রশ্নপত্র তৈরি",
    description: "শিক্ষা প্রতিষ্ঠানের জন্য প্রশ্নপত্র কম্পোজিং",
    icon: GraduationCap,
  },
]

const services = [
  "হস্তলিখিত থেকে টাইপিং",
  "পিডিএফ থেকে ওয়ার্ড কনভার্ট",
  "ডকুমেন্ট ফরম্যাটিং",
  "সিভি ও রিজিউম তৈরি",
  "চিঠিপত্র টাইপিং",
  "প্রতিবেদন তৈরি",
  "বিজনেস ডকুমেন্ট",
  "একাডেমিক পেপার",
]

const pricing = [
  {
    type: "বাংলা টাইপিং",
    price: "প্রতি পৃষ্ঠা ৳৫০-৮০",
    features: ["নিখুঁত টাইপিং", "দ্রুত ডেলিভারি", "ফ্রি কারেকশন"],
  },
  {
    type: "ইংরেজি টাইপিং",
    price: "প্রতি পৃষ্ঠা ৳৪০-৮০",
    features: ["প্রফেশনাল ফরম্যাট", "গ্রামার চেক", "ফ্রি রিভিশন"],
  },
  {
    type: "বই কম্পোজিং",
    price: "আলোচনা সাপেক্ষে",
    features: ["সম্পূর্ণ লেআউট", "ইন্ডেক্স তৈরি", "প্রিন্ট রেডি"],
  },
]

export default function ComputerComposingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Computer className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">কম্পিউটার কম্পোজিং</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              প্রফেশনাল মানের ডকুমেন্ট টাইপিং, বই কম্পোজিং এবং প্রশ্নপত্র তৈরির সেবা। আমাদের অভিজ্ঞ টাইপিস্টরা নিখুঁত এবং দ্রুত সেবা প্রদান
              করেন।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              দ্রুত ডেলিভারি
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              ১০০% নিখুঁততা
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              ৭+ বছরের অভিজ্ঞতা
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের বিশেষত্ব</h2>
            <p className="text-muted-foreground text-lg">কেন আমাদের কম্পোজিং সেবা বেছে নেবেন</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের সেবাসমূহ</h2>
            <p className="text-muted-foreground text-lg">যে সকল কাজ আমরা করে থাকি</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">মূল্য তালিকা</h2>
            <p className="text-muted-foreground text-lg">সাশ্রয়ী মূল্যে উন্নত মানের সেবা</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl mb-2">{plan.type}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{plan.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      কল করুন
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">আজই আমাদের সাথে যোগাযোগ করুন</h2>
            <p className="text-xl mb-8 opacity-90">আপনার কম্পোজিং এর কাজ দিন এবং পেয়ে যান প্রফেশনাল মানের সেবা</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                ফোন করুন: 01731-641688
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                হোয়াটসঅ্যাপ: 01859-732189
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
