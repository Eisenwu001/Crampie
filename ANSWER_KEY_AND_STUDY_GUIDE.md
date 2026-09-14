# Comprehensive 120-Question Study Guide & Answer Key

**Course Topics Covered:**
- **Topic 1**: Lecture 1 – Data Analytics, Data Science, Big Data, 6 Industry Case Studies, 4 Types of Analytics (Questions 1–30)
- **Topic 2**: Concepts of Data Mining – Definition, 11 Applications, Domains, CRISP-DM Process, 7 Core Techniques (Questions 31–60)
- **Topic 3**: Clustering – Cluster Analysis, K-Means, K-Medoids/PAM, Hierarchical (AGNES & DIANA), Linkage Methods (Questions 61–90)
- **Topic 4**: Prelim Lecture 4 – Nature and Sources of Data, Etymology, Primary vs. Secondary, Experimental Designs, Data Classification (Questions 91–120)

---

## Quick Review Summaries

### Topic 1: Lecture 1 Summary
- **Article Author**: Avantika Monnappa ("Data Science vs. Big Data vs. Data Analytics").
- **Key Statistics**:
  - IBM (2012): 2.5 billion gigabytes (GB) generated daily.
  - Forbes: Data doubles every 2 years; by 2020, about 1.7 MB created every second per human being.
- **Salary Benchmarks**:
  - Data Scientist: $113,436 / year
  - Big Data Specialist: $62,066 / year
  - Data Analyst: $60,476 / year
- **Gartner's Definition of Big Data**: High-volume, high-velocity, and/or high-variety information assets demanding cost-effective, innovative forms of processing.
- **6 Enterprise Case Studies (by Clint Boulton, CIO.com)**:
  1. **Accenture** (CIO Andrew Wilson): Win Probability Tool analyzes Salesforce.com CRM data with 90% accuracy. Dashboards manage real estate/device usage for 500,000 employees. Goal: 50/50 gender parity by 2025. Tools: Azure cloud + Qlik. Lesson: "A digital strategy has analytics at the core."
  2. **Belkin** (CIO Lance Ralls): Uses Delphix for copy data management (virtualize, compress, protect snapshots). Lesson: "Prepare now for 5G."
  3. **Shell** (Daniel Jeavons): Predicts failures across >3,000 oil drilling machine parts. Uses Databricks + Apache Spark on Azure. Inventory analysis reduced from 48+ hours to <45 minutes. Lesson: "Evaluate tools before big-ticket purchases."
  4. **Cargill** (CIO Tiffany Snyder): Developed iQuatic mobile app to reduce shrimp mortality. Acoustic feeding system. Agile two-pizza teams launched pilot in 5 months in Ecuador.
  5. **Merck** (CIO Michelle D'Alessandro): Developed MANTIS (Manufacturing and Analytics Intelligence) data warehousing system. Cut engineers' 60%–80% wasted search effort; 45% decrease in IT analytics project time/cost, 30% reduction in lead time, 50% cut in inventory carrying costs. Lighthouse project in Asia-Pacific.
  6. **Airlines Reporting Corp. (ARC)** (CIO Dickie Oliver): Settles >$88 billion airfare transactions across 2.2 billion flights. Migrated from Teradata to Snowflake on AWS. Lesson: "Change management is the real bugbear."
- **4 Types of Analytics (Complexity vs. Added Value)**:
  1. *Descriptive*: What happened? (e.g. hospitalizations last month, weekly sales).
  2. *Diagnostic*: Why did it happen? (e.g. drill down into profit shortfalls, risk factors).
  3. *Predictive*: What is likely to happen? (e.g. forecasting subscriber churn, expansion cash flow).
  4. *Prescriptive*: What action to take? (e.g. Uber/Google Maps route optimization, repeat purchase recommendations).

---

### Topic 2: Concepts of Data Mining Summary
- **Definition**: Extracting hidden, valid, potentially useful patterns from huge datasets. Also called Knowledge Discovery (KDD), Knowledge Extraction, Information Harvesting.
- **Applications**: Communications (customer behavior), Insurance (product pricing), Education (weak in math), Manufacturing (wear and tear), Banking (defaulters, compliance), Retail (product placement), Service Providers (churn scores), E-Commerce (Amazon cross/up-sells), Supermarkets (pregnancy prediction for baby items), Crime Investigation (police deployment, border crossing), Bioinformatics.
- **3 Core Domains**: Market Analysis & Management, Corporate Analysis & Risk Management, Fraud Detection.
- **Implementation Process (CRISP-DM)**:
  1. *Business Understanding*: Define objectives, constraints, goals.
  2. *Data Understanding*: Sanity check, metadata for resolving entity mismatches (e.g. `cust_no` vs `cust_id`).
  3. *Data Preparation*: Takes ~90% of total project time. Data cleaning (smoothing noise, filling missing values), transformation (aggregation, generalization via concept hierarchies, normalization to e.g. [-2.0, 2.0], attribute construction).
  4. *Modeling*: Mathematical models (forecasting, risk/probability, recommendations, finding sequences, grouping).
  5. *Evaluation*: Check patterns against business goals; go or no-go decision.
  6. *Deployment*: Ship to operations, create final project report with lessons learned.
- **7 Core Techniques**: Classification, Clustering, Regression, Association Rules, Outer Detection (Outlier Analysis/Mining), Sequential Patterns, Prediction.

---

### Topic 3: Clustering Summary
- **Definition**: Unsupervised learning / unsupervised classification. Discovery rather than prediction.
- **Hallmark of Good Clustering**: High intra-class similarity, low inter-class similarity.
- **Data Structures**: Data matrix ($n 	imes p$, two modes) vs. Dissimilarity matrix ($n 	imes n$, one mode).
- **Distance Metric**: Euclidean distance $d(x, y) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}$.
- **K-Means (MacQueen, 1967)**: Centroid is the mean point. Steps: Partition into $k$ subsets -> compute centroids -> assign objects to nearest centroid -> repeat until convergence. Complexity: $O(tkn)$. Sensitive to outliers; requires $k$ in advance; fails on categorical data.
- **Variants**: k-modes (Huang, 1998; uses modes and frequencies for categorical data); k-prototypes (handles mixed numerical/categorical data). Rule of thumb: $k = \sqrt{n/2}$. Overfitting happens when $k$ is too high.
- **PAM / K-Medoids (Kaufman & Rousseeuw, 1987)**: Uses centrally located real objects (medoids). Robust to noise/outliers. Complexity: $O(k(n-k)^2)$. Replaces medoid $i$ with non-medoid $h$ if total swapping cost $TC_{ih} < 0$. If object $j$ belongs to $t \neq i$ and stays closest to $t$, $C_{jih} = 0$.
- **Large Dataset Extensions**: CLARA (Kaufman & Rousseeuw, 1990; sampling-based); CLARANS (Ng & Han, 1994; randomized sampling).
- **Hierarchical Clustering**: Distance matrix criteria; no $k$ required in advance.
  - *Agglomerative (AGNES)*: Bottom-up; merges closest clusters iteratively.
  - *Divisive (DIANA)*: Top-down; splits single master cluster successively.
  - *Linkage Methods*: Single Link (smallest distance between points), Complete Link (largest distance), Average Link (average distance), Centroid (distance between centroids).
  - *Dendrogram*: Tree structure where leaves are individual objects and root is one unified cluster.

---

### Topic 4: Prelim Lecture 4 (Nature and Sources of Data) Summary
- **Etymology**: "Data" is Latin in origin, literally meaning "anything that is given."
- **Definitions**:
  - Webster's (1973): Factual information used as basis for reasoning/calculation.
  - Webster's II Riverside: Information organized for analysis.
  - McGraw-Hill: Numerical or qualitative values derived from scientific experiments.
  - Merriam-Webster (def 2): Information output by a sensing device or organ with useful/redundant information needing processing.
- **Data Collection**:
  - *Primary Sources* (firsthand): Surveys/Questionnaires, Interviews, Observations, Focus Groups, Direct Records, Experimental Methods.
  - *Secondary Sources* (pre-existing): Internal (company sales/HR/finance) and External (government, online databases, historical archives).
- **Experimental Designs**:
  - *Completely Randomised Design (CRD)*: Randomisation and replication; compares experiments.
  - *Randomised Block Design (RBD)*: Divided into blocks; analyzed via ANOVA; originated in agriculture.
  - *Latin Square Design (LSD)*: $N \times N$ squares where letters occur only once per row/column (e.g. Sudoku); minimizes error.
  - *Factorial Design (FD)*: Two or more factors tested across levels to derive combinational interactions.
- **Nature of Data**:
  - Numerical: Derived by measurement; semi-quantitative coded as 0 or 1.
  - Descriptive: Qualitative definitive statements concerning objects.
  - Graphic & Symbolic: Modes of visual perception presentation.
  - Enumerative: Social science statistical data refined with measurement scales.
