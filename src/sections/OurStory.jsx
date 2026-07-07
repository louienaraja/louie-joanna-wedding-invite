import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

const poemLines = [
  ["M", "eeting you felt like a story already halfway written,"],
  ["U", "nfolding slowly, page by page, into something certain."],
  ["N", "othing about us was rushed, nothing was forced —"],
  ["C", "onvictions grew quiet, side by side, over the course"],
  ["H", "ours dressed as years, some ordinary, some kind —"],
  ["K", "ept safe are the small things only we would remember."],
  ["I", "sn't it strange how home became a person, not a place?"],
  ["N", "ow, on 11.11, we say yes — to forever, and all its grace."],
];

function OurStory() {
  return (
    <Layout id="our-story" className="bg-champagne-50">
      <FadeInSection>
        <SectionTitle>Our Story</SectionTitle>

        <div className="max-w-xl mx-auto text-center px-4">
          <p className="font-serif italic text-warm-900 text-lg sm:text-xl leading-loose sm:leading-loose">
            {poemLines.map(([first, rest], i) => (
              <span key={i} className="block mb-4 sm:mb-5">
                <span className="text-gold-600 text-xl sm:text-2xl font-medium not-italic">
                  {first}
                </span>
                {rest}
              </span>
            ))}
          </p>

          <p className="mt-8 text-sm italic text-warm-400 tracking-wide">
            our full story, coming soon
          </p>
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default OurStory;
