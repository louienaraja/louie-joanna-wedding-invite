function Layout({ children, id, className = "" }) {
  return (
    <section id={id} className={`min-h-screen px-4 py-20 ${className}`}>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}

export default Layout;
