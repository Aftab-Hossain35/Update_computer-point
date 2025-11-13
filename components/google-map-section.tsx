"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"

export default function GoogleMapSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-green-700 font-medium">আমাদের অবস্থান</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-muted-foreground text-lg">আদালত রোড, জজকোর্ট কুমিল্লা</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">ঠিকানা</h3>
                  <p className="text-muted-foreground">আদালত রোড, জজকোর্ট কুমিল্লা</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">ফোন নম্বর</h3>
                  <p className="text-muted-foreground">01731-641688</p>
                  <p className="text-muted-foreground">01859-732189</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">খোলার সময়</h3>
                  <p className="text-muted-foreground">সকাল ৯টা - রাত ৮টা</p>
                  <p className="text-muted-foreground">সপ্তাহে ৬ দিন</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm p-4">
              <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4460.477798177007!2d91.1790456455194!3d23.47319985188523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f2d327c81d9%3A0x7c33dc6cca762477!2sComputer%20Point!5e0!3m2!1sen!2sbd!4v1748447360256!5m2!1sen!2sbd"
                  width="600"
                  height="550"
                  className="border-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
