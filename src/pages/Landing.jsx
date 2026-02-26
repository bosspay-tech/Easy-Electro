import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ---------- DATA ---------- */

const HERO_BANNERS = [
  // Replace with your own banners anytime
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1800&auto=format&fit=crop",
];

const COLLECTIONS = [
  {
    title: "Sensors",
    desc: "Sensors, tramitting and receiveng essentials",
    tag: "sensor",
    badge: "Popular",
    imageUrl:
      "https://images.unsplash.com/photo-1645760051467-9d61131d133e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "PCBs & Prototyping",
    desc: "Perfboards, PCBs, soldering essentials",
    tag: "pcb",
    badge: "Popular",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681426694953-4d78658193dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Motors",
    desc: "Motors, gears & more",
    tag: "motor",
    badge: "Popular",
    imageUrl:
      "https://images.unsplash.com/photo-1596213812143-ff89bd9ddecd?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ICs & Logic Gates",
    desc: "ICs, 74xx, CMOS, MCUs & more",
    tag: "ic-gates",
    badge: "Hot",
    imageUrl:
      "https://images.unsplash.com/photo-1755016388713-299f23eaa50a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pumps",
    desc: "Pumping essentials",
    tag: "pumps",
    badge: "Hot",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661899234637-db46d5a216de?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Connectors & Cables",
    desc: "Headers, JST, terminal blocks",
    tag: "connector",
    badge: "Stocked",
    imageUrl:
      "https://images.unsplash.com/photo-1676545228854-076b6dd0c86a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Your provided data:
const TYPE_DATA = [
  { type: "Sensor" },
  { type: "Pump" },
  { type: "Optoelectronics" },
  { type: "Motor" },
  { type: "Connector" },
];

/* ---------- PAGE ---------- */

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO SLIDER */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-65 w-full sm:h-90 md:h-130"
        >
          {HERO_BANNERS.map((src, idx) => (
            <SwiperSlide key={src}>
              <div className="relative h-full w-full">
                <img
                  src={src}
                  alt={`Hero banner ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />

                {/* dark overlay + subtle tech gradient */}
                <div className="pointer-events-none absolute inset-0 bg-black/55" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-cyan-500/10 via-transparent to-violet-500/10" />

                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="max-w-xl">
                      <p className="mb-2 text-sm font-semibold tracking-wide text-slate-200/90">
                        PCBs • ICs • Sensors • Connectors
                      </p>

                      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Electronics parts for builders & pros.
                      </h2>

                      <p className="mt-3 max-w-lg text-sm text-slate-200/80">
                        Genuine components, fast dispatch, and everything you
                        need for your next circuit.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          to="/products"
                          className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
                        >
                          Shop components
                        </Link>

                        <Link
                          to="/products/?category=pcb"
                          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10"
                        >
                          Browse PCBs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
          <TrustItem
            title="Genuine components"
            desc="Quality checked inventory."
            icon="✅"
          />
          <TrustItem
            title="Fast dispatch"
            desc="Quick packing & shipping."
            icon="⚡"
          />
          <TrustItem
            title="Secure payments"
            desc="Safe checkout & invoices."
            icon="🔒"
          />
        </div>
      </section>

      {/* SHOP BY TYPE (your specific data) */}
      <section className="bg-linear-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Shop by type
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Jump straight into the parts you need.
              </p>
            </div>

            <Link
              to="/products"
              className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {TYPE_DATA.map((t) => (
              <TypeCard key={t.type} type={t.type} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="bg-linear-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Featured collections
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Curated categories for fast shopping.
              </p>
            </div>

            <Link
              to="/products"
              className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 hover:underline"
            >
              View all products →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {COLLECTIONS.map((c) => (
              <CollectionCard
                key={c.tag}
                title={c.title}
                desc={c.desc}
                tag={c.tag}
                badge={c.badge}
                imageUrl={c.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TECH HERO */}
      <section className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
              ⚙️ Components for every build
            </span>

            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Build, test, ship — faster.
            </h1>

            <p className="mt-4 max-w-xl text-base text-slate-200/75">
              From logic gates to optoelectronics, find the parts that keep your
              circuits reliable and your prototyping smooth.
            </p>

            <div className="mt-7">
              <Link
                to="/products"
                className="inline-flex rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:ring-4 focus:ring-cyan-500/30"
              >
                Explore catalog
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PreviewCard title="ICs & Gates" subtitle="Logic, MCU, drivers" />
            <PreviewCard title="Sensors" subtitle="Temp, motion, gas, more" />
            <PreviewCard
              title="Connectors"
              subtitle="Headers, JST, terminals"
            />
            <PreviewCard title="Fast Dispatch" subtitle="Packed with care" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-linear-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-10 text-white sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">Need parts for a project?</h3>
                <p className="mt-1 text-sm text-slate-200/75">
                  Browse ICs, PCBs, connectors, motors, and more.
                </p>
              </div>

              <Link
                to="/products"
                className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function PreviewCard({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs text-slate-200/70">{subtitle}</p>
    </div>
  );
}

function TrustItem({ title, desc, icon }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
        <span>{icon}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-slate-200/70">{desc}</p>
      </div>
    </div>
  );
}

function TypeCard({ type }) {
  const icon = getTypeIcon(type);

  return (
    <Link
      to={`/products/?type=${encodeURIComponent(type)}`}
      className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/10 text-lg">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{type}</p>
          <p className="mt-0.5 text-xs text-slate-200/70">Browse →</p>
        </div>
      </div>
    </Link>
  );
}

function CollectionCard({ title, desc, tag, badge, imageUrl }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
      <div className="relative h-44">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/60" />

        <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-950">
          {badge}
        </span>
      </div>

      <div className="p-5">
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-slate-200/70">{desc}</p>

        <Link
          to={`/products/?type=${encodeURIComponent(tag)}`}
          className="mt-4 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200 hover:underline"
        >
          Shop collection →
        </Link>
      </div>
    </div>
  );
}

/* ---------- HELPERS ---------- */

function getTypeIcon(type) {
  const t = String(type || "").toLowerCase();
  if (t.includes("sensor")) return "🧪";
  if (t.includes("pump")) return "💧";
  if (t.includes("opto")) return "💡";
  if (t.includes("motor")) return "⚙️";
  if (t.includes("connector")) return "🔌";
  return "📦";
}