- **Data Classification**:
  - *Purposes*: Confidentiality, Data Integrity, Data Availability (CIA triad).
  - *Features*: Homogeneity (similar items), Clarity (no confusion in position), Stability (stable structure), Elastic (ability to change basis).
  - *Types*:
    - *Structured*: Fixed schema, tabular (rows/columns), SQL-compatible, OLTP, spreadsheets, sensors.
    - *Unstructured*: Lacks pre-defined format, cannot be stored in relational DB, videos/memos/PPT. Extracted via taxonomies, virtual repositories, XOLAP.
    - *Semi-structured*: No relational schema but has organizational properties (tags/elements) to ease space (XML, emails, TCP/IP packets). Extracted via graph-based OEM models and XML hierarchy.
- **Characteristics of Data Quality**: Accuracy, Reliability, Relevance, Validity, Timeliness, Completeness.

---

## Full 120-Question Catalog & Complete Answer Key

### Question 1
**[Topic 1: Lecture 1 - Data Analytics]**

Who authored the foundational article 'Data Science vs. Big Data vs. Data Analytics' presented in Lecture 1?

- A. Avantika Monnappa
- B. Clint Boulton
- C. Andrew Wilson
- D. Michelle D'Alessandro

**Correct Answer: A. Avantika Monnappa**

**Explanation:** Lecture 1 introduces the comparison 'Data Science vs. Big Data vs. Data Analytics' written by Avantika Monnappa (Slide 2).

---

### Question 2
**[Topic 1: Lecture 1 - Data Analytics]**

According to IBM data cited in Lecture 1, how much digital data was generated every single day in 2012?

- A. 2.5 billion gigabytes (GB)
- B. 1.7 megabytes (MB)
- C. 500 terabytes (TB)
- D. 10 billion petabytes (PB)

**Correct Answer: A. 2.5 billion gigabytes (GB)**

**Explanation:** According to IBM, 2.5 billion gigabytes (GB) of data was generated every day in 2012 (Slide 3).

---

### Question 3
**[Topic 1: Lecture 1 - Data Analytics]**

According to Forbes, at what rate is the total volume of digital data currently growing?

- A. Doubling every two years
- B. Tripling every five years
- C. Doubling every six months
- D. Growing by 10 percent annually

**Correct Answer: A. Doubling every two years**

**Explanation:** The slides cite Forbes stating that digital data is doubling every two years and changing the way we live (Slide 3).

---

### Question 4
**[Topic 1: Lecture 1 - Data Analytics]**

By the year 2020, Forbes estimated that how much new information would be created every second for every human being on Earth?

- A. About 1.7 megabytes
- B. About 2.5 gigabytes
- C. About 500 kilobytes
- D. About 10 megabytes

**Correct Answer: A. About 1.7 megabytes**

**Explanation:** Forbes stated that by the year 2020, about 1.7 megabytes of new information will be created every second for every human being on the planet (Slide 3 and 4).

---

### Question 5
**[Topic 1: Lecture 1 - Data Analytics]**

Which field is defined as an 'umbrella of techniques' dealing with structured and unstructured data, comprising data cleansing, preparation, and analysis?

- A. Data Science
- B. Big Data
- C. Data Analytics
- D. Business Intelligence

**Correct Answer: A. Data Science**

**Explanation:** Data Science is described as dealing with unstructured and structured data, comprising everything related to data cleansing, preparation, analysis, and serving as the umbrella of techniques (Slide 5).

---

### Question 6
**[Topic 1: Lecture 1 - Data Analytics]**

According to the infographic in Lecture 1, what is the reported average yearly salary for a Data Scientist?

- A. $113,436 per year
- B. $62,066 per year
- C. $60,476 per year
- D. $85,200 per year

**Correct Answer: A. $113,436 per year**

**Explanation:** The salary comparison infographic shows Data Scientist at $113,436 per year, Big Data Specialist at $62,066 per year, and Data Analyst at $60,476 per year (Slide 10).

---

### Question 7
**[Topic 1: Lecture 1 - Data Analytics]**

According to the infographic in Lecture 1, what is the reported average yearly salary for a Big Data Specialist?

- A. $62,066 per year
- B. $113,436 per year
- C. $60,476 per year
- D. $74,500 per year

**Correct Answer: A. $62,066 per year**

**Explanation:** The salary comparison infographic states that a Big Data Specialist earns an average of $62,066 per year (Slide 10).

---

### Question 8
**[Topic 1: Lecture 1 - Data Analytics]**

According to the infographic in Lecture 1, what is the reported average yearly salary for a Data Analyst?

- A. $60,476 per year
- B. $113,436 per year
- C. $62,066 per year
- D. $55,120 per year

**Correct Answer: A. $60,476 per year**

**Explanation:** The salary comparison infographic states that a Data Analyst earns an average of $60,476 per year (Slide 10).

---

### Question 9
**[Topic 1: Lecture 1 - Data Analytics]**

According to Gartner's definition, Big Data represents information assets characterized by which three key dimensions?

- A. High-volume, high-velocity, and high-variety
- B. High-veracity, high-value, and high-variability
- C. High-validity, high-vulnerability, and high-visibility
- D. High-volume, high-value, and high-vector

**Correct Answer: A. High-volume, high-velocity, and high-variety**

**Explanation:** Gartner defines Big Data as 'high-volume, and high-velocity and/or high-variety information assets that demand cost-effective, innovative forms of information processing' (Slide 6).

---

### Question 10
**[Topic 1: Lecture 1 - Data Analytics]**

Which set of skills is specifically listed in the infographic for a Data Scientist?

- A. SAS and/or R, Python coding, Hadoop platform, SQL database/coding, unstructured data
- B. Analytical skills, Creativity, Mathematics, Statistical skills, Computer science, Business skills
- C. Programming, Statistical skills, Machine learning, Data wrangling, Visualization, Data intuition
- D. Hardware engineering, Network architecture, Web hosting, Database administration

**Correct Answer: A. SAS and/or R, Python coding, Hadoop platform, SQL database/coding, unstructured data**

**Explanation:** The infographic lists for Data Scientist: In-depth knowledge in SAS and/or R, Python coding, Hadoop platform, SQL database/coding, and Working with unstructured data (Slide 9).

---

### Question 11
**[Topic 1: Lecture 1 - Data Analytics]**

In which industries are Data Science algorithms specifically highlighted as being applied?

- A. Internet searches, Search recommenders, and Digital advertisements
- B. Financial services, Retail, and Communication
- C. Healthcare, Travel, Gaming, and Energy management
- D. Agriculture, Heavy machinery, and Civil engineering

**Correct Answer: A. Internet searches, Search recommenders, and Digital advertisements**

**Explanation:** Slide 9 indicates Data Science algorithms are used in industries like: Internet searches, Search recommenders, and Digital advertisements.

---

### Question 12
**[Topic 1: Lecture 1 - Data Analytics]**

In which industries is Big Data specifically highlighted as being used?

- A. Financial services, Retail, and Communication
- B. Internet searches, Search recommenders, and Digital advertisements
- C. Healthcare, Travel, Gaming, and Energy management
- D. Aerospace, Forestry, and Marine navigation

**Correct Answer: A. Financial services, Retail, and Communication**

**Explanation:** Slide 9 highlights that Big Data is used in Financial Services, Retail, and Communication.

---

### Question 13
**[Topic 1: Lecture 1 - Data Analytics]**

In which industries is Data Analytics specifically highlighted as being used?

- A. Healthcare, Travel, Gaming, and Energy management
- B. Internet searches, Search recommenders, and Digital advertisements
- C. Financial services, Retail, and Communication
- D. Automotive manufacturing, Metallurgy, and Textile milling

**Correct Answer: A. Healthcare, Travel, Gaming, and Energy management**

**Explanation:** Slide 9 highlights that Data Analytics is used in Healthcare, Travel, Gaming, and Energy management.

---

### Question 14
**[Topic 1: Lecture 1 - Data Analytics]**

What is the primary definition of Data Analytics given in Lecture 1?

- A. The science of analyzing raw data in order to make conclusions about that information
- B. The infrastructure architecture for storing multi-terabyte unaggregated data files
- C. The extraction of hidden cryptographic hashes inside relational databases
- D. The theoretical mathematical study of multi-dimensional vector spaces

**Correct Answer: A. The science of analyzing raw data in order to make conclusions about that information**

**Explanation:** Lecture 1 defines Data Analytics as 'the science of analyzing raw data in order to make conclusions about that information' (Slide 7).

---

### Question 15
**[Topic 1: Lecture 1 - Data Analytics]**

According to Lecture 1, Data Analytics is also commonly known as:

- A. Data analysis
- B. Data mining
- C. Data warehousing
- D. Data scraping

