import Button from '../common/Button';
import ResponsiveImage from '../common/ResponsiveImage';
import portrait from '../../assets/images/portrait.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative bg-surface text-neutralDark py-20 overflow-hidden">
      <div className="absolute -right-24 -top-10 w-96 h-96 rounded-full bg-gradient-to-tr from-black/40 to-black/10 opacity-30 filter blur-3xl"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-muted mb-2">Hello, I’m</p>
            <h2 className="text-2xl md:text-3xl text-neutralDark font-semibold mb-1">Ava Laurent</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">UI / UX Designer</h1>
            <p className="text-muted max-w-xl mb-6">I design bold, human-centered interfaces and craft delightful product experiences for ambitious teams.</p>

            <div className="flex gap-4 mb-6">
              <Button variant="primary" className="bg-primary text-white">Hire Me</Button>
              <Button variant="outline" className="border-neutralDark text-neutralDark">Download CV</Button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="card-surface p-4 rounded-md">
                <div className="text-primary font-bold text-lg">5+</div>
                <div className="text-muted text-sm">Experiences</div>
              </div>
              <div className="card-surface p-4 rounded-md">
                <div className="text-primary font-bold text-lg">20+</div>
                <div className="text-muted text-sm">Project done</div>
              </div>
              <div className="card-surface p-4 rounded-md">
                <div className="text-primary font-bold text-lg">80+</div>
                <div className="text-muted text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <ResponsiveImage
                src={portrait}
                alt="Portrait of Mahmood Fazile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;