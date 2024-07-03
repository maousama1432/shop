import ClientRootLayout from './ClientRootLayout';

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <ClientRootLayout>
      {children}
    </ClientRootLayout>
  );
}
