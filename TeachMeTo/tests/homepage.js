const { chromium } = require("playwright");

(async () => {
  // Launch the browser
  const browser = await chromium.launch();

  // Create a new browser context
  const context = await browser.newContext();

  // Create a new page
  const page = await context.newPage();

  // Navigate to the homepage
  await page.goto("https://teachme.to/");

  // Wait for the main content to load
  await page.waitForLoadState();

  // Extract and print the page title
  const title = await page.title();
  console.log(`Page title: ${title}`);

  // Extract and print the text content of the main heading
  const mainHeading = await page.$eval("h1", (element) => element.textContent);
  console.log(`Main heading: ${mainHeading}`);

  // Extract and print the number of available courses
  const courseCount = await page.$$eval(
    ".course-card",
    (elements) => elements.length
  );
  console.log(`Number of available courses: ${courseCount}`);

  // Extract and print the text content of each course card
  const courseTitles = await page.$$eval(
    ".course-card .course-title",
    (elements) => elements.map((element) => element.textContent)
  );
  console.log("Course titles:");
  courseTitles.forEach((title, index) => {
    console.log(`${index + 1}. ${title}`);
  });

  // Take a screenshot of the page
  await page.screenshot({ path: "homepage.png" });

  // Close the browser
  await browser.close();
})();
