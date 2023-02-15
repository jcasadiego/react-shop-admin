import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pagesProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pagesProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
