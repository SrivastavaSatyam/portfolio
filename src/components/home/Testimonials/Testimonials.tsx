'use client';

import { motion } from 'framer-motion'
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO at TechCorp',
      content: 'Exceptional work! Delivered the project on time and exceeded our expectations.',
      image: '/path-to-image.jpg' // Add actual image path
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      content: 'Great communication and technical skills. Would definitely work with again.',
      image: '/path-to-image.jpg' // Add actual image path
    },
    {
      name: 'Mike Johnson',
      role: 'Tech Lead',
      content: 'Highly skilled developer with excellent problem-solving abilities.',
      image: '/path-to-image.jpg' // Add actual image path
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">&quot;{testimonial.content}&quot;</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 