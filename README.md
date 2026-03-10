# NCCIA2026

Project repository for NCCIA 2026 work.

## Overview

This repository is set up to store code, notes, and resources related to NCCIA 2026.
On Monday, March 9th, 2 days before the conference, I started around 8 am on my work desktop. The goal here is to try to do all the prep for my four sessions here using AI, and to document the project here as well, including any notes, presentations, etc... The final results should be a published GitHub Pages site.

## Steps

### Original Concept

- first thought about using AI to talk about AI.
- then thought about maybe using AI to make a website with pages for each presentation. In the past I'd used lots of different tools, ranging from EverNote to Google Docs to CMSimple.
- figured I'd also play around with different tools along the way.

### Process/Timeline

- Went into work unexpectedly (stand-up desk, dual monitors, opportunity to be productive)
- started by opening VS code and asking it to make a new repo- it does a lot, including errors and lots of command line stuff... Might just be easier to make a repo externally, at least right now. Took two attempts to get it in the right (default place) next to my other repos. Took 10 minutes whereas just using GH Desktop would have taken 1.
- Told Copilot to make me a readme file - took a bit- again would just be faster to make it with the file manager in VSCode- but it did give me some starting markdown, which i'm not really fluent in.
- 9:00 am: Prompt: "Make me a website of five pages for the four presentations D.I. von Briesen will be giving at the NCCIA 2026 conference, using the agenda published on NCCIA.net. There should be a home page, with another page for each of the presenations. This should be a dynamic site, using only one index page, but loading the different content for each additional page based on a clicked menu item while keeping the headers and footers consistent. Pick a flexible CSS theme that displays the pages in a concise form, starting each page with the presentation description from the published schedule."
- it asks for permission to hit nccia.net, then asked for permission to get the response. Repeated request for permissions - eventually getting to the google doc of the sessions.
- multiple explanations provided along the way, culminating with: "I have the exact four session titles, times, rooms, and descriptions from the published NCCIA agenda, so I’m moving on to implementation. I’ll create a single-page app (index.html + styles.css + app.js) with hash-based navigation so it behaves like five pages while keeping one consistent header/footer.

Created index.html, styles.css, and app.js
Core files are in place with dynamic navigation and the four agenda-based session pages. I’ll run a quick error check to confirm there are no obvious problems before handing it back.

Reviewed index.html, styles.css, and app.js
Implemented a dynamic single-page website that behaves like 5 pages (Home + 4 presentation pages), with consistent header/footer and menu-based content loading.

What I created

index.html
styles.css
app.js
How it matches your request

Uses only one index page and dynamically swaps content with hash routing (#home, #can-ai-help, etc.).
Includes 5 navigable views:
Home
Can AI Help us as Teachers? Let's Talk about How.
Vibe Coding - It's ALL Changing...
Producing a website from Scratch with AI
Everything Introductions - Combining Intros with 3T Application Development
Keeps header and footer consistent across all views.
Uses a flexible, responsive theme with custom variables, expressive typography, and concise card-based layout.
Each session page starts with the published presentation description pulled from the NCCIA 2026 Full Conference Agenda.
Source used

NCCIA conference page and linked published agenda doc, referenced in footer on index.html.
Validation

No errors found in:
index.html
styles.css
app.js
If you want, I can next add:

A speaker bio section for D.I. von Briesen on each page.
A print-friendly agenda view.
GitHub Pages deployment config and instructions.
GPT-5.3-Codex • 0.9x"

- it made some suggestions, including putting the speaker bio on each page. I told it to put the bio on the home page, and then find any other bio information online, and not to make anything up.
- at 9:12 i'm looking at a completed webpage - nice design, fonts etc.... It's pulled random information from different sources (an adjunct position, a mention in a newsletter, etc...). At this point the only technical skills i really needed to get this done is understanding enough about file management and the tools (VS Code, GitHub) to get things to be in the right place. There are things that I wouldn't do (i.e. I prefer default.css to styles.css as a name).
- in reviewing the page I can think of some content/navigation improvements, but technically it seems fine, and pretty much functional from the start. For example, the blocks for each page are not clickable, but they have an "Open page" link within them. Lots of wordsmithing, since i'm picky about that- but a pretty remarkable job in ten-ish minutes.
- Now starting cleanup:
  -- gave a bunch of prompts in a row, separated by periods of things to tidy up - didn't like about the title, wording, etc... none of it technical, but stylistic/branding/wording/etc...
  -- reviewing on the fly with VSCode's LiveServer, and adding other suggestions. A link was unnecessary, a link title was off, etc...
- at 9:30 starting building out individual pages, by adding two sections (agenda and resource, and steps) to each page. Lots of tweaking and wordsmithing to sort out what i want it to look like.
- at 9:45 got to point where i have to start customizing each page for its particular content.
- decided to add the round table as a session... just because- also thinking i could update it on the fly during the event...
- more wordsmithing and tile arrangement.
- at this point, i think the site is pretty well done as far as design. Now it's just an issue of putting in the content. I'm torn between telling AI to do it (i.e. make this into a bullet list) or just manually editing the html- since that's ALMOST as easy... but then one has to at least know a LITTLE html. Maybe I'll try both.
- Went to the app.js page and rephrased the first few paras. Given that it's not in html mode i couldn't use emmet.
- asked it if it could do images, and pointed to other resources, but said it could to svgs, so i had it make a wizard, and then made an images folder, and put it on the home page. Tweaked sizing. This is the first time i really had to fix a glitch, as it sized the bounding box, but not the svg itself. Although earlier i had to have it fix a redundancy in the title structure.
- just for kicks asked it to summarize my Rate My Professor reviews - which are different based on von and Von, and D.I. and Daniel.
- jumped over to google and picked AI mode: "Make me an image of an alpaca coding on a mountain top". It required a login. Then it generated an image - using nano banana 2, while i tried over in another browser with bing. Bing said it couldn't do the image but could give me a good prompt, so i pasted that prompt over into google and got an image of an alpaca with TWO laptops. I updated it to have a 2nd monitor instead. Then I enlarged his boots. Then to have the bigger display in front. Then i added starlink and a solar panel and battery. The I replaced the boots with a palantir, and then adjusted that. It messed up the table extension and put a 2nd palantir on it. Tried to fix and failed. Tried again and... not quite. Then it started hallucinating and saying things were there that weren't. I started over, this time trying to incorporate all the changes into the one prompt. This seems to illustrate the general ignorance of the system- it doesn't really understand what it's doing. The new prompt generated a messy version- still unable to put the palantir to the left of the animal.
- every time i see styles.css, it bothers me. Asked it to update to default.css
- while i was waiting for images to generate, I had copilot review my rate my professor ratings, and summarize them on a page, and then linked that from the footer of the site.
- finally reached my daily images quote on google - probably generated about 25 images. Could switch to personal account to do more, but good with what i've got for now.
- prompted to make a new page and create a slideshow within it featuring these images, which i'd had to manually modify and save.
- Tweaked some slideshow settings.
- It's now 11:37 - took some breaks and showed it to some colleagues. Laughed about the Camelids hallucinations.
- found the link for one of my introduction files, and linked it from the All intros presentation.
- asked copilot to clean up my instructions from: https://docs.google.com/document/d/16gWOKFFqFE2QyFEXwCDIWb6u3eLwPyS6_OGdggxAdlI/edit?tab=t.0 and put them on the presentation page for that assignment.
- made a new google doc for the NCCIA and linked to that.
