const pages = {
    home: {
        menu: "Home",
        title: "Session Overview",
        render: () => `
      <section class="page">
        <h2>Welcome!</h2>
        <p>
          This site uses a single <code>index.html</code> file and dynamically swaps
          content for each menu item. Header and footer remain consistent while each
          session loads in place. D.I. built this a couple days before the conference 
          to experiment and demonstrate how we can use AI tools to quickly build a simple but functional web app. 
        </p>
        <p>
          He is scheduled for four presentations and leading one roundtable. The idea is to update this site during the sessions to show how 
          powerful the available tools are. Specifically, we'll be using a combination of AI tools and
          limited manual coding to build out content, examples, resources, and perhaps summarize our steps on the fly during the sessions.
        </p>
        <p>Ideally this would serve as an easy resource for others to view and refer to, as well
        as a platform for demonstrating what's possible with the tools we have at our disposal.</p>
        
        <p>I've tried to roughly summarize this in this project's <a href="README.md" target="_blank" rel="noreferrer">Read.me file</a>. Have a look if you're interested!</p>

        <section class="bio-block" aria-label="Speaker bio">
          <h3>Speaker Bio</h3>
          <figure class="home-wizard home-wizard-inline">
            <img src="images/wizard.svg" alt="Illustration of a tall wizard with cloak, staff, beard, and hat" />
          </figure>
          <p>
            According to the NCCIA 2026 published agenda, D.I. von Briesen is
            affiliated with Central Piedmont Community College and has been teaching
            for over three decades, with two of those decades in the IT and education
            sector.
          </p>
          <p>
            Additional publicly available information from Central Piedmont Today
            (October 2024) notes that D.I. von Briesen was among faculty supporting
            Hurricane Helene relief efforts through community collaboration.
          </p>
          <p class="sources-title">Resources</p>
          <ul class="sources-list">
            <li>
              <a href="https://github.com/features/copilot" target="_blank" rel="noreferrer">GitHub Copilot</a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a>
            </li>
            <li>
              <a href="https://desktop.github.com/" target="_blank" rel="noreferrer">GitHub Desktop</a>
            </li>
            <li>
              Webbased AI tools
              <ul>
                <li><a href="https://gemini.google.com/" target="_blank" rel="noreferrer">Gemini</a></li>
                <li><a href="https://chatgpt.com/" target="_blank" rel="noreferrer">ChatGPT</a></li>
                <li><a href="https://duck.ai/" target="_blank" rel="noreferrer">Duck.ai (no login)</a></li>
                <li><a href="https://rawtalk.chat/" target="_blank" rel="noreferrer">rawtalk.chat (no login)</a></li>
                <li><a href="https://www.chatgot.io/" target="_blank" rel="noreferrer">ChatGOT (no sign-up)</a></li>
              </ul>
            </li>
          </ul>
        </section>

        <div class="cards">
          ${sessionCards()}
        </div>
      </section>
    `,
    },
    "can-ai-help": {
        menu: "AI Help",
        title: "Can AI Help us as Teachers? Let's Talk about How.",
        schedule: {
            day: "Thursday, March 12, 2026",
            time: "1:45 p.m. - 3:00 p.m.",
            room: "Room 111",
            block: "Session 7",
        },
        description:
            "Teaching requires a lot of different things- from proofreading instructions, to tedious attendance, to setting up courses. Let's explore how AI can (or perhaps cannot) begin to shift us away from some of the menial tasks, and towards new possibilities. Need to update modules in Canvas? Need to tweak your syllabus? Need to get a good list of all students... AI has the potential to be game-changing in many ways.",
    },
    "vibe-coding": {
        menu: "Vibe Coding",
        title: "Vibe Coding - It's ALL Changing...",
        schedule: {
            day: "Thursday, March 12, 2026",
            time: "3:15 p.m. - 4:30 p.m.",
            room: "Room 111",
            block: "Session 8",
        },
        description:
            "Let's explore some crazy examples of the kind of development we can do without having to really code. From generating thousands of organized study points, to cleaning up a roster, to updating formats, to writing applications... our world of software is changing quickly. It's scary, and can seem overwhelming - but it may also be the biggest technology shift in our lifetimes - let's dive in!",
    },
    "producing-website": {
        menu: "AI Web",
        title: "Producing a website from Scratch with AI",
        schedule: {
            day: "Friday, March 13, 2026",
            time: "9:00 a.m. - 10:15 a.m.",
            room: "Room 113",
            block: "Session 9",
        },
        description:
            "Using AI tools and basic web knowledge, let's explore how to build a site from nothing using VSCode, previewing it as we go, and publishing it to GitHub pages - perhaps even with our own domain. Join us in this hands-on activity. If possible, have VSCode and GitHub Desktop pre-installed, and create a GitHub account if you don't already have one. While basic web knowledge is helpful, we'll help you along if you don't have a clue.",
    },
    "everything-introductions": {
        menu: "All Intros",
      title: "Everything Introductions - Using Intros for Three-Tier App Dev",
        schedule: {
            day: "Friday, March 13, 2026",
            time: "10:30 a.m. - 11:45 a.m.",
            room: "Room 113",
            block: "Session 10",
        },
        description:
            "Using an introduction format developed over many years, we'll explore first how to create a shared introduction for students, and then dive into how to use that same introduction to discussion UI, data modeling, 3-tier applications, data storage and retrieval, and all the formats in between. Depending on time, we may be able to vibe code additional tools to demonstrate how we can create and retrieve introduction data, put that data into different formats (xml, json, html) and display it back in various forms (one at a time, sorted, selected fields, etc...).",
        extraResources: [
            {
                label: "Sample Introductions (editable google doc)",
                href: "https://docs.google.com/document/d/17UVznWXmW1-6ZE_W7e8eRckUlN29qGGvEPoJlaXkd8o/edit?tab=t.0",
            },
            {
                label: "Sample introductions (published google doc)",
                href: "https://docs.google.com/document/d/e/2PACX-1vQkxeTH8MWpNnwYj7IiIXrs4iVywZsw6IJTomGtGQ_tL2Lo02-nWAS6hLFz3kSFZciojLNrg-TzKj2L/pub",
            },
            {
                label: "Participant Intros (Google Doc)",
                href: "https://docs.google.com/document/d/1NEiLa_vDuVtXdSGtzEL1nXHSuqtd6dONIX_3ePQpNQM/edit?usp=sharing",
            },
        ],
        introInstructions: {
            source: "https://docs.google.com/document/d/16gWOKFFqFE2QyFEXwCDIWb6u3eLwPyS6_OGdggxAdlI/edit?tab=t.0",
        },
    },
    "sw-roundtable": {
        menu: "WPD Roundtable",
        title: "Web, Programming & Databases Roundtable",
        schedule: {
            day: "Wednesday, March 11, 2026",
            time: "3:15 p.m. - 4:30 p.m.",
            room: "Room 111",
            block: "Session 4 (Roundtables)",
        },
        description:
            "Web, Programming and Databases roundtable from Session 4 (Roundtables) in the NCCIA 2026 agenda.",
    },
    camelids: {
        menu: "Camelids",
        title: "Camelids",
        description:
            "Coding camel slideshow featuring workshop art assets.",
        slideshowImages: [
            "images/codinglama_a.png",
            "images/codinglama_b.png",
            "images/codinglama_c.png",
            "images/codinglama_d.png",
            "images/codinglama_e.png",
            "images/codinglama_f.png",
            "images/codinglama_g.png",
            "images/codinglama_h.png",
            "images/codinglama_i.png",
            "images/codinglama_j.png",
            "images/codinglama_k.png",
            "images/codinglama_l.png",
            "images/codinglama_m.png",
            "images/codinglama_n.png",
            "images/codinglama_o.png",
            "images/codinglama_p.png",
            "images/codinglama_q.png",
            "images/codinglama_r.png",
            "images/lamacoderonmountain_a.png",
        ],
    },
};

