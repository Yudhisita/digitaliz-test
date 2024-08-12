const Footer = () => {
  return (
    <footer className="bg-purple-600">
      <div className="max-w-5xl mx-auto py-8">
        <h1 className="md:text-xl text-md md:text-start text-center font-bold text-white">
          ⓒ M.Yudhistia Rahman {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
