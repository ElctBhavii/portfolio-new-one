import { ImageWithFallback } from "./figma/ImageWithFallback";
import avatarImage from "figma:asset/e49047b20351a2a94079ec38358390028870e0d7.png";
import nottyAvatar from "figma:asset/7d20a7479b979054ede2c9c8a302290afdd90491.png";
import siddAvatar from "figma:asset/a1f7550e26a2423f4585540e8850ea0e37dc4d74.png";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Notty",
      role: "Gaming Youtuber",
      content: "Bhavesh transformed my gaming videos into something truly engaging. His attention to detail and creative vision exceeded our expectations. The final product perfectly captured our brand essence.",
      avatar: nottyAvatar
    },
    {
      id: 2,
      name: "Syash",
      role: "Content Creator",
      content: "Working with Bhavesh was incredible. He took my shorts clips and created a cinematic masterpiece that brought a massive reach. His storytelling ability is unmatched.",
      avatar: avatarImage
    },
    {
      id: 3,
      name: "Sidd Marega",
      role: "Gaming YouTuber",
      content: "Honestly one of the best editors I've worked with. Understood pacing, flow, and exactly what works for YouTube. Edits are clean, engaging, and always delivered on time. Super easy to work with and always open to feedback. Would 100% recommend to any creator who wants their content to level up.",
      avatar: siddAvatar
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-teal-400">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say
          </p>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 group relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>

              <div className="pt-4 mb-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}