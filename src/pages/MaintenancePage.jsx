// import React from "react";

// export default function MaintenancePage() {
//   return (
//     <main className="min-h-screen bg-[#071A2B] text-white flex items-center justify-center px-6">
//       <div className="w-full max-w-4xl text-center">
//         <div className="mb-10">
//           <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium tracking-[0.2em] uppercase text-white/80">
//             Site en maintenance
//           </span>
//         </div>

//         <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
//           Nous préparons
//           <span className="block text-[#C9A227]">
//             quelque chose de nouveau.
//           </span>
//         </h1>

//         <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
//           Le site officiel de JUA est actuellement en pleine transformation.
//           Nous travaillons à vous offrir une expérience universitaire plus
//           moderne, plus élégante et plus intuitive.
//         </p>

//         <div className="mx-auto mt-12 flex max-w-md items-center gap-3">
//           <div className="h-px flex-1 bg-white/15" />
//           <div className="h-2 w-2 rounded-full bg-[#C9A227]" />
//           <div className="h-px flex-1 bg-white/15" />
//         </div>

//         <p className="mt-8 text-sm text-white/40">Université JUA</p>
//       </div>
//     </main>
//   );
// }

import React from "react";

export default function MaintenancePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#061321] px-5 py-10 text-white sm:px-8 lg:px-12">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue ambient glow */}
        <div className="absolute -left-48 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#0B5EA8]/20 blur-[130px]" />

        {/* Gold ambient glow */}
        <div className="absolute -bottom-56 -right-48 h-[36rem] w-[36rem] rounded-full bg-[#C9A227]/10 blur-[140px]" />

        {/* Central light */}
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17477A]/10 blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,11,20,0.35)_55%,rgba(3,11,20,0.92)_100%)]" />

        {/* Top subtle line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        {/* Bottom subtle line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* =========================================================
          DECORATIVE CORNERS
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-5 hidden h-24 w-24 border-l border-t border-white/10 sm:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 hidden h-24 w-24 border-b border-r border-white/10 sm:block"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* =====================================================
              BRAND
          ===================================================== */}
          <div className="mb-9 flex justify-center sm:mb-11">
            <div className="relative flex items-center justify-center">
              {/* Logo glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-full bg-[#C9A227]/10 blur-3xl"
              />

              {/* Logo container */}
              <div className="relative flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-4 shadow-2xl shadow-black/20 backdrop-blur-md sm:min-h-24 sm:px-8 lg:min-h-28">
                <img
                  src="/logos/images.jpg"
                  alt="Université JUA"
                  className="relative h-16 w-auto object-contain sm:h-20 lg:h-24"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              STATUS BADGE
          ===================================================== */}
          <div className="mb-7 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E2C866] shadow-lg shadow-black/10 backdrop-blur-md sm:px-5 sm:text-[11px]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A227] opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C9A227]" />
              </span>
              Maintenance en cours
            </div>
          </div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}
          <h1 className="text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[5.25rem]">
            Une nouvelle expérience
            <span className="mt-2 block bg-gradient-to-r from-[#C9A227] via-[#E5CD72] to-[#B18A18] bg-clip-text text-transparent">
              prend forme.
            </span>
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-300/75 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            Le site officiel de l’Université JUA est actuellement en
            maintenance. Nos équipes travaillent à mettre en place une
            plateforme plus moderne, plus performante et plus intuitive.
          </p>

          {/* =====================================================
              STATUS CARD
          ===================================================== */}
          <div className="mx-auto mt-10 max-w-xl sm:mt-11">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
              {/* Top shine */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent"
              />

              {/* Side accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-[#C9A227]/30 to-transparent"
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C9A227]/20 bg-[#C9A227]/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 text-[#D7B84C]"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l2.5 2.5"
                    />
                    <circle cx="12" cy="12" r="8.5" />
                  </svg>
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white sm:text-[15px]">
                    Plateforme temporairement indisponible
                  </p>

                  <p className="mt-1.5 text-sm leading-6 text-slate-400">
                    Les services en ligne seront de nouveau accessibles dès que
                    la maintenance sera terminée.
                  </p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <span>Intervention technique</span>
                  <span className="text-[#C9A227]">En cours</span>
                </div>

                <div
                  className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
                  role="progressbar"
                  aria-label="Progression de la maintenance"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="66">
                  <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-[#9E7A14] via-[#C9A227] to-[#E5CD72]" />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              ACTION
          ===================================================== */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleRefresh}
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:border-[#C9A227]/30 hover:bg-white/[0.09] hover:shadow-[#C9A227]/5 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50 focus:ring-offset-2 focus:ring-offset-[#061321]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 text-[#D7B84C] transition-transform duration-500 group-hover:rotate-180"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4"
                />
              </svg>

              <span>Vérifier à nouveau</span>
            </button>
          </div>

          {/* =====================================================
              SEPARATOR
          ===================================================== */}
          <div className="mx-auto mt-12 flex max-w-xs items-center gap-4 sm:mt-14">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute h-5 w-5 rounded-full border border-[#C9A227]/20"
              />

              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#C9A227]"
              />
            </div>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* =====================================================
              FOOTER
          ===================================================== */}
          <footer className="mt-8 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-xs">
              Université JUA
            </p>

            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-600">
              Faire briller les savoirs, les personnes et les communautés.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-700">
              <span className="h-1 w-1 rounded-full bg-[#C9A227]/50" />
              <span>Excellence • Innovation • Formation</span>
              <span className="h-1 w-1 rounded-full bg-[#C9A227]/50" />
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
