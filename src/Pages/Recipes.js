import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RECIPES, ALL_INGREDIENTS, TAGS } from "../data/recipes";

const KEY = "naturix_pantry";
const norm = (s) => s.toLowerCase().trim().replace(/\s+/g, " ").replace(/(es|s)$/, (m, a, off, str) => (str.length > 4 ? "" : m));
const same = (a, b) => norm(a) === norm(b) || (norm(a).length > 3 && (norm(b).includes(norm(a)) || norm(a).includes(norm(b))));

function rank(pantry, tag, maxMin) {
  return RECIPES.filter((r) => (!tag || r.tags.includes(tag)) && (!maxMin || r.min <= maxMin))
    .map((r) => {
      const have = r.ingredients.filter((i) => pantry.some((p) => same(p, i)));
      const missing = r.ingredients.filter((i) => !have.includes(i));
      return { ...r, have, missing, score: pantry.length ? have.length / r.ingredients.length : 0 };
    })
    .filter((r) => !pantry.length || r.have.length > 0)
    .sort((a, b) => b.score - a.score || a.missing.length - b.missing.length || a.min - b.min);
}

export default function Recipes() {
  const [pantry, setPantry] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } });
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [maxMin, setMaxMin] = useState(0);
  const [open, setOpen] = useState(null);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(pantry)); } catch {} }, [pantry]);
  useEffect(() => { document.title = "Recipe Recommender | Naturix"; }, []);
  useEffect(() => { const h = (e) => e.key === "Escape" && setOpen(null); window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, []);

  const results = useMemo(() => rank(pantry, tag, maxMin), [pantry, tag, maxMin]);
  const add = (v) => { v = v.trim().toLowerCase(); if (v && !pantry.includes(v) && pantry.length < 30) setPantry([...pantry, v]); setText(""); };
  const suggestions = text ? ALL_INGREDIENTS.filter((i) => i.includes(text.toLowerCase()) && !pantry.includes(i)).slice(0, 6) : [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-teal-700 text-lg">Naturix</Link>
          <span className="text-sm text-slate-500">AI Recipe Recommender</span>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900">What can you cook today?</h1>
        <p className="mt-2 text-slate-600">Add the ingredients you have. Naturix ranks recipes by how much of each one you already own and shows what is missing.</p>

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm border border-slate-200" aria-label="Your pantry">
          <form onSubmit={(e) => { e.preventDefault(); add(text); }} className="flex gap-2">
            <label htmlFor="ing" className="sr-only">Add an ingredient</label>
            <input id="ing" value={text} onChange={(e) => setText(e.target.value)} list="ing-list" autoComplete="off" placeholder="Type an ingredient, e.g. chicken" className="flex-1 rounded-full border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <datalist id="ing-list">{ALL_INGREDIENTS.map((i) => <option key={i} value={i} />)}</datalist>
            <button className="rounded-full bg-teal-600 px-5 py-2 text-white font-semibold hover:bg-teal-700">Add</button>
          </form>
          {suggestions.length > 0 && <div className="mt-2 flex flex-wrap gap-2">{suggestions.map((s) => <button key={s} type="button" onClick={() => add(s)} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-700">+ {s}</button>)}</div>}
          <div className="mt-3 flex flex-wrap gap-2" aria-live="polite">
            {pantry.map((p) => <span key={p} className="inline-flex items-center gap-1 rounded-full bg-teal-600 px-3 py-1 text-sm text-white">{p}<button type="button" aria-label={"Remove " + p} onClick={() => setPantry(pantry.filter((x) => x !== p))} className="ml-1 font-bold">x</button></span>)}
            {pantry.length === 0 && <span className="text-sm text-slate-500">No ingredients yet. Try: <button type="button" className="underline text-teal-700" onClick={() => setPantry(["chicken", "pasta", "garlic", "tomato"])}>chicken, pasta, garlic, tomato</button></span>}
            {pantry.length > 0 && <button type="button" onClick={() => setPantry([])} className="text-sm text-slate-500 underline">Clear all</button>}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span className="text-sm text-slate-500">Diet:</span>
            {["", ...TAGS].map((t) => <button key={t || "any"} type="button" onClick={() => setTag(t)} aria-pressed={tag === t} className={"rounded-full px-3 py-1 text-sm border " + (tag === t ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300")}>{t || "any"}</button>)}
            <label className="ml-auto text-sm text-slate-600">Max time
              <select value={maxMin} onChange={(e) => setMaxMin(+e.target.value)} className="ml-2 rounded-lg border border-slate-300 px-2 py-1"><option value={0}>any</option><option value={15}>15 min</option><option value={30}>30 min</option><option value={45}>45 min</option></select>
            </label>
          </div>
        </section>

        <p className="mt-6 text-sm text-slate-500" aria-live="polite">{results.length} recipe{results.length === 1 ? "" : "s"}{pantry.length ? " matched" : ""}</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <button key={r.id} onClick={() => setOpen(r)} className="flex flex-col justify-start text-left rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-teal-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-semibold text-slate-900">{r.name}</h2>
                {pantry.length > 0 && <span className="shrink-0 rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">{Math.round(r.score * 100)}%</span>}
              </div>
              <p className="mt-1 text-sm text-slate-500">{r.min} min · {r.kcal} kcal · {r.protein}g protein</p>
              {pantry.length > 0 && <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100"><div className="h-1.5 rounded-full bg-teal-500" style={{ width: Math.round(r.score * 100) + "%" }} /></div>}
              <p className="mt-3 text-sm text-slate-600">{pantry.length ? (r.missing.length ? "Missing: " + r.missing.join(", ") : "You have everything") : r.ingredients.join(", ")}</p>
              {r.tags.length > 0 && <div className="mt-3 flex flex-wrap gap-1">{r.tags.map((t) => <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{t}</span>)}</div>}
            </button>
          ))}
        </div>
        {results.length === 0 && <p className="mt-10 text-center text-slate-500">Nothing matches yet. Add more ingredients or relax the filters.</p>}
      </main>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.name} className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4" onClick={() => setOpen(null)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg max-h-[90vh] overflow-auto rounded-t-3xl sm:rounded-3xl bg-white p-6">
            <div className="flex justify-between gap-3"><h2 className="text-2xl font-bold">{open.name}</h2><button autoFocus aria-label="Close" onClick={() => setOpen(null)} className="text-2xl leading-none text-slate-500">x</button></div>
            <p className="mt-1 text-slate-500">{open.min} minutes</p>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-sm">
              {[["kcal", open.kcal], ["protein", open.protein + "g"], ["carbs", open.carbs + "g"], ["fat", open.fat + "g"]].map(([k, v]) => <div key={k} className="rounded-xl bg-slate-50 p-2"><div className="font-bold text-slate-900">{v}</div><div className="text-xs text-slate-500">{k}</div></div>)}
            </div>
            <h3 className="mt-5 font-semibold">Ingredients</h3>
            <ul className="mt-2 flex flex-wrap gap-2">{open.ingredients.map((i) => { const has = pantry.some((p) => same(p, i)); return <li key={i} className={"rounded-full px-3 py-1 text-sm " + (has ? "bg-teal-100 text-teal-800" : "bg-slate-100 text-slate-600")}>{has ? "✓ " : ""}{i}</li>; })}</ul>
            <h3 className="mt-5 font-semibold">Steps</h3>
            <ol className="mt-2 list-decimal pl-5 space-y-1 text-slate-700">{open.steps.map((s, i) => <li key={i}>{s}.</li>)}</ol>
          </div>
        </div>
      )}
    </div>
  );
}