**Correct Answer: A. Data analysis**

**Explanation:** Slide 8 explicitly states: 'Data analytics is also known as data analysis.'

---

### Question 16
**[Topic 1: Lecture 1 - Data Analytics]**

In the CIO.com case study by Clint Boulton, what is the name of Accenture's application that scores the likelihood of winning business opportunities?

- A. Win Probability Tool
- B. MANTIS System
- C. iQuatic Solution
- D. Opportunity Predictor

**Correct Answer: A. Win Probability Tool**

**Explanation:** Accenture's application is called the 'Win Probability Tool', which leverages metrics to score the likelihood of winning business opportunities (Slide 12).

---

### Question 17
**[Topic 1: Lecture 1 - Data Analytics]**

Accenture's Win Probability Tool analyzes CRM data from which platform to predict loss potential with 90 percent accuracy?

- A. Salesforce.com
- B. SAP ERP
- C. Microsoft Dynamics
- D. Oracle CRM

**Correct Answer: A. Salesforce.com**

**Explanation:** The application churns through Accenture's Salesforce.com CRM data, taking into account several years of deals to predict loss potential with 90 percent accuracy (Slide 12).

---

### Question 18
**[Topic 1: Lecture 1 - Data Analytics]**

How many employees does Accenture support with its device and real estate utilization analytics dashboards?

- A. 500,000 employees
- B. 100,000 employees
- C. 250,000 employees
- D. 1,000,000 employees

**Correct Answer: A. 500,000 employees**

**Explanation:** Both apps enable leadership to make critical decisions that improve the experience for Accenture's 500,000 employees (Slide 13).

---

### Question 19
**[Topic 1: Lecture 1 - Data Analytics]**

Accenture uses predictive analytics to conduct present and forecast modeling to support which organizational diversity goal by 2025?

- A. 50/50 gender parity
- B. 40/60 gender distribution
- C. 75 percent remote workforce
- D. 100 percent renewable power

**Correct Answer: A. 50/50 gender parity**

**Explanation:** The tool is critical for helping Accenture reach its 50/50 gender parity goal by 2025 and 25% female workforce in leadership positions (Slide 13).

---

### Question 20
**[Topic 1: Lecture 1 - Data Analytics]**

Accenture CIO Andrew Wilson hosts their data lake in Microsoft Azure and visualizes findings using which software?

- A. Qlik
- B. Tableau
- C. Power BI
- D. Looker

**Correct Answer: A. Qlik**

**Explanation:** Wilson supports these apps with a data lake running in Microsoft's Azure cloud, visualized with Qlik software (Slide 13).

---

### Question 21
**[Topic 1: Lecture 1 - Data Analytics]**

What primary lesson was learned from Accenture's enterprise data analytics implementation?

- A. The bigger the enterprise, the more value that is trapped in the data it has collected
- B. Cloud migration must always eliminate existing legacy databases within one month
- C. Small companies do not require analytics strategies
- D. Machine learning cannot be applied to CRM data

**Correct Answer: A. The bigger the enterprise, the more value that is trapped in the data it has collected**

**Explanation:** The lesson learned states: 'The bigger the enterprise, the more value that is trapped in the data it has collected. A digital strategy has analytics at the core' (Slide 14).

---

### Question 22
**[Topic 1: Lecture 1 - Data Analytics]**

At Belkin, which CIO emphasizes preparing now for 5G cellular network technology?

- A. Lance Ralls
- B. Andrew Wilson
- C. Daniel Jeavons
- D. Dickie Oliver

**Correct Answer: A. Lance Ralls**

**Explanation:** At Hon Hai-owned Belkin, CIO Lance Ralls spearheaded their analytics strategy and warned CIOs to prepare for 5G (Slide 15 and 16).

---

### Question 23
**[Topic 1: Lecture 1 - Data Analytics]**

What software does Belkin use for copy data management to roll through snapshots and virtualize, compress, and protect data?

- A. Delphix
- B. Databricks
- C. Snowflake
- D. Alteryx

**Correct Answer: A. Delphix**

**Explanation:** The software from Delphix enables Belkin to rapidly roll through snapshots, virtualize, compress, and protect data (Slide 15).

---

### Question 24
**[Topic 1: Lecture 1 - Data Analytics]**

At Shell, Daniel Jeavons built an analytics platform to anticipate failures in how many oil drilling machine parts?

- A. More than 3,000 different machine parts
- B. Exactly 500 machine parts
- C. Over 50,000 machine parts
- D. 1,200 machine parts

**Correct Answer: A. More than 3,000 different machine parts**

**Explanation:** Shell built an analytics platform to run predictive models to anticipate when more than 3,000 different oil drilling machine parts might fail (Slide 17).

---

### Question 25
**[Topic 1: Lecture 1 - Data Analytics]**

Which tool capturing streaming data via Apache Spark helped Shell reduce inventory analysis from 48 hours to under 45 minutes?

- A. Databricks
- B. Delphix
- C. Qlik
- D. Slalom

**Correct Answer: A. Databricks**

**Explanation:** Databricks captures streaming data via Apache Spark hosted in Azure, reducing inventory analysis from over 48 hours to less than 45 minutes (Slide 17).

---

### Question 26
**[Topic 1: Lecture 1 - Data Analytics]**

What is the name of Cargill's mobile data-tracking app that helps shrimp farmers reduce yield mortality rates?

- A. iQuatic
- B. MANTIS
- C. AquacultureIQ
- D. ShrimpFlow

**Correct Answer: A. iQuatic**

**Explanation:** Cargill's animal nutrition unit developed iQuatic, a mobile data-tracking app that helps shrimp farmers reduce mortality rate of their yields (Slide 19).

---

### Question 27
**[Topic 1: Lecture 1 - Data Analytics]**

Cargill's iQuatic automated feeding system understands the natural eating patterns of shrimp using which technology?

- A. Acoustic technology
- B. Infrared laser scanning
- C. Satellite radar imaging
- D. Biochemical testing strips

**Correct Answer: A. Acoustic technology**

**Explanation:** Cargill's iQuatic automated shrimp feeding system employs automated feeders using acoustic technology to understand natural eating patterns (Slide 19).

---

### Question 28
**[Topic 1: Lecture 1 - Data Analytics]**

At Merck, CIO Michelle D'Alessandro created which data warehousing system to eliminate engineers spending 60% to 80% of effort searching for data?

- A. MANTIS (Manufacturing and Analytics Intelligence)
- B. iQuatic
- C. Win Probability Tool
- D. Delphix Data Hub

**Correct Answer: A. MANTIS (Manufacturing and Analytics Intelligence)**

**Explanation:** Merck created MANTIS (Manufacturing and Analytics Intelligence), an uber data warehousing system comprising in-memory databases and open source tools (Slide 21).

---

### Question 29
**[Topic 1: Lecture 1 - Data Analytics]**

Airlines Reporting Corp. (ARC), which settles over $88 billion in airfare transactions, migrated its warehouse from Teradata to which cloud software on AWS?

- A. Snowflake
- B. Databricks
- C. MANTIS
- D. Delphix

**Correct Answer: A. Snowflake**

**Explanation:** ARC migrated from a Teradata data warehouse to cloud software from Snowflake hosted on AWS (Slide 23).

---

### Question 30
**[Topic 1: Lecture 1 - Data Analytics]**

Arrange the four major types of data analytics in increasing order of complexity and added-value contribution:

- A. Descriptive -> Diagnostic -> Predictive -> Prescriptive
- B. Prescriptive -> Predictive -> Diagnostic -> Descriptive
- C. Diagnostic -> Descriptive -> Prescriptive -> Predictive
- D. Predictive -> Descriptive -> Diagnostic -> Prescriptive

**Correct Answer: A. Descriptive -> Diagnostic -> Predictive -> Prescriptive**

**Explanation:** Slide 31 illustrates the progression of complexity and added-value: Descriptive analytics (lowest complexity/value), Diagnostic analytics, Predictive analytics, and Prescriptive analytics (highest complexity/value).

---

### Question 31
**[Topic 2: Concepts of Data Mining]**

What is the primary definition of Data Mining given in the slides?

- A. Extracting information, looking for hidden, valid, and potentially useful patterns in huge data sets
- B. Writing relational SQL queries to produce daily sales summaries
- C. Compressing text documents to conserve disk space on local servers
- D. Encrypting customer records to comply with financial privacy regulations

**Correct Answer: A. Extracting information, looking for hidden, valid, and potentially useful patterns in huge data sets**

**Explanation:** Data mining is defined as extracting information, looking for hidden, valid, and potentially useful patterns in huge data sets to discover unsuspected relationships (Slide 2).

---

### Question 32
**[Topic 2: Concepts of Data Mining]**

Data mining is a multi-disciplinary skill that combines which foundational fields?

