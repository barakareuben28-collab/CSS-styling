import ResponsiveImage from '../common/ResponsiveImage';

const About = () => {
  const skills = [
    { name: 'Figma', percent: 100 },
    { name: 'Adobe XD', percent: 100 },
    { name: 'Adobe Photoshop', percent: 85 },
    { name: 'Adobe Illustrator', percent: 60 },
    { name: 'Adobe Premiere', percent: 70 },
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 rounded-lg overflow-hidden shadow-2xl">
              <ResponsiveImage
                src={require('../../assets/images/portrait.jpg')}
                alt="Portrait"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-2">About</h2>
            <p className="text-sm text-muted mb-6">Designing for clarity, delight and measurable outcomes.</p>
            <p className="text-muted mb-6">Ava is a product-focused designer who blends strategic thinking with hands-on craft. She helps startups and product teams discover clarity, create polished interfaces, and ship delightful experiences that move business metrics. Her process centers on rapid prototyping, UX research, and scalable design systems.</p>
            <div className="mb-6">
              <button className="px-4 py-2 rounded-md bg-primary text-white">Download CV</button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {skills.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="skill-circle mb-2 text-primary">{s.percent}%</div>
                  <div className="text-sm text-muted mt-1 text-center">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 