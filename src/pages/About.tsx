import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, Target, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Heart,
      titleEs: 'Derechos Humanos',
      titleEn: 'Human Rights',
      descEs: 'Defendemos los derechos fundamentales de todas las personas.',
      descEn: 'We defend the fundamental rights of all people.',
    },
    {
      icon: Target,
      titleEs: 'Compromiso',
      titleEn: 'Commitment',
      descEs: 'Trabajamos con dedicación por nuestra misión cada día.',
      descEn: 'We work with dedication for our mission every day.',
    },
    {
      icon: Users,
      titleEs: 'Protagonismo',
      titleEn: 'Empowerment',
      descEs: 'Las personas con síndrome de Down son protagonistas de sus vidas.',
      descEn: 'People with Down syndrome are the protagonists of their lives.',
    },
    {
      icon: Eye,
      titleEs: 'Honestidad',
      titleEn: 'Honesty',
      descEs: 'Actuamos con transparencia y responsabilidad.',
      descEn: 'We act with transparency and responsibility.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' ? 'Quiénes Somos' : 'About Us'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === 'es'
              ? 'Una historia de amor, compromiso y lucha por la inclusión en Salta, Argentina'
              : 'A story of love, commitment and fight for inclusion in Salta, Argentina'}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
          </h2>
          
          {language === 'es' ? (
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                En 1995, un grupo de familias salteñas con hijos e hijas con síndrome de Down se reunieron
                motivados por la necesidad de contar con un espacio propio donde poder encontrarse, compartir
                experiencias y buscar información y apoyo.
              </p>
              <p>
                Así nació <span className="text-primary font-semibold">Colibrí - Asociación Salteña Síndrome de Down</span>,
                una organización civil sin fines de lucro que trabaja incansablemente por la inclusión, la educación
                y la alegría de las personas con trisomía 21.
              </p>
              <p>
                Durante casi tres décadas, hemos crecido junto a nuestras familias, construyendo una comunidad
                vibrante y comprometida. Cada paso que damos es un testimonio de amor, perseverancia y la
                profunda convicción de que todas las personas merecen las mismas oportunidades.
              </p>
            </div>
          ) : (
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In 1995, a group of families from Salta with children with Down syndrome came together,
                motivated by the need for their own space where they could meet, share experiences,
                and seek information and support.
              </p>
              <p>
                Thus was born <span className="text-primary font-semibold">Colibrí - Down Syndrome Association of Salta</span>,
                a non-profit civil organization that works tirelessly for the inclusion, education,
                and joy of people with trisomy 21.
              </p>
              <p>
                For almost three decades, we have grown alongside our families, building a vibrant
                and committed community. Every step we take is a testament to love, perseverance,
                and the deep conviction that all people deserve equal opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {language === 'es' ? 'Misión' : 'Mission'}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'es'
                    ? 'Facilitar herramientas para mejorar la calidad de vida de las personas con síndrome de Down, promoviendo su inclusión social y el respeto por sus derechos, mediante el acompañamiento a las familias y la concientización de la comunidad.'
                    : 'To provide tools to improve the quality of life of people with Down syndrome, promoting their social inclusion and respect for their rights, through family support and community awareness.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {language === 'es' ? 'Visión' : 'Vision'}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'es'
                    ? 'Construir una sociedad inclusiva que reconozca y valore la diversidad, donde las personas con síndrome de Down puedan desarrollar plenamente sus capacidades y ejercer sus derechos en igualdad de condiciones.'
                    : 'To build an inclusive society that recognizes and values diversity, where people with Down syndrome can fully develop their capabilities and exercise their rights on equal terms.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            {language === 'es' ? 'Nuestros Valores' : 'Our Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'es' ? value.titleEs : value.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'es' ? value.descEs : value.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
