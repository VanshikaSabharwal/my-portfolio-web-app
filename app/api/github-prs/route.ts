import { NextResponse } from "next/server";

const GITHUB_USERNAME = "VanshikaSabharwal";
const GITHUB_QUERY = `is:pr is:merged author:${GITHUB_USERNAME} archived:false`;

export async function GET() {
  try {
    const url = `https://api.github.com/search/issues?q=${encodeURIComponent(
      GITHUB_QUERY
    )}&sort=updated&order=desc&per_page=100`;

    const headers: Record<string, string> = {
      "User-Agent": "nextjs-app",
      Accept: "application/vnd.github+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers });

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        {
          error: `GitHub API request failed with ${response.status}: ${errorBody}`,
        },
        { status: response.status }
      );
    }

    const payload = await response.json();
    const items = Array.isArray(payload.items) ? payload.items : [];
    const orgMap = new Map<string, { name: string; prs: Array<{ title: string; number: number; url: string; merged_at?: string }> }>();

    for (const item of items) {
      if (!item?.repository_url || !item?.html_url) continue;
      const repoSegments = item.repository_url.split("/");
      const org = repoSegments[repoSegments.length - 2];
      if (!org) continue;

      if (!orgMap.has(org)) {
        orgMap.set(org, {
          name: org,
          prs: [],
        });
      }

      const orgData = orgMap.get(org)!;
      orgData.prs.push({
        title: item.title ?? "Untitled PR",
        number: item.number,
        url: item.html_url,
        merged_at: item.pull_request?.merged_at ?? item.closed_at,
      });
    }

    return NextResponse.json(Array.from(orgMap.values()));
  } catch (error) {
    console.error("GitHub PR API error", error);
    return NextResponse.json(
      { error: "Failed to load GitHub PRs from GitHub API." },
      { status: 500 }
    );
  }
}
