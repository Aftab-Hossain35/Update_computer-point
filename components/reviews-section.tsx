"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "মো. হাসান",
    rating: 5,
    comment: "সার্ভিস অসাধারণ! টাইপিং একদম নিখুঁত এবং দ্রুত ডেলিভারি পেয়েছি।",
    avatar: "MH",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "রাহেলা খাতুন",
    rating: 4,
    comment: "সিভি তৈরি করিয়েছিলাম, খুব প্রফেশনাল কাজ হয়েছে। Highly recommended!",
    avatar: "RK",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "তানভীর আহমেদ",
    rating: 5,
    comment: "ছবি করেছিলাম খুব ভালো হয়েছে এবং দ্রুত ডেলিভারি পেয়েছি। ধন্যবাদ!",
    avatar: "TA",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "মো: সিয়াম",
    rating: 4,
    comment: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
    avatar: "MS",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "মো: সামির",
    rating: 5,
    comment: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
    avatar: "MSa",
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "ইউসুফ হাসান",
    rating: 5,
    comment: "প্রশ্নপত্র কম্পোজ খুব ভালো হয়েছে। সময়মতো পেয়েছি। ধন্যবাদ!",
    avatar: "YH",
    color: "from-purple-500 to-pink-600",
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" id="reviews">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <Star className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-purple-700 font-medium">গ্রাহক পর্যালোচনা</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            আমাদের সেবা নিয়ে গ্রাহকদের মতামত
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">আমাদের সন্তুষ্ট গ্রাহকদের প্রশংসাপত্র দেখুন</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-8 w-8 text-gray-400" />
                  </div>

                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-white font-bold mr-4`}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-purple-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground leading-relaxed italic">"{review.comment}"</p>

                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${review.color}`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
