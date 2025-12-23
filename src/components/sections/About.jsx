import ResponsiveImage from '../common/ResponsiveImage';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-6">About EcoTech Solutions</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, EcoTech Solutions is dedicated to creating technology that not only advances business goals but also protects our planet. We believe that innovation and sustainability can go hand in hand.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts combines deep technical knowledge with a passion for environmental stewardship. We've helped over 500 companies reduce their carbon footprint by an average of 30% through our cutting-edge solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Certified B-Corp company</li>
              <li>Carbon neutral operations since 2022</li>
              <li>Winner of Green Tech Innovation Award 2024</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW55fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="EcoTech Solutions team"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;