
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuredProducts = [
  {
    name: "ThinkPad X1 Carbon",
    category: "Laptop",
    description: "14\" Enterprise Laptop with Intel Core i7",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "OptiPlex 7090",
    category: "Desktop",
    description: "Business Desktop with Intel Core i5",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "LaserJet Enterprise M507",
    category: "Printer",
    description: "High-performance monochrome laser printer",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=800&q=80"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="mb-24 relative">
      {/* Background Image for Products Section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1920&q=80"
          alt="African professionals with technology equipment"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