const sessionRoutes = [
    "can-ai-help",
    "vibe-coding",
    "producing-website",
    "everything-introductions",
    "sw-roundtable",
];

function sessionCards() {
    return sessionRoutes
        .map((route) => {
            const page = pages[route];
            return `
        <a class="card card-link" href="#${route}" aria-label="Open ${page.title}">
          <h3>${page.title}</h3>
          <p>${page.schedule.day}</p>
          <p class="card-time">${page.schedule.time}</p>
          <p class="card-room">${page.schedule.room}</p>
        </a>
      `;
        })
        .join("");
}

function renderSessionSections(page) {
    const summaryItems = synthesizeAgendaItems(page.description)
        .map((item) => `<li>${item}</li>`)
        .join("");

    const agendaDeepDiveItems = page.introInstructions
        ? `
            <li>Demonstrate shared intros</li>
            <li>Create our intros and/or generate AI samples.</li>
            <li>Count items and detail formatting.
              <ul>
                <li>Talk about instructions.</li>
                <li>Talk about data model.</li>
                <li>Talk about round trip.</li>
              </ul>
            </li>
            <li>If there's time:
              <ul>
                <li>Make a form.</li>
                <li>Output in formats like JSON/XML/HTML.</li>
                <li>Talk about data retrieval.</li>
                <li>Generate tables? SQL? JSON.</li>
              </ul>
            </li>
          `
        : summaryItems;

    const extraResources = (page.extraResources || [])
        .map(
            (resource) => `<li><a href="${resource.href}" target="_blank" rel="noreferrer">${resource.label}</a></li>`
        )
        .join("");

    const defaultConferenceResources = page.introInstructions
        ? ""
        : `
            <li><a href="https://www.nccia.net/conference/" target="_blank" rel="noreferrer">NCCIA 2026 Conference Page</a></li>
            <li><a href="https://docs.google.com/document/d/e/2PACX-1vRao5YtYLpChHfbDyfdXqauvMf1mfEA6bdtJDBq7gdXXJv4Sknhy1vAjFnLUVSDHf9qi3y_pC7wqUtR/pub" target="_blank" rel="noreferrer">NCCIA 2026 Full Conference Agenda</a></li>`;

    const introInstructions = page.introInstructions
        ? `
      <section class="bio-block" aria-label="Introduction Instructions">
        <h3>Introduction Instructions (Quick + Clean)</h3>
        <p>
          Source:
          <a href="${page.introInstructions.source}" target="_blank" rel="noreferrer">Google Doc Instructions</a>
        </p>
        <p><strong>Goal:</strong> Create your intro in the shared Google Doc, format it correctly, then submit your <code>Heading 2</code> link in the LMS.</p>

        <h4>Part 1: Create and Link Your Entry</h4>
        <ol>
          <li>Open the shared Introductions doc from the link in your course.</li>
          <li>Go DOWN IN THE DOCUMENT BELOW the table of contents to where your last name belongs.</li>
          <li>Add several blank lines there.</li>
          <li>Add a horizontal rule (line) above those blank lines and another horizontal rule below them.</li>
          <li>Type your name as <code>Last, First M.</code> and set it to <code>Heading 2</code>. Do not change other formatting.</li>
          <li>Go up to the table of contents, right-click it, and choose <code>Update</code>. Your name should appear on it.</li>
          <li>Click your name in the TOC to make sure it jumps to your entry.</li>
        </ol>

        <h4>Part 2: Add Personal Information</h4>
        <ol>
          <li>Write a sentence clearly acknowledging that what you post is public, then add your initials + date in italics.</li>
          <li>Add a large, centered display line: <code>First M. Last</code> + divider + adjective/type mascot where the adjective matches your first initial and the type matches your last initial.</li>
          <li>Keep this display line as normal text (not a heading).</li>
          <li>Insert a centered photo of yourself, sized properly (crop instead of stretching).</li>
          <li>Add a centered, italic photo caption below the image.</li>
          <li>Write a left-aligned personal statement (3+ sentences) in normal text.</li>
        </ol>

        <h4>Part 3: Add Background and Course Information</h4>
        <ul>
          <li>In all instances the words between the bullet and colon should be bold, the rest regular.</li>
          <li>Include: Personal Background, Professional Background, Academic Background.</li>
          <li>Include Primary Computer: manufacturer, OS, laptop/desktop, and main location.</li>
          <li>Include a nested list of your courses and why you are taking each one.</li>
          <li>Format each nested course item as course ID + course name (for example, <code>CIS110 - Introduction to Computers</code>), and keep that course label in <strong>bold</strong> to the left of the colon.</li>
          <li>Include: Funny/Interesting Item to Remember Me by.</li>
          <li>Include: I'd Also Like to Share.</li>
          <li>Finish with a centered quote and centered italicized attribution.</li>
          <li>Copy the URL of your <code>Last, First M.</code> heading and submit that link.</li>
        </ul>

        <h4>Part 4: Submit and Revise</h4>
        <ol>
          <li>Update your LMS profile picture.</li>
          <li>Submit your entry URL in the Introductions assignment/discussion.</li>
          <li>Review feedback, revise, and resubmit until complete.</li>
        </ol>

        <h4>Honors Sections Only</h4>
        <ul>
          <li>Add a section titled <code>With Regards to this Course</code>.</li>
          <li>Include what the course should do, your potential, and one positive + one negative outcome.</li>
        </ul>

        <h4>Common Errors to Avoid</h4>
        <ul>
          <li>Do not edit the table of contents directly.</li>
          <li>Adding a new tab for your entry (please don't).</li>
          <li>Do not create extra tabs/documents for your entry.</li>
          <li>Keep <code>Last, First M.</code> as <code>Heading 2</code>; keep display-name line as normal text.</li>
          <li>Use center alignment tools, not spaces, for name line, image, and caption.</li>
          <li>Use nested bullets correctly for the course list.</li>
          <li>Do not use underlines except for links.</li>
          <li>Use Shift+Enter for a line break inside one bullet when needed.</li>
        </ul>

        <h4>Sample Introduction</h4>
        <p><em>Imaginary example that follows the format above.</em></p>
        <nav aria-label="Sample intro table of contents">
          <p><strong>Sample TOC</strong></p>
          <ul>
            <li><a href="#sample-alvarez">Alvarez, Luna M.</a></li>
            <li><a href="#sample-garcia">Garcia, Mateo J.</a></li>
            <li><a href="#sample-lopez">Lopez, Aria K.</a></li>
            <li><a href="#sample-vega">Vega, Nia R.</a></li>
          </ul>
        </nav>
        <hr />
        <h2 id="sample-alvarez" style="font-family:'Manrope','Segoe UI',sans-serif; font-size:1rem; color:#1f4fa3;">Alvarez, Luna M.</h2>
        <p>
          I understand that what I put here is publicly available on the web and I will not
          post anything I do not want publicly visible. <em>- LMA 03/09/26</em>
        </p>
        <p style="text-align:center; font-size:2.2rem;"><strong>Luna M. "Lulu" Alvarez ~ Lively Alpaca</strong></p>
        <figure style="text-align:center; margin:0.8rem auto;">
          <img src="images/codinglama_a.png" alt="Sample intro photo using the first llama image" style="max-width:280px; width:100%; height:auto; border-radius:10px;" />
          <figcaption><em>At a mountain coding camp, 2026</em></figcaption>
        </figure>
        <p>
          Hi everyone. I am Luna, and I enjoy solving technical puzzles and helping people
          feel less overwhelmed by technology. I came back to school to sharpen my digital
          communication and productivity skills, and I am excited to learn with this class.
        </p>
        <ul>
          <li><strong>Personal Background:</strong> I grew up in North Carolina and love hiking, drawing, and planning community events.</li>
          <li><strong>Professional Background:</strong> I have worked in customer service and office support, where clear communication and organization are essential.</li>
          <li><strong>Academic Background:</strong> I am a first-year student focused on business and technology foundations.</li>
          <li><strong>Primary Computer:</strong> Lenovo laptop, Windows 11, laptop, primarily used from my desk at home.</li>
          <li><strong>Courses I'm Taking, & Why:</strong>
            <ul>
              <li><strong>CIS110 - Introduction to Computers:</strong> To strengthen core computer skills for school and work.</li>
              <li><strong>BUS110 - Introduction to Business:</strong> To build a better foundation for my major.</li>
              <li><strong>ENG111 - Writing and Inquiry:</strong> To improve writing clarity and confidence.</li>
            </ul>
          </li>
          <li><strong>Funny/Interesting Item to Remember Me by:</strong> I keep color-coded notebooks for almost everything.</li>
          <li><strong>I'd Also Like to Share:</strong> I enjoy helping classmates troubleshoot tech issues.</li>
        </ul>
        <p style="text-align:center;">"Small progress each day adds up to big results."</p>
        <p style="text-align:center;"><em>- Unknown</em></p>
        <hr />

        <h2 id="sample-lopez" style="font-family:'Manrope','Segoe UI',sans-serif; font-size:1rem; color:#1f4fa3;">Lopez, Aria K.</h2>
        <p>
          I understand that what I put here is publicly available on the web and I will not
          post anything I do not want publicly visible. <em>- AKL 03/09/26</em>
        </p>
        <p style="text-align:center; font-size:2.2rem;"><strong>Aria K. "Ari" Lopez ~ Agile Llama</strong></p>
        <figure style="text-align:center; margin:0.8rem auto;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Alpaca_in_Higashiyama_Zoo_-_1.jpg/330px-Alpaca_in_Higashiyama_Zoo_-_1.jpg" alt="Sample intro photo for alpaca example" style="max-width:280px; width:100%; height:auto; border-radius:10px;" />
          <figcaption><em>Testing a new workflow setup, 2026</em></figcaption>
        </figure>
        <p>
          Hello everyone. I enjoy combining creativity with organization, especially when
          projects involve both people and technology. This class is helping me build a
          stronger foundation in practical computer skills for school and work.
        </p>
        <ul>
          <li><strong>Personal Background:</strong> I grew up in Charlotte and spend most weekends reading, hiking, or visiting local coffee shops.</li>
          <li><strong>Professional Background:</strong> I have worked in hospitality and front desk support, where multitasking and communication matter daily.</li>
          <li><strong>Academic Background:</strong> I am currently pursuing transfer credits in business and technology.</li>
          <li><strong>Primary Computer:</strong> Dell laptop, Windows 11, laptop, primary workspace is my home desk.</li>
          <li><strong>Courses I'm Taking, & Why:</strong>
            <ul>
              <li><strong>CIS110 - Introduction to Computers:</strong> To improve technical confidence and efficiency.</li>
              <li><strong>BUS110 - Introduction to Business:</strong> To strengthen core concepts for my degree plan.</li>
              <li><strong>COM110 - Introduction to Communication:</strong> To become clearer and more effective in speaking and writing.</li>
            </ul>
          </li>
          <li><strong>Funny/Interesting Item to Remember Me by:</strong> I label every charger I own so I never lose them.</li>
          <li><strong>I'd Also Like to Share:</strong> I am interested in learning how data is used to improve decisions.</li>
        </ul>
        <p style="text-align:center;">"Progress, not perfection."</p>
        <p style="text-align:center;"><em>- Unknown</em></p>
        <hr />

        <h2 id="sample-garcia" style="font-family:'Manrope','Segoe UI',sans-serif; font-size:1rem; color:#1f4fa3;">Garcia, Mateo J.</h2>
        <p>
          I understand that what I put here is publicly available on the web and I will not
          post anything I do not want publicly visible. <em>- MJR 03/09/26</em>
        </p>
        <p style="text-align:center; font-size:2.2rem;"><strong>Mateo J. Garcia ~ Mighty Guanaco</strong></p>
        <figure style="text-align:center; margin:0.8rem auto;">
          <pre style="display:inline-block; text-align:left; background:#f7f7f7; border:1px solid #d8ccba; border-radius:10px; padding:0.7rem; max-width:280px; overflow:auto;">   __
 _(  )_
/  ..  \
\  --  /
 \_||_/
 /_  _\\
   ||
  /__\
          </pre>
          <figcaption><em>ASCII guanaco sketch, 2026</em></figcaption>
        </figure>
        <p>
          My name is Mateo, and I enjoy finding practical ways to solve problems with
          technology. I am taking this course to improve computer fluency and become more
          confident with digital tools used in professional settings.
        </p>
        <ul>
          <li><strong>Personal Background:</strong> I moved to North Carolina in high school and enjoy soccer, music, and road trips.</li>
          <li><strong>Professional Background:</strong> I have worked in retail and shipping support, with a focus on customer help and task tracking.</li>
          <li><strong>Academic Background:</strong> I am in my first year and working toward a business-focused transfer pathway.</li>
          <li><strong>Primary Computer:</strong> HP desktop, Windows 11, desktop, mainly used in my home office area.</li>
          <li><strong>Courses I'm Taking, & Why:</strong>
            <ul>
              <li><strong>CIS110 - Introduction to Computers:</strong> To build stronger technical fundamentals.</li>
              <li><strong>ECO251 - Principles of Microeconomics:</strong> To better understand decisions and markets.</li>
              <li><strong>ENG112 - Writing and Research:</strong> To improve research and communication skills.</li>
            </ul>
          </li>
          <li><strong>Funny/Interesting Item to Remember Me by:</strong> I make playlists for every assignment type.</li>
          <li><strong>I'd Also Like to Share:</strong> I am excited to learn more about data formats and retrieval.</li>
        </ul>
        <p style="text-align:center;">"Stay curious and keep building."</p>
        <p style="text-align:center;"><em>- Unknown</em></p>
        <hr />

        <h2 id="sample-vega" style="font-family:'Manrope','Segoe UI',sans-serif; font-size:1rem; color:#1f4fa3;">Vega, Nia R.</h2>
        <p>
          I understand that what I put here is publicly available on the web and I will not
          post anything I do not want publicly visible. <em>- NRS 03/09/26</em>
        </p>
        <p style="text-align:center; font-size:2.2rem;"><strong>Nia R. Vega ~ Nimble Vicuna</strong></p>
        <figure style="text-align:center; margin:0.8rem auto;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vicuna_%2889163948%29_%28cropped%29.jpg/330px-Vicuna_%2889163948%29_%28cropped%29.jpg" alt="Sample intro photo for vicuna example" style="max-width:280px; width:100%; height:auto; border-radius:10px;" />
          <figcaption><em>Prototype day in the lab, 2026</em></figcaption>
        </figure>
        <p>
          I am Nia, and I like turning messy ideas into organized plans. I enrolled in this
          course to improve my digital literacy and better understand how computers support
          communication, analysis, and project execution.
        </p>
        <ul>
          <li><strong>Personal Background:</strong> I have lived in NC most of my life and enjoy art, journaling, and outdoor walks.</li>
          <li><strong>Professional Background:</strong> I have experience in office administration and event coordination.</li>
          <li><strong>Academic Background:</strong> I am building transfer-ready credits in business administration.</li>
          <li><strong>Primary Computer:</strong> Lenovo ThinkPad, Windows 11, laptop, used mostly at a shared study table at home.</li>
          <li><strong>Courses I'm Taking, & Why:</strong>
            <ul>
              <li><strong>CIS110 - Introduction to Computers:</strong> To gain practical computer skills used in school and work.</li>
              <li><strong>MAT143 - Quantitative Literacy:</strong> To strengthen reasoning with numbers and data.</li>
              <li><strong>BUS137 - Principles of Management:</strong> To learn team and project leadership basics.</li>
            </ul>
          </li>
          <li><strong>Funny/Interesting Item to Remember Me by:</strong> I color-code my calendar by energy level, not just category.</li>
          <li><strong>I'd Also Like to Share:</strong> I am interested in how intro data can move between forms, storage, and display.</li>
        </ul>
        <p style="text-align:center;">"Consistency creates confidence."</p>
        <p style="text-align:center;"><em>- Unknown</em></p>
        <hr />
      </section>
    `
        : "";

    return `
      <div class="split-sections" aria-label="Agenda and resources">
        <section class="bio-block split-left" aria-label="Agenda">
          <h3>Agenda</h3>
          <ul>
            <li>Introductions</li>
            <li>Background/Summary</li>
            <li>Read the Room</li>
            ${agendaDeepDiveItems}
            <li>Wrap-up</li>
            <li>Questions/Suggestions/Follow-Up</li>
          </ul>
        </section>
        <section class="bio-block split-right" aria-label="Resources">
          <h3>Resources</h3>
          <ul>
            ${defaultConferenceResources}
            ${extraResources}
            <li>Bring workshop notes and examples to share.</li>
          </ul>
        </section>
      </div>
      <section class="bio-block" aria-label="Steps">
        <h3>Steps</h3>
        <ol>
          <li>We'll add/update these as we progress thru the workshop.</li>
          <li>Install any desired/needed software (see resources above).</li>
          <li>Prepare examples or materials tied to this session focus.</li>
        </ol>
      </section>
      ${introInstructions}
    `;
}

