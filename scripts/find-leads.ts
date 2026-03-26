import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";

// ============================================================
// E-KNOCK OUTREACH LEAD FINDER
// Finds Catholic youth ministers, parish contacts, and
// conference organizers for booking inquiries.
//
// Usage:
//   ANTHROPIC_API_KEY=sk-ant-... npx tsx scripts/find-leads.ts
//
// Optional env vars:
//   SEARCH_REGIONS - comma-separated list of regions to search
//     (default: nationwide)
//   MAX_SEARCHES - max number of search rounds (default: 15)
// ============================================================

const client = new Anthropic();

const SEARCH_QUERIES = [
  // Youth Ministry Directors
  "Catholic youth ministry director contact email parish",
  "Catholic diocese youth ministry coordinator contact 2024 2025",
  "Catholic youth minister parish email United States",

  // Conferences & Events
  "Catholic youth conference organizer contact email 2026",
  "SEEK conference Catholic booking artist performer contact",
  "Steubenville youth conference booking entertainment",
  "Catholic young adult event coordinator parish email",
  "National Catholic Youth Conference NCYC contact booking",

  // Parish event coordinators
  "Catholic parish event coordinator booking music artist",
  "Catholic campus ministry university chaplain contact email",
  "Catholic high school retreat coordinator contact",

  // Diocesan contacts
  "Catholic diocese office of youth and young adult ministry contact",
  "Catholic archdiocese youth ministry office email directory",

  // Catholic media & influencer contacts
  "Catholic conference speaker booking agent contact",
  "Catholic music festival organizer contact email",
];

interface Lead {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  type: string;
  notes: string;
}

async function searchForLeads(): Promise<Lead[]> {
  const maxSearches = parseInt(process.env.MAX_SEARCHES || "15");
  const regions = process.env.SEARCH_REGIONS?.split(",").map((r) => r.trim());

  let queries = SEARCH_QUERIES.slice(0, maxSearches);
  if (regions) {
    const regionQueries: string[] = [];
    for (const q of queries) {
      for (const region of regions) {
        regionQueries.push(`${q} ${region}`);
      }
    }
    queries = regionQueries.slice(0, maxSearches);
  }

  console.log(`\n🔍 Running ${queries.length} search queries...\n`);

  const allLeads: Lead[] = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    console.log(`[${i + 1}/${queries.length}] Searching: "${query}"`);

    try {
      const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        tools: [
          {
            type: "web_search_20250305",
            name: "web_search",
            max_uses: 3,
          },
        ],
        messages: [
          {
            role: "user",
            content: `Search the web for: "${query}"

Your goal is to find REAL contact information for Catholic youth ministers, parish event coordinators, diocesan youth ministry offices, Catholic conference organizers, or Catholic school retreat coordinators.

For each contact you find, extract:
- Name (if available)
- Title/Role
- Organization (parish, diocese, school, conference name)
- Email address
- Phone number (if available)
- Website URL
- Location (city, state)
- Type: one of [Youth Minister, Parish Coordinator, Diocese Office, Conference Organizer, Campus Ministry, School, Other]
- Notes (any relevant context)

IMPORTANT: Only include contacts where you found a REAL email address or phone number. Do not make up or guess contact info.

Return your findings as a JSON array of objects with these fields: name, title, organization, email, phone, website, location, type, notes

If you find no valid contacts with real contact info, return an empty array: []

Return ONLY the JSON array, no other text.`,
          },
        ],
      });

      // Extract text from response
      let text = "";
      for (const block of response.content) {
        if (block.type === "text") {
          text += block.text;
        }
      }

      // Parse JSON from response
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        try {
          const leads: Lead[] = JSON.parse(jsonMatch[0]);
          const validLeads = leads.filter((l) => l.email || l.phone);
          if (validLeads.length > 0) {
            console.log(`   ✓ Found ${validLeads.length} leads`);
            allLeads.push(...validLeads);
          } else {
            console.log(`   — No leads with contact info`);
          }
        } catch {
          console.log(`   — Could not parse results`);
        }
      } else {
        console.log(`   — No structured results`);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Unknown error";
      console.log(`   ✗ Error: ${message}`);
    }

    // Small delay between requests
    if (i < queries.length - 1) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  return allLeads;
}

