import logo from '../../assets/images/logo-noircraft.svg';

const Footer = () => {
  return (
    <footer className="bg-surface text-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <img src={logo} alt="NoirCraft logo" className="h-8 w-auto" />
          <span className="text-neutralDark font-bold text-lg">NoirCraft</span>
        </div>
        <nav className="mb-6">
          <ul className="flex items-center justify-center gap-6 text-sm">
            <li><a href="#home" className="hover:text-primary">Work</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-8 rounded-full bg-black/10 grid place-items-center">IG</div>
          <div className="w-8 h-8 rounded-full bg-black/10 grid place-items-center">TW</div>
          <div className="w-8 h-8 rounded-full bg-black/10 grid place-items-center">BE</div>
        </div>

        <div className="text-sm mb-6">
          <div>hello@noircraft.studio</div>
          <div>+1 (555) 010-2020</div>
        </div>

        <div className="text-xs text-muted/70">
          Designed by NoirCraft Studio
        </div>
      </div>
    </footer>
  );
};

export default Footer; 