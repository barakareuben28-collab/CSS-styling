import Button from '../common/Button';
import Card from '../common/Card';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">Contact me</h2>
          <p className="text-muted max-w-2xl mx-auto">Cultivating Connections: Reach Out And Connect With Me</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <h3 className="text-2xl font-semibold text-neutralDark mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-neutralDark">Email</h4>
                <p className="text-muted">ava@noircraft.studio</p>
              </div>
              <div>
                <h4 className="font-medium text-neutralDark">Phone</h4>
                <p className="text-muted">+1 (555) 010-2020</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold text-neutralDark mb-6">Get in touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutralDark">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-surface border border-transparent shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutralDark">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-surface border border-transparent shadow-sm focus:border-primary focus:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutralDark">Phone Number</label>
                  <input type="text" id="phone" name="phone" className="mt-1 block w-full rounded-md bg-surface border border-transparent shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutralDark">Service Of Interest</label>
                  <select id="service" name="service" className="mt-1 block w-full rounded-md bg-surface border border-transparent shadow-sm focus:border-primary focus:ring-primary">
                    <option>Website Design</option>
                    <option>App Design</option>
                    <option>Branding</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-neutralDark">Timeline</label>
                <input type="text" id="timeline" name="timeline" className="mt-1 block w-full rounded-md bg-surface border border-transparent shadow-sm focus:border-primary focus:ring-primary" />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-neutralDark">Project Details</label>
                <textarea id="details" name="details" rows="4" className="mt-1 block w-full rounded-md bg-surface border border-transparent shadow-sm focus:border-primary focus:ring-primary"></textarea>
              </div>

              <div className="text-right">
                <button type="submit" className="px-4 py-2 rounded-md border border-neutralDark text-neutralDark">Send</button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact; 