import Card from '../common/Card';

const Features = () => {
  const services = new Array(6).fill({
    title: 'App Design',
    description: 'Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.'
  });

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">Services</h2>
          <p className="text-muted max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="card-surface p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-black/10 grid place-items-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutralDark mb-2">{s.title}</h3>
              <p className="text-muted">{s.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 