- A. Machine learning, statistics, AI, and database technology
- B. Quantum physics, microeconomics, hardware routing, and web design
- C. Graphic design, copy editing, journalism, and public relations
- D. Robotics, manual filing, telecommunications, and radio transmission

**Correct Answer: A. Machine learning, statistics, AI, and database technology**

**Explanation:** Data mining is a multi-disciplinary skill that uses machine learning, statistics, AI, and database technology (Slide 2).

---

### Question 33
**[Topic 2: Concepts of Data Mining]**

Which of the following is another widely recognized name for Data Mining mentioned in the slides?

- A. Knowledge discovery
- B. Data encryption
- C. System virtualization
- D. Binary compiling

**Correct Answer: A. Knowledge discovery**

**Explanation:** Data mining is also known as Knowledge discovery, Knowledge extraction, data/pattern analysis, information harvesting, etc. (Slide 2).

---

### Question 34
**[Topic 2: Concepts of Data Mining]**

In the Education application of data mining, how does the technique benefit educators?

- A. Predict student achievement levels and find students needing extra attention (e.g., weak in math)
- B. Automate classroom cleaning schedules and campus energy distribution
- C. Determine teacher salary scales based strictly on seniority
- D. Eliminate textbooks by translating all curricula into binary code

**Correct Answer: A. Predict student achievement levels and find students needing extra attention (e.g., weak in math)**

**Explanation:** Data mining benefits educators to access student data, predict achievement levels, and find students or groups needing extra attention, such as students weak in math (Slide 3).

---

### Question 35
**[Topic 2: Concepts of Data Mining]**

In the Manufacturing sector, how is data mining applied to reduce production downtime?

- A. Predict wear and tear of production assets and anticipate maintenance needs
- B. Automatically replace human operators with mechanical assembly lines
- C. Benchmark competitor pricing models across international markets
- D. Track customer credit scores to determine shipping priorities

**Correct Answer: A. Predict wear and tear of production assets and anticipate maintenance needs**

**Explanation:** Manufacturers use data mining to predict wear and tear of production assets and anticipate maintenance to minimize downtime (Slide 3).

---

### Question 36
**[Topic 2: Concepts of Data Mining]**

How do service providers like mobile phone and utility companies use data mining to curb customer churn?

- A. Analyze billing details, customer interactions, and complaints to assign probability scores and offer incentives
- B. Enforce automatic contract renewals whenever data usage exceeds monthly thresholds
- C. Report non-responsive customers directly to national credit bureaus
- D. Block outgoing phone calls to competitor customer service numbers

**Correct Answer: A. Analyze billing details, customer interactions, and complaints to assign probability scores and offer incentives**

**Explanation:** Service providers analyze billing details, interactions, and complaints to predict customer departure, assign probability scores, and offer incentives (Slide 4).

---

### Question 37
**[Topic 2: Concepts of Data Mining]**

Which e-commerce giant is specifically highlighted in the slides for using data mining to offer cross-sells and up-sells?

- A. Amazon
- B. eBay
- C. Alibaba
- D. Walmart

**Correct Answer: A. Amazon**

**Explanation:** Slide 4 cites Amazon as one of the most famous names using data mining techniques to offer cross-sells and up-sells.

---

### Question 38
**[Topic 2: Concepts of Data Mining]**

In the Supermarkets application, what famous data mining rule is developed by evaluating buying patterns?

- A. Predicting if female shoppers were pregnant to target products like baby powder and diapers
- B. Predicting peak weekend bread consumption to order flour deliveries
- C. Identifying customers who only purchase discounted expired produce
- D. Calculating shopping cart wheel degradation based on store floor textures

**Correct Answer: A. Predicting if female shoppers were pregnant to target products like baby powder and diapers**

**Explanation:** Supermarkets evaluate buying patterns to predict if female shoppers are pregnant, targeting products like baby powder, diapers, and baby shop items (Slide 5).

---

### Question 39
**[Topic 2: Concepts of Data Mining]**

How is data mining applied by Crime Investigation agencies?

- A. Deploying police workforce (where and when crime is likely) and identifying who to search at border crossings
- B. Automatically sentencing convicted individuals using machine learning algorithms
- C. Replacing forensic laboratory testing with predictive simulation models
- D. Publishing citizen criminal records on public marketing websites

**Correct Answer: A. Deploying police workforce (where and when crime is likely) and identifying who to search at border crossings**

**Explanation:** Data mining helps crime investigation agencies deploy police workforce (where is crime most likely to happen and when?) and who to search at borders (Slide 5).

---

### Question 40
**[Topic 2: Concepts of Data Mining]**

Which of the following is NOT one of the three primary corporate domains where data mining is highly useful?

- A. Heavy Civil Infrastructure Design
- B. Market Analysis and Management
- C. Corporate Analysis & Risk Management
- D. Fraud Detection

**Correct Answer: A. Heavy Civil Infrastructure Design**

**Explanation:** Slide 7 explicitly identifies the three key domains: Market Analysis and Management, Corporate Analysis & Risk Management, and Fraud Detection.

---

### Question 41
**[Topic 2: Concepts of Data Mining]**

In Market Analysis, what is the purpose of 'Customer Profiling'?

- A. Determining what kind of people buy what kind of products
- B. Calculating the physical travel distance between customer homes and stores
- C. Performing association and correlation between product sales
- D. Writing financial balance sheets for corporate shareholders

**Correct Answer: A. Determining what kind of people buy what kind of products**

**Explanation:** Customer Profiling helps determine what kind of people buy what kind of products (Slide 8).

---

### Question 42
**[Topic 2: Concepts of Data Mining]**

In Market Analysis, what does 'Cross Market Analysis' perform?

- A. Associations and correlations between product sales
- B. Currency exchange rate conversions across overseas borders
- C. Physical store relocation planning based on zoning laws
- D. Legal trademark compliance checks in international markets

**Correct Answer: A. Associations and correlations between product sales**

**Explanation:** Cross Market Analysis performs association and correlations between product sales (Slide 8).

---

### Question 43
**[Topic 2: Concepts of Data Mining]**

In Corporate Analysis & Risk Management, what does 'Resource Planning' involve?

- A. Summarizing and comparing resources and spending
- B. Cash flow prediction and contingent claim analysis
- C. Monitoring competitors and market directions
- D. Interviewing prospective employees for IT positions

**Correct Answer: A. Summarizing and comparing resources and spending**

**Explanation:** Resource Planning involves summarizing and comparing resources and spending (Slide 10).

---

### Question 44
**[Topic 2: Concepts of Data Mining]**

In telecommunications fraud detection, data mining analyzes which call attributes that deviate from expected norms?

- A. Call destination, call duration, and time of day or week
- B. Audio pitch, vocal cadence, and background noise level
- C. Mobile phone brand, battery percentage, and screen brightness
- D. SIM card physical serial number and packaging color

**Correct Answer: A. Call destination, call duration, and time of day or week**

**Explanation:** In fraud telephone calls, data mining helps find the destination, duration, and time of day/week, analyzing patterns that deviate from expected norms (Slide 11).

---

### Question 45
**[Topic 2: Concepts of Data Mining]**

What real-world company controversy is cited in the slides regarding the disadvantage of selling customer data?

- A. American Express sold credit card purchases of their customers to other companies
- B. Amazon shared subscriber passwords with retail competitors
- C. Google sold private search queries to local police departments
- D. Apple leaked credit card numbers of iTunes subscribers

**Correct Answer: A. American Express sold credit card purchases of their customers to other companies**

**Explanation:** Slide 27 highlights that American Express sold credit card purchases of their customers to other companies for money.

---

### Question 46
**[Topic 2: Concepts of Data Mining]**

What is the very first phase of the Data Mining Implementation Process?

- A. Business Understanding
- B. Data Understanding
- C. Data Preparation
- D. Modeling

**Correct Answer: A. Business Understanding**

**Explanation:** The CRISP-DM process starts with Business Understanding, followed by Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment (Slide 13 and 14).

---

### Question 47
**[Topic 2: Concepts of Data Mining]**

During Data Understanding, what is used to reduce errors when resolving naming conflicts (e.g., cust_no vs. cust_id) during schema integration?

- A. Metadata
- B. Concept hierarchies
- C. Euclidean distances
- D. Regression equations

**Correct Answer: A. Metadata**

**Explanation:** Metadata should be used to reduce errors in the data integration process when resolving object matching and schema integration issues (Slide 16).

---

### Question 48
**[Topic 2: Concepts of Data Mining]**

Approximately how much of the total project time is consumed by the Data Preparation phase?

- A. About 90% of the project time
- B. About 50% of the project time
- C. About 25% of the project time
- D. Less than 10% of the project time

**Correct Answer: A. About 90% of the project time**

**Explanation:** Slide 17 states: 'The data preparation process consumes about 90% of the time of the project.'

