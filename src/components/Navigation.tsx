import Button from '@/components/Button';

const Navigation = () => {
  return (
    <nav className="fixed top-24 left-24 right-24 lg:left-80 lg:right-80">
      <div className="flex justify-between items-center">
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="lg:hidden">
          <Button text="Menu" />
        </div>
        <div className="hidden lg:space-x-8 lg:block">
          <Button text="Projects" />
          <Button text="About" />
          <Button text="Resume" />
          <Button text="Icon dark mode" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
