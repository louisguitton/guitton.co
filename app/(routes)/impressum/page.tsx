import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal notice / Impressum / Mentions Légales",
  description: "The legal information about guitton.co",
  robots: {
    index: false,
  },
};

export default function Imprint() {
  return (
    <>
      <PageIntro
        eyebrow="Imprint"
        title="Legal notice / Impressum / Mentions Légales"
      >
        <p>Information according to § 5 TMG</p>
      </PageIntro>
      <Container>
        <section id="about-card" className="pb-4 mt-4">
          <div className="overflow-hidden shadow sm:rounded-lg print:rounded-lg">
            <div className="px-4 py-5 border-t border-gray-200 sm:px-6 print:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 print:grid-cols-2">
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Company</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Louis Guitton Engineering
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Legal form
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Freiberufler (Auto-entrepreneur)
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Kopenhagener str 42, 10437 Berlin
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Steuernummer / TIN
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">31/323/01347</dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Contact</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <ul>
                      <li>+33 6 70 98 12 56</li>
                      <li>admin@guitton.co</li>
                    </ul>
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    VAT ID / Umsatzsteuer Identifikationsnummer / TVA
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">DE369692867</dd>
                </div>
                <div className="sm:col-span-2 print:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Haftungshinweis
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <p>
                      Die Informationen, die auf diesen Seiten abgerufen werden
                      können, erheben weder einen Anspruch auf Richtigkeit noch
                      auf Vollständigkeit. Die Benutzung erfolgt auf eigene
                      Gefahr. Wir weisen ausdrücklich darauf hin, dass wir für
                      die Angebote Dritter im World Wide Web (sog “deep links”)
                      nicht verantwortlich sind. Soweit Links auf die Angebote
                      Dritter verweisen, enthalten diese nach unserer Kenntnis
                      keine strafbaren oder anderweitig verbotenen Inhalte. Für
                      diese Inhalte wird keinerlei Haftung übernommen.
                    </p>
                  </dd>
                </div>
                <div className="sm:col-span-2 print:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Avertissement
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <p>
                      Nous nous efforçons d&apos;assurer la précision et
                      l&apos;exactitude des informations diffusées sur le site
                      sans pour autant pouvoir toujours garantir leur véracité.
                      Le site décline alors toute responsabilité quant à leur
                      exactitude. Le site propose des liens hypertextes vers des
                      sites web édités ou gérés par des sites tiers. Dans la
                      mesure où aucun contrôle n&apos;est exercé sur ces
                      ressources externes, nous déclinons toute responsabilité
                      quant au contenu de ces sites.
                    </p>
                  </dd>
                </div>
                <div className="sm:col-span-2 print:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Urheberrechtlicher Hinweis
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <p>
                      Inhalt und Struktur der Internetseiten von guitton.co sind
                      urheberrechtlich geschützt. Jegliche Vervielfältigung von
                      Informationen oder Daten, insbesondere die Verwendung von
                      Texten, Textteilen, Bildmaterial oder sonstigen Inhalten
                      bedarf der vorherigen Zustimmung durch den Anbieter bzw.
                      Rechteinhaber.
                    </p>
                  </dd>
                </div>
                <div className="sm:col-span-2 print:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Propriété intellectuelle et copyright
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <p>
                      Louis Guitton est titulaire du contenu et de la structure
                      de son site, protégés par un copyright. Toute reproduction
                      de contenu (textes, données, photos, logos) n&apos;est pas
                      autorisé sans le consentement préalable de l&apos;éditeur.
                    </p>
                  </dd>
                </div>
                <div className="sm:col-span-2 print:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Hinweis zur Online-Streitbeilegung gemäß Art. 14 Abs. 1
                    ODR-VO
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <p>
                      Die Europäische Kommission stellt eine Plattform zur
                      Online-Streitbeilegung (OS) bereit, die Sie unter
                      Online-Streitbeilegung finden. Verbraucher haben die
                      Möglichkeit, diese Plattform für die Beilegung ihrer
                      Streitigkeiten zu nutzen. Wir sind grundsätzlich bereit,
                      an einem außergerichtlichen Schlichtungsverfahren
                      teilzunehmen.
                    </p>
                  </dd>
                </div>
                <div className="sm:col-span-2 print:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Note en cas de gestion de conflit intellectuel faisant suite
                    à l’Article 14, Abs. 1 ODR-VO
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <p>
                      En cas de litige, la Commission Européenne a prévu une
                      plateforme en ligne de gestion de conflit. Les
                      utilisateurs ont la possibilité d&apos;utiliser cette
                      plateforme pour résoudre les conflits. Notez que nous
                      favorisons toujours une gestion à l&apos;amiable des
                      conflits.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