---

### Question 49
**[Topic 2: Concepts of Data Mining]**

In Data Preparation, what is Data Cleaning defined as?

- A. Smoothing noisy data and filling in missing values
- B. Encrypting files before sending them across network lines
- C. Deleting all negative numerical values in a database
- D. Translating database table column names into uppercase letters

**Correct Answer: A. Smoothing noisy data and filling in missing values**

**Explanation:** Data cleaning is a process to clean data by smoothing noisy data and filling in missing values (Slide 18).

---

### Question 50
**[Topic 2: Concepts of Data Mining]**

In Data Transformation, which operation calculates monthly and yearly totals from weekly sales records?

- A. Aggregation
- B. Generalization
- C. Normalization
- D. Attribute construction

**Correct Answer: A. Aggregation**

**Explanation:** Aggregation applies summary operations to data, such as aggregating weekly sales data to calculate monthly and yearly totals (Slide 19).

---

### Question 51
**[Topic 2: Concepts of Data Mining]**

In Data Transformation, replacing low-level concepts (e.g. 'city') with higher-level concepts (e.g. 'county') using concept hierarchies is known as:

- A. Generalization
- B. Aggregation
- C. Smoothing
- D. Normalization

**Correct Answer: A. Generalization**

**Explanation:** Generalization replaces low-level data by higher-level concepts with the help of concept hierarchies (e.g., city replaced by county) (Slide 19).

---

### Question 52
**[Topic 2: Concepts of Data Mining]**

Scaling attribute values into a specified target range (e.g., -2.0 to 2.0) is known as:

- A. Normalization
- B. Generalization
- C. Aggregation
- D. Attribute construction

**Correct Answer: A. Normalization**

**Explanation:** Normalization is performed when attribute data are scaled up or scaled down (e.g., data falling in range -2.0 to 2.0) (Slide 20).

---

### Question 53
**[Topic 2: Concepts of Data Mining]**

In the Modeling phase, which specific scenario focuses on determining which products are likely to be sold together?

- A. Recommendations
- B. Forecasting
- C. Risk and probability
- D. Finding sequences

**Correct Answer: A. Recommendations**

**Explanation:** Recommendations determines which products are likely to be sold together and generates purchase recommendations (Slide 22).

---

### Question 54
**[Topic 2: Concepts of Data Mining]**

In the Modeling phase, what does the 'Finding sequences' scenario focus on?

- A. Analyzing customer selections in a shopping cart to predict next likely events
- B. Estimating future quarterly revenue and server loads
- C. Assigning probabilities to medical diagnoses and clinical outcomes
- D. Separating customers into clusters of related items

**Correct Answer: A. Analyzing customer selections in a shopping cart to predict next likely events**

**Explanation:** Finding sequences involves analyzing customer selections in a shopping cart to predict next likely events (Slide 22).

---

### Question 55
**[Topic 2: Concepts of Data Mining]**

In which phase of the Data Mining Implementation Process is a 'go or no-go decision' made to transition into deployment?

- A. Evaluation
- B. Data Understanding
- C. Modeling
- D. Business Understanding

**Correct Answer: A. Evaluation**

**Explanation:** In the Evaluation phase, patterns are evaluated against business objectives, and a go or no-go decision is taken to move the model into deployment (Slide 23).

---

### Question 56
**[Topic 2: Concepts of Data Mining]**

What is created during the Deployment phase to document lessons learned and key experiences to improve business policy?

- A. Final project report
- B. Adjacency matrix
- C. Dendrogram tree
- D. Concept hierarchy

**Correct Answer: A. Final project report**

**Explanation:** A final project report is created with lessons learned and key experiences during the project to improve organizational business policy (Slide 24).

---

### Question 57
**[Topic 2: Concepts of Data Mining]**

What implementation challenge occurs when a small training database causes a data mining model to fail on future unseen data?

- A. Overfitting
- B. Under-sampling
- C. Data normalization
- D. Schema mismatch

**Correct Answer: A. Overfitting**

**Explanation:** Overfitting: Due to small size training database, a model may not fit future states (Slide 28).

---

### Question 58
**[Topic 2: Concepts of Data Mining]**

Which data mining technique is used to retrieve important and relevant information about data/metadata to classify data into different classes?

- A. Classification
- B. Clustering
- C. Regression
- D. Outer detection

**Correct Answer: A. Classification**

**Explanation:** Classification analysis is used to retrieve important and relevant information about data and metadata, helping classify data in different classes (Slide 30).

---

### Question 59
**[Topic 2: Concepts of Data Mining]**

Which data mining technique identifies and analyzes relationships between variables to determine the likelihood of a specific variable given others?

- A. Regression
- B. Clustering
- C. Association rules
- D. Sequential patterns

**Correct Answer: A. Regression**

**Explanation:** Regression analysis identifies and analyzes the relationship between variables to identify the likelihood of a specific variable given presence of others (Slide 31).

---

### Question 60
**[Topic 2: Concepts of Data Mining]**

Which data mining technique refers to observing items in a dataset that do not match expected patterns or behaviors (used in intrusion and fraud detection)?

- A. Outer detection (Outlier Analysis / Outlier Mining)
- B. Association rules
- C. Sequential patterns
- D. Regression

**Correct Answer: A. Outer detection (Outlier Analysis / Outlier Mining)**

**Explanation:** Outer detection (also called Outlier Analysis or Outlier Mining) refers to observing items that do not match expected patterns, used in intrusion, fraud, or fault detection (Slide 32).

---

### Question 61
**[Topic 3: Clustering]**

Cluster analysis is classified as which paradigm of machine learning?

- A. Unsupervised learning
- B. Supervised learning
- C. Reinforcement learning
- D. Semi-supervised classification with predefined labels

**Correct Answer: A. Unsupervised learning**

**Explanation:** Cluster analysis is part of unsupervised learning / unsupervised classification because there are no predefined classes (Topic 3, Slide 1 & 2).

---

### Question 62
**[Topic 3: Clustering]**

What is the key conceptual distinction between cluster analysis and predictive modeling?

- A. Clustering is more about discovery than prediction
- B. Clustering requires continuous numerical target labels
- C. Clustering only operates on single-variable datasets
- D. Clustering always produces deterministic linear equations

**Correct Answer: A. Clustering is more about discovery than prediction**

**Explanation:** Slide 2 explicitly states: 'Clustering analysis is more about discovery than a prediction. The machine searches for similarity in the data.'

---

### Question 63
**[Topic 3: Clustering]**

According to the slides, what are the two core criteria that define 'Good Clustering'?

- A. High intra-class similarity and low inter-class similarity
- B. High inter-class similarity and low intra-class similarity
- C. Equal number of data points in every generated cluster
- D. A minimum of ten distinct dimensions per cluster

**Correct Answer: A. High intra-class similarity and low inter-class similarity**

**Explanation:** A good clustering method will produce high quality clusters with high intra-class similarity and low inter-class similarity (Slide 3).

---

### Question 64
**[Topic 3: Clustering]**

Which data structure represents an n-by-p table containing n objects measured across p attributes (two modes)?

- A. Data matrix
- B. Dissimilarity matrix
- C. Dendrogram
- D. Adjacency graph

**Correct Answer: A. Data matrix**

**Explanation:** The Data matrix (two modes) represents n objects with p variables/attributes (Slide 5).

---

### Question 65
**[Topic 3: Clustering]**

Which data structure stores pairwise distances d(i, j) between objects in an n-by-n lower triangular format (one mode)?

- A. Dissimilarity matrix
- B. Data matrix
- C. Concept hierarchy
- D. Frequency table

**Correct Answer: A. Dissimilarity matrix**

**Explanation:** The Dissimilarity matrix (one mode) stores pairwise distances between objects in a triangular matrix format (Slide 5).

---

### Question 66
**[Topic 3: Clustering]**

What metric calculates distance as the root of square differences between coordinates of a pair of objects: sqrt(sum((x_i - y_i)^2))?

- A. Euclidean distance
- B. Manhattan distance
- C. Cosine similarity
- D. Hamming distance

**Correct Answer: A. Euclidean distance**

**Explanation:** Euclidean distance examines the root of square differences between coordinates of a pair of objects (Slide 8).

---

### Question 67
**[Topic 3: Clustering]**

In the ggplot2 example in R, which library and geom function are used to build layered scatter plots of age versus spend?

- A. library(ggplot2) and geom_point()
- B. library(lattice) and geom_scatter()
- C. library(stats) and plot_clusters()
- D. library(cluster) and geom_circle()

**Correct Answer: A. library(ggplot2) and geom_point()**

**Explanation:** The code uses 'library(ggplot2)' and 'ggplot(df, aes(x = age, y = spend)) + geom_point()' to visualize clusters (Slide 4).

---

