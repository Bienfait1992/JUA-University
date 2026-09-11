import React from "react";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#071A2B] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium tracking-[0.2em] uppercase text-white/80">
            Site en maintenance
          </span>
        </div>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
          Nous préparons
          <span className="block text-[#C9A227]">
            quelque chose de nouveau.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
          Le site officiel de JUA est actuellement en pleine transformation.
          Nous travaillons à vous offrir une expérience universitaire plus
          moderne, plus élégante et plus intuitive.
        </p>

        <div className="mx-auto mt-12 flex max-w-md items-center gap-3">
          <div className="h-px flex-1 bg-white/15" />
          <div className="h-2 w-2 rounded-full bg-[#C9A227]" />
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <p className="mt-8 text-sm text-white/40">Université JUA</p>
      </div>
    </main>
  );
}
