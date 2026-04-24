export default function PageLayout({children}) {
  // eslint-disable-next-line react-hooks/purity
  let copyrightYear = new Date(Date.now()).getFullYear();

  return (
    <>
      <header>
        {/* <h1>Website Title</h1> */}
      </header>

      {children}

      <footer>
        <p>Company Name &copy; {copyrightYear}</p>
      </footer>
    </>
  );
}
