"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Computer, BookOpen, GraduationCap, CheckCircle, Clock, Star, Phone, MonitorPlay, FileSpreadsheet, Image, Globe } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const features = [
  {
    title: "কম্পিউটার হাতেখড়ি",
    description: "বেসিক থেকে এডভান্স পর্যন্ত কম্পিউটার শিক্ষা",
    icon: Computer,
  },
  {
    title: "মাইক্রোসফট অফিস",
    description: "ওয়ার্ড, এক্সেল সহ সম্পূর্ণ অফিস প্যাকেজ",
    icon: FileSpreadsheet,
  },
  {
    title: "ফটোশপ",
    description: "গ্রাফিক ডিজাইন এবং ইমেজ এডিটিং",
    icon: Image,
  },
  {
    title: "ডিজিটাল মার্কেটিং",
    description: "অনলাইন মার্কেটিং এর সম্পূর্ণ প্রশিক্ষণ",
    icon: Globe,
  },
]

const services = [
  "কম্পিউটার হাতেখড়ি কোর্স",
  "অফিসিয়াল কোর্স করানো হয়",
  "চাকুরীর জন্য বেসিক টু এডভান্স কোর্স",
  "মাইক্রোসফট অফিস প্রশিক্ষণ",
  "ফটোশপ এর যাবতীয় কাজ",
  "প্র্যাকটিক্যাল কাজের মাধ্যমে দক্ষতা বৃদ্ধি",
  "কোর্স শেষে সার্বক্ষণিক সহায়তা",
  "ডিজিটাল মার্কেটিং প্রশিক্ষণ"
]

const pricing = [
  {
    type: "অফিস কোর্স",
    price: "৳৪,০০০",
    features: ["কম্পিউটার হাতেখড়ি", "মাইক্রোসফট অফিস", "প্র্যাকটিক্যাল ক্লাস"],
  },
  {
    type: "গ্রাফিক্স ডিজাইন কোর্স",
    price: "৳৮,০০০",
    features: ["বেসিক কোর্সের সবকিছু", "ফটোশপ", "ডিজিটাল মার্কেটিং"],
  },
  {
    type: "প্রফেশনাল কোর্স",
    price: "৳১৫,০০০",
    features: ["এডভান্স কোর্সের সবকিছু", "প্রজেক্ট ওয়ার্ক", "জব প্লেসমেন্ট সহায়তা"],
  },
]

export default function ComputerTrainingPage() {
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
                <MonitorPlay className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">কম্পিউটার ট্রেনিং</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              অভিজ্ঞ প্রশিক্ষকদের সহায়তায় আধুনিক পদ্ধতিতে কম্পিউটার শিক্ষা। চাকরি-উপযোগী দক্ষতা অর্জনের জন্য আমাদের কোর্সগুলো করুন।
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
              ফ্লেক্সিবল ক্লাস টাইম
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              প্র্যাকটিক্যাল ট্রেনিং
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              অভিজ্ঞ প্রশিক্ষক
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের কোর্স সমূহ</h2>
            <p className="text-muted-foreground text-lg">বিভিন্ন ধরনের কোর্স থেকে আপনার পছন্দের কোর্সটি বেছে নিন</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের সুবিধাসমূহ</h2>
            <p className="text-muted-foreground text-lg">যে সকল সুবিধা আমরা প্রদান করি</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">কোর্স ফি</h2>
            <p className="text-muted-foreground text-lg">আপনার বাজেট অনুযায়ী কোর্স বেছে নিন</p>
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
                      ভর্তি হোন
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">আজই ভর্তি হয়ে যান</h2>
            <p className="text-xl mb-8 opacity-90">আপনার ক্যারিয়ার গড়ার জন্য আমাদের কোর্সগুলোতে ভর্তি হোন</p>
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
