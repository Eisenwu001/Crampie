const QUIZ_DATA = [
  {
    "id": 1,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Who authored the foundational article 'Data Science vs. Big Data vs. Data Analytics' presented in Lecture 1?",
    "options": [
      "Michelle D'Alessandro",
      "Avantika Monnappa",
      "Clint Boulton",
      "Andrew Wilson"
    ],
    "correctAnswer": 1,
    "explanation": "Lecture 1 introduces the comparison 'Data Science vs. Big Data vs. Data Analytics' written by Avantika Monnappa (Slide 2)."
  },
  {
    "id": 2,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "According to IBM data cited in Lecture 1, how much digital data was generated every single day in 2012?",
    "options": [
      "1.7 megabytes (MB)",
      "10 billion petabytes (PB)",
      "500 terabytes (TB)",
      "2.5 billion gigabytes (GB)"
    ],
    "correctAnswer": 3,
    "explanation": "According to IBM, 2.5 billion gigabytes (GB) of data was generated every day in 2012 (Slide 3)."
  },
  {
    "id": 3,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "According to Forbes, at what rate is the total volume of digital data currently growing?",
    "options": [
      "Tripling every five years",
      "Growing by 10 percent annually",
      "Doubling every two years",
      "Doubling every six months"
    ],
    "correctAnswer": 2,
    "explanation": "The slides cite Forbes stating that digital data is doubling every two years and changing the way we live (Slide 3)."
  },
  {
    "id": 4,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "By the year 2020, Forbes estimated that how much new information would be created every second for every human being on Earth?",
    "options": [
      "About 10 megabytes",
      "About 2.5 gigabytes",
      "About 500 kilobytes",
      "About 1.7 megabytes"
    ],
    "correctAnswer": 3,
    "explanation": "Forbes stated that by the year 2020, about 1.7 megabytes of new information will be created every second for every human being on the planet (Slide 3 and 4)."
  },
  {
    "id": 5,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Which field is defined as an 'umbrella of techniques' dealing with structured and unstructured data, comprising data cleansing, preparation, and analysis?",
    "options": [
      "Big Data",
      "Business Intelligence",
      "Data Science",
      "Data Analytics"
    ],
    "correctAnswer": 2,
    "explanation": "Data Science is described as dealing with unstructured and structured data, comprising everything related to data cleansing, preparation, analysis, and serving as the umbrella of techniques (Slide 5)."
  },
  {
    "id": 6,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "According to the infographic in Lecture 1, what is the reported average yearly salary for a Data Scientist?",
    "options": [
      "$85,200 per year",
      "$62,066 per year",
      "$113,436 per year",
      "$60,476 per year"
    ],
    "correctAnswer": 2,
    "explanation": "The salary comparison infographic shows Data Scientist at $113,436 per year, Big Data Specialist at $62,066 per year, and Data Analyst at $60,476 per year (Slide 10)."
  },
  {
    "id": 7,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "According to the infographic in Lecture 1, what is the reported average yearly salary for a Big Data Specialist?",
    "options": [
      "$113,436 per year",
      "$62,066 per year",
      "$74,500 per year",
      "$60,476 per year"
    ],
    "correctAnswer": 1,
    "explanation": "The salary comparison infographic states that a Big Data Specialist earns an average of $62,066 per year (Slide 10)."
  },
  {
    "id": 8,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "According to the infographic in Lecture 1, what is the reported average yearly salary for a Data Analyst?",
    "options": [
      "$55,120 per year",
      "$113,436 per year",
      "$62,066 per year",
      "$60,476 per year"
    ],
    "correctAnswer": 3,
    "explanation": "The salary comparison infographic states that a Data Analyst earns an average of $60,476 per year (Slide 10)."
  },
  {
    "id": 9,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "According to Gartner's definition, Big Data represents information assets characterized by which three key dimensions?",
    "options": [
      "High-veracity, high-value, and high-variability",
      "High-volume, high-value, and high-vector",
      "High-validity, high-vulnerability, and high-visibility",
      "High-volume, high-velocity, and high-variety"
    ],
    "correctAnswer": 3,
    "explanation": "Gartner defines Big Data as 'high-volume, and high-velocity and/or high-variety information assets that demand cost-effective, innovative forms of information processing' (Slide 6)."
  },
  {
    "id": 10,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Which set of skills is specifically listed in the infographic for a Data Scientist?",
    "options": [
      "SAS and/or R, Python coding, Hadoop platform, SQL database/coding, unstructured data",
      "Hardware engineering, Network architecture, Web hosting, Database administration",
      "Programming, Statistical skills, Machine learning, Data wrangling, Visualization, Data intuition",
      "Analytical skills, Creativity, Mathematics, Statistical skills, Computer science, Business skills"
    ],
    "correctAnswer": 0,
    "explanation": "The infographic lists for Data Scientist: In-depth knowledge in SAS and/or R, Python coding, Hadoop platform, SQL database/coding, and Working with unstructured data (Slide 9)."
  },
  {
    "id": 11,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "In which industries are Data Science algorithms specifically highlighted as being applied?",
    "options": [
      "Internet searches, Search recommenders, and Digital advertisements",
      "Financial services, Retail, and Communication",
      "Agriculture, Heavy machinery, and Civil engineering",
      "Healthcare, Travel, Gaming, and Energy management"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 9 indicates Data Science algorithms are used in industries like: Internet searches, Search recommenders, and Digital advertisements."
  },
  {
    "id": 12,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "In which industries is Big Data specifically highlighted as being used?",
    "options": [
      "Financial services, Retail, and Communication",
      "Healthcare, Travel, Gaming, and Energy management",
      "Aerospace, Forestry, and Marine navigation",
      "Internet searches, Search recommenders, and Digital advertisements"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 9 highlights that Big Data is used in Financial Services, Retail, and Communication."
  },
  {
    "id": 13,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "In which industries is Data Analytics specifically highlighted as being used?",
    "options": [
      "Internet searches, Search recommenders, and Digital advertisements",
      "Healthcare, Travel, Gaming, and Energy management",
      "Financial services, Retail, and Communication",
      "Automotive manufacturing, Metallurgy, and Textile milling"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 9 highlights that Data Analytics is used in Healthcare, Travel, Gaming, and Energy management."
  },
  {
    "id": 14,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "What is the primary definition of Data Analytics given in Lecture 1?",
    "options": [
      "The theoretical mathematical study of multi-dimensional vector spaces",
      "The extraction of hidden cryptographic hashes inside relational databases",
      "The science of analyzing raw data in order to make conclusions about that information",
      "The infrastructure architecture for storing multi-terabyte unaggregated data files"
    ],
    "correctAnswer": 2,
    "explanation": "Lecture 1 defines Data Analytics as 'the science of analyzing raw data in order to make conclusions about that information' (Slide 7)."
  },
  {
    "id": 15,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "According to Lecture 1, Data Analytics is also commonly known as:",
    "options": [
      "Data warehousing",
      "Data analysis",
      "Data scraping",
      "Data mining"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 8 explicitly states: 'Data analytics is also known as data analysis.'"
  },
  {
    "id": 16,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "In the CIO.com case study by Clint Boulton, what is the name of Accenture's application that scores the likelihood of winning business opportunities?",
    "options": [
      "Win Probability Tool",
      "Opportunity Predictor",
      "iQuatic Solution",
      "MANTIS System"
    ],
    "correctAnswer": 0,
    "explanation": "Accenture's application is called the 'Win Probability Tool', which leverages metrics to score the likelihood of winning business opportunities (Slide 12)."
  },
  {
    "id": 17,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Accenture's Win Probability Tool analyzes CRM data from which platform to predict loss potential with 90 percent accuracy?",
    "options": [
      "Microsoft Dynamics",
      "Salesforce.com",
      "SAP ERP",
      "Oracle CRM"
    ],
    "correctAnswer": 1,
    "explanation": "The application churns through Accenture's Salesforce.com CRM data, taking into account several years of deals to predict loss potential with 90 percent accuracy (Slide 12)."
  },
  {
    "id": 18,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "How many employees does Accenture support with its device and real estate utilization analytics dashboards?",
    "options": [
      "250,000 employees",
      "100,000 employees",
      "500,000 employees",
      "1,000,000 employees"
    ],
    "correctAnswer": 2,
    "explanation": "Both apps enable leadership to make critical decisions that improve the experience for Accenture's 500,000 employees (Slide 13)."
  },
  {
    "id": 19,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Accenture uses predictive analytics to conduct present and forecast modeling to support which organizational diversity goal by 2025?",
    "options": [
      "50/50 gender parity",
      "75 percent remote workforce",
      "100 percent renewable power",
      "40/60 gender distribution"
    ],
    "correctAnswer": 0,
    "explanation": "The tool is critical for helping Accenture reach its 50/50 gender parity goal by 2025 and 25% female workforce in leadership positions (Slide 13)."
  },
  {
    "id": 20,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Accenture CIO Andrew Wilson hosts their data lake in Microsoft Azure and visualizes findings using which software?",
    "options": [
      "Power BI",
      "Qlik",
      "Tableau",
      "Looker"
    ],
    "correctAnswer": 1,
    "explanation": "Wilson supports these apps with a data lake running in Microsoft's Azure cloud, visualized with Qlik software (Slide 13)."
  },
  {
    "id": 21,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "What primary lesson was learned from Accenture's enterprise data analytics implementation?",
    "options": [
      "Cloud migration must always eliminate existing legacy databases within one month",
      "The bigger the enterprise, the more value that is trapped in the data it has collected",
      "Small companies do not require analytics strategies",
      "Machine learning cannot be applied to CRM data"
    ],
    "correctAnswer": 1,
    "explanation": "The lesson learned states: 'The bigger the enterprise, the more value that is trapped in the data it has collected. A digital strategy has analytics at the core' (Slide 14)."
  },
  {
    "id": 22,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "At Belkin, which CIO emphasizes preparing now for 5G cellular network technology?",
    "options": [
      "Andrew Wilson",
      "Daniel Jeavons",
      "Lance Ralls",
      "Dickie Oliver"
    ],
    "correctAnswer": 2,
    "explanation": "At Hon Hai-owned Belkin, CIO Lance Ralls spearheaded their analytics strategy and warned CIOs to prepare for 5G (Slide 15 and 16)."
  },
  {
    "id": 23,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "What software does Belkin use for copy data management to roll through snapshots and virtualize, compress, and protect data?",
    "options": [
      "Snowflake",
      "Delphix",
      "Alteryx",
      "Databricks"
    ],
    "correctAnswer": 1,
    "explanation": "The software from Delphix enables Belkin to rapidly roll through snapshots, virtualize, compress, and protect data (Slide 15)."
  },
  {
    "id": 24,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "At Shell, Daniel Jeavons built an analytics platform to anticipate failures in how many oil drilling machine parts?",
    "options": [
      "Exactly 500 machine parts",
      "1,200 machine parts",
      "Over 50,000 machine parts",
      "More than 3,000 different machine parts"
    ],
    "correctAnswer": 3,
    "explanation": "Shell built an analytics platform to run predictive models to anticipate when more than 3,000 different oil drilling machine parts might fail (Slide 17)."
  },
  {
    "id": 25,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Which tool capturing streaming data via Apache Spark helped Shell reduce inventory analysis from 48 hours to under 45 minutes?",
    "options": [
      "Qlik",
      "Delphix",
      "Databricks",
      "Slalom"
    ],
    "correctAnswer": 2,
    "explanation": "Databricks captures streaming data via Apache Spark hosted in Azure, reducing inventory analysis from over 48 hours to less than 45 minutes (Slide 17)."
  },
  {
    "id": 26,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "What is the name of Cargill's mobile data-tracking app that helps shrimp farmers reduce yield mortality rates?",
    "options": [
      "iQuatic",
      "AquacultureIQ",
      "MANTIS",
      "ShrimpFlow"
    ],
    "correctAnswer": 0,
    "explanation": "Cargill's animal nutrition unit developed iQuatic, a mobile data-tracking app that helps shrimp farmers reduce mortality rate of their yields (Slide 19)."
  },
  {
    "id": 27,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Cargill's iQuatic automated feeding system understands the natural eating patterns of shrimp using which technology?",
    "options": [
      "Biochemical testing strips",
      "Infrared laser scanning",
      "Acoustic technology",
      "Satellite radar imaging"
    ],
    "correctAnswer": 2,
    "explanation": "Cargill's iQuatic automated shrimp feeding system employs automated feeders using acoustic technology to understand natural eating patterns (Slide 19)."
  },
  {
    "id": 28,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "At Merck, CIO Michelle D'Alessandro created which data warehousing system to eliminate engineers spending 60% to 80% of effort searching for data?",
    "options": [
      "iQuatic",
      "MANTIS (Manufacturing and Analytics Intelligence)",
      "Win Probability Tool",
      "Delphix Data Hub"
    ],
    "correctAnswer": 1,
    "explanation": "Merck created MANTIS (Manufacturing and Analytics Intelligence), an uber data warehousing system comprising in-memory databases and open source tools (Slide 21)."
  },
  {
    "id": 29,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Airlines Reporting Corp. (ARC), which settles over $88 billion in airfare transactions, migrated its warehouse from Teradata to which cloud software on AWS?",
    "options": [
      "Delphix",
      "Snowflake",
      "MANTIS",
      "Databricks"
    ],
    "correctAnswer": 1,
    "explanation": "ARC migrated from a Teradata data warehouse to cloud software from Snowflake hosted on AWS (Slide 23)."
  },
  {
    "id": 30,
    "topicId": 1,
    "topicTitle": "Topic 1: Lecture 1 - Data Analytics",
    "question": "Arrange the four major types of data analytics in increasing order of complexity and added-value contribution:",
    "options": [
      "Descriptive -> Diagnostic -> Predictive -> Prescriptive",
      "Diagnostic -> Descriptive -> Prescriptive -> Predictive",
      "Prescriptive -> Predictive -> Diagnostic -> Descriptive",
      "Predictive -> Descriptive -> Diagnostic -> Prescriptive"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 31 illustrates the progression of complexity and added-value: Descriptive analytics (lowest complexity/value), Diagnostic analytics, Predictive analytics, and Prescriptive analytics (highest complexity/value)."
  },
  {
    "id": 31,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "What is the primary definition of Data Mining given in the slides?",
    "options": [
      "Encrypting customer records to comply with financial privacy regulations",
      "Compressing text documents to conserve disk space on local servers",
      "Writing relational SQL queries to produce daily sales summaries",
      "Extracting information, looking for hidden, valid, and potentially useful patterns in huge data sets"
    ],
    "correctAnswer": 3,
    "explanation": "Data mining is defined as extracting information, looking for hidden, valid, and potentially useful patterns in huge data sets to discover unsuspected relationships (Slide 2)."
  },
  {
    "id": 32,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Data mining is a multi-disciplinary skill that combines which foundational fields?",
    "options": [
      "Quantum physics, microeconomics, hardware routing, and web design",
      "Machine learning, statistics, AI, and database technology",
      "Graphic design, copy editing, journalism, and public relations",
      "Robotics, manual filing, telecommunications, and radio transmission"
    ],
    "correctAnswer": 1,
    "explanation": "Data mining is a multi-disciplinary skill that uses machine learning, statistics, AI, and database technology (Slide 2)."
  },
  {
    "id": 33,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Which of the following is another widely recognized name for Data Mining mentioned in the slides?",
    "options": [
      "Binary compiling",
      "Data encryption",
      "System virtualization",
      "Knowledge discovery"
    ],
    "correctAnswer": 3,
    "explanation": "Data mining is also known as Knowledge discovery, Knowledge extraction, data/pattern analysis, information harvesting, etc. (Slide 2)."
  },
  {
    "id": 34,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In the Education application of data mining, how does the technique benefit educators?",
    "options": [
      "Determine teacher salary scales based strictly on seniority",
      "Automate classroom cleaning schedules and campus energy distribution",
      "Eliminate textbooks by translating all curricula into binary code",
      "Predict student achievement levels and find students needing extra attention (e.g., weak in math)"
    ],
    "correctAnswer": 3,
    "explanation": "Data mining benefits educators to access student data, predict achievement levels, and find students or groups needing extra attention, such as students weak in math (Slide 3)."
  },
  {
    "id": 35,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In the Manufacturing sector, how is data mining applied to reduce production downtime?",
    "options": [
      "Track customer credit scores to determine shipping priorities",
      "Automatically replace human operators with mechanical assembly lines",
      "Predict wear and tear of production assets and anticipate maintenance needs",
      "Benchmark competitor pricing models across international markets"
    ],
    "correctAnswer": 2,
    "explanation": "Manufacturers use data mining to predict wear and tear of production assets and anticipate maintenance to minimize downtime (Slide 3)."
  },
  {
    "id": 36,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "How do service providers like mobile phone and utility companies use data mining to curb customer churn?",
    "options": [
      "Block outgoing phone calls to competitor customer service numbers",
      "Analyze billing details, customer interactions, and complaints to assign probability scores and offer incentives",
      "Report non-responsive customers directly to national credit bureaus",
      "Enforce automatic contract renewals whenever data usage exceeds monthly thresholds"
    ],
    "correctAnswer": 1,
    "explanation": "Service providers analyze billing details, interactions, and complaints to predict customer departure, assign probability scores, and offer incentives (Slide 4)."
  },
  {
    "id": 37,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Which e-commerce giant is specifically highlighted in the slides for using data mining to offer cross-sells and up-sells?",
    "options": [
      "Alibaba",
      "Walmart",
      "eBay",
      "Amazon"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 4 cites Amazon as one of the most famous names using data mining techniques to offer cross-sells and up-sells."
  },
  {
    "id": 38,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In the Supermarkets application, what famous data mining rule is developed by evaluating buying patterns?",
    "options": [
      "Predicting if female shoppers were pregnant to target products like baby powder and diapers",
      "Predicting peak weekend bread consumption to order flour deliveries",
      "Calculating shopping cart wheel degradation based on store floor textures",
      "Identifying customers who only purchase discounted expired produce"
    ],
    "correctAnswer": 0,
    "explanation": "Supermarkets evaluate buying patterns to predict if female shoppers are pregnant, targeting products like baby powder, diapers, and baby shop items (Slide 5)."
  },
  {
    "id": 39,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "How is data mining applied by Crime Investigation agencies?",
    "options": [
      "Deploying police workforce (where and when crime is likely) and identifying who to search at border crossings",
      "Replacing forensic laboratory testing with predictive simulation models",
      "Publishing citizen criminal records on public marketing websites",
      "Automatically sentencing convicted individuals using machine learning algorithms"
    ],
    "correctAnswer": 0,
    "explanation": "Data mining helps crime investigation agencies deploy police workforce (where is crime most likely to happen and when?) and who to search at borders (Slide 5)."
  },
  {
    "id": 40,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Which of the following is NOT one of the three primary corporate domains where data mining is highly useful?",
    "options": [
      "Market Analysis and Management",
      "Heavy Civil Infrastructure Design",
      "Corporate Analysis & Risk Management",
      "Fraud Detection"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 7 explicitly identifies the three key domains: Market Analysis and Management, Corporate Analysis & Risk Management, and Fraud Detection."
  },
  {
    "id": 41,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In Market Analysis, what is the purpose of 'Customer Profiling'?",
    "options": [
      "Determining what kind of people buy what kind of products",
      "Calculating the physical travel distance between customer homes and stores",
      "Writing financial balance sheets for corporate shareholders",
      "Performing association and correlation between product sales"
    ],
    "correctAnswer": 0,
    "explanation": "Customer Profiling helps determine what kind of people buy what kind of products (Slide 8)."
  },
  {
    "id": 42,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In Market Analysis, what does 'Cross Market Analysis' perform?",
    "options": [
      "Currency exchange rate conversions across overseas borders",
      "Legal trademark compliance checks in international markets",
      "Associations and correlations between product sales",
      "Physical store relocation planning based on zoning laws"
    ],
    "correctAnswer": 2,
    "explanation": "Cross Market Analysis performs association and correlations between product sales (Slide 8)."
  },
  {
    "id": 43,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In Corporate Analysis & Risk Management, what does 'Resource Planning' involve?",
    "options": [
      "Summarizing and comparing resources and spending",
      "Interviewing prospective employees for IT positions",
      "Monitoring competitors and market directions",
      "Cash flow prediction and contingent claim analysis"
    ],
    "correctAnswer": 0,
    "explanation": "Resource Planning involves summarizing and comparing resources and spending (Slide 10)."
  },
  {
    "id": 44,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In telecommunications fraud detection, data mining analyzes which call attributes that deviate from expected norms?",
    "options": [
      "SIM card physical serial number and packaging color",
      "Audio pitch, vocal cadence, and background noise level",
      "Mobile phone brand, battery percentage, and screen brightness",
      "Call destination, call duration, and time of day or week"
    ],
    "correctAnswer": 3,
    "explanation": "In fraud telephone calls, data mining helps find the destination, duration, and time of day/week, analyzing patterns that deviate from expected norms (Slide 11)."
  },
  {
    "id": 45,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "What real-world company controversy is cited in the slides regarding the disadvantage of selling customer data?",
    "options": [
      "Google sold private search queries to local police departments",
      "Apple leaked credit card numbers of iTunes subscribers",
      "American Express sold credit card purchases of their customers to other companies",
      "Amazon shared subscriber passwords with retail competitors"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 27 highlights that American Express sold credit card purchases of their customers to other companies for money."
  },
  {
    "id": 46,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "What is the very first phase of the Data Mining Implementation Process?",
    "options": [
      "Business Understanding",
      "Data Understanding",
      "Modeling",
      "Data Preparation"
    ],
    "correctAnswer": 0,
    "explanation": "The CRISP-DM process starts with Business Understanding, followed by Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment (Slide 13 and 14)."
  },
  {
    "id": 47,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "During Data Understanding, what is used to reduce errors when resolving naming conflicts (e.g., cust_no vs. cust_id) during schema integration?",
    "options": [
      "Metadata",
      "Regression equations",
      "Concept hierarchies",
      "Euclidean distances"
    ],
    "correctAnswer": 0,
    "explanation": "Metadata should be used to reduce errors in the data integration process when resolving object matching and schema integration issues (Slide 16)."
  },
  {
    "id": 48,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Approximately how much of the total project time is consumed by the Data Preparation phase?",
    "options": [
      "About 25% of the project time",
      "About 90% of the project time",
      "About 50% of the project time",
      "Less than 10% of the project time"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 17 states: 'The data preparation process consumes about 90% of the time of the project.'"
  },
  {
    "id": 49,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In Data Preparation, what is Data Cleaning defined as?",
    "options": [
      "Encrypting files before sending them across network lines",
      "Smoothing noisy data and filling in missing values",
      "Deleting all negative numerical values in a database",
      "Translating database table column names into uppercase letters"
    ],
    "correctAnswer": 1,
    "explanation": "Data cleaning is a process to clean data by smoothing noisy data and filling in missing values (Slide 18)."
  },
  {
    "id": 50,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In Data Transformation, which operation calculates monthly and yearly totals from weekly sales records?",
    "options": [
      "Aggregation",
      "Normalization",
      "Attribute construction",
      "Generalization"
    ],
    "correctAnswer": 0,
    "explanation": "Aggregation applies summary operations to data, such as aggregating weekly sales data to calculate monthly and yearly totals (Slide 19)."
  },
  {
    "id": 51,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In Data Transformation, replacing low-level concepts (e.g. 'city') with higher-level concepts (e.g. 'county') using concept hierarchies is known as:",
    "options": [
      "Smoothing",
      "Aggregation",
      "Generalization",
      "Normalization"
    ],
    "correctAnswer": 2,
    "explanation": "Generalization replaces low-level data by higher-level concepts with the help of concept hierarchies (e.g., city replaced by county) (Slide 19)."
  },
  {
    "id": 52,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Scaling attribute values into a specified target range (e.g., -2.0 to 2.0) is known as:",
    "options": [
      "Aggregation",
      "Attribute construction",
      "Normalization",
      "Generalization"
    ],
    "correctAnswer": 2,
    "explanation": "Normalization is performed when attribute data are scaled up or scaled down (e.g., data falling in range -2.0 to 2.0) (Slide 20)."
  },
  {
    "id": 53,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In the Modeling phase, which specific scenario focuses on determining which products are likely to be sold together?",
    "options": [
      "Finding sequences",
      "Forecasting",
      "Risk and probability",
      "Recommendations"
    ],
    "correctAnswer": 3,
    "explanation": "Recommendations determines which products are likely to be sold together and generates purchase recommendations (Slide 22)."
  },
  {
    "id": 54,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In the Modeling phase, what does the 'Finding sequences' scenario focus on?",
    "options": [
      "Separating customers into clusters of related items",
      "Estimating future quarterly revenue and server loads",
      "Assigning probabilities to medical diagnoses and clinical outcomes",
      "Analyzing customer selections in a shopping cart to predict next likely events"
    ],
    "correctAnswer": 3,
    "explanation": "Finding sequences involves analyzing customer selections in a shopping cart to predict next likely events (Slide 22)."
  },
  {
    "id": 55,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "In which phase of the Data Mining Implementation Process is a 'go or no-go decision' made to transition into deployment?",
    "options": [
      "Modeling",
      "Business Understanding",
      "Data Understanding",
      "Evaluation"
    ],
    "correctAnswer": 3,
    "explanation": "In the Evaluation phase, patterns are evaluated against business objectives, and a go or no-go decision is taken to move the model into deployment (Slide 23)."
  },
  {
    "id": 56,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "What is created during the Deployment phase to document lessons learned and key experiences to improve business policy?",
    "options": [
      "Dendrogram tree",
      "Adjacency matrix",
      "Concept hierarchy",
      "Final project report"
    ],
    "correctAnswer": 3,
    "explanation": "A final project report is created with lessons learned and key experiences during the project to improve organizational business policy (Slide 24)."
  },
  {
    "id": 57,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "What implementation challenge occurs when a small training database causes a data mining model to fail on future unseen data?",
    "options": [
      "Data normalization",
      "Schema mismatch",
      "Under-sampling",
      "Overfitting"
    ],
    "correctAnswer": 3,
    "explanation": "Overfitting: Due to small size training database, a model may not fit future states (Slide 28)."
  },
  {
    "id": 58,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Which data mining technique is used to retrieve important and relevant information about data/metadata to classify data into different classes?",
    "options": [
      "Clustering",
      "Outer detection",
      "Regression",
      "Classification"
    ],
    "correctAnswer": 3,
    "explanation": "Classification analysis is used to retrieve important and relevant information about data and metadata, helping classify data in different classes (Slide 30)."
  },
  {
    "id": 59,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Which data mining technique identifies and analyzes relationships between variables to determine the likelihood of a specific variable given others?",
    "options": [
      "Clustering",
      "Sequential patterns",
      "Association rules",
      "Regression"
    ],
    "correctAnswer": 3,
    "explanation": "Regression analysis identifies and analyzes the relationship between variables to identify the likelihood of a specific variable given presence of others (Slide 31)."
  },
  {
    "id": 60,
    "topicId": 2,
    "topicTitle": "Topic 2: Concepts of Data Mining",
    "question": "Which data mining technique refers to observing items in a dataset that do not match expected patterns or behaviors (used in intrusion and fraud detection)?",
    "options": [
      "Outer detection (Outlier Analysis / Outlier Mining)",
      "Regression",
      "Sequential patterns",
      "Association rules"
    ],
    "correctAnswer": 0,
    "explanation": "Outer detection (also called Outlier Analysis or Outlier Mining) refers to observing items that do not match expected patterns, used in intrusion, fraud, or fault detection (Slide 32)."
  },
  {
    "id": 61,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Cluster analysis is classified as which paradigm of machine learning?",
    "options": [
      "Semi-supervised classification with predefined labels",
      "Unsupervised learning",
      "Supervised learning",
      "Reinforcement learning"
    ],
    "correctAnswer": 1,
    "explanation": "Cluster analysis is part of unsupervised learning / unsupervised classification because there are no predefined classes (Topic 3, Slide 1 & 2)."
  },
  {
    "id": 62,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What is the key conceptual distinction between cluster analysis and predictive modeling?",
    "options": [
      "Clustering always produces deterministic linear equations",
      "Clustering is more about discovery than prediction",
      "Clustering requires continuous numerical target labels",
      "Clustering only operates on single-variable datasets"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 2 explicitly states: 'Clustering analysis is more about discovery than a prediction. The machine searches for similarity in the data.'"
  },
  {
    "id": 63,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "According to the slides, what are the two core criteria that define 'Good Clustering'?",
    "options": [
      "High inter-class similarity and low intra-class similarity",
      "High intra-class similarity and low inter-class similarity",
      "A minimum of ten distinct dimensions per cluster",
      "Equal number of data points in every generated cluster"
    ],
    "correctAnswer": 1,
    "explanation": "A good clustering method will produce high quality clusters with high intra-class similarity and low inter-class similarity (Slide 3)."
  },
  {
    "id": 64,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which data structure represents an n-by-p table containing n objects measured across p attributes (two modes)?",
    "options": [
      "Dissimilarity matrix",
      "Adjacency graph",
      "Data matrix",
      "Dendrogram"
    ],
    "correctAnswer": 2,
    "explanation": "The Data matrix (two modes) represents n objects with p variables/attributes (Slide 5)."
  },
  {
    "id": 65,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which data structure stores pairwise distances d(i, j) between objects in an n-by-n lower triangular format (one mode)?",
    "options": [
      "Data matrix",
      "Frequency table",
      "Concept hierarchy",
      "Dissimilarity matrix"
    ],
    "correctAnswer": 3,
    "explanation": "The Dissimilarity matrix (one mode) stores pairwise distances between objects in a triangular matrix format (Slide 5)."
  },
  {
    "id": 66,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What metric calculates distance as the root of square differences between coordinates of a pair of objects: sqrt(sum((x_i - y_i)^2))?",
    "options": [
      "Hamming distance",
      "Cosine similarity",
      "Euclidean distance",
      "Manhattan distance"
    ],
    "correctAnswer": 2,
    "explanation": "Euclidean distance examines the root of square differences between coordinates of a pair of objects (Slide 8)."
  },
  {
    "id": 67,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "In the ggplot2 example in R, which library and geom function are used to build layered scatter plots of age versus spend?",
    "options": [
      "library(lattice) and geom_scatter()",
      "library(stats) and plot_clusters()",
      "library(cluster) and geom_circle()",
      "library(ggplot2) and geom_point()"
    ],
    "correctAnswer": 3,
    "explanation": "The code uses 'library(ggplot2)' and 'ggplot(df, aes(x = age, y = spend)) + geom_point()' to visualize clusters (Slide 4)."
  },
  {
    "id": 68,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which family of clustering algorithms constructs various partitions of a database into k clusters and evaluates them by a criterion?",
    "options": [
      "Grid-based algorithms",
      "Hierarchical algorithms",
      "Density-based algorithms",
      "Partitioning algorithms"
    ],
    "correctAnswer": 3,
    "explanation": "Partitioning algorithms construct a partition of a database D of n objects into a set of k clusters (Slide 7 & 8)."
  },
  {
    "id": 69,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Who introduced the classical K-Means clustering algorithm in 1967?",
    "options": [
      "L. Kaufman and P. Rousseeuw",
      "Z. Huang",
      "R. Ng and J. Han",
      "J. MacQueen"
    ],
    "correctAnswer": 3,
    "explanation": "The slides cite K-means as originating from MacQueen in 1967 (Slide 8)."
  },
  {
    "id": 70,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "In K-Means clustering, what is the 'centroid' of a cluster?",
    "options": [
      "The object that has the largest distance from all other clusters",
      "The median coordinate value across all categorical attributes",
      "The center point, defined as the mean coordinates of all objects in the cluster",
      "The most centrally located physical data point in the raw dataset"
    ],
    "correctAnswer": 2,
    "explanation": "In K-means, the centroid is the center, i.e., mean point, of the cluster coordinates (Slide 9)."
  },
  {
    "id": 71,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What is the correct sequence of the four implementation steps in the K-Means algorithm?",
    "options": [
      "1. Select medoids; 2. Calculate swapping cost; 3. Swap medoid with non-medoid; 4. Repeat until cost > 0",
      "1. Normalize attributes; 2. Calculate ANOVA; 3. Form blocks; 4. Merge nearest pairs",
      "1. Partition into k subsets; 2. Compute centroids; 3. Assign objects to nearest centroid; 4. Recompute centroids and repeat until no change",
      "1. Compute distance matrix; 2. Build MST; 3. Split tree into k parts; 4. Output dendrogram"
    ],
    "correctAnswer": 2,
    "explanation": "K-means steps: 1. Partition objects into k nonempty subsets; 2. Compute seed points as centroids; 3. Assign each object to nearest seed point; 4. Recompute means and repeat until no assignment change (Slide 9)."
  },
  {
    "id": 72,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What is the computational time complexity of the standard K-Means algorithm?",
    "options": [
      "O(n log n) regardless of cluster count",
      "O(n^3) in all cases",
      "O(k(n-k)^2) for each iteration",
      "O(tkn), where n is objects, k is clusters, and t is iterations"
    ],
    "correctAnswer": 3,
    "explanation": "Standard K-means is relatively efficient with time complexity O(tkn), where n is number of objects, k is clusters, and t is iterations (Slide 11)."
  },
  {
    "id": 73,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which of the following is a recognized weakness of the standard K-Means method?",
    "options": [
      "Excessively slow time complexity of O(n^4)",
      "Applicable only when the mean is defined, struggling with categorical data",
      "Inability to handle datasets with more than three observations",
      "Requires a dendrogram tree to be computed first"
    ],
    "correctAnswer": 1,
    "explanation": "K-means is applicable only when the mean is defined (posing problems for categorical data), requires k in advance, is sensitive to noise/outliers, and cannot handle non-convex shapes (Slide 11)."
  },
  {
    "id": 74,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Why is K-Means sensitive to outliers?",
    "options": [
      "An object with an extremely large value may substantially distort the cluster mean",
      "Outliers turn numerical attributes into categorical strings",
      "Outliers automatically force the value of k to increase by one",
      "Outliers cause the distance matrix to invert to negative infinity"
    ],
    "correctAnswer": 0,
    "explanation": "The k-means algorithm is sensitive to outliers because an object with an extremely large value may substantially distort the distribution of data and the cluster mean (Slide 13)."
  },
  {
    "id": 75,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which variant of K-Means was introduced by Z. Huang in 1998 to handle categorical data by replacing means with modes?",
    "options": [
      "AGNES",
      "k-modes",
      "CLARA",
      "PAM"
    ],
    "correctAnswer": 1,
    "explanation": "Huang (1998) introduced k-modes, replacing cluster means with modes and using frequency-based updates to handle categorical data (Slide 12)."
  },
  {
    "id": 76,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which method is specifically designed to cluster a mixture of both categorical and numerical data?",
    "options": [
      "Sudoku method",
      "Single Link method",
      "k-modes method",
      "k-prototype method"
    ],
    "correctAnswer": 3,
    "explanation": "The k-prototype method handles a mixture of categorical and numerical data by combining k-means and k-modes (Slide 12)."
  },
  {
    "id": 77,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What rule of thumb is provided in the slides to select an initial appropriate number of clusters k for n observations?",
    "options": [
      "k = 2 * log2(n)",
      "k = n / 10",
      "k = sqrt(2 * n)",
      "k = sqrt(n / 2)"
    ],
    "correctAnswer": 3,
    "explanation": "The rule of thumb formula shown on Slide 10 is: cluster = sqrt(n / 2), where n equals the number of observations."
  },
  {
    "id": 78,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What risk occurs if an analyst sets an excessively high value of k (a very large number of groups)?",
    "options": [
      "Transformation of all numerical features into categorical labels",
      "Overfitting of data, reducing performance on new incoming data",
      "Immediate mathematical division by zero in the distance formula",
      "Underfitting, causing all data to merge into a single point"
    ],
    "correctAnswer": 1,
    "explanation": "Setting a high value of k might result in overfitting, where the machine learns tiny details of the dataset and struggles to generalize patterns to new data (Slide 10)."
  },
  {
    "id": 79,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Who introduced the PAM (Partitioning Around Medoids) algorithm in 1987?",
    "options": [
      "L. Kaufman and P. Rousseeuw",
      "Z. Huang",
      "J. MacQueen",
      "R. Ng and J. Han"
    ],
    "correctAnswer": 0,
    "explanation": "PAM (Partitioning Around Medoids) was introduced by Kaufman and Rousseeuw in 1987 and built in Splus (Slide 14 and 16)."
  },
  {
    "id": 80,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "How does K-Medoids (PAM) fundamentally differ from K-Means in how clusters are represented?",
    "options": [
      "K-Medoids uses the most centrally located real object in a cluster rather than a calculated mean",
      "K-Medoids represents clusters using hierarchical dendrogram trees",
      "K-Medoids requires no input value of k",
      "K-Medoids calculates distances using ANOVA rather than Euclidean formulas"
    ],
    "correctAnswer": 0,
    "explanation": "Instead of taking the mean value, K-Medoids uses a medoid, which is the most centrally located actual object in the cluster (Slide 13 and 16)."
  },
  {
    "id": 81,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What is the computational complexity of the PAM algorithm per iteration?",
    "options": [
      "O(tkn)",
      "O(k(n - k)^2)",
      "O(ks^2 + k(n - k))",
      "O(n log n)"
    ],
    "correctAnswer": 1,
    "explanation": "PAM has a computational complexity of O(k(n - k)^2) for each iteration, making it inefficient for large datasets (Slide 18)."
  },
  {
    "id": 82,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "In the PAM algorithm, when is a current medoid i replaced by a candidate non-medoid h?",
    "options": [
      "If the total swapping cost TC_ih < 0",
      "If TC_ih equals exactly 1.0",
      "If the total swapping cost TC_ih > 0",
      "Whenever h has a smaller coordinate value than i"
    ],
    "correctAnswer": 0,
    "explanation": "In PAM, for each pair of medoid i and non-medoid h, if the total swapping cost TC_ih < 0, medoid i is replaced by h (Slide 16)."
  },
  {
    "id": 83,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "In PAM swapping cost calculations, what is C_jih if object j currently belongs to medoid t (not i) and remains closest to t after i is replaced by h?",
    "options": [
      "C_jih = 0",
      "C_jih = -1",
      "C_jih = d(j, t) - d(j, i)",
      "C_jih = d(j, h) - d(j, i)"
    ],
    "correctAnswer": 0,
    "explanation": "When object j belongs to medoid t, and replacing i with h does not change its assignment because it remains closest to t, C_jih = 0 (Slide 17)."
  },
  {
    "id": 84,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which sampling-based clustering algorithm was introduced by Kaufmann and Rousseeuw in 1990 to handle larger datasets than PAM?",
    "options": [
      "DIANA",
      "AGNES",
      "CLARA (Clustering Large Applications)",
      "CLARANS"
    ],
    "correctAnswer": 2,
    "explanation": "CLARA (Clustering Large Applications) draws multiple samples of the dataset, applies PAM on each sample, and outputs the best clustering (Slide 18 & 19)."
  },
  {
    "id": 85,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "What is a recognized weakness of the CLARA algorithm?",
    "options": [
      "It only creates a single cluster containing all observations",
      "It requires the user to solve a Sudoku puzzle beforehand",
      "Efficiency depends on sample size, and results may be biased if the sample is biased",
      "It cannot operate on numerical data"
    ],
    "correctAnswer": 2,
    "explanation": "CLARA's efficiency depends on sample size, and a good clustering based on samples will not necessarily represent the whole dataset if the sample is biased (Slide 19)."
  },
  {
    "id": 86,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "Which randomized sampling clustering algorithm was introduced by Ng and Han in 1994?",
    "options": [
      "PAM",
      "CLARA",
      "CLARANS",
      "DIANA"
    ],
    "correctAnswer": 2,
    "explanation": "CLARANS (Clustering Large Applications based upon RANdomized Search) was introduced by Ng and Han in 1994 (Slide 14)."
  },
  {
    "id": 87,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "How does Agglomerative hierarchical clustering operate?",
    "options": [
      "Selecting medoids based on minimum spanning trees and rotating rows",
      "Bottom-up: initially each item is in its own cluster, iteratively merged together",
      "Top-down: initially all items are in one cluster, successively divided",
      "Randomly partitioning objects into k disjoint sets and calculating ANOVA"
    ],
    "correctAnswer": 1,
    "explanation": "Agglomerative hierarchical clustering is bottom-up: initially each item is in its own cluster, and clusters are iteratively merged (Slide 25)."
  },
  {
    "id": 88,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "How does Divisive hierarchical clustering operate?",
    "options": [
      "Partitioning around medoids based on sampling subsets",
      "Bottom-up: initially each item is in its own cluster, iteratively merged together",
      "Projecting observations onto an N-by-N Latin square",
      "Top-down: initially all items are in one cluster, and large clusters are successively divided"
    ],
    "correctAnswer": 3,
    "explanation": "Divisive hierarchical clustering is top-down: initially all items are in one cluster, and large clusters are successively divided (Slide 25)."
  },
  {
    "id": 89,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "In hierarchical clustering, what do the acronyms AGNES and DIANA stand for?",
    "options": [
      "AGNES = Aggregated Nodes; DIANA = Direct Indexing Analysis",
      "AGNES = Agglomerative Nesting; DIANA = Divisive Analysis",
      "AGNES = Algorithm of Grouping; DIANA = Distance Allocation Network",
      "AGNES = Average Grouping; DIANA = Dual Iterative Assignment"
    ],
    "correctAnswer": 1,
    "explanation": "AGNES stands for Agglomerative Nesting, and DIANA stands for Divisive Analysis, both introduced by Kaufmann and Rousseeuw (1990) (Slide 24, 35, 36)."
  },
  {
    "id": 90,
    "topicId": 3,
    "topicTitle": "Topic 3: Clustering",
    "question": "In hierarchical linkage methods, how is 'Single Link' distance defined between two clusters?",
    "options": [
      "Distance between the centroids of the two clusters",
      "Smallest distance between any pair of points from the two clusters",
      "Largest distance between any pair of points from the two clusters",
      "Average distance between all pairs of points across the two clusters"
    ],
    "correctAnswer": 1,
    "explanation": "Single Link defines distance as the smallest distance between points, Complete Link is largest distance, Average Link is average distance, and Centroid is distance between centroids (Slide 23 & 32)."
  },
  {
    "id": 91,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What is the etymological origin and literal meaning of the word 'Data'?",
    "options": [
      "Latin in origin, literally meaning 'anything that is given'",
      "Greek in origin, literally meaning 'to compute or calculate'",
      "German in origin, literally meaning 'numerical measurements'",
      "French in origin, literally meaning 'documented facts'"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 2 states: 'Data - is Latin in origin and literally, it means anything that is given.'"
  },
  {
    "id": 92,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "How did Webster's New Collegiate Dictionary (1973) define data?",
    "options": [
      "Factual information used as a basis for reasoning, discussion or calculation",
      "Information output by a sensing device or organ",
      "Numerical or qualitative values derived from scientific experiments",
      "Information especially organized for analysis"
    ],
    "correctAnswer": 0,
    "explanation": "Webster's New Collegiate Dictionary (1973) defined data as 'factual information (as measurements or statistics) used as a basis for reasoning, discussion or calculation' (Slide 2)."
  },
  {
    "id": 93,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "How does Webster's II New Riverside Dictionary specifically define data?",
    "options": [
      "Information that can be digitally transmitted across networks",
      "Numerical values derived from scientific experiments",
      "Data as information, especially information organised for analysis",
      "Anything that is given in Latin literature"
    ],
    "correctAnswer": 2,
    "explanation": "Webster's II New Riverside Dictionary defines data as 'information, especially information organised for analysis' (Slide 2)."
  },
  {
    "id": 94,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "According to the McGraw-Hill Encyclopedia of Science and Technology, what is known as data?",
    "options": [
      "Pre-existing government census publications",
      "Unstructured audio and video files recorded by smartphones",
      "Numerical or qualitative values derived from scientific experiments",
      "Any string stored in a relational database table"
    ],
    "correctAnswer": 2,
    "explanation": "McGraw-Hill Encyclopedia of Science and Technology says: 'numerical or qualitative values derived from scientific experiments, known as data' (Slide 2)."
  },
  {
    "id": 95,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "In Merriam-Webster Online Dictionary definition 2, what generates output that includes both useful and redundant information that must be processed?",
    "options": [
      "A corporate accounting department",
      "A relational SQL database",
      "A sensing device or organ",
      "A randomized block design"
    ],
    "correctAnswer": 2,
    "explanation": "Definition 2 states: 'Information output by a sensing device or organ that included both useful and irrelevant or redundant information and must be processed to be meaningful' (Slide 3)."
  },
  {
    "id": 96,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What is 'Data Collection' defined as in Prelim Lecture 4?",
    "options": [
      "The process of acquiring, collecting, extracting and storing voluminous amounts of structured or unstructured data",
      "The physical destruction of outdated historical archives and company memos",
      "The automated querying of relational tables using SQL joins",
      "The mathematical normalization of attribute vectors between -2.0 and 2.0"
    ],
    "correctAnswer": 0,
    "explanation": "Data Collection is the process of acquiring, collecting, extracting and storing the voluminous amount of data which may be in structured or unstructured form (Slide 4)."
  },
  {
    "id": 97,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What are 'Primary Sources' of data?",
    "options": [
      "Government publications and census reports available in public libraries",
      "Pre-existing financial transaction tables stored in relational databases",
      "Data collected for the first time by an individual, group, institution, or organization",
      "Data that has already been collected and reused again for some valid purpose"
    ],
    "correctAnswer": 2,
    "explanation": "Primary Sources: The data which are collected for the first time by an individual or the group of individuals, institutions or organisations (Slide 5)."
  },
  {
    "id": 98,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which of the following is classified as a Primary Source of data collection?",
    "options": [
      "Surveys & Questionnaires",
      "Online statistical databases",
      "Company historical sales archives",
      "Government census bulletins"
    ],
    "correctAnswer": 0,
    "explanation": "Primary sources include Surveys & Questionnaires, Interviews, Observations, Focus Groups, Direct Records, and Experimental Methods (Slide 8)."
  },
  {
    "id": 99,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What are 'Secondary Sources' of data?",
    "options": [
      "Interviews conducted face-to-face with research participants",
      "Direct personal observations recorded in field notes",
      "Data collected firsthand directly from a laboratory experiment",
      "Data that has already been collected and reused again for some valid purpose"
    ],
    "correctAnswer": 3,
    "explanation": "Secondary Sources: data which has already been collected and reused again for some valid purpose, previously recorded from primary data (Slide 5)."
  },
  {
    "id": 100,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What are the two general types of sources for secondary data?",
    "options": [
      "Structured and unstructured",
      "Agglomerative and divisive",
      "Internal and external",
      "Numerical and descriptive"
    ],
    "correctAnswer": 2,
    "explanation": "Secondary data has two types of sources: internal (e.g. organization company records) and external (e.g. government agencies) (Slide 5 and 6)."
  },
  {
    "id": 101,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which simple experimental design is based on randomisation and replication, mostly used for comparing experiments?",
    "options": [
      "Completely Randomised Design (CRD)",
      "Randomised Block Design (RBD)",
      "Factorial Design (FD)",
      "Latin Square Design (LSD)"
    ],
    "correctAnswer": 0,
    "explanation": "Completely Randomised Design (CRD) is a simple experimental design based on randomisation and replication, mostly used for comparing experiments (Slide 9)."
  },
  {
    "id": 102,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which experimental design divides the experiment into small units called blocks and analyzes results using ANOVA?",
    "options": [
      "Latin Square Design (LSD)",
      "Completely Randomised Design (CRD)",
      "Randomised Block Design (RBD)",
      "Factorial Design (FD)"
    ],
    "correctAnswer": 2,
    "explanation": "Randomised Block Design (RBD) divides the experiment into small units called blocks, performing random experiments on each block and drawing results via ANOVA (Slide 9)."
  },
  {
    "id": 103,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "From which industry/sector did the Randomised Block Design (RBD) originate?",
    "options": [
      "Telecommunications sector",
      "Aerospace engineering",
      "Agriculture sector",
      "Automotive manufacturing"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 9 explicitly states: 'RBD was originated from the agriculture sector.'"
  },
  {
    "id": 104,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which experimental design consists of an N-by-N square arrangement of rows and columns where letters occur only once in each row?",
    "options": [
      "Completely Randomised Design (CRD)",
      "Randomised Block Design (RBD)",
      "Factorial Design (FD)",
      "Latin Square Design (LSD)"
    ],
    "correctAnswer": 3,
    "explanation": "Latin Square Design (LSD) is an arrangement of NxN squares with equal rows and columns containing letters that occur only once in a row (Slide 10)."
  },
  {
    "id": 105,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What famous puzzle game is cited in the slides as an example of a Latin Square Design?",
    "options": [
      "Crossword puzzle",
      "Sudoku puzzle",
      "Rubik's Cube",
      "Chess board"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 10 explicitly states: 'Sudoku puzzle is an example of a Latin square design.'"
  },
  {
    "id": 106,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which experimental design features experiments having two factors each with possible values, from which combinational factors are derived upon testing?",
    "options": [
      "Latin Square Design (LSD)",
      "Completely Randomised Design (CRD)",
      "Factorial Design (FD)",
      "Randomised Block Design (RBD)"
    ],
    "correctAnswer": 2,
    "explanation": "Factorial Design (FD) is an experimental design where each experiment has two factors each with possible values and on performing trials other combinational factors are derived (Slide 10)."
  },
  {
    "id": 107,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "In the Nature of Data, what is true regarding Numerical Data in sciences?",
    "options": [
      "Numerical data can only be represented as continuous fractions, never integers",
      "All data in sciences are derived by measurement and stated in numerical values (even semi-quantitative coded as 1 or 0)",
      "Numerical data cannot be stored in relational SQL databases",
      "Science never uses numerical data, relying exclusively on definitive prose"
    ],
    "correctAnswer": 1,
    "explanation": "All data in sciences are derived by measurement and stated in numerical values. Even in semi-quantitative data, affirmative and negative answers are coded as 1 or 0 (Slide 12)."
  },
  {
    "id": 108,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "In the Nature of Data, how is qualitative data in sciences expressed as Descriptive Data?",
    "options": [
      "In terms of definitive statements concerning objects",
      "As unstructured video recordings of laboratory benches",
      "As continuous probability distributions on normal curves",
      "As lower triangular dissimilarity matrices"
    ],
    "correctAnswer": 0,
    "explanation": "Qualitative data in sciences are expressed in terms of definitive statements concerning objects, viewed as descriptive data (Slide 12)."
  },
  {
    "id": 109,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What is Graphic and Symbolic Data defined as in the Nature of Data?",
    "options": [
      "Binary machine code compiled into hexadecimal digits",
      "Modes of presentation that enable users to grasp data by visual perception",
      "Unpublished government legal decrees and reports",
      "Numerical measurements taken from GPS satellite receivers"
    ],
    "correctAnswer": 1,
    "explanation": "Graphic and Symbolic data are modes of presentation that enable users to grasp data by visual perception (Slide 13)."
  },
  {
    "id": 110,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Most data in social sciences that are refined with statistical techniques and scales of measurement are called:",
    "options": [
      "Graphic Symbolic Data",
      "Semi-structured XML Data",
      "Non-metric Binary Data",
      "Enumerative Data (Statistical Data)"
    ],
    "correctAnswer": 3,
    "explanation": "Most data in social sciences are enumerative in nature, refined with statistical techniques to become statistical data using scales of measurement (Slide 13)."
  },
  {
    "id": 111,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What is the primary definition of 'Data Classification'?",
    "options": [
      "Assigning passwords to encrypted database backups",
      "Normalizing numerical columns into the range 0 to 1",
      "The physical grouping of network servers into server racks",
      "The process of organizing data into categories that make it easy to retrieve, sort, and store for future use"
    ],
    "correctAnswer": 3,
    "explanation": "Data Classification is the process of organizing data into categories that make it easy to retrieve, sort and store for future use (Slide 15)."
  },
  {
    "id": 112,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What are the three core purposes of Data Classification listed in the slides?",
    "options": [
      "Confidentiality, Data Integrity, and Data Availability",
      "Accuracy, Timeliness, and Relevance",
      "Homogeneity, Clarity, and Stability",
      "Scalability, Portability, and Elasticity"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 16 lists the Purpose of Data Classification as: 1. Confidentiality, 2. Data Integrity, 3. Data Availability (the classic CIA security triad)."
  },
  {
    "id": 113,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which feature of data classification requires that all items placed in a group should be similar to each other?",
    "options": [
      "Homogeneity",
      "Clarity",
      "Stability",
      "Elastic"
    ],
    "correctAnswer": 0,
    "explanation": "Homogeneity means that items in a group should be similar to each other (Slide 17)."
  },
  {
    "id": 114,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which feature of data classification ensures there is no confusion in the positioning of a data item?",
    "options": [
      "Elastic",
      "Clarity",
      "Homogeneity",
      "Stability"
    ],
    "correctAnswer": 1,
    "explanation": "Clarity means there is no confusion in the positioning of a data item (Slide 17)."
  },
  {
    "id": 115,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which feature of data classification specifies that the classification scheme must remain stable and not disrupt existing groups?",
    "options": [
      "Clarity",
      "Elastic",
      "Stability",
      "Homogeneity"
    ],
    "correctAnswer": 2,
    "explanation": "Stability specifies that the system must be stable and should not affect the same set of classifications (Slide 17)."
  },
  {
    "id": 116,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which feature of data classification denotes being 'able to change the basis of classification'?",
    "options": [
      "Homogeneity",
      "Stability",
      "Elastic",
      "Clarity"
    ],
    "correctAnswer": 2,
    "explanation": "Elastic is defined as being able to change the basis of classification (Slide 17)."
  },
  {
    "id": 117,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What type of data is created using a fixed schema, maintained in tabular format (rows and columns), with addressable elements fitting SQL databases?",
    "options": [
      "Unstructured Data",
      "Structured Data",
      "Semi-structured Data",
      "Graphic Data"
    ],
    "correctAnswer": 1,
    "explanation": "Structured Data is created using a fixed schema, maintained in tabular format (rows and columns), addressable, and stored in SQL databases (Slide 19 and 20)."
  },
  {
    "id": 118,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which of the following is explicitly listed in the slides as a source of Structured Data?",
    "options": [
      "Spreadsheets and OLTP systems",
      "Streaming video broadcasts",
      "Scanned handwritten field letters",
      "Word documents and memos"
    ],
    "correctAnswer": 0,
    "explanation": "Sources of Structured Data include SQL databases, Spreadsheets, OLTP systems, Online forms, Sensors (GPS/RFID), Server logs, and Medical devices (Slide 21)."
  },
  {
    "id": 119,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "What type of data does NOT follow a pre-defined standard or organized format and is not fit for relational databases?",
    "options": [
      "Unstructured Data",
      "Semi-structured Data",
      "Structured Data",
      "OLTP Data"
    ],
    "correctAnswer": 0,
    "explanation": "Unstructured Data is data that does not follow a pre-defined standard or organized format and is not fit for relational databases (Slide 23)."
  },
  {
    "id": 120,
    "topicId": 4,
    "topicTitle": "Topic 4: Prelim Lecture 4 - Nature and Sources of Data",
    "question": "Which application platform is specifically cited in the slides as helping extract information from emails and XML-based documents in unstructured data?",
    "options": [
      "MANTIS",
      "Qlik",
      "Delphix",
      "XOLAP"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 28 explicitly notes: 'Use of application platforms e.g. XOLAP. XOLAP helps in extracting information from emails and XML based documents.'"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_DATA };
}
