import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

function RSVP() {
  return (
    <Layout id="rsvp" className="bg-emerald-50">
      <FadeInSection>
        <SectionTitle>RSVP</SectionTitle>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-stone-700 mb-8 text-lg">
            We can't wait to celebrate with you! Please let us know if you'll be
            joining us by filling out the form below.
          </p>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSffbJZobUiR8gi1qPyu_DQuVjU6aHTizl_icwCipjv7DgujlQ/viewform?embedded=true"
              width="100%"
              height="1500"
              title="RSVP Form"
              className="w-full min-h-screen"
            >
              Loading…
            </iframe>
          </div>

          <p className="text-center text-stone-600 mt-6 text-sm">
            Having trouble with the form? Contact us directly!
          </p>
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default RSVP;
