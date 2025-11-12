import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, HandHeart, UserPlus, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Collaborate = () => {
  const { language } = useLanguage();

  const forCompanies = [
    {
      titleEs: 'Inclusión Laboral',
      titleEn: 'Employment Inclusion',
      descEs: 'Contratá personas con síndrome de Down y construí equipos diversos.',
      descEn: 'Hire people with Down syndrome and build diverse teams.',
    },
    {
      titleEs: 'Responsabilidad Social',
      titleEn: 'Social Responsibility',
      descEs: 'Colaboraciones y alianzas estratégicas para el desarrollo social.',
      descEn: 'Collaborations and strategic alliances for social development.',
    },
    {
      titleEs: 'Capacitación Corporativa',
      titleEn: 'Corporate Training',
      descEs: 'Talleres de sensibilización sobre diversidad e inclusión.',
      descEn: 'Awareness workshops on diversity and inclusion.',
    },
  ];

  const forCommunity = [
    {
      icon: UserPlus,
      titleEs: 'Hazte Socio/a',
      titleEn: 'Become a Member',
      descEs: 'Tu cuota mensual nos ayuda a sostener nuestros programas y seguir creciendo. Cada aporte, por pequeño que sea, hace la diferencia.',
      descEn: 'Your monthly fee helps us sustain our programs and continue growing. Every contribution, no matter how small, makes a difference.',
    },
    {
      icon: HandHeart,
      titleEs: 'Sé Voluntario/a',
      titleEn: 'Become a Volunteer',
      descEs: 'Sumá tu tiempo y tus habilidades a nuestra causa. Necesitamos apoyo en eventos, talleres, comunicación y muchas otras áreas.',
      descEn: 'Add your time and skills to our cause. We need support in events, workshops, communication and many other areas.',
    },
    {
      icon: ShoppingBag,
      titleEs: 'Apoya Nuestras Ventas',
      titleEn: 'Support Our Sales',
      descEs: 'Comprá nuestras flores, juegos de mesa y empanadas. Con cada venta sostenemos nuestras actividades y generamos oportunidades.',
      descEn: 'Buy our flowers, board games and empanadas. With each sale we sustain our activities and generate opportunities.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' ? 'Cómo Colaborar' : 'Get Involved'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === 'es'
              ? 'Hay muchas formas de ser parte del cambio. Elegí la que más se adapte a vos y sumate a nuestra misión.'
              : 'There are many ways to be part of the change. Choose the one that best suits you and join our mission.'}
          </p>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === 'es' ? 'Para Empresas' : 'For Companies'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'es'
                ? 'Trabajá con nosotros para construir una empresa más inclusiva y socialmente responsable.'
                : 'Work with us to build a more inclusive and socially responsible company.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {forCompanies.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'es' ? item.descEs : item.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">
                {language === 'es' ? 'Contactanos' : 'Contact Us'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Community */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === 'es' ? 'Para la Comunidad' : 'For the Community'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'es'
                ? 'Tu apoyo individual es fundamental. Cada gesto cuenta y suma a nuestra misión.'
                : 'Your individual support is fundamental. Every gesture counts and adds to our mission.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {forCommunity.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-xl">
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    {language === 'es' ? item.descEs : item.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">
                {language === 'es' ? 'Quiero colaborar' : 'I want to collaborate'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'es' ? '¿Tenés dudas?' : 'Have questions?'}
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Estamos acá para ayudarte. Escribinos y te contamos más sobre cómo podés sumarte.'
                : 'We\'re here to help. Write to us and we\'ll tell you more about how you can join.'}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                {language === 'es' ? 'Contactanos' : 'Contact Us'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborate;
