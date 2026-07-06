import { useState } from "react";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzVICVCP9qyRTrTvBZgdHFT1JXtubW3pbkKi4kV2aY3TleXIrhdrk9xnELnLNJVnpUF5g/exec";

const inputClass =
  "w-full px-4 py-3 text-sm text-warm-800 bg-white border border-gold-200 rounded " +
  "focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 " +
  "placeholder:text-warm-400 transition-colors duration-200";

const labelClass = "block text-xs tracking-widest uppercase text-gold-600 font-semibold mb-1.5";

function FieldError({ msg }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-xs text-red-400">{msg}</p>;
}

function RSVP() {
  const [form, setForm] = useState({
    fullName: "",
    attending: "",
    dietary: "",
    message: "",
    contact: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!form.attending) e.attending = "Please let us know if you'll be attending.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      // Google Apps Script requires no-cors + text/plain to avoid preflight.
      // With no-cors we cannot read the response body — treat non-throw as success.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout id="rsvp" className="bg-champagne-100">
      <FadeInSection>
        <SectionTitle>RSVP</SectionTitle>

        <div className="max-w-xl mx-auto">
          {/* ── Success state ───────────────────────────── */}
          {status === "success" && (
            <div className="text-center py-16 px-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold-300" />
                <div className="w-1.5 h-1.5 bg-gold-400 rotate-45" />
                <div className="h-px w-12 bg-gold-300" />
              </div>
              <p className="font-serif text-3xl text-warm-900 font-light mb-3">
                Thank you!
              </p>
              <p className="text-warm-600 text-base leading-relaxed">
                We&apos;ve received your RSVP 💛
                <br />
                We can&apos;t wait to celebrate with you.
              </p>
            </div>
          )}

          {/* ── Form ────────────────────────────────────── */}
          {status !== "success" && (
            <>
              <p className="text-center text-warm-600 mb-8 text-base leading-relaxed">
                We can&apos;t wait to celebrate with you! Please let us know
                if you&apos;ll be joining us.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-gold-200 rounded shadow-sm p-6 md:p-8 space-y-6"
              >
                {/* Full Name */}
                <div>
                  <label className={labelClass}>
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={set("fullName")}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={inputClass}
                  />
                  <FieldError msg={errors.fullName} />
                </div>

                {/* Attending */}
                <div>
                  <label className={labelClass}>
                    Will you be attending? <span className="text-red-400">*</span>
                  </label>
                  <div className="flex gap-3">
                    {["Yes", "No"].map((opt) => {
                      const selected = form.attending === opt;
                      return (
                        <label
                          key={opt}
                          className={`flex-1 text-center py-3 rounded border cursor-pointer text-sm font-medium transition-colors duration-200 select-none ${
                            selected
                              ? "bg-gold-400 border-gold-400 text-white"
                              : "bg-white border-gold-200 text-warm-700 hover:border-gold-300 hover:bg-champagne-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="attending"
                            value={opt}
                            checked={selected}
                            onChange={set("attending")}
                            className="sr-only"
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                  <FieldError msg={errors.attending} />
                </div>

                {/* Dietary restrictions */}
                <div>
                  <label className={labelClass}>
                    Dietary Restrictions / Allergies
                    <span className="ml-2 font-normal normal-case tracking-normal text-warm-400 text-[10px]">
                      optional
                    </span>
                  </label>
                  <input
                    type="text"
                    value={form.dietary}
                    onChange={set("dietary")}
                    placeholder="e.g. vegetarian, nut allergy"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>
                    Message / Well-Wishes
                    <span className="ml-2 font-normal normal-case tracking-normal text-warm-400 text-[10px]">
                      optional
                    </span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Leave a note for the couple…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className={labelClass}>
                    Contact Number or Email
                    <span className="ml-2 font-normal normal-case tracking-normal text-warm-400 text-[10px]">
                      optional
                    </span>
                  </label>
                  <input
                    type="text"
                    value={form.contact}
                    onChange={set("contact")}
                    placeholder="So we can reach you if needed"
                    autoComplete="email tel"
                    className={inputClass}
                  />
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <div className="text-sm text-warm-600 bg-champagne-100 border border-gold-200 rounded px-4 py-3">
                    Trouble submitting? Contact us directly — we&apos;d love to
                    hear from you!
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 text-sm tracking-widest uppercase font-semibold rounded border transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed bg-gold-500 border-gold-500 text-white hover:bg-gold-600 hover:border-gold-600"
                >
                  {status === "submitting" ? "Sending…" : "Send RSVP"}
                </button>
              </form>
            </>
          )}
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default RSVP;
