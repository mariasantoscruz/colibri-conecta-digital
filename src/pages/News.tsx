import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const News = () => {
  const { language } = useLanguage();

  // Placeholder news items
  const news = [
    {
      titleEs: '21 de Marzo - Día Mundial del Síndrome de Down',
      titleEn: 'March 21 - World Down Syndrome Day',
      dateEs: '21 de Marzo, 2024',
      dateEn: 'March 21, 2024',
      descEs: 'Celebramos el Día Mundial del Síndrome de Down con actividades especiales en toda la ciudad. Sumate a nuestras actividades de concientización.',
      descEn: 'We celebrate World Down Syndrome Day with special activities throughout the city. Join our awareness activities.',
      category: language === 'es' ? 'Eventos' : 'Events',
    },
    {
      titleEs: 'Nuevo Taller de Autonomía Personal',
      titleEn: 'New Personal Autonomy Workshop',
      dateEs: '15 de Febrero, 2024',
      dateEn: 'February 15, 2024',
      descEs: 'Comenzamos un nuevo ciclo de talleres enfocados en habilidades para la vida independiente. Inscripciones abiertas.',
      descEn: 'We start a new cycle of workshops focused on independent living skills. Registration open.',
      category: language === 'es' ? 'Talleres' : 'Workshops',
    },
    {
      titleEs: 'Éxito en la Feria de Empanadas',
      titleEn: 'Success at the Empanada Fair',
      dateEs: '10 de Febrero, 2024',
      dateEn: 'February 10, 2024',
      descEs: 'Gracias a todos los que participaron en nuestra feria anual. Los fondos recaudados se destinarán a nuestros programas educativos.',
      descEn: 'Thanks to everyone who participated in our annual fair. The funds raised will go to our educational programs.',
      category: language === 'es' ? 'Recaudación' : 'Fundraising',
    },
    {
      titleEs: 'Convenio con Empresas Locales',
      titleEn: 'Agreement with Local Companies',
      dateEs: '25 de Enero, 2024',
      dateEn: 'January 25, 2024',
      descEs: 'Firmamos nuevos convenios para promover la inclusión laboral de personas con síndrome de Down en empresas salteñas.',
      descEn: 'We signed new agreements to promote employment inclusion of people with Down syndrome in local companies.',
      category: language === 'es' ? 'Empleo' : 'Employment',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' ? 'Novedades y Eventos' : 'News & Events'}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === 'es'
              ? 'Mantente al día con nuestras actividades, eventos y noticias'
              : 'Stay up to date with our activities, events and news'}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center space-x-1 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      <Tag className="h-3 w-3" />
                      <span>{item.category}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{language === 'es' ? item.dateEs : item.dateEn}</span>
                    </span>
                  </div>
                  <CardTitle className="text-xl">
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'es' ? item.descEs : item.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            {language === 'es' ? 'Seguinos en redes' : 'Follow us on social media'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === 'es'
              ? 'No te pierdas ninguna novedad. Seguinos en Instagram y Facebook para estar al día con todas nuestras actividades.'
              : 'Don\'t miss any news. Follow us on Instagram and Facebook to stay up to date with all our activities.'}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <div className="flex items-center space-x-2 px-6 py-3 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-medium">Instagram</span>
              </div>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <div className="flex items-center space-x-2 px-6 py-3 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-medium">Facebook</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
