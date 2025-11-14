import { Card, CardContent } from '@/components/ui/card';
import { Users, Sparkles, GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import educationImage from '@/assets/education-inclusive.jpg';
import employmentImage from '@/assets/employment-support-new.jpg';
import identityCommitteeImage from '@/assets/identity-committee.jpg';
import familySupportImage from '@/assets/family-support-event.jpg';

const Work = () => {
  const { language } = useLanguage();

  const workAreas = [
    {
      icon: Users,
      image: familySupportImage,
      titleEs: 'Apoyo a las Familias',
      titleEn: 'Family Support',
      descEs: 'Acompañamos a familias desde el momento del diagnóstico, brindando contención, orientación y apoyo emocional. A través de nuestros comités de mamás y papás "nuevitos", de hermanos y de abuelos, generamos espacios para compartir experiencias, fortalecer vínculos y construir juntos una red de acompañamiento.',
      descEn: 'We accompany parents, siblings, and grandparents from the moment of diagnosis. We offer spaces for support, information and mutual aid. Our family committees meet regularly to share experiences and strengthen bonds.',
    },
    {
      icon: Sparkles,
      image: identityCommitteeImage,
      titleEs: 'Comité de Identificación',
      titleEn: 'Identity Committee',
      descEs: 'Creamos espacios donde las personas con síndrome de Down son protagonistas. Organizamos talleres, campamentos, bailes y celebraciones que fortalecen la identidad, la autonomía y la vida social. Cada actividad es una oportunidad para crecer, divertirse y hacer amigos.',
      descEn: 'We create spaces where people with Down syndrome are the protagonists. We organize workshops, camps, dances and celebrations that strengthen identity, autonomy and social life. Each activity is an opportunity to grow, have fun and make friends.',
    },
    {
      icon: GraduationCap,
      image: educationImage,
      titleEs: 'Educación Inclusiva',
      titleEn: 'Inclusive Education',
      descEs: "A través del proyecto 'Educación para todos y todas', pionero en Salta, nuestro equipo brinda apoyo y seguimiento en distintos niveles educativos (desde maternal hasta terciario), así como en formación profesional. El objetivo es desarrollar itinerarios que faciliten la futura inclusión laboral.",
      descEn: 'We work for truly inclusive education through the project "Education for Everyone". We train teachers, accompany educational paths and promote pedagogical practices that respect diversity and enhance each student\'s capabilities.',
    },
    {
      icon: Briefcase,
      image: employmentImage,
      titleEs: 'Empleo con Apoyo',
      titleEn: 'Supported Employment',
      descEs: 'Promovemos la inclusión laboral de personas con síndrome de Down en colaboración con el programa provincial de empleo. Trabajamos con empresas para generar oportunidades reales de trabajo, acompañando tanto a los trabajadores como a los empleadores en el proceso.',
      descEn: 'We promote employment inclusion of people with Down syndrome in collaboration with the provincial employment program. We work with companies to generate real job opportunities, supporting both workers and employers in the process.',
    },
    {
      icon: BookOpen,
      image: null,
      titleEs: 'Capacitación y Biblioteca',
      titleEn: 'Training and Library',
      descEs: 'Ofrecemos cursos, talleres y jornadas de capacitación para familias, profesionales y la comunidad. Nuestra biblioteca cuenta con material especializado disponible para consulta. Además, realizamos campañas de concientización en escuelas y espacios públicos.',
      descEn: 'We offer courses, workshops and training sessions for families, professionals and the community. Our library has specialized materials available for consultation. We also conduct awareness campaigns in schools and public spaces.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' ? 'Áreas de Trabajo' : 'Our Work'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === 'es'
              ? 'Conocé las diferentes maneras en que trabajamos por la inclusión y el desarrollo pleno de las personas con síndrome de Down'
              : 'Learn about the different ways we work for the inclusion and full development of people with Down syndrome'}
          </p>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {workAreas.map((area, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {area.image ? (
                  <div className="w-full lg:w-1/2">
                    <img
                      src={area.image}
                      alt={language === 'es' ? area.titleEs : area.titleEn}
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="p-12 bg-accent rounded-lg">
                      <area.icon className="h-32 w-32 text-primary" />
                    </div>
                  </div>
                )}

                <div className="w-full lg:w-1/2">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <area.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary">
                          {language === 'es' ? area.titleEs : area.titleEn}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {language === 'es' ? area.descEs : area.descEn}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {language === 'es' ? 'Nuestro Impacto' : 'Our Impact'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {language === 'es'
                ? 'Cada programa, cada taller, cada encuentro es una semilla de cambio. A través de nuestras áreas de trabajo, hemos acompañado a cientos de familias, capacitado a decenas de docentes y generado oportunidades reales de inclusión en nuestra comunidad.'
                : 'Each program, each workshop, each meeting is a seed of change. Through our work areas, we have accompanied hundreds of families, trained dozens of teachers and generated real opportunities for inclusion in our community.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">29+</div>
                <div className="text-muted-foreground">
                  {language === 'es' ? 'Años de trayectoria' : 'Years of history'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">300+</div>
                <div className="text-muted-foreground">
                  {language === 'es' ? 'Familias acompañadas' : 'Families supported'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">
                  {language === 'es' ? 'Eventos anuales' : 'Annual events'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
