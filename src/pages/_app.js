import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pagesProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pagesProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
