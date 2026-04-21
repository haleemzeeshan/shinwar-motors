import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Shinwar Motors - Global Vehicle Trade, Local Sales & Texas Towing',
  description:
    'Shinwar Motors connects Texas to the world. Vehicle import and export, a Houston showroom, and 24/7 towing across Texas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer className="footer-bar">
          <div className="footer-logo">Shinwar Motors</div>
          <div className="footer-copy">&copy; 2026 Shinwar Motors, Inc. &middot; Houston, Texas</div>
          <div style={{ display: 'flex', gap: 20, fontSize: 12, opacity: 0.3 }}>
            {['Privacy', 'Terms', 'Contact'].map((l) => (
              <span key={l} style={{ cursor: 'pointer' }}>
                {l}
              </span>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
