import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";
import GoldDivider from "../components/GoldDivider";

function GroupLabel({ children }) {
  return (
    <div className="text-center mb-6">
      <h3 className="font-serif text-lg md:text-xl text-warm-600 tracking-widest uppercase font-light">
        {children}
      </h3>
      <div className="flex items-center justify-center gap-2 mt-2">
        <div className="h-px w-8 bg-gold-200" />
        <div className="w-1 h-1 bg-gold-400 rotate-45" />
        <div className="h-px w-8 bg-gold-200" />
      </div>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gold-100 rounded p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function NameEntry({ name, role, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      {role && (
        <div className="text-xs uppercase tracking-widest text-gold-500 mb-2">
          {role}
        </div>
      )}
      <div className="font-serif text-warm-800 text-base font-light leading-normal">
        {name}
      </div>
    </div>
  );
}

function Entourage() {
  return (
    <Layout id="entourage" className="bg-champagne-50">
      <SectionTitle>Our Entourage</SectionTitle>

      {/* ── Officiating Priest ─────────────────────────────────────── */}
      <FadeInSection>
        <GroupLabel>Officiating Priest</GroupLabel>
        <div className="flex justify-center">
          <Card className="max-w-xs w-full text-center">
            <NameEntry name="Rev. Fr. Dennis F. Braganza" />
          </Card>
        </div>
      </FadeInSection>

      <GoldDivider className="my-10" />

      {/* ── Parents ───────────────────────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <GroupLabel>Parents of the Couple</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <p className="text-xs uppercase tracking-widest text-gold-500 text-center mb-4">
              Bride&rsquo;s Parents
            </p>
            <div className="space-y-3">
              <NameEntry name="Mr. Joel R. Puertollano" />
              <NameEntry name="Mrs. Brenda S. Puertollano" />
            </div>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-widest text-gold-500 text-center mb-4">
              Groom&rsquo;s Parents
            </p>
            <div className="space-y-3">
              <NameEntry name="Mr. Manuel S. Naraja" />
              <NameEntry name="Mrs. Ofelia G. Naraja" />
            </div>
          </Card>
        </div>
      </FadeInSection>

      <GoldDivider className="my-10" />

      {/* ── Principal Sponsors ────────────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <GroupLabel>Principal Sponsors</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Mr. Alonzo C. Española",
            "Mrs. Antonina B. Dela Cruz",

            "Dr. Charo Fabian-Puertollano",
            "Atty. Derek R. Puertollano",
            "Dr. Edmundo T. Aralar",
            "Dr. Glenn R. Puertollano",
            "Mrs. Idgitte E. Dasugo",
            "Mr. Jose F. Sariego",
            "Dr. Maria Nathalia Paat-Capulong",
            "Dr. Lorna Luisa Caeg-Viñola",
            "Mrs. Marlene G. Gardon",
            "Arch. Mary Joy P. San Jose",
            "Dr. Rowena N. Gan",
          ].map((name) => (
            <Card key={name} className="text-center">
              <NameEntry name={name} />
            </Card>
          ))}
        </div>
      </FadeInSection>

      <GoldDivider className="my-10" />

      {/* ── Best Man & Man of Honor ───────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <GroupLabel>Best Man &amp; Man of Honor</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <Card className="text-center">
            <NameEntry
              role="Man of Honor"
              name="Engr. James Bryann S. Puertollano"
            />
          </Card>
          <Card className="text-center">
            <NameEntry role="Best Man" name="Miguel Luis G. Naraja" />
          </Card>
        </div>
      </FadeInSection>

      <GoldDivider className="my-10" />

      {/* ── Bridesmaids & Groomsmen ───────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <GroupLabel>Bridesmaids &amp; Groomsmen</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <p className="text-xs uppercase tracking-widest text-gold-500 text-center mb-4">
              Bridesmaids
            </p>
            <div className="space-y-3">
              <NameEntry name="Dr. Sherley Ver M. Saladaga" />
              <NameEntry name="Dr. Heilia L. Prudenciano" />
            </div>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-widest text-gold-500 text-center mb-4">
              Groomsmen
            </p>
            <div className="space-y-3">
              <NameEntry name="Dr. Kevin John Yumul" />
              <NameEntry name="Dr. Austin James Sy" />
              <NameEntry name="Carlo Danniel Mapue" />
            </div>
          </Card>
        </div>
      </FadeInSection>

      <GoldDivider className="my-10" />

      {/* ── Secondary Sponsors ────────────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <GroupLabel>Secondary Sponsors</GroupLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <p className="text-xs uppercase tracking-widest text-gold-500 text-center mb-4">
              Candle
            </p>
            <div className="space-y-3">
              <NameEntry name="Roselle Niña Christine T. Sariego-Llacuña" />
              <div className="text-center text-gold-300 text-xs">&amp;</div>
              <NameEntry name="Austin James Sy" />
            </div>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-widest text-gold-500 text-center mb-4">
              Veil
            </p>
            <div className="space-y-3">
              <NameEntry name="Amanda Regina Gonzales-Cortez" />
              <div className="text-center text-gold-300 text-xs">&amp;</div>
              <NameEntry name="Kevin John Yumul" />
            </div>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-widest text-gold-500 text-center mb-4">
              Cord
            </p>
            <div className="space-y-3">
              <NameEntry name="Helene Raine C. Decipolo" />
              <div className="text-center text-gold-300 text-xs">&amp;</div>
              <NameEntry name="Carlo Danniel Mapue" />
            </div>
          </Card>
        </div>
      </FadeInSection>

      <GoldDivider className="my-10" />

      {/* ── Bearers & Flower Girls ────────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <GroupLabel>Bearers &amp; Flower Girls</GroupLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <Card className="text-center col-span-1 flex flex-col items-center justify-center min-h-32">
            <NameEntry role="Coin Custodian" name="Monica Louise Naraja" />
          </Card>
          <Card className="text-center col-span-1 flex flex-col items-center justify-center min-h-32">
            <NameEntry role="Ring Custodian" name="Matthew Ivan Naraja" />
          </Card>
          <Card className="text-center col-span-2 sm:col-span-1 flex flex-col items-center justify-center min-h-32">
            <NameEntry role="Bible Custodian" name="Mercedita R. Puertollano" />
          </Card>
          <Card className="text-center col-span-2 sm:col-span-1 flex flex-col items-center justify-center min-h-32">
            <p className="text-xs uppercase tracking-widest text-gold-500 mb-3">
              Flower Girls
            </p>
            <div className="space-y-3">
              <NameEntry name="Czarina Margaux F. Puertollano" />
              <div className="text-center text-gold-300 text-xs">&amp;</div>
              <NameEntry name="Sophie Aulivia Chanel Cruz" />
            </div>
          </Card>
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default Entourage;