### Question 68
**[Topic 3: Clustering]**

Which family of clustering algorithms constructs various partitions of a database into k clusters and evaluates them by a criterion?

- A. Partitioning algorithms
- B. Hierarchical algorithms
- C. Density-based algorithms
- D. Grid-based algorithms

**Correct Answer: A. Partitioning algorithms**

**Explanation:** Partitioning algorithms construct a partition of a database D of n objects into a set of k clusters (Slide 7 & 8).

---

### Question 69
**[Topic 3: Clustering]**

Who introduced the classical K-Means clustering algorithm in 1967?

- A. J. MacQueen
- B. L. Kaufman and P. Rousseeuw
- C. Z. Huang
- D. R. Ng and J. Han

**Correct Answer: A. J. MacQueen**

**Explanation:** The slides cite K-means as originating from MacQueen in 1967 (Slide 8).

---

### Question 70
**[Topic 3: Clustering]**

In K-Means clustering, what is the 'centroid' of a cluster?

- A. The center point, defined as the mean coordinates of all objects in the cluster
- B. The most centrally located physical data point in the raw dataset
- C. The object that has the largest distance from all other clusters
- D. The median coordinate value across all categorical attributes

**Correct Answer: A. The center point, defined as the mean coordinates of all objects in the cluster**

**Explanation:** In K-means, the centroid is the center, i.e., mean point, of the cluster coordinates (Slide 9).

---

### Question 71
**[Topic 3: Clustering]**

What is the correct sequence of the four implementation steps in the K-Means algorithm?

- A. 1. Partition into k subsets; 2. Compute centroids; 3. Assign objects to nearest centroid; 4. Recompute centroids and repeat until no change
- B. 1. Compute distance matrix; 2. Build MST; 3. Split tree into k parts; 4. Output dendrogram
- C. 1. Select medoids; 2. Calculate swapping cost; 3. Swap medoid with non-medoid; 4. Repeat until cost > 0
- D. 1. Normalize attributes; 2. Calculate ANOVA; 3. Form blocks; 4. Merge nearest pairs

**Correct Answer: A. 1. Partition into k subsets; 2. Compute centroids; 3. Assign objects to nearest centroid; 4. Recompute centroids and repeat until no change**

**Explanation:** K-means steps: 1. Partition objects into k nonempty subsets; 2. Compute seed points as centroids; 3. Assign each object to nearest seed point; 4. Recompute means and repeat until no assignment change (Slide 9).

---

### Question 72
**[Topic 3: Clustering]**

What is the computational time complexity of the standard K-Means algorithm?

- A. O(tkn), where n is objects, k is clusters, and t is iterations
- B. O(k(n-k)^2) for each iteration
- C. O(n^3) in all cases
- D. O(n log n) regardless of cluster count

**Correct Answer: A. O(tkn), where n is objects, k is clusters, and t is iterations**

**Explanation:** Standard K-means is relatively efficient with time complexity O(tkn), where n is number of objects, k is clusters, and t is iterations (Slide 11).

---

### Question 73
**[Topic 3: Clustering]**

Which of the following is a recognized weakness of the standard K-Means method?

- A. Applicable only when the mean is defined, struggling with categorical data
- B. Excessively slow time complexity of O(n^4)
- C. Inability to handle datasets with more than three observations
- D. Requires a dendrogram tree to be computed first

**Correct Answer: A. Applicable only when the mean is defined, struggling with categorical data**

**Explanation:** K-means is applicable only when the mean is defined (posing problems for categorical data), requires k in advance, is sensitive to noise/outliers, and cannot handle non-convex shapes (Slide 11).

---

### Question 74
**[Topic 3: Clustering]**

Why is K-Means sensitive to outliers?

- A. An object with an extremely large value may substantially distort the cluster mean
- B. Outliers automatically force the value of k to increase by one
- C. Outliers cause the distance matrix to invert to negative infinity
- D. Outliers turn numerical attributes into categorical strings

**Correct Answer: A. An object with an extremely large value may substantially distort the cluster mean**

**Explanation:** The k-means algorithm is sensitive to outliers because an object with an extremely large value may substantially distort the distribution of data and the cluster mean (Slide 13).

---

### Question 75
**[Topic 3: Clustering]**

Which variant of K-Means was introduced by Z. Huang in 1998 to handle categorical data by replacing means with modes?

- A. k-modes
- B. PAM
- C. CLARA
- D. AGNES

**Correct Answer: A. k-modes**

**Explanation:** Huang (1998) introduced k-modes, replacing cluster means with modes and using frequency-based updates to handle categorical data (Slide 12).

---

### Question 76
**[Topic 3: Clustering]**

Which method is specifically designed to cluster a mixture of both categorical and numerical data?

- A. k-prototype method
- B. k-modes method
- C. Single Link method
- D. Sudoku method

**Correct Answer: A. k-prototype method**

**Explanation:** The k-prototype method handles a mixture of categorical and numerical data by combining k-means and k-modes (Slide 12).

---

### Question 77
**[Topic 3: Clustering]**

What rule of thumb is provided in the slides to select an initial appropriate number of clusters k for n observations?

- A. k = sqrt(n / 2)
- B. k = n / 10
- C. k = 2 * log2(n)
- D. k = sqrt(2 * n)

**Correct Answer: A. k = sqrt(n / 2)**

**Explanation:** The rule of thumb formula shown on Slide 10 is: cluster = sqrt(n / 2), where n equals the number of observations.

---

### Question 78
**[Topic 3: Clustering]**

What risk occurs if an analyst sets an excessively high value of k (a very large number of groups)?

- A. Overfitting of data, reducing performance on new incoming data
- B. Underfitting, causing all data to merge into a single point
- C. Immediate mathematical division by zero in the distance formula
- D. Transformation of all numerical features into categorical labels

**Correct Answer: A. Overfitting of data, reducing performance on new incoming data**

**Explanation:** Setting a high value of k might result in overfitting, where the machine learns tiny details of the dataset and struggles to generalize patterns to new data (Slide 10).

---

### Question 79
**[Topic 3: Clustering]**

Who introduced the PAM (Partitioning Around Medoids) algorithm in 1987?

- A. L. Kaufman and P. Rousseeuw
- B. J. MacQueen
- C. Z. Huang
- D. R. Ng and J. Han

**Correct Answer: A. L. Kaufman and P. Rousseeuw**

**Explanation:** PAM (Partitioning Around Medoids) was introduced by Kaufman and Rousseeuw in 1987 and built in Splus (Slide 14 and 16).

---

### Question 80
**[Topic 3: Clustering]**

How does K-Medoids (PAM) fundamentally differ from K-Means in how clusters are represented?

- A. K-Medoids uses the most centrally located real object in a cluster rather than a calculated mean
- B. K-Medoids represents clusters using hierarchical dendrogram trees
- C. K-Medoids requires no input value of k
- D. K-Medoids calculates distances using ANOVA rather than Euclidean formulas

**Correct Answer: A. K-Medoids uses the most centrally located real object in a cluster rather than a calculated mean**

**Explanation:** Instead of taking the mean value, K-Medoids uses a medoid, which is the most centrally located actual object in the cluster (Slide 13 and 16).

---

### Question 81
**[Topic 3: Clustering]**

What is the computational complexity of the PAM algorithm per iteration?

- A. O(k(n - k)^2)
- B. O(tkn)
- C. O(ks^2 + k(n - k))
- D. O(n log n)

**Correct Answer: A. O(k(n - k)^2)**

**Explanation:** PAM has a computational complexity of O(k(n - k)^2) for each iteration, making it inefficient for large datasets (Slide 18).

---

### Question 82
**[Topic 3: Clustering]**

In the PAM algorithm, when is a current medoid i replaced by a candidate non-medoid h?

- A. If the total swapping cost TC_ih < 0
- B. If the total swapping cost TC_ih > 0
- C. If TC_ih equals exactly 1.0
- D. Whenever h has a smaller coordinate value than i

**Correct Answer: A. If the total swapping cost TC_ih < 0**

**Explanation:** In PAM, for each pair of medoid i and non-medoid h, if the total swapping cost TC_ih < 0, medoid i is replaced by h (Slide 16).

---

### Question 83
**[Topic 3: Clustering]**

In PAM swapping cost calculations, what is C_jih if object j currently belongs to medoid t (not i) and remains closest to t after i is replaced by h?

- A. C_jih = 0
- B. C_jih = d(j, h) - d(j, i)
- C. C_jih = d(j, t) - d(j, i)
- D. C_jih = -1

**Correct Answer: A. C_jih = 0**

**Explanation:** When object j belongs to medoid t, and replacing i with h does not change its assignment because it remains closest to t, C_jih = 0 (Slide 17).

---

### Question 84
**[Topic 3: Clustering]**

