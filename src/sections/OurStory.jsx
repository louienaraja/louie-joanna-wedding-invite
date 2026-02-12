import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

function OurStory() {
  return (
    <Layout id="our-story" className="bg-stone-50">
      <SectionTitle>Our Story</SectionTitle>

      <div className="prose prose-lg max-w-2xl mx-auto text-stone-700">
        <p className="text-center leading-relaxed mb-6">
          [Our story here - how we met, first date, proposal, etc.]
        </p>
        <p className="text-center leading-relaxed mb-6">
          [More paragraphs about our journey together]
        </p>
        <p className="text-center leading-relaxed">
          [Something about looking forward to meet them at 11.11]
        </p>
      </div>
    </Layout>
  );
}

export default OurStory;
