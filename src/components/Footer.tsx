import { Heart, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/colibri-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-warm-cream border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Colibrí Logo" className="h-12 w-12" />
              <span className="font-semibold text-primary text-lg">Colibrí</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('home.mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-warm-text">{t('nav.work')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.work')}
                </Link>
              </li>
              <li>
                <Link to="/collaborate" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.collaborate')}
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.donate')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-warm-text">{t('contact.title')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Las Heras 1696, Salta, CP 4400</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col text-muted-foreground">
                  <a href="tel:+543872260906" className="hover:text-primary transition-colors">
                    387 226 0906
                  </a>
                  <a href="tel:+543874061906" className="hover:text-primary transition-colors">
                    387 406 1906
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:colibrisalta95@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  colibrisalta95@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center space-x-2">
            <span>© {new Date().getFullYear()} Colibrí. {t('footer.rights')}</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
