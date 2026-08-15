# goarmybeatnavy.us

An independent, static Army Football fan site built with Vite. The production output contains only HTML, CSS, and JavaScript and is ready for Cloudflare Pages.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

## Production build

```powershell
npm.cmd run build
```

## Cloudflare Pages

1. Push this directory to a GitHub repository.
2. In Cloudflare, open **Workers & Pages**, choose **Create application**, then **Pages** and **Connect to Git**.
3. Select the GitHub repository.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. After the first deployment, open the Pages project's **Custom domains** panel and add `goarmybeatnavy.us`.
6. Add `www.goarmybeatnavy.us` as a second custom domain if desired, then configure a redirect to the apex domain.

Because the domain already uses Cloudflare DNS, Cloudflare will create and validate the required DNS records during custom-domain setup.

## Image credits

- "Michie Stadium - Army Black Knights" by Ajay Suresh, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via Wikimedia Commons. The image is cropped responsively by CSS.
- "Army Football v Troy University Trojans" by John Pellino/USMA, public domain as a U.S. Army work, via Wikimedia Commons.
- "Beat Navy Tunnel, West Point" by Ahodges7, released into the public domain, via Wikimedia Commons. The image is displayed in grayscale and cropped responsively by CSS.

This site intentionally does not use official Army West Point Athletics logos or marks and includes a visible independent-site disclaimer.
