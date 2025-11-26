import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, DollarSign, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import donationQR from '@/assets/donation-qr.png';

const Donate = () => {
  const { language } = useLanguage();

  const impact = [
    {
      icon: Users,
      titleEs: 'Apoyo a Familias',
      titleEn: 'Family Support',
      descEs: 'Talleres, grupos de apoyo y orientación para familias.',
      descEn: 'Workshops, support groups and guidance for families.',
    },
    {
      icon: Target,
      titleEs: 'Programas Educativos',
      titleEn: 'Educational Programs',
      descEs: 'Capacitaciones para docentes y materiales didácticos.',
      descEn: 'Teacher training and educational materials.',
    },
    {
      icon: Heart,
      titleEs: 'Eventos Sociales',
      titleEn: 'Social Events',
      descEs: 'Campamentos, bailes y celebraciones para la comunidad.',
      descEn: 'Camps, dances and celebrations for the community.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 fill-current" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' ? 'Doná' : 'Donate'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === 'es'
              ? 'Tu apoyo es vital para que podamos seguir adelante'
              : 'Your support is vital so we can continue forward'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl mb-12">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    {language === 'es' ? '¿Por qué donar?' : 'Why donate?'}
                  </h2>
                  
                  {language === 'es' ? (
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left">
                      <p>
                        Colibrí es una organización civil sin fines de lucro que depende del apoyo de la
                        comunidad para sostener sus programas y actividades. Cada donación nos permite:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Acompañar a nuevas familias desde el momento del diagnóstico</li>
                        <li>Organizar talleres, campamentos y eventos de integración</li>
                        <li>Capacitar docentes y profesionales en educación inclusiva</li>
                        <li>Promover la inclusión laboral de personas con síndrome de Down</li>
                        <li>Mantener nuestra biblioteca y recursos especializados</li>
                      </ul>
                      <p className="font-semibold text-primary pt-4">
                        Tu aporte, por pequeño que sea, hace una diferencia enorme en la vida de las
                        personas con síndrome de Down y sus familias.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left">
                      <p>
                        Colibrí is a non-profit civil organization that depends on community support to
                        sustain its programs and activities. Each donation allows us to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Support new families from the moment of diagnosis</li>
                        <li>Organize workshops, camps and integration events</li>
                        <li>Train teachers and professionals in inclusive education</li>
                        <li>Promote employment inclusion of people with Down syndrome</li>
                        <li>Maintain our library and specialized resources</li>
                      </ul>
                      <p className="font-semibold text-primary pt-4">
                        Your contribution, no matter how small, makes an enormous difference in the lives
                        of people with Down syndrome and their families.
                      </p>
                    </div>
                  )}
                </div>

                {/* Donation Button/QR Placeholder */}
                <div className="bg-accent rounded-lg p-8 text-center mt-8">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {language === 'es' ? 'Formas de Donar' : 'Ways to Donate'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    {/* Bank Transfer Details */}
                    <div className="text-left space-y-4">
                      <h4 className="font-semibold text-lg text-primary">
                        {language === 'es' ? 'Transferencia Bancaria (CBU)' : 'Bank Transfer (CBU)'}
                      </h4>
                      <div className="bg-background/50 rounded-md p-4 space-y-2">
                        <div>
                          <span className="font-medium">CBU:</span>
                          <p className="text-muted-foreground font-mono">2850100640094040069118</p>
                        </div>
                        <div>
                          <span className="font-medium">Alias:</span>
                          <p className="text-muted-foreground">GOLFO.CAMISA.BLANCO</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mt-2">
                            COLIBRI ASOC SALTENA SINDROME DE DOWN Y OTRAS DISCAPACIDADES INT
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* QR Code */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-sm font-medium text-primary mb-3">
                        {language === 'es' ? 'Escaneá el código QR' : 'Scan the QR code'}
                      </p>
                      <img 
                        src={donationQR} 
                        alt="QR code for donations" 
                        className="w-48 h-48 object-contain bg-white p-2 rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to="/contact">
                      {language === 'es' ? 'Contactanos para donar' : 'Contact us to donate'}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Impact Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                {language === 'es' ? '¿A dónde va tu donación?' : 'Where does your donation go?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {impact.map((item, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="pt-8 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'es' ? item.titleEs : item.titleEn}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'es' ? item.descEs : item.descEn}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <div className="text-center">
                  <Heart className="h-10 w-10 text-primary mx-auto mb-4 fill-current" />
                  <p className="text-lg italic text-muted-foreground mb-4">
                    {language === 'es'
                      ? '"Gracias a Colibrí encontramos un espacio de contención y aprendizaje. Cada evento, cada taller, nos ayuda a crecer como familia y a ver un futuro lleno de posibilidades para nuestro hijo."'
                      : '"Thanks to Colibrí we found a space of support and learning. Each event, each workshop, helps us grow as a family and see a future full of possibilities for our son."'}
                  </p>
                  <p className="font-semibold text-primary">
                    {language === 'es' ? '— Familia de Colibrí' : '— Colibrí Family'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
