"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle,Siren, Clock, Star, Phone, Globe, FileCheck, UserCheck } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const features = [
  {
    title: "অনলাইন আবেদন",
    description: "সকল ধরনের অনলাইন আবেদন সহায়তা",
    icon: Globe,
  },
  {
    title: "চাকরির আবেদন",
    description: "চাকরির আবেদন ফর্ম পূরণ সহায়তা",
    icon: FileCheck,
  },
  {
    title: "পুলিশ ক্লিয়ারেন্স",
    description: "পুলিশ ক্লিয়ারেন্স আবেদন সহায়তা",
    icon:Siren,
  },
  {
    title: "এনআইডি সেবা",
    description: "এনআইডি ও জন্ম নিবন্ধন সংক্রান্ত সেবা",
    icon: UserCheck,
  },
]

const services = [
  "যাবতীয় অনলাইন আবেদন করা হয়",
  "চাকরির আবেদন ফর্ম পূরণ করা হয়",
  "পুলিশ ক্লিয়ারেন্স আবেদন করা হয়",
  "পরীক্ষার ফলাফল জানা যায়",
  "মেইলের মাধ্যমে সকল তথ্য কালেক্ট করা যায়",
  "এনআইডি ও জন্ম নিবন্ধন কারেকশন"
]

const pricing = [
  {
    type: "অনলাইন আবেদন",
    price: "সেবা অনুযায়ী",
    features: ["দ্রুত সেবা", "সম্পূর্ণ সহায়তা", "ফলোআপ সার্ভিস"],
  },
  {
    type: "চাকরির আবেদন",
    price: "আবেদন অনুযায়ী",
    features: ["ফর্ম পূরণ", "ডকুমেন্ট প্রস্তুতি", "আপলোড সহায়তা"],
  },
  {
    type: "পুলিশ ক্লিয়ারেন্স",
    price: "আলোচনা সাপেক্ষে",
    features: ["অনলাইন আবেদন", "ডকুমেন্ট ভেরিফিকেশন", "ট্র্যাকিং সহায়তা"],
  },
]

export default function OnlineServicesPage() {
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
                <Globe className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">অনলাইন সেবাসমূহ</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              সকল ধরনের অনলাইন আবেদন, চাকরির আবেদন, পুলিশ ক্লিয়ারেন্স এবং এনআইডি সংক্রান্ত সেবা পেতে আমাদের সাথে যোগাযোগ করুন।
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
              দ্রুত সেবা
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              নির্ভরযোগ্য
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              অভিজ্ঞ টিম
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
            <p className="text-muted-foreground text-lg">কেন আমাদের অনলাইন সেবা বেছে নেবেন</p>
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
            <p className="text-muted-foreground text-lg">যে সকল অনলাইন সেবা আমরা প্রদান করি</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">সেবার মূল্য</h2>
            <p className="text-muted-foreground text-lg">সাশ্রয়ী মূল্যে নির্ভরযোগ্য অনলাইন সেবা</p>
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
            <p className="text-xl mb-8 opacity-90">সকল অনলাইন সেবা পেতে এখনই কল করুন</p>
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
