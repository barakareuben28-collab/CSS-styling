import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-surface text-neutralDark sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navigation />
      </div>
    </header>
  );
};

export default Header; 