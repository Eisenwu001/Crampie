/**
 * CMS_1101: Multi-Media System - Comprehensive Practice Quiz Data (130 Questions)
 * Topics 1-5 (Topic 3 expanded to 50 questions for Modules 3.0-3.5) with balanced randomized option distributions
 */
const CMS_QUIZ_DATA = [
  {
    "id": 1,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "According to Lecture 1, what is the core definition of Multimedia?",
    "options": [
      "A hardware setup composed solely of multiple high-definition CRT monitors",
      "A storage protocol restricted exclusively to uncompressed relational database files",
      "Computer information represented through audio, video, and animation in addition to traditional media",
      "A software compiler that converts C++ source code into binary assembly"
    ],
    "correctAnswer": 2,
    "explanation": "Lecture 1 (Slide 4) defines multimedia as computer information represented through audio, video, and animation in addition to traditional media (text, graphics, images)."
  },
  {
    "id": 2,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Etymologically, what is the term 'media' in relation to communication?",
    "options": [
      "A mathematical constant indicating the median of signal bandwidths",
      "An operating system kernel module that routes audio device drivers",
      "The plural of 'medium', meaning facilitating or linking communication",
      "A commercial trademark belonging exclusively to broadcast television"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 6 defines 'media' as the plural of 'medium', evolving to mean 'facilitating or linking communication'."
  },
  {
    "id": 3,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Which communication theorist coined the famous aphorism cited in Lecture 1: 'The medium is the message'?",
    "options": [
      "Alan Turing",
      "Marshall McLuhan",
      "Claude Shannon",
      "John von Neumann"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 8 highlights the famous quote 'The medium is the message' by Marshall McLuhan."
  },
  {
    "id": 4,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Which of the following lists the primary basic elements of multimedia introduced in Slide 9?",
    "options": [
      "Text, Graphic, Animation, Video, Audio, Hypermedia",
      "ROM, RAM, Cache, Registers, Buses, Logic Gates",
      "Packets, Sockets, Frames, Headers, Routers, Gateways",
      "Syntax, Semantics, Primitives, Compilers, Linkers"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 9 lists the basic elements of multimedia: Text, Graphic, Animation, Video, Audio, and Hypermedia."
  },
  {
    "id": 5,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "In multimedia terminology, how is 'Text' formally defined?",
    "options": [
      "Characters used to create words, sentences, and paragraphs",
      "An audio waveform recorded via pulse-code modulation",
      "A series of continuous bitmap photographs captured at 60 fps",
      "A vector coordinate mapping connecting Bézier curves"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 10 defines Text as: 'characters that are used to create words, sentences, and paragraphs'."
  },
  {
    "id": 6,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "How is 'Graphics' defined in Lecture 1?",
    "options": [
      "An automated system algorithm used for sorting database records",
      "A digital representation of non-text information, such as a drawing, chart, or photograph",
      "Sound waves converted into digital voltage pulses",
      "A sequence of text strings encoded exclusively in ASCII format"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 10 defines Graphics as 'A digital representation of non-text information, such as a drawing, chart, or photograph'."
  },
  {
    "id": 7,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "How does Slide 11 define 'Animation' in multimedia systems?",
    "options": [
      "Static raster images rendered exclusively on physical paper",
      "Vector transformations executed without time interpolation",
      "Flipping through a series of still images that creates the illusion of movement",
      "Continuous analog frequency modulation through electromagnetic waves"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 11 defines Animation as 'Flipping through a series of still images' to simulate motion."
  },
  {
    "id": 8,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "What distinguishes 'Linear Multimedia' from 'Non-linear (Interactive) Multimedia'?",
    "options": [
      "Linear multimedia only contains text, whereas non-linear only contains sound",
      "Linear multimedia cannot be rendered on digital computer screens",
      "In linear multimedia, content progresses without user navigation controls; non-linear allows user interactivity",
      "Non-linear multimedia is strictly restricted to broadcast analog television"
    ],
    "correctAnswer": 2,
    "explanation": "Linear multimedia plays sequentially from start to end without navigation control, while non-linear (interactive) lets users control the flow."
  },
  {
    "id": 9,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "What is 'Hypermedia' in the context of multimedia elements?",
    "options": [
      "An interactive structure where multimedia elements (text, audio, video) are linked non-linearly",
      "An ultra-fast optical fiber networking cable for audio transmission",
      "A high-capacity magnetic tape used for legacy television archiving",
      "A compression algorithm that removes all color channels from video"
    ],
    "correctAnswer": 0,
    "explanation": "Hypermedia extends hypertext by linking non-linear multimedia elements (audio, video, graphics) across an interactive structure."
  },
  {
    "id": 10,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Which of the following is considered an electronic medium used to store and experience multimedia?",
    "options": [
      "Optical discs (CD/DVD), Solid State Drives, and Web Servers",
      "Carbon transfer printing papers",
      "Mechanical abacus beads",
      "Manual typewriter ribbons"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 5 references the use of electronic digital media to store and experience multimedia content."
  },
  {
    "id": 11,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "What two primary purposes of multimedia content are highlighted in Slide 5?",
    "options": [
      "To convert digital code into analog telegraph signals",
      "To encrypt data or compress disk files",
      "To inform or entertain the user",
      "To generate hardware heat or drain battery power"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 5 states that multimedia uses multiple forms of information content 'to inform or entertain the user'."
  },
  {
    "id": 12,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "In multimedia digitization, what is the term for converting an analog continuous signal into discrete values over time?",
    "options": [
      "Decryption and Hashing",
      "Serialization and Garbage Collection",
      "Sampling and Quantization",
      "Compilation and Interpretation"
    ],
    "correctAnswer": 2,
    "explanation": "Digitizing analog multimedia requires sampling (measuring signal at discrete time intervals) and quantization (mapping values to digital levels)."
  },
  {
    "id": 13,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Which multimedia element conveys spoken dialogue, atmospheric background, and sound effects?",
    "options": [
      "Typography",
      "Audio",
      "Bitmap mask",
      "Vector wireframe"
    ],
    "correctAnswer": 1,
    "explanation": "Audio is the multimedia medium that delivers spoken dialogue, music, and sound effects."
  },
  {
    "id": 14,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "How does Video differ conceptually from pure computer-generated Animation?",
    "options": [
      "Video has zero frame rate, whereas animation always plays at 120 fps",
      "Video cannot be compressed or transmitted over internet networks",
      "Video records photographic visual frames captured from the real world, while animation is artificially generated",
      "Animation can only display monochrome black and white squares"
    ],
    "correctAnswer": 2,
    "explanation": "Video records real-world motion using cameras, whereas animation consists of illustrated or computer-generated sequences of images."
  },
  {
    "id": 15,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "What is an essential requirement for a computer system to qualify as a 'Multimedia Computer'?",
    "options": [
      "Hardware capable of processing and outputting audio, video, graphics, and text simultaneously",
      "A mainframe equipped exclusively with a punch card reader",
      "A server that runs with no monitor or sound capabilities",
      "A single-purpose terminal configured strictly for text command-line input"
    ],
    "correctAnswer": 0,
    "explanation": "A multimedia computer possesses the integrated processing power, sound card, graphics GPU, and storage to capture, edit, and play multimedia."
  },
  {
    "id": 16,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Which of the following is a prominent application domain of Interactive Multimedia?",
    "options": [
      "Batch print jobs on thermal receipt printers",
      "Manual filing cabinets in analog record offices",
      "Pure command-line file checksum utilities",
      "E-learning, computer-based training (CBT), and video games"
    ],
    "correctAnswer": 3,
    "explanation": "Interactive multimedia is widely used in educational software, CBT simulations, games, and rich interactive web apps."
  },
  {
    "id": 17,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "What role does 'Interactivity' play in modern multimedia systems?",
    "options": [
      "Forces the video to restart automatically every thirty seconds",
      "Empowers the user to navigate, control content flow, and actively respond to stimuli",
      "Disables keyboard and mouse inputs to prevent user interference",
      "Converts all raster graphics into uneditable vector silhouettes"
    ],
    "correctAnswer": 1,
    "explanation": "Interactivity shifts the user from a passive viewer to an active participant who directs and navigates content."
  },
  {
    "id": 18,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Which format represents graphics as mathematical formulas (points, lines, curves) rather than fixed pixel grids?",
    "options": [
      "Vector Graphics",
      "Uncompressed Video",
      "Waveform Audio",
      "Raster/Bitmap Graphics"
    ],
    "correctAnswer": 0,
    "explanation": "Vector graphics use geometric primitives based on mathematical equations, allowing infinite scaling without loss of resolution."
  },
  {
    "id": 19,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "Which format represents graphics as a two-dimensional grid of colored picture elements (pixels)?",
    "options": [
      "Raster (Bitmap) Graphics",
      "TrueType font curves",
      "Scalable Vector Graphics (SVG)",
      "Vector EPS files"
    ],
    "correctAnswer": 0,
    "explanation": "Raster graphics are grids of pixels where each pixel has a specific color value, commonly found in digital photos (JPEG, PNG, PSD)."
  },
  {
    "id": 20,
    "topicId": 1,
    "topicTitle": "Topic 1: Intro to Multimedia",
    "question": "In multimedia production, what is the primary benefit of Authoring Tools?",
    "options": [
      "They assemble computer motherboards inside factory clean rooms",
      "They allow developers to bind text, audio, video, and interactivity into a unified interactive title",
      "They replace human scriptwriters by auto-generating complete storylines",
      "They convert video frames directly into physical paper comic books"
    ],
    "correctAnswer": 1,
    "explanation": "Multimedia authoring tools provide the framework and environment for organizing and editing the diverse elements of a multimedia project."
  },
  {
    "id": 21,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "According to Lecture 2 (Slide 5), what is the scientific definition of color?",
    "options": [
      "An artificial pigment generated exclusively by inkjet printer nozzles",
      "The perceivable characteristic of light; and because light is energy, color is a form of energy",
      "A permanent property of matter that remains identical in total darkness",
      "A chemical dye applied only to synthetic fabrics"
    ],
    "correctAnswer": 1,
    "explanation": "Lecture 2 (Slide 5) defines color: 'Color is the perceivable characteristic of light; light is energy, so color is a form of energy'."
  },
  {
    "id": 22,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "According to Slide 9, what are the three Primary Colors in traditional color theory?",
    "options": [
      "Orange, Green, and Purple",
      "Red, Green, and Blue",
      "Cyan, Magenta, and Yellow",
      "Red, Yellow, and Blue"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 9 states that in traditional color theory, the primary colors from which all rest are created are: red, yellow, and blue."
  },
  {
    "id": 23,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "According to Slide 10, how are Secondary Colors formed and which colors are they?",
    "options": [
      "By mixing two primary colors; they are Green, Orange, and Purple",
      "By mixing black and white; they are Gray, Slate, and Charcoal",
      "By combining all colors equally; they are Brown, Ochre, and Umber",
      "By diluting pure hues with water; they are Pastels, Tints, and Tones"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 10 states: 'Mixing the primary colors we will get the secondary colors – green, orange and purple'."
  },
  {
    "id": 24,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "According to Slide 11, how are Tertiary Colors created on the color wheel?",
    "options": [
      "By subtracting white light through a polarizing lens",
      "By combining a primary color with an adjacent secondary color (e.g. yellow-orange, red-orange)",
      "By blending all three primary colors in equal proportions",
      "By mixing black with any secondary color"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 11 states: 'Tertiary colors are combinations between primary and secondary colors (yellow-orange, red-orange, etc.)'."
  },
  {
    "id": 25,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "How many total colors make up the standard traditional Color Wheel?",
    "options": [
      "16 hexadecimal colors",
      "12 colors (3 primary, 3 secondary, 6 tertiary)",
      "256 indexed palette colors",
      "7 colors of the rainbow"
    ],
    "correctAnswer": 1,
    "explanation": "The standard artist color wheel consists of 12 colors: 3 primary + 3 secondary + 6 tertiary."
  },
  {
    "id": 26,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What are Warm Colors, and what psychological sensations do they typically evoke?",
    "options": [
      "Red, Orange, and Yellow; they evoke warmth, passion, enthusiasm, and energy",
      "Blue, Green, and Violet; they evoke cold, winter, and stillness",
      "Black, White, and Gray; they evoke neutrality and clinical isolation",
      "Cyan and Magenta; they evoke digital computer monitors"
    ],
    "correctAnswer": 0,
    "explanation": "Warm colors (reds, oranges, yellows) are energetic, stimulating, and visually advance toward the viewer."
  },
  {
    "id": 27,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What are Cool Colors, and what psychological impressions do they typically give?",
    "options": [
      "Yellow and Marigold; they convey high excitement and appetite",
      "Blue, Green, and Purple; they convey calm, peace, serenity, and professional trust",
      "Red and Orange; they convey emergency warnings and fire",
      "Neon Pink and Lime; they convey youth party culture"
    ],
    "correctAnswer": 1,
    "explanation": "Cool colors (blues, greens, purples) are calming, soothing, and visually recede into the background."
  },
  {
    "id": 28,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What is a 'Complementary' color scheme on the color wheel?",
    "options": [
      "Colors located directly opposite each other on the color wheel (e.g. Red and Green, Blue and Orange)",
      "Colors situated side-by-side next to each other",
      "A single color mixed only with varying shades of gray",
      "Three colors placed at 90-degree right angles"
    ],
    "correctAnswer": 0,
    "explanation": "Complementary colors sit opposite each other on the color wheel, creating maximum visual contrast and vibrant energy."
  },
  {
    "id": 29,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What is an 'Analogous' color scheme?",
    "options": [
      "Combining pure black with pure white and neon yellow",
      "Colors located immediately next to each other on the color wheel (e.g. Blue, Blue-Green, Green)",
      "Colors positioned at exact triangular opposites",
      "A palette consisting solely of inverted negative hues"
    ],
    "correctAnswer": 1,
    "explanation": "Analogous schemes use colors adjacent to each other on the wheel, creating serene, harmonious, unified designs."
  },
  {
    "id": 30,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What is a 'Triadic' color scheme?",
    "options": [
      "A primary color paired with two dark grays",
      "Three colors evenly spaced around the color wheel at 120-degree intervals",
      "Three adjacent shades of the same base color",
      "Any color combination using only three pixels"
    ],
    "correctAnswer": 1,
    "explanation": "A triadic color scheme uses 3 colors evenly spaced around the wheel (like Red, Yellow, Blue), offering vibrant balance."
  },
  {
    "id": 31,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What is a 'Monochromatic' color scheme?",
    "options": [
      "A design utilizing only black and white with no color",
      "Alternating opposite colors on every other paragraph",
      "Using every color of the 12-part wheel simultaneously",
      "Variations in lightness and saturation of a single hue using tints, shades, and tones"
    ],
    "correctAnswer": 3,
    "explanation": "Monochromatic schemes derive from a single base hue extended with tints (adding white), shades (adding black), or tones (adding gray)."
  },
  {
    "id": 32,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "Which color model is Additive and used for digital display screens (monitors, televisions, smartphones)?",
    "options": [
      "CMYK (Cyan, Magenta, Yellow, Key/Black)",
      "Pantone Matching System (PMS)",
      "RGB (Red, Green, Blue)",
      "Greyscale Print Halftone"
    ],
    "correctAnswer": 2,
    "explanation": "RGB is an additive light model where combining red, green, and blue light at full intensity creates pure white light on screens."
  },
  {
    "id": 33,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "Which color model is Subtractive and used for physical commercial print media?",
    "options": [
      "RGB (Red, Green, Blue)",
      "CMYK (Cyan, Magenta, Yellow, Key/Black)",
      "HSL (Hue, Saturation, Lightness)",
      "HSV (Hue, Saturation, Value)"
    ],
    "correctAnswer": 1,
    "explanation": "CMYK is subtractive: physical ink absorbs (subtracts) light waves reflecting off paper; combining all inks produces dark black."
  },
  {
    "id": 34,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "In color psychology, what positive and negative emotions are commonly associated with the color RED?",
    "options": [
      "Innocence, cleanliness, sterile hygiene, and peace",
      "Cold, detachment, clinical sterilization, and freezing temperatures",
      "Passion, love, energy, power; but also danger, anger, fire, and urgency",
      "Royalty, wealth, luxury, and mystical enchantment"
    ],
    "correctAnswer": 2,
    "explanation": "Red commands attention: it evokes passion, energy, and excitement, but also warns of danger, stop signals, and aggression."
  },
  {
    "id": 35,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "In corporate and interface design, why is BLUE the most widely used brand color?",
    "options": [
      "It projects trust, reliability, security, loyalty, and calmness",
      "It is the brightest warning color to alert drivers on highways",
      "It stimulates intense hunger and urges rapid impulsive buying",
      "It represents death, despair, and dark mystery"
    ],
    "correctAnswer": 0,
    "explanation": "Blue is ubiquitous in banking, tech, and healthcare because it inspires trust, calm stability, reliability, and security."
  },
  {
    "id": 36,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "In design psychology, what attributes are associated with the color YELLOW?",
    "options": [
      "Formal corporate legal conservatism",
      "Environmental decay, toxicity, and stale dampness",
      "Optimism, warmth, cheerfulness, and intellect; but also hazard caution",
      "Deep sorrow, clinical isolation, and royal heritage"
    ],
    "correctAnswer": 2,
    "explanation": "Yellow is sunny, cheerful, optimistic, and stimulating, but is also used universally for caution and warning signs."
  },
  {
    "id": 37,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What associations are most strongly linked with the color GREEN?",
    "options": [
      "Impatience, fire emergencies, and traffic violations",
      "Nature, ecological growth, renewal, health, and financial wealth",
      "Sterile hospital operating rooms and ice",
      "Royal monarchies and ancient sorcery"
    ],
    "correctAnswer": 1,
    "explanation": "Green universally symbolizes nature, the environment, organic health, vitality, freshness, and monetary wealth."
  },
  {
    "id": 38,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "Historically and psychologically, what does the color PURPLE represent?",
    "options": [
      "Budget discount shopping and clearance items",
      "Urgent emergency evacuation and industrial construction",
      "Royalty, luxury, wisdom, spirituality, and mystery",
      "Agricultural harvesting and tractor equipment"
    ],
    "correctAnswer": 2,
    "explanation": "Because purple dye was historically rare and expensive, it represents royalty, luxury, prestige, magic, and contemplation."
  },
  {
    "id": 39,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "According to Slide 6, what dual psychological meanings does the color BLACK carry in web design?",
    "options": [
      "Extreme heat and tropical sunshine",
      "Elegance, luxury, and prosperity; but also mourning, death, and evil",
      "Infantile playfulness and cartoon amusement",
      "Natural organic farming and spring growth"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 6 notes that black can mean elegance and prosperity, but for others it reminds of death, hopelessness, evil, and mourning."
  },
  {
    "id": 40,
    "topicId": 2,
    "topicTitle": "Topic 2: Color Theory & Psychology",
    "question": "What design qualities does WHITE signify in modern minimalist interface design?",
    "options": [
      "Purity, simplicity, cleanliness, neutrality, and spacious clarity",
      "High urgency and immediate flight response",
      "Heavy industrial power and dark gothic drama",
      "Greed, envy, and radioactive contamination"
    ],
    "correctAnswer": 0,
    "explanation": "White provides clean negative space, simplicity, crisp contrast, purity, and modern breathable layout design."
  },
  {
    "id": 41,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "Which keyboard shortcut hides ALL panels in Adobe Photoshop, and tapping it again brings them back?",
    "options": [
      "Esc key",
      "F5 key",
      "Ctrl + H",
      "Tab key"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.1 states: 'To hide panels press [tab] key. Tapping tab again will bring them back'."
  },
  {
    "id": 42,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "According to Document 3.1, which shortcut hides the panels on the right while keeping the Tools panel visible on the left?",
    "options": [
      "Shift + Tab",
      "Ctrl + Tab",
      "Ctrl + Shift + Tab",
      "Alt + Tab"
    ],
    "correctAnswer": 0,
    "explanation": "Document 3.1 specifies: 'If we want the tools to be visible and hide the panels instead, press [Shift] + [Tab]'."
  },
  {
    "id": 43,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "Which single key cycles through Photoshop's Screen Modes (Standard, Full Screen with Menu Bar, Full Screen)?",
    "options": [
      "S key",
      "M key",
      "F key",
      "Z key"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.1 states: 'To enable screen mode press [F]-Full Screen Mode with Menu Bar, Full Screen Mode, and Standard'."
  },
  {
    "id": 44,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "Which keyboard shortcut cycles forward through currently open document tabs in Photoshop?",
    "options": [
      "Shift + Esc",
      "Alt + F4",
      "Ctrl + Tab",
      "Ctrl + Shift + W"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.2 highlights: 'Ctrl Tab to cycle through the images'."
  },
  {
    "id": 45,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "What is the universal keyboard shortcut to 'Fit on Screen' in Adobe Photoshop?",
    "options": [
      "Ctrl + Alt + 0",
      "Ctrl + F",
      "Ctrl + 1",
      "Ctrl + 0"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.2 and 3.3 state: 'Fit on Screen: Ctrl + 0'."
  },
  {
    "id": 46,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "What is the keyboard shortcut to view an image at 100% actual pixel magnification?",
    "options": [
      "Ctrl + Shift + 1",
      "Ctrl + 0",
      "Ctrl + 1",
      "Alt + 1"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.2 and 3.3 state: '100%: Ctrl + 1'."
  },
  {
    "id": 47,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "When using the Zoom Tool (Z), how do you temporarily switch to Zoom Out mode?",
    "options": [
      "Double-click the right mouse button",
      "Press the Spacebar twice",
      "Hold down the Alt (Win) / Option (Mac) key while clicking",
      "Hold down the Shift key"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.2 specifies: 'Press Z key for zoom, click to zoom in image, hold out the Alt key to zoom out'."
  },
  {
    "id": 48,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "According to 3.0_Photoshop Navigation (Slide 4), how do you activate the 'Scrubby Slider' on the lower-left zoom readout?",
    "options": [
      "Hover cursor over the zoom percentage and hold Ctrl (Command on Mac)",
      "Press Alt + F12",
      "Drag the ruler guide into the canvas",
      "Triple-click the scroll wheel"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 4 states: 'hover your cursor over the zoom level in the lower left, and hold down the Ctrl key... your cursor will change to a scrubby slider'."
  },
  {
    "id": 49,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "When using ANY tool in Photoshop, how do you temporarily access the Hand Tool for panning without switching tools?",
    "options": [
      "Double-tap the Enter key",
      "Hold down the Caps Lock key",
      "Press and hold the Spacebar while dragging with the mouse",
      "Press Ctrl + Shift + P"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing and holding the Spacebar temporarily turns the active cursor into the Hand Tool, allowing smooth panning."
  },
  {
    "id": 50,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "What is the dedicated keyboard shortcut for the Hand Tool in the Toolbar?",
    "options": [
      "P key",
      "H key",
      "G key",
      "T key"
    ],
    "correctAnswer": 1,
    "explanation": "The default single-letter shortcut for the Hand Tool is H."
  },
  {
    "id": 51,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "What is the keyboard shortcut to toggle Rulers on and off across the top and left of the canvas?",
    "options": [
      "Alt + R",
      "Ctrl + U",
      "Ctrl + Shift + R",
      "Ctrl + R"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.3 highlights: 'Show Rulers: Ctrl + R'."
  },
  {
    "id": 52,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "According to Document 3.3, what is the keyboard shortcut to toggle the document Grid overlay?",
    "options": [
      "Ctrl + G",
      "Ctrl + ' (apostrophe)",
      "Ctrl + ; (semicolon)",
      "Ctrl + Shift + G"
    ],
    "correctAnswer": 1,
    "explanation": "Document 3.3 specifies: 'Show Grid: Ctrl + '' (apostrophe). (Note: Ctrl + ; toggles Guides)."
  },
  {
    "id": 53,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "What keyboard shortcut fills a selection or the canvas with the current FOREGROUND color?",
    "options": [
      "Shift + Delete",
      "Ctrl + Shift + F",
      "Alt + Delete (or Alt + Backspace)",
      "Ctrl + Delete (or Ctrl + Backspace)"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.4 highlights: 'Alt + Delete fills with the Foreground color'."
  },
  {
    "id": 54,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "What keyboard shortcut fills a selection or the canvas with the current BACKGROUND color?",
    "options": [
      "Alt + Delete (or Alt + Backspace)",
      "Ctrl + Delete (or Ctrl + Backspace)",
      "Ctrl + Alt + Delete",
      "Shift + F5"
    ],
    "correctAnswer": 1,
    "explanation": "Document 3.4 highlights: 'Ctrl + Delete fills with the Background color'."
  },
  {
    "id": 55,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "Which single key resets the Foreground and Background color swatches to their default Black and White?",
    "options": [
      "B key",
      "R key",
      "X key",
      "D key"
    ],
    "correctAnswer": 3,
    "explanation": "Pressing D resets the color swatches to default (Foreground Black, Background White)."
  },
  {
    "id": 56,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "Which single key swaps the active Foreground and Background colors in Photoshop?",
    "options": [
      "D key",
      "X key",
      "Tab key",
      "S key"
    ],
    "correctAnswer": 1,
    "explanation": "Pressing X toggles/swaps the Foreground and Background color positions."
  },
  {
    "id": 57,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "What is the single-letter keyboard shortcut for the Brush Tool?",
    "options": [
      "P key",
      "T key",
      "B key",
      "E key"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.5 introduces the Brush Tool with shortcut B."
  },
  {
    "id": 58,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "According to Document 3.5, how can you paint a perfectly straight brush stroke between two points?",
    "options": [
      "Click once, then hold Shift and click on a different area of the canvas",
      "Draw with the mouse while holding down the Spacebar",
      "Hold down the Ctrl key while rapidly double-clicking",
      "Enable the Magnetic Lasso before clicking the brush"
    ],
    "correctAnswer": 0,
    "explanation": "Document 3.5 states: 'You can also Shift + Click the brush on a different area of the Canvas... a straight brush stroke will automatically be created'."
  },
  {
    "id": 59,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "Which pair of bracket keys on the keyboard decreases or increases the Brush diameter/size?",
    "options": [
      "< to decrease size, and > to increase size",
      "( to decrease size, and ) to increase size",
      "[ to decrease size, and ] to increase size",
      "- to decrease size, and + to increase size"
    ],
    "correctAnswer": 2,
    "explanation": "The left bracket [ decreases brush tip size; the right bracket ] increases brush tip size."
  },
  {
    "id": 60,
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation & Tool Controls",
    "question": "Which keyboard shortcut decreases or increases the brush edge Hardness (softens or hardens the brush)?",
    "options": [
      "Tab + [ and Tab + ]",
      "Ctrl + [ and Ctrl + ]",
      "Shift + [ to soften edge, Shift + ] to harden edge",
      "Alt + [ and Alt + ]"
    ],
    "correctAnswer": 2,
    "explanation": "Adding the Shift key (Shift + [ and Shift + ]) decreases and increases brush hardness in 25% increments."
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "When you first open an image in Photoshop, why does the software jump between preset zoom percentages (such as 25%, 33.3%, 50%, 66.7%, and 100%) rather than arbitrary fractions?",
    "options": [
      "Preset zoom levels provide the sharpest, most accurate representation of pixels without introducing interpolation distortion",
      "Preset zoom levels reduce GPU temperature by skipping frame buffer refreshes",
      "Photoshop's graphics engine cannot process zoom levels that are not multiples of five",
      "Preset zoom levels are strictly required by the ICC color management profile"
    ],
    "correctAnswer": 0,
    "explanation": "According to 3.0_Photoshop Navigation (Slides 7-9), viewing an image at standard preset levels (25%, 33.3%, 50%, 66.7%, 100%) yields the sharpest and most accurate view because Photoshop redraws pixels at clean fractional boundaries without interpolating between uneven pixel coordinates.",
    "id": 61
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to 3.0_Photoshop Navigation (Slide 4), what happens when you hold the Shift key while using the lower-left Scrubby Slider (Shift+Ctrl on Windows / Shift+Command on Mac)?",
    "options": [
      "It restricts zooming to only integer power-of-two magnifications",
      "It resets the zoom level back to 100% actual pixels",
      "It automatically rotates the canvas along with the zoom adjustment",
      "It zooms in or out in larger 10% increments"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 4 states that holding Ctrl/Command over the lower-left zoom readout activates the scrubby slider, and adding the Shift key (Shift+Ctrl in Windows or Shift+Command on Mac) zooms in or out in larger 10% increments.",
    "id": 62
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "What is the maximum zoom magnification level supported in modern versions of Adobe Photoshop (Slide 15)?",
    "options": [
      "3,200%",
      "6,400%",
      "12,800%",
      "1,600%"
    ],
    "correctAnswer": 2,
    "explanation": "3.0_Photoshop Navigation (Slide 15) notes: 'You can zoom in beyond 100%. In fact, these days Photoshop lets you zoom all the way in to 12800%.'",
    "id": 63
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "What is the non-printing visual guide that appears around individual pixels when zoomed significantly past 100%, and where can it be toggled (Slides 16-17)?",
    "options": [
      "Subpixel Wireframe, toggled via Edit > Preferences > Performance",
      "Snap Grid, toggled via View > Snap To > Pixels",
      "Bilinear Raster Mesh, toggled via Window > Align",
      "Pixel Grid, toggled via View > Show > Pixel Grid"
    ],
    "correctAnswer": 3,
    "explanation": "Slides 16 and 17 state that zooming in very closely displays the Pixel Grid around each pixel (for reference only, non-printing), and it can be disabled or re-enabled by going to View > Show > Pixel Grid.",
    "id": 64
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "Which keyboard shortcut combination allows you to temporarily access the Zoom In Tool while currently working with another tool on Windows (Slide 18)?",
    "options": [
      "Hold Ctrl + Shift + Z",
      "Hold Spacebar + Ctrl",
      "Hold Shift + Tab",
      "Hold Alt + Z"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 18 explains that holding down Spacebar and Ctrl on Windows (or Spacebar + Command on macOS) gives temporary access to the Zoom Tool to zoom in. Releasing the keys immediately returns you to your previous tool.",
    "id": 65
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "While holding Spacebar + Ctrl (Win) or Spacebar + Command (Mac) to temporarily zoom in, which key do you add to switch to Zoom Out (Slide 18)?",
    "options": [
      "Shift key",
      "Caps Lock key",
      "Alt (Windows) or Option (Mac)",
      "Tab key"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 18 instructs: 'To zoom out, add the Alt key, or the Option key on a Mac. Release the Alt or Option key to switch back to zooming in, and release all keys to return to the previous tool.'",
    "id": 66
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "What is 'Continuous Zoom' in Adobe Photoshop and how is it executed (Slide 19)?",
    "options": [
      "Dragging the mouse in a circular motion around the focal subject",
      "A background rendering mode that automatically animates between 100% and 200%",
      "Double-clicking the canvas while holding the Shift key",
      "With the Zoom Tool active, clicking and keeping the mouse button held down continuously zooms in until released"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 19 states: 'With the Zoom Tool active, click on an area where you want to zoom in and keep your mouse button held down. After a second or so, Photoshop will start zooming in continuously until you release your mouse button.'",
    "id": 67
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "When using the Zoom Tool with 'Scrubby Zoom' enabled in the Options Bar, how do you zoom in and out (Slide 20)?",
    "options": [
      "Scroll the trackpad with two fingers diagonally across the canvas",
      "Double-click to zoom in, or right-click to zoom out",
      "Click and drag upwards to zoom in, or drag downwards to zoom out",
      "Click and drag immediately to the right to zoom in, or drag to the left to zoom out"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 20 explains: 'Make sure Scrubby Zoom is checked. Then simply click and drag to the right to zoom in on an area, or drag to the left to zoom out. The faster you drag, the faster the zooming will be.'",
    "id": 68
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "If you uncheck 'Scrubby Zoom' in the Options Bar, how does the Zoom Tool behave instead (Slide 21)?",
    "options": [
      "It disables all zooming capabilities until GPU acceleration is restarted",
      "It allows you to click and drag a rectangular marquee outline to zoom into a specific framed area",
      "It turns the mouse cursor into a magnifying lens that previews pixels at 500%",
      "It switches the tool to a radial zoom centered on the document canvas midpoint"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 21 states: 'You can turn scrubby zoom off by unchecking it in the Options bar. Then the Zoom Tool behaves more like the Rectangular Marquee Tool. You can click and drag a selection outline around an area.'",
    "id": 69
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "How can you zoom in and out of an image using your mouse scroll wheel according to Slide 22?",
    "options": [
      "Hold Ctrl (Win) or Command (Mac) and scroll the wheel up or down",
      "Scroll the wheel without pressing any modifier keys",
      "Hold Shift + Tab and scroll the wheel up or down",
      "Hold Alt (Win) or Option (Mac) and scroll the wheel up to zoom in, or down to zoom out"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 22 notes: 'Hover your cursor over the area where you want to zoom in. Press and hold the Alt key or the Option key on a Mac, and scroll the wheel up to zoom in or down to zoom out.'",
    "id": 70
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "What is 'Flick Panning' in Adobe Photoshop (Slide 25)?",
    "options": [
      "Releasing the mouse button while dragging with the Hand Tool, tossing the canvas so it glides and gradually stops",
      "Rapidly clicking the left mouse button to jump through panning presets",
      "A visual glitch caused by insufficient GPU VRAM during panning",
      "Flipping the canvas horizontally to inspect mirror symmetry"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 25 explains: 'If you release your mouse button while you are in the middle of a drag, you will toss or throw the image in that direction... and it will keep moving until it gradually comes to a stop. This is known as Flick Panning.'",
    "id": 71
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Slide 28, how can you pan an image horizontally (left or right) using the mouse scroll wheel?",
    "options": [
      "Hold Shift + Alt and scroll up to pan left, or down to pan right",
      "Double-click the scroll wheel and drag horizontally",
      "Hold the Alt key and scroll up to pan left, or down to pan right",
      "Hold the Ctrl (Win) or Command (Mac) key and scroll up to pan left, or down to pan right"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 28 states: 'Hold the Ctrl key, or the Command key on a Mac, and scroll the wheel up to pan the image to the left, or scroll down to pan it to the right.'",
    "id": 72
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "How do you activate and use Photoshop's 'Bird's Eye View' feature (Slides 29-30)?",
    "options": [
      "Press Ctrl + Shift + 0 to open the aerial overview lens",
      "Press Spacebar + Tab, click on the focal point, and press Enter",
      "Press and hold the 'H' key, click and hold on the canvas to zoom out to fit screen, drag the zoom rectangle, and release the mouse",
      "Double-click the Navigator panel thumbnail while holding the Alt key"
    ],
    "correctAnswer": 2,
    "explanation": "Slides 29-30 state: 'To use the Bird’s Eye View, press and hold the letter H... click and hold on your image. Photoshop will zoom the image out so it fits entirely on the screen. Drag the rectangle over the new area you want to inspect. Release your mouse button, and Photoshop instantly zooms in on that area at the previous zoom level.'",
    "id": 73
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Slide 31, how can you immediately invoke 'Fit on Screen' using ONLY the toolbar and the mouse (no keyboard)?",
    "options": [
      "Double-click on the Zoom Tool icon in the toolbar",
      "Right-click the Move Tool and select 'Center Canvas'",
      "Double-click on the Hand Tool icon in the toolbar",
      "Click and drag the bottom-right corner of the toolbar"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 31 states: 'Double-click on the Hand Tool in the toolbar for Fit on Screen. Or double-click on the Zoom Tool to jump to 100%.'",
    "id": 74
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Slide 31, how can you immediately jump to '100% Actual Pixels' view using ONLY the toolbar and the mouse?",
    "options": [
      "Double-click on the Hand Tool icon in the toolbar",
      "Triple-click the canvas document tab header",
      "Click on the foreground color swatch twice",
      "Double-click on the Zoom Tool icon in the toolbar"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 31 notes that double-clicking the Hand Tool triggers 'Fit on Screen', while double-clicking the Zoom Tool immediately triggers the '100%' magnification view.",
    "id": 75
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "In Document 3.1, how can you detach an open document from the top tab bar to float it as an independent window?",
    "options": [
      "Right-click the tab and select 'Detonate Window'",
      "Press Ctrl + Alt + F while viewing the tab",
      "Double-click the image canvas background",
      "Click the document tab and drag it away downwards or outwards from the tab bar"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.1 explains: 'To float a window, click a tab and drag it out, this method is handy if you want to move an image to a second monitor.'",
    "id": 76
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Document 3.1, which menu command returns all detached or floating document windows back into standard unified tabs?",
    "options": [
      "File > Documents > Re-dock Workspace",
      "Edit > Preferences > Workspace > Reset All Tabs",
      "View > Window Layout > Re-anchor Tabs",
      "Window > Arrange > Consolidate All to Tabs"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.1 states: 'To go back to the tabs view, you can go back to Window, Arranged, Consolidate to All Tabs.'",
    "id": 77
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "Which command under Window > Arrange automatically chooses an organized side-by-side or grid layout for multiple open documents (Document 3.1)?",
    "options": [
      "Window > Arrange > Match Zoom and Location",
      "Window > Arrange > Cascade",
      "Window > Arrange > Float in Window",
      "Window > Arrange > Tile"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.1 states: 'If you want Photoshop to pick out the layout for you then you can just choose the Tile option.'",
    "id": 78
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Document 3.1, which command closes every open document EXCEPT the one you are currently working on?",
    "options": [
      "File > Close Others",
      "File > Close All",
      "Window > Close Inactive Tabs",
      "File > Revert Document"
    ],
    "correctAnswer": 0,
    "explanation": "Document 3.1 states: 'Choose Close Others, to close all other documents except the Active Document.'",
    "id": 79
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "Under which menu and submenu do you find the commands to flip or rotate the entire canvas (e.g., 180°, 90° Clockwise, Flip Horizontal) in Document 3.3?",
    "options": [
      "Window > Canvas Properties > Rotate",
      "Edit > Transform > Rotate Canvas",
      "Image > Image Rotation",
      "View > Orientation > Flip Canvas"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.3 explicitly instructs: 'To rotate or flip the canvas, click Image on the menu bar, point to Image Rotation, and then select the operation you want to execute.'",
    "id": 80
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Document 3.3, what are 'Guides' in Adobe Photoshop?",
    "options": [
      "Permanent raster lines printed along document margins for crop registration",
      "Non-printing horizontal and vertical lines displayed on top of an image to help position elements and selections",
      "Automated tutorial popups that guide beginner users through tools",
      "Vector paths generated by the Pen tool used strictly for clipping masks"
    ],
    "correctAnswer": 1,
    "explanation": "Document 3.3 states: 'GUIDES are nonprinting horizontal and vertical lines that you can display on top of an image to help you position a selection.'",
    "id": 81
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "How do you create a new manual Guide on the Photoshop canvas according to Document 3.3?",
    "options": [
      "Right-click anywhere on the canvas and choose 'Insert Alignment Vector'",
      "Select the Line tool and set mode to 'Guide Overlay'",
      "Display rulers with Ctrl+R, then click and drag a guide line from either the top or left ruler into position",
      "Hold Shift + G and click on the canvas midpoint"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.3 states: 'You can create a guide by displaying the rulers (Ctrl+ R), and then clicking and dragging the guide into position.'",
    "id": 82
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Document 3.3, how do you delete a single unwanted Guide from the canvas?",
    "options": [
      "Right-click the guide and choose 'Destroy Guide'",
      "Select the Move Tool (V), click and drag the guide line back over onto its ruler",
      "Select the guide and press the Backspace key three times",
      "Click on the guide with the Eraser Tool"
    ],
    "correctAnswer": 1,
    "explanation": "Document 3.3 states: 'You delete a guide by selecting the move tool, positioning the move tool over the guide and then clicking and dragging it back to its ruler.'",
    "id": 83
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "Which menu command locks all guides so they cannot be accidentally selected or moved while working (Document 3.3)?",
    "options": [
      "View > Lock Guides",
      "Layer > Guides > Lock Active Lines",
      "Window > Properties > Lock Alignment",
      "Edit > Preferences > Guides > Freeze Position"
    ],
    "correctAnswer": 0,
    "explanation": "Document 3.3 states: 'You can lock guides on the canvas so they are not accidentally moved. Click View on the menu bar, and then click Lock Guides.'",
    "id": 84
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "Which menu command removes all existing guides from the active document at once (Document 3.3)?",
    "options": [
      "Image > Clear Rulers & Guides",
      "View > Clear Guides",
      "File > Reset Document Guides",
      "Edit > Purge > Guides"
    ],
    "correctAnswer": 1,
    "explanation": "Document 3.3 states: 'To clear all the guides from the document, click the Clear Guides command on the view menu.'",
    "id": 85
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Document 3.4, what is the standard menu path and dialog used to fill a selection or canvas with colors, patterns, or content-aware fills?",
    "options": [
      "Image > Adjustments > Fill",
      "Layer > New Fill Layer > Solid Color",
      "View > Canvas Color > Apply",
      "Edit > Fill (Shift+F5)"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.4 states: 'The Fill Command on the Edit menu takes you to fill dialog box, which you use to fill a selection or the entire canvas with the foreground or background colors or other colors available in the dialog box.'",
    "id": 86
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "How is the edge Hardness of the Brush Tool defined and measured in Document 3.5?",
    "options": [
      "In pixels of Gaussian blur radius from 1px to 50px",
      "In points on a Kelvin temperature curve",
      "In decibels of antialiasing density from 0 to 255",
      "In percentages (0% produces a soft feathered edge, while 100% produces a crisp, smooth defined edge)"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.5 states: 'The hardness setting is measured in percentages. While 100% Hardness produces a brush that has a well-defined, smooth edge, 0% Hardness produces a brush with a very soft edge that fades or blends. These soft brushes are often referred to as having a feathered edge.'",
    "id": 87
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Document 3.5, which keyboard number keys quickly set the active Brush Opacity to 50%, 40%, and 100%?",
    "options": [
      "Press F5 for 50%, F4 for 40%, and F10 for 100%",
      "Press Shift+5 for 50%, Shift+4 for 40%, and Shift+0 for 100%",
      "Press Ctrl+5 for 50%, Ctrl+4 for 40%, and Ctrl+1 for 100%",
      "Press 5 for 50%, 4 for 40%, and 0 for 100%"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.5 explicitly states: 'To change the opacity setting press 5 on the numbers keypad for 50% opacity, press 4 for 40% opacity, and so forth. For 100% opacity, press [0].'",
    "id": 88
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "How does the 'Multiply' blending mode behave when painting with color onto an existing image (Document 3.5)?",
    "options": [
      "It increases the saturation of the canvas while preserving original luminance",
      "It replaces all underlying pixels with an opaque specular highlight",
      "It subtracts the brush color from 255 and inverts all overlapping pixels",
      "It acts like transparent paint where colors multiply together (e.g., cyan painted on yellow yields green), and black pixels cannot be altered"
    ],
    "correctAnswer": 3,
    "explanation": "Document 3.5 explains: 'When the Multiply blending mode is activated, painting the same yellow canvas with the same cyan brush will yield green wherever you paint. This is because the multiply blending mode causes the brush tool to paint with transparent paint. In multiply algorithm, black pixels cannot be altered by any other colors.'",
    "id": 89
  },
  {
    "topicId": 3,
    "topicTitle": "Topic 3: Photoshop Navigation, Tool Controls & Lab Foundations",
    "question": "According to Document 3.5, how does the 'Darker Color' blending mode operate when overlapping colors on the canvas?",
    "options": [
      "It averages the RGB values and reduces overall canvas brightness by 50%",
      "It replaces light pixels with a semi-transparent gray drop shadow",
      "Wherever two colors overlap, the darker color will dominate and replace the lighter color, leaving black pixels unaffected",
      "It locks the canvas and converts all colored pixels into a 1-bit grayscale bitmap"
    ],
    "correctAnswer": 2,
    "explanation": "Document 3.5 states: 'Darker Color Blending Mode is a straightforward algorithm. Wherever two colors overlap, the darker color will dominate and replace the lighter color. With darker color mode, it leaves black pixels unaffected by any color. This is because no other color is darker than black.'",
    "id": 90
  },
  {
    "id": 91,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "Which function key toggles the Layers Panel open or closed in Adobe Photoshop?",
    "options": [
      "F5 key",
      "F8 key",
      "F7 key",
      "F12 key"
    ],
    "correctAnswer": 2,
    "explanation": "Presentation 4.0 (Slide 4) states: 'Turn on this panel by navigating to Window > Layers or pressing F7'."
  },
  {
    "id": 92,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What is the keyboard shortcut to create a New Layer with a dialog box prompt?",
    "options": [
      "Shift + N",
      "Ctrl + N",
      "Ctrl + Alt + N",
      "Ctrl + Shift + N"
    ],
    "correctAnswer": 3,
    "explanation": "Ctrl + Shift + N (Command + Shift + N on Mac) creates a new layer with options/naming prompt."
  },
  {
    "id": 93,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What is the keyboard shortcut to quickly Duplicate the currently selected layer or selection?",
    "options": [
      "Ctrl + D",
      "Ctrl + J",
      "Ctrl + C",
      "Ctrl + Shift + J"
    ],
    "correctAnswer": 1,
    "explanation": "Ctrl + J (Layer via Copy) duplicates the active layer or copies the active selection to a new layer."
  },
  {
    "id": 94,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What is the keyboard shortcut to Merge the currently selected layer with the layer directly beneath it?",
    "options": [
      "Ctrl + E",
      "Ctrl + Shift + E",
      "Ctrl + M",
      "Ctrl + Alt + E"
    ],
    "correctAnswer": 0,
    "explanation": "Ctrl + E merges selected layers or merges down with the underlying layer."
  },
  {
    "id": 95,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What is the keyboard shortcut to group selected layers into a new Layer Group folder?",
    "options": [
      "Ctrl + Shift + G",
      "Ctrl + G",
      "Ctrl + U",
      "Ctrl + Alt + G"
    ],
    "correctAnswer": 1,
    "explanation": "Ctrl + G groups selected layers into a folder. (Ctrl + Shift + G ungroups them)."
  },
  {
    "id": 96,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "In the Layers panel, how do you show or hide the visual contents of an individual layer?",
    "options": [
      "Right-click the layer and choose Delete",
      "Drag the Opacity slider to 50%",
      "Press the Spacebar while clicking the layer name",
      "Click the Eye icon to the left of the layer thumbnail"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 17 states: 'In the Layers panel, click the eye icon to the left of a layer to hide its content. Click again in the same spot to reveal the content'."
  },
  {
    "id": 97,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "How do you select multiple contiguous (adjacent) layers in the Layers panel?",
    "options": [
      "Click the first layer, then hold Shift and click the last layer",
      "Press Ctrl + A while cursor is on the canvas",
      "Double-click each layer thumbnail in sequence",
      "Hold down the Alt key and drag across the layers"
    ],
    "correctAnswer": 0,
    "explanation": "Holding Shift allows selecting a contiguous block of layers from the first clicked to the second clicked."
  },
  {
    "id": 98,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "How do you select multiple non-contiguous (discontinuous) layers in the Layers panel?",
    "options": [
      "Hold down the Tab key while clicking layers",
      "Hold down Ctrl (Win) or Command (Mac) while clicking each desired layer",
      "Hold down the Spacebar while clicking layers",
      "Drag a marquee selection across the Layers panel"
    ],
    "correctAnswer": 1,
    "explanation": "Holding Ctrl (or Command on macOS) allows adding individual, non-contiguous layers to the selection."
  },
  {
    "id": 99,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What is the difference between Layer 'Opacity' and Layer 'Fill'?",
    "options": [
      "Opacity affects the entire layer including layer styles (effects); Fill affects only the pixel contents, leaving layer styles intact",
      "There is no difference; they are duplicate controls for the same function",
      "Opacity can only be set to 0% or 100%; Fill can be set to any decimal",
      "Opacity affects vector shapes only; Fill affects raster photographs only"
    ],
    "correctAnswer": 0,
    "explanation": "Lowering Opacity makes both pixels and layer effects transparent; lowering Fill makes the pixels transparent while keeping styles (stroke, drop shadow) visible."
  },
  {
    "id": 100,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "According to Slide 31, why is the default Background layer restricted, and how can you convert it to a normal editable layer?",
    "options": [
      "It is locked and cannot be moved or rearranged; click the lock icon to turn it into a regular layer",
      "It contains vector paths only; press Ctrl + T to rasterize it",
      "It has 0% opacity; drag the opacity slider up to 100%",
      "It must be deleted and replaced with a smart object"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 31 states: 'Because the Background layer is locked, it can’t be moved... To change the Background layer into a regular layer, click the lock icon'."
  },
  {
    "id": 101,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What is the keyboard shortcut for Free Transform (`Edit > Free Transform`)?",
    "options": [
      "Ctrl + T",
      "Ctrl + F",
      "Alt + T",
      "Ctrl + Shift + T"
    ],
    "correctAnswer": 0,
    "explanation": "Ctrl + T activates Free Transform, displaying the bounding box with 8 handles for scaling, rotating, skewing, and moving."
  },
  {
    "id": 102,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What visual bounding element appears when transforming a layer with Free Transform?",
    "options": [
      "A rectangle bounding box with eight handles",
      "A circular compass wheel with four tick marks",
      "A blinking marquee line with marching ants",
      "A 3D wireframe mesh with XYZ axis arrows"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 22 states: 'A bounding box appears when you transform an object... a rectangle that surrounds an image and contains eight handles'."
  },
  {
    "id": 103,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "According to Slide 25, what is the primary benefit of an 'Adjustment Layer'?",
    "options": [
      "It merges all open documents into an encrypted PDF file",
      "It permanently flattens all layers below it into the background",
      "It increases the screen refresh rate of the computer monitor",
      "It applies color and tonal adjustments without permanently changing pixel values (non-destructive editing)"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 25 states: 'An adjustment layer applies color and tonal adjustments to your image without permanently changing pixel values'."
  },
  {
    "id": 104,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "According to Slide 25, how do 'Fill Layers' differ from 'Adjustment Layers'?",
    "options": [
      "Fill layers convert images into CMYK print separations",
      "Fill layers fill a layer with solid color, gradient, or pattern, and do not affect the layers underneath them",
      "Fill layers permanently alter underlying image contrast",
      "Fill layers can only be applied to text layers"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 25 states: 'Fill layers let you fill a layer with a solid color, a gradient, or a pattern. Unlike adjustment layers, fill layers do not affect the layers underneath them'."
  },
  {
    "id": 105,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "According to Slide 33, what is a 'Smart Object' layer in Photoshop?",
    "options": [
      "A layer preserving source image content with all original characteristics for non-destructive editing and scaling",
      "A layer that automatically deletes itself when file size exceeds 10 MB",
      "A text layer that automatically checks spelling in five languages",
      "A script that automatically writes HTML code for web pages"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 33 defines Smart Objects: 'layers that contain image data from raster or vector images. They preserve the source content... letting you perform nondestructive editing'."
  },
  {
    "id": 106,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What is a 'Clipping Mask' in Adobe Photoshop?",
    "options": [
      "A destructive tool that permanently crops the entire canvas to a circle",
      "A setup where the content of one layer is masked to the boundaries of the layer immediately below it",
      "A physical plastic stencil placed over the computer monitor",
      "An automated file export format for vector plotters"
    ],
    "correctAnswer": 1,
    "explanation": "A clipping mask clips the visible pixels of a layer to the shape/transparency of the base layer directly below it."
  },
  {
    "id": 107,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "How do you create a Clipping Mask using mouse click in the Layers panel?",
    "options": [
      "Double-click the lock icon on the background layer",
      "Right-click the canvas and choose Merge Visible",
      "Drag the top layer into the trash can icon",
      "Hold down the Alt (Option) key and hover between the two layers until the cursor changes, then click"
    ],
    "correctAnswer": 3,
    "explanation": "Holding Alt (Option) and clicking the boundary line between two layers in the Layers panel creates a clipping mask (shortcut: Ctrl + Alt + G)."
  },
  {
    "id": 108,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "Which lock option in the Layers panel locks ONLY the transparent pixels, allowing you to paint only on existing artwork without spilling onto empty space?",
    "options": [
      "Lock Transparent Pixels (the checkerboard icon)",
      "Lock All (the padlock icon)",
      "Lock Image Pixels (the brush icon)",
      "Lock Position (the crosshair icon)"
    ],
    "correctAnswer": 0,
    "explanation": "The 'Lock Transparent Pixels' button prevents any brush stroke or fill from applying to transparent areas of the layer."
  },
  {
    "id": 109,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "What happens when you rename a layer in Photoshop according to Slide 19?",
    "options": [
      "Double-click the current layer name, type a new name, and press Enter",
      "Open the Preferences dialog and restart Photoshop",
      "Save the file as a new JPEG with a different file name",
      "Right-click and select Format Operating System"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 19 states: 'To name a layer, double-click the current layer name. Type a new name for the layer. Press Enter'."
  },
  {
    "id": 110,
    "topicId": 4,
    "topicTitle": "Topic 4: Layers & Layer Cheat Sheet",
    "question": "How do you delete a selected layer using keyboard shortcuts according to Slide 19?",
    "options": [
      "Press Esc three times",
      "Press Ctrl + Z",
      "Press Shift + Tab",
      "Press Backspace (Windows) or Delete (macOS)"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 19 states: 'To delete a layer, select a layer in the Layers panel and press Backspace (Windows) or Delete (macOS)'."
  },
  {
    "id": 111,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Document 5.1 ('Selection Notes in Photoshop'), which key do you hold down to ADD to an existing selection?",
    "options": [
      "Hold down Shift while drawing or clicking with selection tools",
      "Hold down Alt while drawing",
      "Hold down Ctrl while clicking",
      "Hold down Spacebar while clicking"
    ],
    "correctAnswer": 0,
    "explanation": "Document 5.1 specifies: 'Add to selection: hold down Shift while using the following tools: Magic Wand, Lasso tools, Marquee tools'."
  },
  {
    "id": 112,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Document 5.1, which key do you hold down to SUBTRACT from an existing selection?",
    "options": [
      "Hold down Ctrl",
      "Hold down Tab",
      "Hold down Alt (Option on Mac)",
      "Hold down Shift"
    ],
    "correctAnswer": 2,
    "explanation": "Document 5.1 specifies: 'Subtract from selection: hold down Alt/Option while using the following tools: Magic Wand, Lasso tools, Marquee tools'."
  },
  {
    "id": 113,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Document 5.1, which key combination do you hold down to INTERSECT a new selection with an existing selection?",
    "options": [
      "Hold down Ctrl and Alt together",
      "Hold down Ctrl and Shift together",
      "Hold down Spacebar and Alt together",
      "Hold down Alt/Option and Shift together"
    ],
    "correctAnswer": 3,
    "explanation": "Document 5.1 specifies: 'Intersect selections: hold down Alt/Option and Shift together to intersect a new selection with a previous one'."
  },
  {
    "id": 114,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "What is the keyboard shortcut to Deselect all active selections in Photoshop?",
    "options": [
      "Ctrl + Shift + D",
      "Esc key",
      "Ctrl + D",
      "Ctrl + A"
    ],
    "correctAnswer": 2,
    "explanation": "Document 5.1 highlights: 'Deselect: Control - D to deselect everything'."
  },
  {
    "id": 115,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "What is the keyboard shortcut to Reselect the most recently deselected selection?",
    "options": [
      "Ctrl + Shift + D",
      "Ctrl + R",
      "Ctrl + D",
      "Ctrl + Alt + D"
    ],
    "correctAnswer": 0,
    "explanation": "Document 5.1 specifies: 'Reselect: Control - Shift - D to reselect the previous selection'."
  },
  {
    "id": 116,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "What is the keyboard shortcut to Invert a selection in Photoshop (select everything outside the current selection)?",
    "options": [
      "Ctrl + Alt + I",
      "Ctrl + Shift + I",
      "Ctrl + I",
      "Alt + Shift + I"
    ],
    "correctAnswer": 1,
    "explanation": "Document 5.1 states: 'Invert selection in Photoshop: (Shift + Ctrl + I) to deselect what was previously selected and select what was not selected'."
  },
  {
    "id": 117,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Document 5.1, how can you MOVE a marquee selection outline across the canvas WHILE you are actively drawing it?",
    "options": [
      "Hold down the Alt key and drag the mouse wheel",
      "Hold down the Spacebar while still drawing the selection",
      "Press the Arrow keys while releasing the mouse",
      "Press the Tab key twice"
    ],
    "correctAnswer": 1,
    "explanation": "Document 5.1 states: 'Move selection in Photoshop: hold down Spacebar while still drawing the selection with Marquee tools to move it around'."
  },
  {
    "id": 118,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "How do you constrain a selection to a perfect square or circle when using the Marquee tools?",
    "options": [
      "Hold down Alt while clicking",
      "Double-click the Marquee tool icon in the toolbar",
      "Turn on Caps Lock",
      "Hold down Shift while creating the selection"
    ],
    "correctAnswer": 3,
    "explanation": "Document 5.1 highlights: 'Perfect circle or Square: hold down Shift with the Elliptical or Rectangular Marquee tools while creating them'."
  },
  {
    "id": 119,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Document 5.1, how do you draw a selection outward from its CENTER point rather than from a corner?",
    "options": [
      "Hold down Shift + Spacebar",
      "Click the center of the canvas with the Move tool",
      "Hold down Ctrl while dragging",
      "Hold down Alt/Option with the Marquee tool while creating it"
    ],
    "correctAnswer": 3,
    "explanation": "Document 5.1 highlights: 'Draw selection from the center: hold down Alt/Option with the Elliptical or Rectangular Marquee tools'."
  },
  {
    "id": 120,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Document 5.1, where are saved selections stored inside Photoshop?",
    "options": [
      "Inside the computer's motherboard BIOS ROM",
      "As Channels (essentially Pixel Masks stored under the Channels panel)",
      "In an external Windows Notepad text file",
      "As permanent vector clipping paths"
    ],
    "correctAnswer": 1,
    "explanation": "Document 5.1 highlights: 'Saved selections in Photoshop are stored as Channels. They are essentially Pixel Masks not assigned to any layer'."
  },
  {
    "id": 121,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "What does the 'Transform Selection' command do, according to Document 5.1?",
    "options": [
      "Converts the raster layer directly into a Smart Object",
      "Transforms the selection outline marquee itself without altering the image pixels inside it",
      "Applies a Gaussian blur filter to the canvas",
      "Permanently deletes all image layers outside the boundary"
    ],
    "correctAnswer": 1,
    "explanation": "Document 5.1 states: 'This feature is essentially the Free Transform tool, which will only transform your selection but not the content of the selected layer(s)'."
  },
  {
    "id": 122,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "What does the 'Feather' selection setting accomplish in Photoshop?",
    "options": [
      "Removes color saturation from the selected pixels",
      "Prevents any layer mask from being created",
      "Converts the selection into pure black vector lines",
      "Softens and blurs the edges of the selection outline with a gradual transitional border"
    ],
    "correctAnswer": 3,
    "explanation": "Document 5.1 highlights: 'The feather selection Photoshop tool will soften the edges of your selection'."
  },
  {
    "id": 123,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "What is the keyboard shortcut to enter and exit Quick Mask Mode?",
    "options": [
      "W key",
      "K key",
      "Q key",
      "M key"
    ],
    "correctAnswer": 2,
    "explanation": "Pressing the Q key toggles Quick Mask mode on and off, allowing selections to be painted with the brush tool."
  },
  {
    "id": 124,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Lecture 6 (Slide 2), what is the foundational definition of a Layer Mask?",
    "options": [
      "A vector line drawn with the Pen tool to trim bleed borders for printing",
      "A permanent destructive filter that deletes transparent pixels",
      "A non-destructive way to hide parts of an image or layer without erasing them",
      "A software license watermarking tool for copyright protection"
    ],
    "correctAnswer": 2,
    "explanation": "Lecture 6 (Slide 2) states: 'Layer masking is a nondestructive way to hide parts of an image or layer without erasing them'."
  },
  {
    "id": 125,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "What is the universal Golden Rule of Layer Masking in Adobe Photoshop?",
    "options": [
      "Black reveals, White conceals, and Gray inverts the colors",
      "White multiplies darkness, Black creates drop shadows",
      "Red paints pixels, Blue deletes pixels, and Green scales pixels",
      "Black conceals (hides), White reveals (shows), and Gray partially conceals/reveals"
    ],
    "correctAnswer": 3,
    "explanation": "In layer masks: painting with Black hides that area of the layer, painting with White reveals it, and tones of Gray create partial transparency."
  },
  {
    "id": 126,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Lecture 6 (Slide 3), how do you create a layer mask that immediately HIDES the entire layer (Hide All)?",
    "options": [
      "Alt-click (Win) / Option-click (Mac) the Add Layer Mask button (or Layer > Layer Mask > Hide All)",
      "Click the Add Layer Mask button normally",
      "Press Ctrl + Shift + X",
      "Double-click the layer name in the Layers panel"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 3 states: 'To create a mask that HIDES the entire layer, Alt-click (Win) or Option-click (Mac) the Add Layer Mask button, or choose Layer > Layer Mask > Hide All'."
  },
  {
    "id": 127,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "How do you temporarily disable or enable a Layer Mask without deleting it?",
    "options": [
      "Shift-click the layer mask thumbnail in the Layers panel (a red X will appear over it)",
      "Double-click the layer mask thumbnail",
      "Drag the layer mask into a group folder",
      "Press Ctrl + D while the layer mask is selected"
    ],
    "correctAnswer": 0,
    "explanation": "Shift-clicking a layer mask thumbnail temporarily disables the mask (marked with a red X); clicking again re-enables it."
  },
  {
    "id": 128,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "How can you view the black-and-white layer mask itself directly on the canvas?",
    "options": [
      "Press the F1 key",
      "Alt-click (Option-click) the layer mask thumbnail in the Layers panel",
      "Hold down the Tab key while drawing",
      "Press Ctrl + Shift + M"
    ],
    "correctAnswer": 1,
    "explanation": "Alt-clicking (Option-clicking) the mask thumbnail displays the full black-and-white mask directly on the canvas."
  },
  {
    "id": 129,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "According to Lecture 6 (Slide 5), what does the Link icon between a layer thumbnail and its mask thumbnail indicate?",
    "options": [
      "The layer and mask move and transform together; clicking the link icon unlinks them so either can be moved independently",
      "The layer is permanently encrypted and cannot be exported",
      "The layer styles are locked to the master artboard",
      "The layer is linked to an external cloud database server"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 5 states that the link icon indicates the layer and its mask are linked; unlinking them allows moving or transforming the image without moving the mask (or vice versa)."
  },
  {
    "id": 130,
    "topicId": 5,
    "topicTitle": "Topic 5: Selections, Masking & Blending Notes",
    "question": "Which Photoshop Blending Mode category contains 'Multiply', 'Darken', and 'Color Burn'—modes that darken the underlying image?",
    "options": [
      "Inversion Blending Modes",
      "Contrast Blending Modes",
      "Lighten Blending Modes",
      "Darken Blending Modes"
    ],
    "correctAnswer": 3,
    "explanation": "The Darken group (Darken, Multiply, Color Burn, Linear Burn, Darker Color) blends pixels by dropping lighter values and darkening the result."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CMS_QUIZ_DATA };
}
