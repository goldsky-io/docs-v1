# Goldsky documentation

This package contains the source code for [docs.goldsky.com](https://docs.goldsky.com/). For each pull request, there is a preview deployment available. When a pull request is merged into the main branch, the changes get deployed to [docs.goldsky.com](https://docs.goldsky.com/).

## To Preview

1. Clone the repository to your local machine using `git clone https://github.com/goldsky/docs.git`
2. Navigate to the cloned repository using `cd docs`
3. Install the necessary dependencies using `npm install`
4. Start the local development server using `npm run dev`
5. Open your web browser and navigate to `http://localhost:3000` to preview the documentation.

## Diagrams

Diagrams are part of a single [Excalidraw](https://excalidraw.com/) canvas.

### Add a new diagram / modify an existing one

To create a new diagram or edit an existing one:

1. Navigate to https://excalidraw.com
1. Click the ☰ menu at the top left, select _Open_
   - Alternatively, press Ctrl/Cmd + O on the canvas
1. Select the `goldsky-docs-diagrams.excalidraw` file located next to this `README.md`
1. Make your changes – follow the existing organizational structure with boxes for individual URLs
1. Click the ☰ menu at the top left, select _Save to..._
1. In the _Save to disk_ section, set the file name as `goldsky-docs-diagrams`
1. Click _Save to file_
1. Replace the `goldsky-docs-diagrams.excalidraw` file next to this `README.md` with the file you saved in the previous step

### Integrate a diagram into the docs

For each diagram, we keep light and dark mode versions. To export a diagram from the Excalidraw canvas:

1. Follow the steps above to open the `goldsky-docs-diagrams.excalidraw` in Excalidraw
1. Select the parts of the canvas you want to export
1. Click the ☰ menu at the top left, select _Export image..._
   - Alternatively, press Ctrl/Cmd + E on the canvas
1. Set the following settings:
   - [ ] Background
   - [x] Only selected
   - [ ] Embed scene
   - 2x scale
   - A _File name_ that matches the existing naming pattern in `./public/images/docs/**/*.png`, ending in either `-dark.png` or `-light.png` depending on the theme you selected
1. Click the _PNG_ button to export the diagram
1. Repeat the above process, but with the opposite theme (i.e. use dark mode if you exported light mode before)
   - To change the theme, click the moon or sun icon at the bottom right corner of the export dialog
1. Open the Markdown documentation file where you want to integrate the diagram
1. Use the following code snippet to display the diagram:
   ```
   {% excalidraw
     src="/images/docs/.../goldsky-..."
     alt="..."
     width="200"
     height="240"
   /%}
   ```
   **Note**: The `src` attribute does not include the `-light.png` or `-dark.png` suffix, this will be added depending on the preferred theme when a visitor looks at the deployed documentation web application.

## Learn more

To learn more about the technologies used in this documentation web app, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Markdoc](https://markdoc.io) - the official Markdoc documentation
- [DocSearch](https://docsearch.algolia.com) - the official DocSearch documentation
