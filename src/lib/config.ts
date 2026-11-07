// Central place for the event details. Edit here to change dates, venue, photos, etc.
export const EVENT = {
  // 7:00 PM Cairo time (Egypt is on UTC+2 winter time in November)
  dateISO: "2026-11-27T19:00:00+02:00",
  durationHours: 4,
  year: 2026,
  month: 11, // November (1-12)
  day: 27,
  venueQuery: "Beau Jardin East طريق اسماععليه الصحراوي الشروق",
  venueCoordinates: "30.1863125,31.6303125",
  mapUrl: "https://maps.app.goo.gl/veJJdXhNd8zaiqjA6",
  rsvpFormUrl: "https://forms.gle/ooPaV7Hp8M71914b7",
  dressColors: ["#800020", "#FFFFFF"],
  heroPhoto: "/Images/hero.jpg",
};

export const MUSIC = {
  url: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/watch?v=vrwVkS_bT8c",
  start: Number(process.env.NEXT_PUBLIC_MUSIC_START || 33),
  end: process.env.NEXT_PUBLIC_MUSIC_END ? Number(process.env.NEXT_PUBLIC_MUSIC_END) : undefined,
};

export function youtubeId(url: string): string | null {
  const m =
    url.match(/youtu\.be\/([\w-]{11})/) ||
    url.match(/[?&]v=([\w-]{11})/) ||
    url.match(/youtube\.com\/(?:embed|shorts|live)\/([\w-]{11})/);
  if (m) return m[1];
  return /^[\w-]{11}$/.test(url) ? url : null;
}
