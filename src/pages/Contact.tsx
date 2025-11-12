import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' ? 'Contacto' : 'Contact'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === 'es'
              ? 'Construyamos juntos una sociedad inclusiva para todos y todas. ¡Te necesitamos!'
              : 'Let\'s build an inclusive society for everyone together. We need you!'}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {language === 'es' ? 'Dirección' : 'Address'}
                      </h3>
                      <p className="text-muted-foreground">
                        Las Heras 1696<br />
                        Salta, CP 4400<br />
                        Argentina
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {language === 'es' ? 'Teléfonos' : 'Phones'}
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <a href="tel:+543875891184" className="block hover:text-primary transition-colors">
                          +54 387 589 1184
                        </a>
                        <a href="tel:+543874061906" className="block hover:text-primary transition-colors">
                          +54 387 406 1906
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        Email
                      </h3>
                      <a
                        href="mailto:colibrisalta95@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        colibrisalta95@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {language === 'es' ? 'Redes Sociales' : 'Social Media'}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="font-medium">Instagram</span>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="font-medium">Facebook</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3!2d-65.4!3d-24.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ2JzQ4LjAiUyA2NcKwMjQnMDAuMCJX!5e0!3m2!1sen!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Colibrí Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              {language === 'es' ? 'Horarios de Atención' : 'Office Hours'}
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-medium">
                      {language === 'es' ? 'Lunes a Viernes' : 'Monday to Friday'}
                    </span>
                    <span className="text-muted-foreground">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {language === 'es' ? 'Sábados y Domingos' : 'Saturday and Sunday'}
                    </span>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Cerrado' : 'Closed'}
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground italic">
                  {language === 'es'
                    ? '* Para eventos especiales y talleres, consultá nuestras redes sociales o contactanos.'
                    : '* For special events and workshops, check our social media or contact us.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
