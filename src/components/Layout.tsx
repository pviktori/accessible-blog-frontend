import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main-content" className="p-4">
        {children}
      </main>
    </>
  );
};

export default Layout;