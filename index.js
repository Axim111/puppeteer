import puppeteer from 'puppeteer';


let scrollDown = (async (page) => {
  let prevHeight = -1;
  let maxScrolls = 100;
  let scrollCount = 0;

  while (scrollCount < maxScrolls) {
    // Scroll to the bottom of the page
    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
    // Wait for page load
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Calculate new scroll height and compare
    let newHeight = await page.evaluate('document.body.scrollHeight');
    if (newHeight == prevHeight) {
      break;
    }
    prevHeight = newHeight;
    scrollCount += 1;
  }

})



let main = (async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    defaultViewport: false,
  });


  const page = await browser.newPage();
  await page.goto("https://kwork.ru/projects")
  // scrollDown(page)
  const jobs = await page.$$(".card")


  // for (let job of jobs) {
  //   // let job = await page.evaluate(el => el.innerText)
  //   console.log(await job.evaluate(node =>
  //     node.querySelector(".card__content")
  //       .innerText))

  // }
  let tem = "true"
  try {

    tem = await page.$$(".mr4 > a")
    // console.log(tem)
    for (let item of tem) {
      console.log(item)
      console.log(await item.evaluate(node => node.getAttribute("href")))
    }

  }

  catch (er) {
    console.error(er)
  }












});
main();