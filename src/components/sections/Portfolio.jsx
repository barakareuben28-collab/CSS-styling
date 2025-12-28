import ResponsiveImage from '../common/ResponsiveImage';

const Portfolio = () => {
  const images = [
    'project-1.jpg','project-2.jpg','project-3.jpg','project-4.jpg','project-5.jpg','project-6.jpg','project-7.jpg','project-8.jpg','project-9.jpg'
  ];

  const modules = import.meta.glob('/src/assets/images/*.jpg', { eager: true });
  if (!modules || typeof modules !== 'object') {
    console.error('import.meta.glob did not return an object — bundler may not have transformed the glob.');
    throw new Error('import.meta.glob not transformed: check build config or replace with static imports');
  }
  const items = images.map((img) => {
    const key = `/src/assets/images/${img}`;
    const mod = modules[key];
    if (!mod || !mod.default) {
      console.error('Missing module for', key, 'modules keys:', Object.keys(modules));
      throw new Error('Missing bundled image: ' + key);
    }
    return { title: 'Name Project', category: 'Categories', image: mod.default };
  });

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">Portfolio</h2>
        </div>

        <div className="flex gap-3 justify-center mb-6">
          <button className="px-3 py-1 rounded-md bg-primary text-white">All</button>
          <button className="px-3 py-1 rounded-md bg-surface text-muted">Website Design</button>
          <button className="px-3 py-1 rounded-md bg-surface text-muted">App Mobile Design</button>
          <button className="px-3 py-1 rounded-md bg-surface text-muted">App Desktop</button>
          <button className="px-3 py-1 rounded-md bg-surface text-muted">Branding</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="card-surface rounded-md overflow-hidden">
              <ResponsiveImage src={it.image} alt={it.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="text-sm text-muted">{it.category}</div>
                <div className="font-semibold text-neutralDark">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 