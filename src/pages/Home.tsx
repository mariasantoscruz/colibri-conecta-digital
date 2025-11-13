import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/community-event.jpg';
import familiesImage from '@/assets/families-community.jpg';

const Home = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Heart,
      titleEs: 'Apoyo a las Familias',
      titleEn: 'Family Support',
      descEs: 'Acompañamos a familias desde el primer día con amor y orientación.',
      descEn: 'We support families from day one with love and guidance.',
    },
    {
      icon: Users,
      titleEs: 'Inclusión Social',
      titleEn: 'Social Inclusion',
      descEs: 'Creamos espacios de encuentro, celebración y pertenencia.',
      descEn: 'We create spaces for gathering, celebration and belonging.',
    },
    {
      icon: BookOpen,
      titleEs: 'Educación para Todos',
      titleEn: 'Education for All',
      descEs: 'Trabajamos por una educación verdaderamente inclusiva.',
      descEn: 'We work for truly inclusive education.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t('home.welcome')}
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-accent">
            {t('home.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('home.mission')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/about">
                {t('home.cta1')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <Link to="/collaborate">{t('home.cta2')}</Link>
            </Button>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/donate">{t('home.cta3')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {language === 'es' ? feature.titleEs : feature.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'es' ? feature.descEs : feature.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {language === 'es' ? 'Nuestra Comunidad' : 'Our Community'}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {language === 'es'
                  ? 'Desde 1995, hemos construido una comunidad vibrante de familias, profesionales y amigos comprometidos con la inclusión. Juntos celebramos cada logro, apoyamos cada desafío y construimos un futuro más inclusivo.'
                  : 'Since 1995, we have built a vibrant community of families, professionals and friends committed to inclusion. Together we celebrate every achievement, support every challenge and build a more inclusive future.'}
              </p>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/work">
                  {language === 'es' ? 'Conocé nuestro trabajo' : 'Learn about our work'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={familiesImage}
                alt="Community"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'es' ? '¿Querés ser parte del cambio?' : 'Want to be part of the change?'}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Tu colaboración nos ayuda a seguir creciendo y llegando a más familias. Hay muchas formas de sumarte a nuestra misión.'
              : 'Your collaboration helps us continue growing and reaching more families. There are many ways to join our mission.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/collaborate">{t('nav.collaborate')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <Link to="/donate">{t('nav.donate')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
