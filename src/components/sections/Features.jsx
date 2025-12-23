import Card from '../common/Card';
import ResponsiveImage from '../common/ResponsiveImage';

const Features = () => {
  const features = [
    {
      title: 'Eco-Friendly Design',
      description: 'Our products are designed with sustainability at the core, using recycled materials and energy-efficient processes.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW55fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      alt: 'Eco-friendly design'
    },
    {
      title: 'Advanced Analytics',
      description: 'Leverage cutting-edge AI and machine learning to optimize energy usage and reduce environmental impact.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW55fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      alt: 'Advanced analytics dashboard'
    },
    {
      title: 'Scalable Solutions',
      description: 'From small businesses to large enterprises, our solutions scale to meet your sustainability goals.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW55fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      alt: 'Scalable technology solutions'
    }
  ];

  return (
    <section id="features" className="bg-neutralLight py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">Our Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how EcoTech Solutions can help your organization achieve sustainability targets with innovative technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <ResponsiveImage
                src={feature.image}
                alt={feature.alt}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-neutralDark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;