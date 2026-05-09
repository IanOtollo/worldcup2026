import { Match, Standing, Team, Scorer } from "@/types/football";

const BASE = "https://api.football-data.org/v4";
const HEADERS = { "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY || "" };
const WC_ID = 2000;

export async function getCompetition() {
  try {
    const res = await fetch(`${BASE}/competitions/${WC_ID}`, {
      headers: HEADERS,
      next: { revalidate: 3600 }
    });
    return await res.json();
  } catch (error) {
    console.error("getCompetition error:", error);
    return null;
  }
}

export async function getFixtures(params?: { matchday?: number; status?: string }) {
  let url = `${BASE}/competitions/${WC_ID}/matches`;
  const query = new URLSearchParams();
  if (params?.matchday) query.append("matchday", params.matchday.toString());
  if (params?.status) query.append("status", params.status);
  
  if (query.toString()) url += `?${query.toString()}`;

  try {
    const res = await fetch(url, {
      headers: HEADERS,
      next: { revalidate: 60 }
    });
    const data = await res.json();
    return (data.matches as Match[]) || [];
  } catch (error) {
    console.error("getFixtures error:", error);
    return [];
  }
}

export async function getLiveMatches() {
  try {
    const res = await fetch(`${BASE}/matches?competitions=${WC_ID}`, {
      headers: HEADERS,
      next: { revalidate: 0 } // Always fresh
    });
    const data = await res.json();
    const liveStatuses = ["IN_PLAY", "PAUSED"];
    return (data.matches as Match[]).filter(m => liveStatuses.includes(m.status)) || [];
  } catch (error) {
    console.error("getLiveMatches error:", error);
    return [];
  }
}

export async function getStandings() {
  try {
    const res = await fetch(`${BASE}/competitions/${WC_ID}/standings`, {
      headers: HEADERS,
      next: { revalidate: 60 }
    });
    const data = await res.json();
    return (data.standings as Standing[]) || [];
  } catch (error) {
    console.error("getStandings error:", error);
    return [];
  }
}

export async function getTeams() {
  try {
    const res = await fetch(`${BASE}/competitions/${WC_ID}/teams`, {
      headers: HEADERS,
      next: { revalidate: 3600 }
    });
    const data = await res.json();
    return (data.teams as Team[]) || [];
  } catch (error) {
    console.error("getTeams error:", error);
    return [];
  }
}

export async function getTeam(id: number) {
  try {
    const res = await fetch(`${BASE}/teams/${id}`, {
      headers: HEADERS,
      next: { revalidate: 3600 }
    });
    return (await res.json()) as Team;
  } catch (error) {
    console.error("getTeam error:", error);
    return null;
  }
}

export async function getScorers(limit = 20) {
  try {
    const res = await fetch(`${BASE}/competitions/${WC_ID}/scorers?limit=${limit}`, {
      headers: HEADERS,
      next: { revalidate: 60 }
    });
    const data = await res.json();
    return (data.scorers as Scorer[]) || [];
  } catch (error) {
    console.error("getScorers error:", error);
    return [];
  }
}