function synthesizeAgendaItems(description) {
    const items = description
        .split(/[.!?]+/)
        .map((part) => part.replace(/\s+/g, " ").trim())
        .map((part) => part.replace(/^let'?s\s+explore\s+/i, "Explore "))
        .map((part) => part.replace(/^using\s+/i, "Use "))
        .map((part) => part.replace(/\.\.\.+$/g, ""))
        .filter((part) => part.length >= 20);

    const deduped = [];
    const seen = new Set();

    for (const item of items) {
        const key = item.toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            deduped.push(item);
        }
        if (deduped.length === 4) {
            break;
        }
    }

    return deduped.length > 0
        ? deduped
        : ["Review the session summary for key topics and examples."];
}

function renderSessionPage(page) {
    if (page.slideshowImages) {
        return renderCamelidsPage(page);
    }

    return `
    <section class="page">
      <h2>${page.title}</h2>
      <p>${page.description}</p>
      <div class="session-meta">
        <div class="meta-item">
          <span class="meta-label">Day</span>
          ${page.schedule.day}
        </div>
        <div class="meta-item">
          <span class="meta-label">Time</span>
          ${page.schedule.time}
        </div>
        <div class="meta-item">
          <span class="meta-label">Room</span>
          ${page.schedule.room}
        </div>
        <div class="meta-item">
          <span class="meta-label">Session Block</span>
          ${page.schedule.block}
        </div>
      </div>
      ${renderSessionSections(page)}
    </section>
  `;
}

function renderCamelidsPage(page) {
    const slides = page.slideshowImages
        .map(
            (src, index) => `
        <img class="camelid-slide ${index === 0 ? "is-active" : ""}" src="${src}" alt="Camel coding artwork ${index + 1}" loading="lazy" />
      `
        )
        .join("");

    return `
    <section class="page">
      <h2>${page.title}</h2>
      <h3>Llama, Alpaca, Guanaco, Vicuna & AI & Code!</h3>
      <p>${page.description}</p>
      <section class="bio-block" aria-label="Initial prompt">
        <h3>Initial Prompt</h3>
        <p>"Make me an image of an alpaca coding on a mountain top"</p>
        <h3>Prompt as suggested by Bing/Copilot Google using Nano Banana 2</h3>
        <p>"A charming alpaca sitting at a laptop computer on a mountain peak, surrounded by clouds and sunlight, typing code. The alpaca wears glasses and a small scarf, with a focused expression. Majestic rocky Mountains in the background, birds flying in the distance, soft ambient lighting highlighting the scene, whimsical and slightly cartoonish style, highly detailed."</p>
        <h3>Prompt Iteration Notes</h3>
        <p>Repeated prompts to adjust and modify the image led to hallucinations and quality degradation. A new more detailed prompt helped to start over, but some issues were annoyingly difficult to resolve.</p>
        <h3>Process</h3>
        <p>Saved each image with the same name but appending _x where x was the next letter in the alphabet. Asked Copilot in VSCode to add this page and make a slideshow out of the images. This is the result.</p>
      </section>
      <section class="camelid-show" id="camelids-slideshow" aria-label="Camelids slideshow">
        <div class="camelid-topbar">
          <button type="button" id="camelids-fullscreen" class="camelid-fullscreen" aria-label="View slideshow in fullscreen">Fullscreen</button>
        </div>
        <div class="camelid-stage">
          ${slides}
        </div>
        <div class="camelid-controls">
          <div class="camelid-nav">
            <button type="button" data-dir="first" aria-label="First slide">|&lt;</button>
            <button type="button" data-dir="prev" aria-label="Previous slide">&lt;</button>
            <span class="camelid-count" id="camelids-count">1 / ${page.slideshowImages.length}</span>
            <button type="button" data-dir="next" aria-label="Next slide">&gt;</button>
            <button type="button" data-dir="last" aria-label="Last slide">&gt;|</button>
          </div>
        </div>
      </section>
    </section>
  `;
}

function initCamelidsSlideshow() {
    const root = document.getElementById("camelids-slideshow");
    if (!root) {
        return;
    }

    const slides = Array.from(root.querySelectorAll(".camelid-slide"));
    const count = root.querySelector("#camelids-count");
    let activeIndex = 0;

    const update = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle("is-active", index === activeIndex);
        });
        if (count) {
            count.textContent = `${activeIndex + 1} / ${slides.length}`;
        }
    };

    root.querySelectorAll("button[data-dir]").forEach((button) => {
        button.addEventListener("click", () => {
            const dir = button.getAttribute("data-dir");
            if (dir === "first") {
                activeIndex = 0;
            } else if (dir === "last") {
                activeIndex = slides.length - 1;
            } else if (dir === "prev") {
                activeIndex = (activeIndex - 1 + slides.length) % slides.length;
            } else {
                activeIndex = (activeIndex + 1) % slides.length;
            }
            update();
        });
    });

    const fullscreenButton = root.querySelector("#camelids-fullscreen");
    if (fullscreenButton) {
        fullscreenButton.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                root.requestFullscreen?.();
                return;
            }
            document.exitFullscreen?.();
        });
    }

    update();
}

function getCurrentRoute() {
    const hash = window.location.hash.replace("#", "").trim();
    return pages[hash] ? hash : "home";
}

function renderMenu(route) {
    const menu = document.getElementById("menu");
    menu.innerHTML = Object.entries(pages)
        .map(
            ([key, value]) =>
                `<li><a href="#${key}" ${key === route ? 'aria-current="page"' : ""}>${value.menu}</a></li>`
        )
        .join("");
}

function renderRoute() {
    const route = getCurrentRoute();
    const app = document.getElementById("app");
    const page = pages[route];

    renderMenu(route);
    app.innerHTML = route === "home" ? page.render() : renderSessionPage(page);
    initCamelidsSlideshow();
    document.title = `NCCIA 2026 | D.I. von Briesen's ${page.title}`;
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
