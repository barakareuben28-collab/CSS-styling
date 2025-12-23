import Button from '../common/Button';
import ResponsiveImage from '../common/ResponsiveImage';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sustainable Technology for a Greener Tomorrow
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              EcoTech Solutions pioneers eco-friendly innovations that reduce carbon footprint while maximizing efficiency. Join us in building a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="bg-white text-primary hover:bg-gray-100">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW55fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Sustainable technology illustration"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;