import Button from '../common/Button';
import Card from '../common/Card';

const Contact = () => {
  return (
    <section id="contact" className="bg-neutralLight py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your sustainability journey? Contact us today to learn how EcoTech Solutions can help.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <h3 className="text-2xl font-semibold text-neutralDark mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-neutralDark">Email</h4>
                <p className="text-gray-600">info@ecotechsolutions.com</p>
              </div>
              <div>
                <h4 className="font-medium text-neutralDark">Phone</h4>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-medium text-neutralDark">Address</h4>
                <p className="text-gray-600">123 Green Street<br />Eco City, EC 12345</p>
              </div>
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold text-neutralDark mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutralDark">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutralDark">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutralDark">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
              </div>
              <Button variant="primary" type="submit">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;