Which sampling-based clustering algorithm was introduced by Kaufmann and Rousseeuw in 1990 to handle larger datasets than PAM?

- A. CLARA (Clustering Large Applications)
- B. CLARANS
- C. AGNES
- D. DIANA

**Correct Answer: A. CLARA (Clustering Large Applications)**

**Explanation:** CLARA (Clustering Large Applications) draws multiple samples of the dataset, applies PAM on each sample, and outputs the best clustering (Slide 18 & 19).

---

### Question 85
**[Topic 3: Clustering]**

What is a recognized weakness of the CLARA algorithm?

- A. Efficiency depends on sample size, and results may be biased if the sample is biased
- B. It cannot operate on numerical data
- C. It only creates a single cluster containing all observations
- D. It requires the user to solve a Sudoku puzzle beforehand

**Correct Answer: A. Efficiency depends on sample size, and results may be biased if the sample is biased**

**Explanation:** CLARA's efficiency depends on sample size, and a good clustering based on samples will not necessarily represent the whole dataset if the sample is biased (Slide 19).

---

### Question 86
**[Topic 3: Clustering]**

Which randomized sampling clustering algorithm was introduced by Ng and Han in 1994?

- A. CLARANS
- B. CLARA
- C. PAM
- D. DIANA

**Correct Answer: A. CLARANS**

**Explanation:** CLARANS (Clustering Large Applications based upon RANdomized Search) was introduced by Ng and Han in 1994 (Slide 14).

---

### Question 87
**[Topic 3: Clustering]**

How does Agglomerative hierarchical clustering operate?

- A. Bottom-up: initially each item is in its own cluster, iteratively merged together
- B. Top-down: initially all items are in one cluster, successively divided
- C. Randomly partitioning objects into k disjoint sets and calculating ANOVA
- D. Selecting medoids based on minimum spanning trees and rotating rows

**Correct Answer: A. Bottom-up: initially each item is in its own cluster, iteratively merged together**

**Explanation:** Agglomerative hierarchical clustering is bottom-up: initially each item is in its own cluster, and clusters are iteratively merged (Slide 25).

---

### Question 88
**[Topic 3: Clustering]**

How does Divisive hierarchical clustering operate?

- A. Top-down: initially all items are in one cluster, and large clusters are successively divided
- B. Bottom-up: initially each item is in its own cluster, iteratively merged together
- C. Partitioning around medoids based on sampling subsets
- D. Projecting observations onto an N-by-N Latin square

**Correct Answer: A. Top-down: initially all items are in one cluster, and large clusters are successively divided**

**Explanation:** Divisive hierarchical clustering is top-down: initially all items are in one cluster, and large clusters are successively divided (Slide 25).

---

### Question 89
**[Topic 3: Clustering]**

In hierarchical clustering, what do the acronyms AGNES and DIANA stand for?

- A. AGNES = Agglomerative Nesting; DIANA = Divisive Analysis
- B. AGNES = Aggregated Nodes; DIANA = Direct Indexing Analysis
- C. AGNES = Algorithm of Grouping; DIANA = Distance Allocation Network
- D. AGNES = Average Grouping; DIANA = Dual Iterative Assignment

**Correct Answer: A. AGNES = Agglomerative Nesting; DIANA = Divisive Analysis**

**Explanation:** AGNES stands for Agglomerative Nesting, and DIANA stands for Divisive Analysis, both introduced by Kaufmann and Rousseeuw (1990) (Slide 24, 35, 36).

---

### Question 90
**[Topic 3: Clustering]**

In hierarchical linkage methods, how is 'Single Link' distance defined between two clusters?

- A. Smallest distance between any pair of points from the two clusters
- B. Largest distance between any pair of points from the two clusters
- C. Average distance between all pairs of points across the two clusters
- D. Distance between the centroids of the two clusters

**Correct Answer: A. Smallest distance between any pair of points from the two clusters**

**Explanation:** Single Link defines distance as the smallest distance between points, Complete Link is largest distance, Average Link is average distance, and Centroid is distance between centroids (Slide 23 & 32).

---

### Question 91
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What is the etymological origin and literal meaning of the word 'Data'?

- A. Latin in origin, literally meaning 'anything that is given'
- B. Greek in origin, literally meaning 'to compute or calculate'
- C. French in origin, literally meaning 'documented facts'
- D. German in origin, literally meaning 'numerical measurements'

**Correct Answer: A. Latin in origin, literally meaning 'anything that is given'**

**Explanation:** Slide 2 states: 'Data - is Latin in origin and literally, it means anything that is given.'

---

### Question 92
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

How did Webster's New Collegiate Dictionary (1973) define data?

- A. Factual information used as a basis for reasoning, discussion or calculation
- B. Information especially organized for analysis
- C. Numerical or qualitative values derived from scientific experiments
- D. Information output by a sensing device or organ

**Correct Answer: A. Factual information used as a basis for reasoning, discussion or calculation**

**Explanation:** Webster's New Collegiate Dictionary (1973) defined data as 'factual information (as measurements or statistics) used as a basis for reasoning, discussion or calculation' (Slide 2).

---

### Question 93
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

How does Webster's II New Riverside Dictionary specifically define data?

- A. Data as information, especially information organised for analysis
- B. Numerical values derived from scientific experiments
- C. Anything that is given in Latin literature
- D. Information that can be digitally transmitted across networks

**Correct Answer: A. Data as information, especially information organised for analysis**

**Explanation:** Webster's II New Riverside Dictionary defines data as 'information, especially information organised for analysis' (Slide 2).

---

### Question 94
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

According to the McGraw-Hill Encyclopedia of Science and Technology, what is known as data?

- A. Numerical or qualitative values derived from scientific experiments
- B. Any string stored in a relational database table
- C. Unstructured audio and video files recorded by smartphones
- D. Pre-existing government census publications

**Correct Answer: A. Numerical or qualitative values derived from scientific experiments**

**Explanation:** McGraw-Hill Encyclopedia of Science and Technology says: 'numerical or qualitative values derived from scientific experiments, known as data' (Slide 2).

---

### Question 95
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

In Merriam-Webster Online Dictionary definition 2, what generates output that includes both useful and redundant information that must be processed?

- A. A sensing device or organ
- B. A corporate accounting department
- C. A randomized block design
- D. A relational SQL database

**Correct Answer: A. A sensing device or organ**

**Explanation:** Definition 2 states: 'Information output by a sensing device or organ that included both useful and irrelevant or redundant information and must be processed to be meaningful' (Slide 3).

---

### Question 96
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What is 'Data Collection' defined as in Prelim Lecture 4?

- A. The process of acquiring, collecting, extracting and storing voluminous amounts of structured or unstructured data
- B. The mathematical normalization of attribute vectors between -2.0 and 2.0
- C. The physical destruction of outdated historical archives and company memos
- D. The automated querying of relational tables using SQL joins

**Correct Answer: A. The process of acquiring, collecting, extracting and storing voluminous amounts of structured or unstructured data**

**Explanation:** Data Collection is the process of acquiring, collecting, extracting and storing the voluminous amount of data which may be in structured or unstructured form (Slide 4).

---

### Question 97
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What are 'Primary Sources' of data?

- A. Data collected for the first time by an individual, group, institution, or organization
- B. Data that has already been collected and reused again for some valid purpose
- C. Government publications and census reports available in public libraries
- D. Pre-existing financial transaction tables stored in relational databases

**Correct Answer: A. Data collected for the first time by an individual, group, institution, or organization**

**Explanation:** Primary Sources: The data which are collected for the first time by an individual or the group of individuals, institutions or organisations (Slide 5).

---

### Question 98
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which of the following is classified as a Primary Source of data collection?

- A. Surveys & Questionnaires
- B. Government census bulletins
- C. Company historical sales archives
- D. Online statistical databases

**Correct Answer: A. Surveys & Questionnaires**

**Explanation:** Primary sources include Surveys & Questionnaires, Interviews, Observations, Focus Groups, Direct Records, and Experimental Methods (Slide 8).

---

### Question 99
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What are 'Secondary Sources' of data?

- A. Data that has already been collected and reused again for some valid purpose
- B. Data collected firsthand directly from a laboratory experiment
- C. Interviews conducted face-to-face with research participants
- D. Direct personal observations recorded in field notes

**Correct Answer: A. Data that has already been collected and reused again for some valid purpose**

**Explanation:** Secondary Sources: data which has already been collected and reused again for some valid purpose, previously recorded from primary data (Slide 5).

---

### Question 100
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What are the two general types of sources for secondary data?

- A. Internal and external
- B. Structured and unstructured
- C. Agglomerative and divisive
- D. Numerical and descriptive

**Correct Answer: A. Internal and external**

**Explanation:** Secondary data has two types of sources: internal (e.g. organization company records) and external (e.g. government agencies) (Slide 5 and 6).

---

