"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Users, TrendingUp } from "lucide-react"

const achievements = [
  {
    number: "7",
    label: "Years of services",
    banglaLabel: "বছরের সেবা",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    number: "10,000+",
    label: "Works done",
    banglaLabel: "সম্পন্ন কাজ",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    number: "650+",
    label: "Students",
    banglaLabel: "শিক্ষার্থী",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
]

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">আমাদের অর্জন</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            গর্বের সাথে আমাদের সাফল্যের গল্প
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            বছরের পর বছর ধরে আমরা আমাদের গ্রাহকদের সেবা দিয়ে আসছি
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-8 relative">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`p-4 bg-gradient-to-r ${achievement.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                  >
                    {achievement.number}
                  </motion.div>

                  {/* Labels */}
                  <div className="space-y-1">
                    <div className="text-lg font-medium text-gray-900">{achievement.banglaLabel}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-white/20 to-white/10 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-white/20 to-white/10 rounded-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
