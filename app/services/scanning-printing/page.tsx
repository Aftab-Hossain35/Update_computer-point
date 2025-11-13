"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Printer, ScanIcon as Scanner, Copy, BookOpen, CheckCircle, Clock, Star, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const features = [
  {
    title: "হাই কোয়ালিটি স্ক্যান",
    description: "৩০০-১২০০ DPI পর্যন্ত উচ্চ রেজোলিউশন স্ক্যানিং",
    icon: Scanner,
  },
  {
    title: "কালার প্রিন্টিং",
    description: "উজ্জ্বল এবং স্পষ্ট কালার প্রিন্ট সেবা",
    icon: Printer,
  },
  {
    title: "ফটোকপি সেবা",
    description: "দ্রুত এবং সাশ্রয়ী ফটোকপি সেবা",
    icon: Copy,
  },
  {
    title: "বাইন্ডিং সেবা",
    description: "প্রফেশনাল বুক বাইন্ডিং এবং স্পাইরাল বাইন্ডিং",
    icon: BookOpen,
  },
]

const services = [
  "ডকুমেন্ট স্ক্যানিং",
  "ছবি স্ক্যানিং",
  "বুক স্ক্যানিং",
  "পাসপোর্ট স্ক্যানিং",
  "A4 সাইজ প্রিন্ট",
  "ফটো প্রিন্ট",
  "ব্ল্যাক এন্ড হোয়াইট কপি",
  "কালার কপি",
]

const pricing = [
  {
    type: "স্ক্যানিং সেবা",
    items: [
      { service: "A4 ব্ল্যাক এন্ড হোয়াইট", price: "৳১০/পৃষ্ঠা" },
      { service: "A4 কালার স্ক্যান", price: "৳১০/পৃষ্ঠা" },
      { service: "ছবি স্ক্যান", price: "৳১০/পিস" },
    ],
  },
  {
    type: "প্রিন্টিং সেবা",
    items: [
      { service: "A4 ব্ল্যাক প্রিন্ট", price: "৳১০/পৃষ্ঠা" },
      { service: "A4 কালার প্রিন্ট", price: "৳১৫/পৃষ্ঠা" },
      { service: "ফটো প্রিন্ট", price: "৳৪০-৬০/৪ পিস" },
    ],
  },
  {
    type: "অন্যান্য সেবা",
    items: [
      { service: "ফটোকপি", price: "৳৩ /পৃষ্ঠা" },
      { service: "উভয় পিঠ", price: "৳৪-৫" },
    ],
  },
]

export default function ScanningPrintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Printer className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">স্ক্যানিং ও প্রিন্টিং</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              উচ্চ মানের স্ক্যানিং এবং প্রিন্টিং সেবা। আধুনিক যন্ত্রপাতি ব্যবহার করে আমরা নিখুঁত এবং দ্রুত সেবা প্রদান করি।
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
              তাৎক্ষণিক সেবা
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              উচ্চ মানের আউটপুট
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              সাশ্রয়ী মূল্য
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
            <p className="text-muted-foreground text-lg">কেন আমাদের স্ক্যানিং ও প্রিন্টিং সেবা বেছে নেবেন</p>
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
            <p className="text-muted-foreground text-lg">স্বচ্ছ এবং সাশ্রয়ী মূল্য নির্ধারণ</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((category, index) => (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{category.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between items-center py-2 border-b border-muted">
                          <span className="text-sm font-medium">{item.service}</span>
                          <span className="text-sm font-bold text-primary">{item.price}</span>
                        </li>
                      ))}
                    </ul>
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
            <p className="text-xl mb-8 opacity-90">আপনার স্ক্যানিং ও প্রিন্টিং এর প্রয়োজনে আমরা সর্বদা প্রস্তুত</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                ফোন করুন: 01731-641688
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/30 border-white text-white hover:bg-white hover:text-primary"
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