### Question 101
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which simple experimental design is based on randomisation and replication, mostly used for comparing experiments?

- A. Completely Randomised Design (CRD)
- B. Randomised Block Design (RBD)
- C. Latin Square Design (LSD)
- D. Factorial Design (FD)

**Correct Answer: A. Completely Randomised Design (CRD)**

**Explanation:** Completely Randomised Design (CRD) is a simple experimental design based on randomisation and replication, mostly used for comparing experiments (Slide 9).

---

### Question 102
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which experimental design divides the experiment into small units called blocks and analyzes results using ANOVA?

- A. Randomised Block Design (RBD)
- B. Completely Randomised Design (CRD)
- C. Latin Square Design (LSD)
- D. Factorial Design (FD)

**Correct Answer: A. Randomised Block Design (RBD)**

**Explanation:** Randomised Block Design (RBD) divides the experiment into small units called blocks, performing random experiments on each block and drawing results via ANOVA (Slide 9).

---

### Question 103
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

From which industry/sector did the Randomised Block Design (RBD) originate?

- A. Agriculture sector
- B. Telecommunications sector
- C. Automotive manufacturing
- D. Aerospace engineering

**Correct Answer: A. Agriculture sector**

**Explanation:** Slide 9 explicitly states: 'RBD was originated from the agriculture sector.'

---

### Question 104
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which experimental design consists of an N-by-N square arrangement of rows and columns where letters occur only once in each row?

- A. Latin Square Design (LSD)
- B. Randomised Block Design (RBD)
- C. Completely Randomised Design (CRD)
- D. Factorial Design (FD)

**Correct Answer: A. Latin Square Design (LSD)**

**Explanation:** Latin Square Design (LSD) is an arrangement of NxN squares with equal rows and columns containing letters that occur only once in a row (Slide 10).

---

### Question 105
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What famous puzzle game is cited in the slides as an example of a Latin Square Design?

- A. Sudoku puzzle
- B. Crossword puzzle
- C. Rubik's Cube
- D. Chess board

**Correct Answer: A. Sudoku puzzle**

**Explanation:** Slide 10 explicitly states: 'Sudoku puzzle is an example of a Latin square design.'

---

### Question 106
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which experimental design features experiments having two factors each with possible values, from which combinational factors are derived upon testing?

- A. Factorial Design (FD)
- B. Completely Randomised Design (CRD)
- C. Randomised Block Design (RBD)
- D. Latin Square Design (LSD)

**Correct Answer: A. Factorial Design (FD)**

**Explanation:** Factorial Design (FD) is an experimental design where each experiment has two factors each with possible values and on performing trials other combinational factors are derived (Slide 10).

---

### Question 107
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

In the Nature of Data, what is true regarding Numerical Data in sciences?

- A. All data in sciences are derived by measurement and stated in numerical values (even semi-quantitative coded as 1 or 0)
- B. Numerical data can only be represented as continuous fractions, never integers
- C. Numerical data cannot be stored in relational SQL databases
- D. Science never uses numerical data, relying exclusively on definitive prose

**Correct Answer: A. All data in sciences are derived by measurement and stated in numerical values (even semi-quantitative coded as 1 or 0)**

**Explanation:** All data in sciences are derived by measurement and stated in numerical values. Even in semi-quantitative data, affirmative and negative answers are coded as 1 or 0 (Slide 12).

---

### Question 108
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

In the Nature of Data, how is qualitative data in sciences expressed as Descriptive Data?

- A. In terms of definitive statements concerning objects
- B. As unstructured video recordings of laboratory benches
- C. As continuous probability distributions on normal curves
- D. As lower triangular dissimilarity matrices

**Correct Answer: A. In terms of definitive statements concerning objects**

**Explanation:** Qualitative data in sciences are expressed in terms of definitive statements concerning objects, viewed as descriptive data (Slide 12).

---

### Question 109
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What is Graphic and Symbolic Data defined as in the Nature of Data?

- A. Modes of presentation that enable users to grasp data by visual perception
- B. Binary machine code compiled into hexadecimal digits
- C. Numerical measurements taken from GPS satellite receivers
- D. Unpublished government legal decrees and reports

**Correct Answer: A. Modes of presentation that enable users to grasp data by visual perception**

**Explanation:** Graphic and Symbolic data are modes of presentation that enable users to grasp data by visual perception (Slide 13).

---

### Question 110
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Most data in social sciences that are refined with statistical techniques and scales of measurement are called:

- A. Enumerative Data (Statistical Data)
- B. Semi-structured XML Data
- C. Non-metric Binary Data
- D. Graphic Symbolic Data

**Correct Answer: A. Enumerative Data (Statistical Data)**

**Explanation:** Most data in social sciences are enumerative in nature, refined with statistical techniques to become statistical data using scales of measurement (Slide 13).

---

### Question 111
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What is the primary definition of 'Data Classification'?

- A. The process of organizing data into categories that make it easy to retrieve, sort, and store for future use
- B. Assigning passwords to encrypted database backups
- C. Normalizing numerical columns into the range 0 to 1
- D. The physical grouping of network servers into server racks

**Correct Answer: A. The process of organizing data into categories that make it easy to retrieve, sort, and store for future use**

**Explanation:** Data Classification is the process of organizing data into categories that make it easy to retrieve, sort and store for future use (Slide 15).

---

### Question 112
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What are the three core purposes of Data Classification listed in the slides?

- A. Confidentiality, Data Integrity, and Data Availability
- B. Scalability, Portability, and Elasticity
- C. Homogeneity, Clarity, and Stability
- D. Accuracy, Timeliness, and Relevance

**Correct Answer: A. Confidentiality, Data Integrity, and Data Availability**

**Explanation:** Slide 16 lists the Purpose of Data Classification as: 1. Confidentiality, 2. Data Integrity, 3. Data Availability (the classic CIA security triad).

---

### Question 113
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which feature of data classification requires that all items placed in a group should be similar to each other?

- A. Homogeneity
- B. Clarity
- C. Stability
- D. Elastic

**Correct Answer: A. Homogeneity**

**Explanation:** Homogeneity means that items in a group should be similar to each other (Slide 17).

---

### Question 114
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which feature of data classification ensures there is no confusion in the positioning of a data item?

- A. Clarity
- B. Homogeneity
- C. Stability
- D. Elastic

**Correct Answer: A. Clarity**

**Explanation:** Clarity means there is no confusion in the positioning of a data item (Slide 17).

---

### Question 115
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which feature of data classification specifies that the classification scheme must remain stable and not disrupt existing groups?

- A. Stability
- B. Clarity
- C. Homogeneity
- D. Elastic

**Correct Answer: A. Stability**

**Explanation:** Stability specifies that the system must be stable and should not affect the same set of classifications (Slide 17).

---

### Question 116
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which feature of data classification denotes being 'able to change the basis of classification'?

- A. Elastic
- B. Stability
- C. Clarity
- D. Homogeneity

**Correct Answer: A. Elastic**

**Explanation:** Elastic is defined as being able to change the basis of classification (Slide 17).

---

### Question 117
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What type of data is created using a fixed schema, maintained in tabular format (rows and columns), with addressable elements fitting SQL databases?

- A. Structured Data
- B. Unstructured Data
- C. Semi-structured Data
- D. Graphic Data

**Correct Answer: A. Structured Data**

**Explanation:** Structured Data is created using a fixed schema, maintained in tabular format (rows and columns), addressable, and stored in SQL databases (Slide 19 and 20).

---

### Question 118
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which of the following is explicitly listed in the slides as a source of Structured Data?

- A. Spreadsheets and OLTP systems
- B. Word documents and memos
- C. Streaming video broadcasts
- D. Scanned handwritten field letters

**Correct Answer: A. Spreadsheets and OLTP systems**

**Explanation:** Sources of Structured Data include SQL databases, Spreadsheets, OLTP systems, Online forms, Sensors (GPS/RFID), Server logs, and Medical devices (Slide 21).

---

### Question 119
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

What type of data does NOT follow a pre-defined standard or organized format and is not fit for relational databases?

- A. Unstructured Data
- B. Structured Data
- C. Semi-structured Data
- D. OLTP Data

**Correct Answer: A. Unstructured Data**

**Explanation:** Unstructured Data is data that does not follow a pre-defined standard or organized format and is not fit for relational databases (Slide 23).

---

### Question 120
**[Topic 4: Prelim Lecture 4 - Nature and Sources of Data]**

Which application platform is specifically cited in the slides as helping extract information from emails and XML-based documents in unstructured data?

- A. XOLAP
- B. Delphix
- C. MANTIS
- D. Qlik

**Correct Answer: A. XOLAP**

**Explanation:** Slide 28 explicitly notes: 'Use of application platforms e.g. XOLAP. XOLAP helps in extracting information from emails and XML based documents.'

---

