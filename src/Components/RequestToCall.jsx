import React, { useState } from "react";
import "../Pages/Css/RequestToCall.css";

const CATEGORIES = [
  {
    id: "plumbing",
    name: "Plumbing",
    items: [
      "Tap & Faucet Repair",
      "Bathroom Fitting",
      "Water Leakage Repair",
      "Toilet Repair & Installation",
      "Drain & Pipe Blockage",
      "Pipe Repair / Replacement",
      "Water Tank Service",
      "Geyser Plumbing Connection",
    ],
  },
  { id: "electrical", name: "Electrical", items: ["Light & Fan", "Switch & Socket", "Wiring & Power", "MCB / Fuse", "Inverter & Battery"] },
  { id: "cleaning", name: "Cleaning", items: ["Home Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Carpet Cleaning", "Garden Cleaning", "Window & Door Cleaning"] },
  { id: "appliance", name: "Appliance Repair", items: ["AC Repair", "Refrigerator Repair", "Washing Machine Repair", "TV Repair", "Microwave Repair", "Cooler Service", "RO Repair", "Mixer & Grinder Repair"] },
  { id: "vehicle", name: "Vehicle Service", items: ["Clutch & Brake Repair", "Engine Repair", "Tyre & Wheel Repair", "Washing", "Battery Charging", "Road Side Assistance (Emergency)"] },
  { id: "pest", name: "Pest Control", items: ["Cockroach Control", "Termite Control", "Mosquito Control", "Ant Control", "Mouse Control"] },
  { id: "moving", name: "Moving & Shifting", items: ["Transport Only", "Workers Only", "Transport & Workers"] },
  { id: "tech", name: "Tech Services", items: ["Laptop Repair", "Mobile Repair", "Website Repair", "Wi-Fi Repair", "Software Installation"] },
];

const CITIES = ["Mirzapur","Raebareli", "Lucknow", "Kanpur", "Prayagraj", "Varanasi", "Ayodhya", "Gorakhpur", "Sultanpur", "Amethi", "Barabanki", "Unnao", "Pratapgarh"];


const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

function Icon({ name, className = "icon" }) {
  const paths = {
    shield: <><path {...S} d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" /><path {...S} d="m9 12 2 2 4-4" /></>,
    rupee: <><circle {...S} cx="12" cy="12" r="9" /><path {...S} d="M9 8h6M9 11h6M13 8c1.7 0 3 1.3 3 3s-1.3 3-3 3H9l5 4" /></>,
    badge: <><circle {...S} cx="12" cy="9" r="5" /><path {...S} d="m8 13-1 8 5-3 5 3-1-8" /></>,
    phone: <><path {...S} d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" /></>,
    check: <><path {...S} d="m5 12 5 5L19 7" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  BOOKING SECTION                                                    */
/* ------------------------------------------------------------------ */

export default function BookingSection({ phone = "+91 90000 00000" }) {
  const [preset, setPreset] = useState(CATEGORIES[0].name);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: CITIES[0], when: "Today" });

  const submit = () => {
    if (!form.name.trim() || form.phone.replace(/\D/g, "").length < 10) return;
    setSent(true);
  };

  const telHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <section id="book" className="booking">
      <div className="booking__glow" />

      <div className="booking__grid">
        {/* left column */}
        <div>
          <p className="booking__kicker">
            <span className="booking__kicker-dot" />
            Book in a minute
          </p>

          <h2 className="booking__heading">
            Naam aur number dijiye. Baaki hum sambhaal lenge.
          </h2>

          <p
          className="booking__subtext">
            Callback 10 minute ke andar. Hum problem samajh kar exact rate batayenge,
            phir aap slot choose kar lijiye.
          </p>

          <div className="booking__perks">
            {[
              ["shield", "ID-verified professionals only"],
              ["rupee", "No advance payment, no hidden charges"],
              ["badge", "30-day warranty on every repair"],
            ].map(([ic, t]) => (
              <div key={t} className="booking__perk">
                <span className="booking__perk-icon">
                  <Icon name={ic} className="icon icon--sm" />
                </span>
                {t}
              </div>
            ))}
          </div>

          <div className="booking__call">
            <p className="booking__call-label">Ya seedha call kar lijiye</p>
            <a href={telHref} className="booking__call-link">
              <Icon name="phone" className="icon icon--md" /> {phone}
            </a>
          </div>
        </div>

        {/* right column — form card */}
        <div className="booking__card">
          {sent ? (
            <div className="booking__success">
              <span className="booking__success-icon">
                <Icon name="check" className="icon icon--lg" />
              </span>
              <h3 className="booking__success-title">Request received</h3>
              <p className="booking__success-text">
                Hamari team {form.phone} par 10 minute ke andar call karegi.
                <br />
               Reference: SH-{Math.floor(1000 + Math.random() * 9000)}
              </p>
              <button onClick={() => setSent(false)} className="booking__link-btn">
                Book another service
              </button>
            </div>
          ) : (
            <>
              <h3 className="booking__card-title">Request a callback</h3>
              <p className="booking__card-subtitle">Free. Koi advance payment nahi.</p>

              <div className="booking__form">
                <div className="field">
                  <label className="field__label" htmlFor="sh-name">Your name</label>
                  <input
                    id="sh-name"
                    className="field__input"
                    value={form.name}
                    placeholder="Ravi Kumar"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="field-row">
                  <div className="field">
                    <label className="field__label" htmlFor="sh-phone">Mobile number</label>
                    <input
                      id="sh-phone"
                      className="field__input"
                      value={form.phone}
                      placeholder="98XXXXXXXX"
                      inputMode="tel"
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="sh-city">City</label>
                    <select
                      id="sh-city"
                      className="field__input"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    >
                      {CITIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="sh-service">Service needed</label>
                  <select
                    id="sh-service"
                    className="field__input"
                    value={preset}
                    onChange={(e) => setPreset(e.target.value)}
                  >
                    {CATEGORIES.map((c) => (
                      <optgroup key={c.id} label={c.name}>
                        <option value={c.name}>{c.name} — not sure
                            which</option>
                        {c.items.map((i) => (
                          <option key={i} value={`${c.name} — ${i}`}>{i}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <span className="field__label">When do you need it?</span>
                  <div className="chip-row">
                    {["Now (emergency)", "Today", "Tomorrow", "Pick a date"].map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setForm({ ...form, when: w })}
                        className={`chip ${form.when === w ? "chip--active" : ""}`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="button" onClick={submit} className="btn-submit">
                  Request callback
                </button>
                <p className="booking__disclaimer">
                  Aapka number sirf is booking ke liye use hoga.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
