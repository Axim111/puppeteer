import puppeteer from 'puppeteer';

let main = (async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    defaultViewport: false,
  });
  const page = await browser.newPage();
  await page.goto("https://kwork.ru/projects")
  const jobs = await page.$$(".project-list")
  for (let job of jobs) {
    console.log(await job.evaluate(node =>
      node.querySelector(".mb15 > .d-flex > .wants-card__left")
        .innerText))
  }

});
main();