function deduplicateLeads(leads: Lead[]): Lead[] {
  const seen = new Set<string>();
  return leads.filter((lead) => {
    const key = (lead.email || lead.phone || "").toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function leadsToCSV(leads: Lead[]): string {
  const headers = [
    "Name",
    "Title",
    "Organization",
    "Email",
    "Phone",
    "Website",
    "Location",
    "Type",
    "Notes",
  ];

  const escapeCSV = (val: string) => {
    if (!val) return "";
    if (val.includes(",") || val.includes('"') || val.includes("\n")) {
      return `"${val.replace(/"/g, '""')}"`;
    }
    return val;
  };

  const rows = leads.map((l) =>
    [
      l.name,
      l.title,
      l.organization,
      l.email,
      l.phone,
      l.website,
      l.location,
      l.type,
      l.notes,
    ]
      .map(escapeCSV)
      .join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

async function generateOutreachTemplate(leads: Lead[]): Promise<string> {
  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `Write a professional but warm email template for E-Knock (Fawaz Yasi), a traditional Catholic rapper, to send to Catholic youth ministers and event coordinators about performing at their events.

Key selling points:
- Syriac Catholic, attends the Traditional Latin Mass
- Born in Northern Iraq, emigrated to US at age 7
- Former Director of Youth Ministry in California
- 5 albums, 3.1M+ streams, 27K Instagram followers
- Top 10 charting artist in Christian/Gospel genre
- Featured on ChurchPOP and EWTN Great Britain (Feb 2026)
- Latest pro-life single "Goodbye" (Feb 2026)
- Available for Catholic conferences, parish events, school visits, concerts

The email should:
1. Be personalized (use [NAME], [ORGANIZATION], [EVENT TYPE] placeholders)
2. Be concise (under 200 words)
3. Include a link to the website: https://eknock-website.vercel.app
4. Include Spotify link: https://open.spotify.com/artist/3eUAf1Ft9WUdGf5MIrJLz5
5. End with a clear call to action
6. Feel authentic and faith-driven, not salesy

Write just the email template, nothing else.`,
      },
    ],
  });

  let text = "";
  for (const block of response.content) {
    if (block.type === "text") {
      text += block.text;
    }
  }
  return text;
}

async function main() {
  console.log("═══════════════════════════════════════════");
  console.log("  E-KNOCK OUTREACH LEAD FINDER");
  console.log("  Finding Catholic youth ministry contacts");
  console.log("═══════════════════════════════════════════");

  // Step 1: Search for leads
  const rawLeads = await searchForLeads();
  console.log(`\n📊 Raw results: ${rawLeads.length} leads found`);

  // Step 2: Deduplicate
  const leads = deduplicateLeads(rawLeads);
  console.log(`📊 After dedup: ${leads.length} unique leads\n`);

  if (leads.length === 0) {
    console.log("No leads found. Try adjusting search queries or regions.");
    return;
  }

  // Step 3: Save to CSV
  const csvContent = leadsToCSV(leads);
  const csvPath = "outreach-leads.csv";
  fs.writeFileSync(csvPath, csvContent, "utf-8");
  console.log(`✅ Leads saved to ${csvPath}`);

  // Step 4: Generate email template
  console.log("\n📝 Generating outreach email template...\n");
  const template = await generateOutreachTemplate(leads);
  const templatePath = "outreach-email-template.txt";
  fs.writeFileSync(templatePath, template, "utf-8");
  console.log(`✅ Email template saved to ${templatePath}`);

  // Step 5: Print summary
  console.log("\n═══════════════════════════════════════════");
  console.log("  SUMMARY");
  console.log("═══════════════════════════════════════════");
  console.log(`  Total unique leads: ${leads.length}`);

  const byType: Record<string, number> = {};
  for (const lead of leads) {
    const t = lead.type || "Other";
    byType[t] = (byType[t] || 0) + 1;
  }
  for (const [type, count] of Object.entries(byType)) {
    console.log(`    ${type}: ${count}`);
  }

  console.log(`\n  Files created:`);
  console.log(`    📄 ${csvPath} — contact spreadsheet`);
  console.log(`    📄 ${templatePath} — email template`);
  console.log(`\n  Next steps:`);
  console.log(`    1. Open ${csvPath} in Google Sheets or Excel`);
  console.log(`    2. Review and verify contacts`);
  console.log(`    3. Personalize the email template for each lead`);
  console.log(`    4. Send outreach emails`);
  console.log("═══════════════════════════════════════════\n");
}

main().catch(console.error);
