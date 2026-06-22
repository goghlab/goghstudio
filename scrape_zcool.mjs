import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';

const urls = [
  'https://www.zcool.com.cn/work/ZNzM1MzgyNDA=.html',
  'https://www.zcool.com.cn/work/ZNzMzNTE5MDQ=.html',
  'https://www.zcool.com.cn/work/ZNzMzNDYyNjg=.html',
  'https://www.zcool.com.cn/work/ZNzMzMTUzNzY=.html',
  'https://www.zcool.com.cn/work/ZNzMyOTI4NTI=.html',
  'https://www.zcool.com.cn/work/ZNzMyNzA2NDg=.html',
  'https://www.zcool.com.cn/work/ZNzMyNTQ4ODg=.html',
  'https://www.zcool.com.cn/work/ZNzMyNDk1MDg=.html',
  'https://www.zcool.com.cn/work/ZNzMyMzk1OTI=.html',
  'https://www.zcool.com.cn/work/ZNzMyMDk0MDg=.html',
  'https://www.zcool.com.cn/work/ZNzMyMjAzMTY=.html',
  'https://www.zcool.com.cn/work/ZNzMyMTg5NjQ=.html',
  'https://www.zcool.com.cn/work/ZNzMxNTAyNTY=.html',
  'https://www.zcool.com.cn/work/ZNzMxNTAyMDg=.html',
  'https://www.zcool.com.cn/work/ZNzMxMDUxODg=.html',
  'https://www.zcool.com.cn/work/ZNzMxMDQwOTI=.html',
  'https://www.zcool.com.cn/work/ZNzMwNzA0MjA=.html',
  'https://www.zcool.com.cn/work/ZNzMwNTI1NjA=.html',
  'https://www.zcool.com.cn/work/ZNzMwMDA5MTI=.html',
  'https://www.zcool.com.cn/work/ZNzI5ODU2NzY=.html',
  'https://www.zcool.com.cn/work/ZNzI5ODUwNjg=.html',
  'https://www.zcool.com.cn/work/ZNzI5NTgxMTY=.html',
  'https://www.zcool.com.cn/work/ZNzI4NzAzNjQ=.html',
  'https://www.zcool.com.cn/work/ZNzI3OTg2NjQ=.html',
  'https://www.zcool.com.cn/work/ZNzI3OTI5NTI=.html',
  'https://www.zcool.com.cn/work/ZNzI3Mjk5ODQ=.html',
  'https://www.zcool.com.cn/work/ZNzI3MTQ2NDg=.html',
  'https://www.zcool.com.cn/work/ZNzI3MDI2MTI=.html',
  'https://www.zcool.com.cn/work/ZNzI1MDAwNzI=.html',
  'https://www.zcool.com.cn/work/ZNzI0ODEzOTI=.html',
  'https://www.zcool.com.cn/work/ZNzIzNzcwMjA=.html',
  'https://www.zcool.com.cn/work/ZNzI0NDIzNjQ=.html',
  'https://www.zcool.com.cn/work/ZNzI0MjA3MjQ=.html',
  'https://www.zcool.com.cn/work/ZNzI0MTkxNzY=.html',
  'https://www.zcool.com.cn/work/ZNzIzOTM0NTY=.html',
  'https://www.zcool.com.cn/work/ZNzIyOTk2MzY=.html',
  'https://www.zcool.com.cn/work/ZNzIyOTE0NTI=.html',
  'https://www.zcool.com.cn/work/ZNzIyNjk3NjA=.html',
  'https://www.zcool.com.cn/work/ZNzIyMDkxMDA=.html',
  'https://www.zcool.com.cn/work/ZNzIxODI0Njg=.html',
  'https://www.zcool.com.cn/work/ZNzIxNzgzMTI=.html',
  'https://www.zcool.com.cn/work/ZNzE5Nzc0NTI=.html',
  'https://www.zcool.com.cn/work/ZNzE4NTQ3MTY=.html',
  'https://www.zcool.com.cn/work/ZNzE4MTQwOTY=.html',
];

function extractZcoolId(url) {
  const match = url.match(/work\/([^.]+)\.html/);
  return match ? match[1] : null;
}

async function scrapePage(browser, url) {
  const page = await browser.newPage();
  const result = {
    url,
    zcool_id: extractZcoolId(url),
    title: null,
    category: null,
    thumbnail: null,
    images: [],
  };

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // Extract title
    const titleEl = await page.$('.article-title, h1.title, .work-title, h1');
    if (titleEl) {
      result.title = await titleEl.textContent();
      result.title = result.title ? result.title.trim() : null;
    }

    // Extract category from breadcrumb or tags
    const categoryEl = await page.$('.bread-crumb, .category-path, .tag-list, .work-category');
    if (categoryEl) {
      result.category = await categoryEl.textContent();
      result.category = result.category ? result.category.trim() : null;
    }

    // Extract all .imgbox images
    const imgboxes = await page.$$('.imgbox');
    const allImgUrls = [];
    for (const box of imgboxes) {
      const img = await box.$('img');
      if (img) {
        const src = await img.getAttribute('data-src') || await img.getAttribute('src');
        if (src && !src.includes('data:image')) {
          allImgUrls.push(src);
        }
      }
    }

    if (allImgUrls.length > 0) {
      result.thumbnail = allImgUrls[0];
      result.images = allImgUrls;
    }

    console.log(`✓ ${result.zcool_id}: ${result.title} (${allImgUrls.length} images)`);
  } catch (err) {
    console.error(`✗ ${url}: ${err.message}`);
  } finally {
    await page.close();
  }

  return result;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const url of urls) {
    const data = await scrapePage(browser, url);
    results.push(data);
  }

  await browser.close();
  writeFileSync('/tmp/zcool_scraped.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('\n✅ Done! Saved to /tmp/zcool_scraped.json');
}

main().catch(console.error);
