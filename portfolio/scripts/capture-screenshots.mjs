import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Viewport configuration (1440x900)
const VIEWPORT = { width: 1440, height: 900 };

// Target websites to capture and output paths
// Add additional live URLs (mis, kpfas, partner-sync, mpesa-tracker, akosombo) as needed
const TARGETS = [
  {
    name: "Kenya Tender Eye",
    url: "https://kenya-tender-management-system.vercel.app/",
    outputPath: path.resolve(__dirname, "../public/projects/tender-eye.png"),
  },
  {
    name: "Bash n Build",
    url: "https://tech-blog-ten-silk.vercel.app/",
    outputPath: path.resolve(__dirname, "../public/projects/bash-n-build.png"),
  },
  {
    name: "Consulting Service",
    url: "https://consulting-service-wine.vercel.app/",
    outputPath: path.resolve(__dirname, "../public/projects/consulting-service.png"),
  },
  // Future targets (uncomment & update when live):
  // {
  //   name: "Multi-Tenant MIS Platform",
  //   url: "https://...",
  //   outputPath: path.resolve(__dirname, "../public/projects/mis.png"),
  // },
  // {
  //   name: "KPFAS",
  //   url: "https://...",
  //   outputPath: path.resolve(__dirname, "../public/projects/kpfas.png"),
  // },
  // {
  //   name: "Partner Sync",
  //   url: "https://...",
  //   outputPath: path.resolve(__dirname, "../public/projects/partner-sync.png"),
  // },
  // {
  //   name: "M-Pesa Transaction Tracker",
  //   url: "https://...",
  //   outputPath: path.resolve(__dirname, "../public/projects/mpesa-tracker.png"),
  // },
  // {
  //   name: "Akosombo Library System",
  //   url: "https://...",
  //   outputPath: path.resolve(__dirname, "../public/projects/akosombo.png"),
  // },
];

async function captureScreenshots() {
  console.log("Starting screenshot capture process...");

  // Ensure destination directories exist
  for (const target of TARGETS) {
    const dir = path.dirname(target.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });

  for (const target of TARGETS) {
    console.log(`Navigating to ${target.name} (${target.url})...`);
    const page = await context.newPage();
    try {
      await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 30000 });
      // Allow visual elements/fonts to settle
      await page.waitForTimeout(2000);

      await page.screenshot({ path: target.outputPath, fullPage: false });
      console.log(`Successfully captured: ${target.outputPath}`);
    } catch (err) {
      console.error(`Failed to capture ${target.name} (${target.url}):`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Screenshot capture complete.");
}

captureScreenshots();
