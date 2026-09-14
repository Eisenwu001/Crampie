const CCS_QUIZ_DATA = [
  {
    "id": 1,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "According to Module 1, which of the following is the primary definition of an algorithm?",
    "options": [
      "An infinite loop of automated procedures executed by a CPU",
      "A compiled binary executable file stored in primary memory",
      "A graphical chart designed to display variable assignments",
      "A finite set of instructions that specify a sequence of operations"
    ],
    "correctAnswer": 3,
    "explanation": "Module 1 (Slide 3) defines an algorithm as a 'finite set of instructions that specify a sequence of operations'."
  },
  {
    "id": 2,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "In informal terms, how does Module 1 describe an algorithm?",
    "options": [
      "A recipe for solving a problem",
      "A hardware blueprint for circuit routing",
      "A collection of relational database schemas",
      "A mathematical theorem awaiting proof"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 3 states that an algorithm is 'a recipe for solving problem'."
  },
  {
    "id": 3,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "What essential condition must each individual step of an algorithm satisfy according to the slides?",
    "options": [
      "Each step must contain a nested loop",
      "Each step must be written in machine code",
      "Each step must be clear and precise",
      "Each step must execute in exactly one CPU cycle"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 3 explicitly highlights: 'Each step must be clear and precise'."
  },
  {
    "id": 4,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "How is an algorithm practically implemented on a computer system?",
    "options": [
      "By manually toggling transistor logic gates inside the arithmetic logic unit",
      "By translating step-by-step instructions into programs that can be run in a computer",
      "By converting all decimal data into hexadecimal string constants",
      "By compiling source code directly into natural human language"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 3 states: 'It is implemented by translating the step-by-step instructions into programs that can be run in a computer'."
  },
  {
    "id": 5,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "According to Slide 5, which four methods are used for representing algorithms?",
    "options": [
      "Natural Language, Pseudocode, Flowcharts, Programming Language",
      "Machine Code, Assembly, Bytecode, Binary",
      "Spreadsheets, Relational Tables, Data Dictionaries, Schemas",
      "Mind Maps, Wireframes, Storyboards, UML Use Cases"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 5 lists the four ways of representing algorithms: Natural Language, Pseudocode, Flowcharts, and Programming Language."
  },
  {
    "id": 6,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which algorithm representation uses ordinary spoken or written English sentences to convey procedure steps?",
    "options": [
      "Pseudocode",
      "Programming Language",
      "Flowchart",
      "Natural Language"
    ],
    "correctAnswer": 3,
    "explanation": "Natural language uses standard spoken/written language (e.g. English) to describe steps sequentially (Slides 5 & 8)."
  },
  {
    "id": 7,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which algorithm representation uses an informal, code-like syntax (such as INPUT, SET, OUTPUT) that is not tied to any compiler?",
    "options": [
      "Machine Language",
      "Natural Language",
      "Flowchart",
      "Pseudocode"
    ],
    "correctAnswer": 3,
    "explanation": "Pseudocode expresses algorithmic steps using structured programming constructs without strict programming language syntax (Slides 5 & 8)."
  },
  {
    "id": 8,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which algorithm representation uses standard graphical geometric shapes and directional arrows to depict logic flow?",
    "options": [
      "Assembly Code",
      "Pseudocode",
      "Natural Language",
      "Flowchart"
    ],
    "correctAnswer": 3,
    "explanation": "A flowchart is a visual representation of the sequence of operations in an algorithm using standard geometric symbols (Slides 5 & 8)."
  },
  {
    "id": 9,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "In Slide 8, which programming language is used to illustrate the code implementation of 'Get the sum of the two integers'?",
    "options": [
      "C++",
      "JavaScript",
      "Python",
      "Java"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 8 shows: `num1 = int(input(\"Enter the first number: \")) ... print(\"The sum is \", sum)` which is Python."
  },
  {
    "id": 10,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "How many core characteristics of an algorithm are specifically identified in Slide 6?",
    "options": [
      "3 characteristics",
      "4 characteristics",
      "8 characteristics",
      "6 characteristics"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 6 illustrates 6 distinct characteristics: Well defined Inputs, Finiteness, Clear and Unambiguous, Feasible, Language Independent, and Well-defined outputs."
  },
  {
    "id": 11,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which characteristic ensures that an algorithm will eventually terminate after executing a finite sequence of operations?",
    "options": [
      "Feasibility",
      "Language Independence",
      "Finiteness",
      "Well-defined Inputs"
    ],
    "correctAnswer": 2,
    "explanation": "Finiteness means an algorithm must terminate after a finite number of steps and never enter an infinite loop (Slide 6)."
  },
  {
    "id": 12,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which characteristic requires that each instruction in an algorithm must be completely clear and lead to only one exact interpretation?",
    "options": [
      "Well-defined Outputs",
      "Language Independent",
      "Finiteness",
      "Clear and Unambiguous"
    ],
    "correctAnswer": 3,
    "explanation": "Clear and Unambiguous means every step must be free of ambiguity and explicitly stated (Slide 6)."
  },
  {
    "id": 13,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which characteristic demands that an algorithm must be practicable and executable with available real-world computational resources?",
    "options": [
      "Finiteness",
      "Feasible",
      "Clear and Unambiguous",
      "Language Independent"
    ],
    "correctAnswer": 1,
    "explanation": "Feasibility requires that the algorithm can realistically be executed given available space, time, and hardware capabilities (Slide 6)."
  },
  {
    "id": 14,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which characteristic states that an algorithm's design must not depend on or be limited to any single specific programming syntax?",
    "options": [
      "Well-defined Inputs",
      "Feasible",
      "Language Independent",
      "Finiteness"
    ],
    "correctAnswer": 2,
    "explanation": "Language Independent means an algorithm provides general logic that can be implemented in any computer language (Slide 6)."
  },
  {
    "id": 15,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which two characteristics from Slide 6 describe the boundaries of data entering and leaving the algorithm?",
    "options": [
      "Well defined Inputs and Well-defined outputs",
      "Input vectors and Output matrices",
      "Pre-condition and Post-condition variables",
      "Dynamic allocation and Static deallocation"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 6 explicitly names both 'Well defined Inputs' and 'Well-defined outputs' as fundamental algorithm characteristics."
  },
  {
    "id": 16,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "According to Slide 7, which five items must be considered before writing an algorithm?",
    "options": [
      "Compiler speed, Device memory, Screen resolution, Keyboard layout, Network ping",
      "Operating system, GPU model, Cloud bandwidth, Storage bus, RAM timing",
      "Problem given, Constraints, Inputs to be processed, Expected output, Possible solution",
      "Variable names, Font size, Dark mode theme, Indentation tabs, File format"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 7 lists: Problem given, Constraints of the problem, Inputs to be process, Expected output, and Possible solution."
  },
  {
    "id": 17,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "According to Slide 7, what is the prescribed testing sequence for an algorithm design?",
    "options": [
      "Simulation then actual program",
      "Peer code review then immediate deployment",
      "Actual program then automated unit test",
      "Benchmarking then compiler optimization"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 7 specifies: 'Test the algorithm (simulation then actual program)'."
  },
  {
    "id": 18,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "In Example 2 of Module 1 (Slide 9), what is the goal of the algorithm?",
    "options": [
      "Find the largest value among n integers",
      "Sort an array of n integers in ascending order",
      "Search for an integer using binary division",
      "Compute the factorial of an integer N"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 9 presents 'Example 2: Find the largest value among n integers'."
  },
  {
    "id": 19,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "In Example 2 (Slide 9), what initial value is the loop counter variable COUNT set to?",
    "options": [
      "Set COUNT to N",
      "Set COUNT to 2",
      "Set COUNT to 0",
      "Set COUNT to 1"
    ],
    "correctAnswer": 1,
    "explanation": "Step 4 of Slide 9 states: 'Set up a counter representing the number of integers that has read, call it COUNT. Set COUNT to 2' (since integer 1 is already in LARGE)."
  },
  {
    "id": 20,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "In Example 2 (Slide 9), under what condition is LARGE replaced by NUM?",
    "options": [
      "If NUM is less than or equal to LARGE",
      "If LARGE equals zero",
      "If COUNT equals N",
      "If NUM is greater than LARGE"
    ],
    "correctAnswer": 3,
    "explanation": "Step 5 of Slide 9 specifies: 'Compare NUM with LARGE, if NUM is greater than LARGE set LARGE to NUM'."
  },
  {
    "id": 21,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "In Example 2 (Slide 9), what termination condition exits the loop and displays LARGE?",
    "options": [
      "If LARGE is a negative integer",
      "If COUNT equals to N",
      "If COUNT is greater than 2*N",
      "If NUM equals to zero"
    ],
    "correctAnswer": 1,
    "explanation": "Step 6 of Slide 9 states: 'If COUNT equals to N, display the value of LARGE and exit. Otherwise, increment COUNT by 1 and input next integer to be compared'."
  },
  {
    "id": 22,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "How many algorithm design techniques are formally introduced in Slide 11?",
    "options": [
      "3 techniques",
      "7 techniques",
      "5 techniques",
      "4 techniques"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 11 lists 5 techniques: Brute-force, Divide and conquer, Branch and bound, Randomized, and Backtracking."
  },
  {
    "id": 23,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "How does Slide 12 define a Brute-Force Algorithm?",
    "options": [
      "A straightforward approach to solving a problem",
      "An algorithm that relies entirely on pseudo-random numbers",
      "A tree-pruning heuristic for optimization",
      "An algorithm that repeatedly divides data in halves"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 12 defines Brute-Force as: 'A straightforward approach'."
  },
  {
    "id": 24,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which two classic algorithms are cited in Slide 12 as examples of the Brute-Force technique?",
    "options": [
      "Merge sort and Binary search",
      "Quicksort and Heap sort",
      "Selection sort and Sequential search",
      "Dijkstra's algorithm and Kruskal's algorithm"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 12 gives two examples for Brute-force: Selection sort and Sequential search."
  },
  {
    "id": 25,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "How many distinct operational steps are involved in the Divide and Conquer strategy according to Slide 13?",
    "options": [
      "3 steps",
      "5 steps",
      "4 steps",
      "2 steps"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 13 states that Divide and Conquer 'Has 3 steps': 1. Divide into sub-problems, 2. Solve each sub-problem, 3. Combine solutions."
  },
  {
    "id": 26,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which sequence correctly represents the three steps of Divide and Conquer in Slide 13?",
    "options": [
      "1. Branch search tree; 2. Bound objective cost; 3. Backtrack to root",
      "1. Divide problem into smaller sub-problems; 2. Solve each sub-problem; 3. Combine all solutions",
      "1. Translate natural language; 2. Write flowchart; 3. Compile executable code",
      "1. Guess a random pivot; 2. Sort remaining elements; 3. Verify correctness"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 13 explicitly orders the steps: 1. Divide the problem into smaller sub-problems, 2. Solve each sub-problem, 3. Combine all the solutions made for sub-problems."
  },
  {
    "id": 27,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "Which two algorithms are cited in Slide 13 as prime examples of Divide and Conquer?",
    "options": [
      "Insertion sort and Depth-first search",
      "Merge sort and Binary search",
      "Bubble sort and Linear search",
      "Selection sort and Sequential search"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 13 gives two examples for Divide and conquer: Merge sort and Binary search."
  },
  {
    "id": 28,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "According to Slide 14, what specific category of problems is the Branch and Bound algorithm used to solve?",
    "options": [
      "Relational database query normalization",
      "Unsupervised text clustering problems",
      "Optimization problems (combinatorial optimization)",
      "Hardware clock synchronization problems"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 14 defines Branch and bound algorithm as: 'Used for solving optimization problems' (specifically combinatorial optimization)."
  },
  {
    "id": 29,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "According to Slide 15, what determines the expected running time of a Randomized Algorithm?",
    "options": [
      "The number of lines of source code",
      "The number of random choices made",
      "The physical speed of the CPU clock",
      "The screen resolution of the terminal"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 15 states: 'The expected running time depends on the number of random choices'."
  },
  {
    "id": 30,
    "topicId": 1,
    "topicTitle": "Topic 1: Algorithm Basics",
    "question": "According to Slide 16, how is a Backtracking Algorithm characterized?",
    "options": [
      "A divide-and-conquer tree that never reverses an assignment",
      "A systematic way to search for a solution by extending a partial solution",
      "A greedy heuristic that picks the immediate local optimum",
      "A brute-force loop that evaluates all permutations simultaneously"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 16 defines Backtracking algorithms as: '- Systematic way to search for a solution' and '- Extend a partial solution'."
  },
  {
    "id": 31,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Module 2 (Slide 3), what is the primary purpose of algorithm analysis?",
    "options": [
      "To check the effectiveness and evaluate the performance of the algorithm",
      "To test whether a program can run without an operating system",
      "To verify whether variable names adhere to camelCase conventions",
      "To format source code with standard indentation"
    ],
    "correctAnswer": 0,
    "explanation": "Module 2 (Slide 3) states: 'To check the effectiveness of the algorithm' and 'Used to evaluate the performance of the algorithm'."
  },
  {
    "id": 32,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 3, which two critical areas are evaluated when measuring algorithm performance?",
    "options": [
      "Code length and comment density",
      "Cost of computer hardware and electricity",
      "Compiler version and IDE plugins",
      "Space and time efficiency"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 3 states: 'Space and time efficiency are two important areas in evaluating the performance of the algorithm'."
  },
  {
    "id": 33,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "Which of the following is NOT one of the reasons to analyze algorithm efficiency listed in Slide 4?",
    "options": [
      "Will provide assistance to select which solution is better",
      "Provide performance guarantees",
      "Performance can be predicted before actual programming",
      "To automatically eliminate all syntax errors during compilation"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 4 lists four reasons: select better solution, provide performance guarantees, predict performance before programming, and determine which part executes quickly vs slowly."
  },
  {
    "id": 34,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 5, what is the definition of Space Efficiency?",
    "options": [
      "The number of blank lines between function declarations",
      "The total disk sectors needed to store source code text",
      "The memory required by the algorithm",
      "The physical surface area occupied by computer components"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 5 explicitly states: 'Space Efficiency: The memory required by the algorithm'."
  },
  {
    "id": 35,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 5, what are the three components of space required by an algorithm?",
    "options": [
      "Static space, Dynamic space, Heap space",
      "Instruction space, Data space, Run-time stack space",
      "Input buffer, Output buffer, Log buffer",
      "Primary memory, Secondary memory, Cache memory"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 5 identifies the three space components: Instruction space, Data space, and Run-time stack space."
  },
  {
    "id": 36,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "Which space component represents the memory required to store the compiled machine instructions of the program?",
    "options": [
      "Run-time stack space",
      "Data space",
      "Heap allocation space",
      "Instruction space"
    ],
    "correctAnswer": 3,
    "explanation": "Instruction space holds the compiled program instructions in memory (Slide 5)."
  },
  {
    "id": 37,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "Which space component represents the memory required to store program constants, variables, and data structures?",
    "options": [
      "Data space",
      "Run-time stack space",
      "Instruction space",
      "Cache registry space"
    ],
    "correctAnswer": 0,
    "explanation": "Data space accommodates constants, simple variables, arrays, and referenced dynamic data (Slide 5)."
  },
  {
    "id": 38,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "Which space component represents the memory used for activation records, function call frames, and recursion tracking?",
    "options": [
      "Static ROM space",
      "Instruction space",
      "Run-time stack space",
      "Data space"
    ],
    "correctAnswer": 2,
    "explanation": "Run-time stack space handles call frames, return addresses, and local variables for active subroutines (Slide 5)."
  },
  {
    "id": 39,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 6, how is Time Efficiency defined and evaluated?",
    "options": [
      "The total clock cycles per day multiplied by CPU wattage",
      "The duration spent by the developer typing out the algorithm",
      "The interval between software patch release dates",
      "The time required by the algorithm; the shorter the time to finish execution, the better"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 6 defines Time Efficiency as: 'The time required by the algorithm. The shorter the time to finish the execution the better'."
  },
  {
    "id": 40,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 6, which four physical and system factors directly influence an algorithm's running time?",
    "options": [
      "Power supply wattage, fan RPM, chassis size, thermal paste",
      "Internet download speed, browser cookies, disk cache, firewall rules",
      "Speed of device used, compiler, amount of data, actual data",
      "Operating system theme, monitor refresh rate, mouse DPI, keyboard layout"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 6 highlights that running time depends on: speed of the device used, compiler, amount of data, and actual data."
  },
  {
    "id": 41,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 7, which two main aspects must be considered when analyzing for time complexity?",
    "options": [
      "Counting total characters in code and Line breaks",
      "Benchmarking on supercomputers and Manual stopwatch timing",
      "Static code linting and Automated unit testing",
      "Order of asymptotic categorization and Estimation of running time"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 7 lists: '1. Order of asymptotic categorization; 2. Estimation of running time'."
  },
  {
    "id": 42,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 7, what are the two methods for estimating running time?",
    "options": [
      "By user surveys and Subjective rating scales",
      "By analysis of code and By execution of code",
      "By calculating hardware wattage and Thermal emission",
      "By compiling to binary and By decompiling to C"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 7 lists estimation of running time: 'By analysis of code' and 'By execution of code'."
  },
  {
    "id": 43,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "In Slide 8 ('Which is more efficient?'), two code snippets find the largest of four variables (a, b, c, d). What contrast is demonstrated?",
    "options": [
      "Iterative while-loops vs. recursive functions",
      "Sequential independent if-statements vs. nested decision trees",
      "Dynamic programming tables vs. memoized arrays",
      "Multi-threaded concurrency vs. single-threaded execution"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 8 shows sequential tests (`if b > largest then largest = b...`) compared with a deep nested if-else tree."
  },
  {
    "id": 44,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 9, how does input influence an algorithm during execution?",
    "options": [
      "Input dictates the screen brightness and display scaling",
      "Input determines the path of execution",
      "Input modifies the hardcoded compiled machine instructions",
      "Input changes the CPU instruction set architecture"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 9 explicitly states: 'Input determines the path of execution'."
  },
  {
    "id": 45,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "In the code on Slide 9 (`for i = 1 to N - 1`), how does changing N from 10 to 100 affect time efficiency?",
    "options": [
      "The space complexity increases by a factor of 1000",
      "The loop iterates approximately 10 times more, executing 10 times more comparisons",
      "The loop terminates in constant O(1) time regardless of N",
      "The algorithm switches automatically from linear to binary search"
    ],
    "correctAnswer": 1,
    "explanation": "Since the loop iterates from 1 to N-1, increasing N from 10 to 100 increases the loop comparison operations tenfold (Slide 9)."
  },
  {
    "id": 46,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 10, when is analysis of space complexity especially critical?",
    "options": [
      "When displaying graphics on high-resolution displays",
      "When compiling code with maximum debug symbols",
      "When running a program over high-speed fiber internet",
      "When the device has limited memory space"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 10 states: 'Analysis of the space complexity is very important specially when the device has limited space'."
  },
  {
    "id": 47,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 11, what are the two steps involved in determining what to count during code analysis?",
    "options": [
      "1. Count variable declarations; 2. Measure compile time",
      "1. Count total lines of code; 2. Divide by number of functions",
      "1. Selecting the operation(s); 2. Determine which operations are integral and which are overhead",
      "1. Measure CPU wattage; 2. Count memory clock cycles"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 11 states: '1. Selecting the operation(s); 2. Determine which of those given operations are integral to the algorithm and which are overhead'."
  },
  {
    "id": 48,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "What operations are primarily counted in code analysis according to Slide 11?",
    "options": [
      "String formatting and print calls",
      "Memory allocation and pointer casting",
      "Comparison or arithmetic operators",
      "Bitwise shifting and bitmasking"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 11 states: 'Involves comparison or arithmetic operators'."
  },
  {
    "id": 49,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 12, what algorithmic problems primarily deal with Comparison Operators?",
    "options": [
      "Matrix multiplication and exponentiation",
      "Random number generation and hashing",
      "Data compression and Huffman coding",
      "Searching and sorting"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 12 states: 'Comparison Operators: Deals with searching and sorting'."
  },
  {
    "id": 50,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 12, which two sub-categories make up Arithmetic Operators?",
    "options": [
      "Bitwise operators and logical operators",
      "Additive operators and multiplicative operators",
      "Relational operators and equality operators",
      "Unary operators and ternary operators"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 12 divides arithmetic operators into 'additive operators' and 'multiplicative operators'."
  },
  {
    "id": 51,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "Which four mathematical operations are classified under Additive Operators in Slide 12?",
    "options": [
      "Multiplication, division, modulus, and exponentiation",
      "Addition, subtraction, increment, and decrement",
      "Logical AND, OR, NOT, and XOR",
      "Left shift, right shift, rotate, and mask"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 12 defines additive operators as: 'Addition, subtraction, increment and decrement'."
  },
  {
    "id": 52,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "Which three mathematical operations are classified under Multiplicative Operators in Slide 12?",
    "options": [
      "Addition, subtraction, and increment",
      "Bitwise AND, bitwise OR, and bitwise NOT",
      "Multiplication, division, and modulus",
      "Square root, logarithm, and exponentiation"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 12 defines multiplicative operators as: 'Multiplication, division, and modulus'."
  },
  {
    "id": 53,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 13, which three cases must be considered when analyzing algorithms?",
    "options": [
      "Best Case, Worst Case, Average Case",
      "Initial Case, Transition Case, Final Case",
      "Constant Case, Linear Case, Quadratic Case",
      "Lower Bound, Upper Bound, Tight Bound"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 13 lists the three cases to consider: Best Case, Worst Case, and Average Case."
  },
  {
    "id": 54,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "How does Slide 14 define the Best Case scenario of an algorithm?",
    "options": [
      "The execution scenario that uses 100% CPU capacity",
      "The algorithm design requiring zero bytes of data memory",
      "The case where no input is supplied to the function",
      "The input that requires the shortest time to finish"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 14 defines Best Case as: 'The input that requires take the shortest time'."
  },
  {
    "id": 55,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "What concrete example of Best Case is given in Slide 14?",
    "options": [
      "Searching for a number in an array when the item is in the first index",
      "Dividing an array into two halves of identical length",
      "Sorting an array that is already reversed",
      "Searching for an element that does not exist in the array"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 14 gives the example: 'For instance in searching for a number in an array, if the item that your looking for is in the first index of the array'."
  },
  {
    "id": 56,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "How does Slide 15 define the Worst Case scenario of an algorithm?",
    "options": [
      "The scenario where memory allocation fails completely",
      "The state where the input contains only negative numbers",
      "The case where the program encounters a fatal divide-by-zero error",
      "Used most time for the algorithm to finish"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 15 defines Worst Case as: 'Used most time for the algorithm to finish'."
  },
  {
    "id": 57,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "What concrete example of Worst Case is given in Slide 15 for linear array searching?",
    "options": [
      "The value to be searched is not part of the array or is at the last index",
      "The value to be searched is located at index 0",
      "The array is already sorted in ascending order",
      "The array contains duplicate values"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 15 gives the example: 'For instance the value to be search is not part of array or at the last index'."
  },
  {
    "id": 58,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "According to Slide 16, which three steps are involved in determining the Average Case behavior?",
    "options": [
      "Sort the inputs in random order, measure memory usage, calculate standard deviation",
      "Calculate best case, calculate worst case, divide their sum by two",
      "Execute the code 100 times, drop highest and lowest, average the rest",
      "Divide inputs into groups, determine probability of each group, determine runtime for each group"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 16 lists: 1. Identify how many groups input set is divided into; 2. Determine probability of input coming from each group; 3. Determine time algorithm takes for each group."
  },
  {
    "id": 59,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "What is the formal mathematical formula for Average Case running time A(n) given in Slide 16?",
    "options": [
      "A(n) = sum_{i=1}^m (p_i * t_i)",
      "A(n) = n * log2(n) / m",
      "A(n) = (Best(n) + Worst(n)) / 2",
      "A(n) = sum_{i=1}^n (t_i / p_i)"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 16 provides the formula: A(n) = sum_{i=1}^m (p_i * t_i), where p_i is the probability and t_i is the runtime for group i."
  },
  {
    "id": 60,
    "topicId": 2,
    "topicTitle": "Topic 2: Algorithm Analysis",
    "question": "In the Average Case formula A(n) = sum_{i=1}^m (p_i * t_i), what does 'p_i' represent?",
    "options": [
      "Peak memory allocated during phase i",
      "Processor cycle count for group i",
      "Total number of elements in group i",
      "Probability that the input will be from group i"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 16 defines: 'p_i = probability that the input will be from group i'."
  },
  {
    "id": 61,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to Module 3 (Slide 3), which five mathematical concepts are covered in this module?",
    "options": [
      "Linear Algebra, Vector Calculus, Differential Equations, Topology, Graph Theory",
      "Trigonometry, Geometry, Coordinate Systems, Conic Sections, Polygons",
      "Logarithms, Probabilities, Summations, Recurrence relations, Mathematical induction",
      "Derivatives, Integrals, Taylor Series, Fourier Transforms, Eigenvalues"
    ],
    "correctAnswer": 2,
    "explanation": "Module 3 (Slide 3) lists: Logarithms, Probabilities, Summations, Recurrence relations, and Mathematical induction."
  },
  {
    "id": 62,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "How does Slide 4 fundamentally define a logarithm?",
    "options": [
      "The inverse of exponential functions",
      "The derivative of a linear equation",
      "The integral of a polynomial function",
      "The ratio of circumference to diameter"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 4 explicitly states: 'Logarithms: Is the inverse of exponential functions'."
  },
  {
    "id": 63,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "What is the most common logarithm base used in computer science and algorithm complexity?",
    "options": [
      "Base e (natural log)",
      "Base 2",
      "Base 16 (hexadecimal)",
      "Base 10"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 4 states: 'Most common = base 2'."
  },
  {
    "id": 64,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to the definition on Slide 4, if b^c = a, what is log_b(a)?",
    "options": [
      "log_b(a) = b * c",
      "log_b(a) = b",
      "log_b(a) = c",
      "log_b(a) = a^c"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 4 states: 'If b^c = a, then log_b a = c'."
  },
  {
    "id": 65,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "Based on Slide 4, what is log_2(8) and why?",
    "options": [
      "3, because 2^3 = 8",
      "2, because sqrt(8) approx 2",
      "4, because 8 / 2 = 4",
      "16, because 2 * 8 = 16"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 4 gives the example: 'log_2(8) = 3 because 2^3 = 8'."
  },
  {
    "id": 66,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "Based on Slide 4, what is log_3(27) and why?",
    "options": [
      "6, because 3 + 3 = 6",
      "3, because 3^3 = 27",
      "1, because 27 is divisible by 3",
      "9, because 27 / 3 = 9"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 4 gives the example: 'log_3(27) = 3 because 3^3 = 27'."
  },
  {
    "id": 67,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to the logarithmic laws in Slide 4, what is log_b(1) for any valid base b?",
    "options": [
      "b",
      "0",
      "1",
      "Undefined"
    ],
    "correctAnswer": 1,
    "explanation": "The log laws table on Slide 4 states: 'log_b(1) = 0' (since b^0 = 1)."
  },
  {
    "id": 68,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to the logarithmic laws in Slide 4, what is log_b(b)?",
    "options": [
      "b^2",
      "1",
      "Infinity",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "The log laws table on Slide 4 states: 'log_b(b) = 1' (since b^1 = b)."
  },
  {
    "id": 69,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "What is the product rule of logarithms given in Slide 4?",
    "options": [
      "log_b(cd) = log_b(c) + log_b(d)",
      "log_b(cd) = log_b(c) * log_b(d)",
      "log_b(cd) = d * log_b(c)",
      "log_b(cd) = log_b(c) - log_b(d)"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 4 lists the product rule: 'log_b(cd) = log_b(c) + log_b(d)'."
  },
  {
    "id": 70,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "What is the quotient rule of logarithms given in Slide 4?",
    "options": [
      "log_b(c / d) = log_b(c) - log_b(d)",
      "log_b(c / d) = log_b(c) / log_b(d)",
      "log_b(c / d) = d * log_b(c)",
      "log_b(c / d) = log_b(c) + log_b(d)"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 4 lists the quotient rule: 'log_b(c / d) = log_b(c) - log_b(d)'."
  },
  {
    "id": 71,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "What is the power rule of logarithms given in Slide 4?",
    "options": [
      "log_b(a^c) = c + log_b(a)",
      "log_b(a^c) = a * log_b(c)",
      "log_b(a^c) = c * log_b(a)",
      "log_b(a^c) = (log_b(a))^c"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 4 lists the power rule: 'log_b(a^c) = c * log_b(a)'."
  },
  {
    "id": 72,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "What is the change of base formula given in Slide 4?",
    "options": [
      "log_b(a) = log_c(b) / log_c(a)",
      "log_b(a) = log_c(a) * log_c(b)",
      "log_b(a) = (log_c(a)) / (log_c(b))",
      "log_b(a) = log_c(a) - log_c(b)"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 4 gives the change of base formula: 'log_b(a) = (log_c(a)) / (log_c(b))'."
  },
  {
    "id": 73,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "Which of the following is NOT one of the practical uses of logarithms listed in Slide 5?",
    "options": [
      "Encrypting RSA public key certificates",
      "Helps to fit plots onto graph paper and used in the Richter scale",
      "Help to solve equations that have exponents",
      "Reduce multiplication or division of large numbers to addition or subtraction"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 5 lists solving exponential equations, reducing large multiplication/division, fitting plots, Richter scale, measuring input size, and complexity of divide-by-two algorithms."
  },
  {
    "id": 74,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "In algorithm complexity theory, how are logarithms specifically used according to Slide 5?",
    "options": [
      "To allocate contiguous blocks of dynamic stack memory",
      "To calculate graphical pixel aspect ratios",
      "To measure input size and model algorithms that repeatedly divide input in two (involve log_2)",
      "To encrypt passwords stored in database tables"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 5 states: 'In complexity theory: use to measure input size; the complexity function for algorithms that repeatedly divide input into two (involve log_2)'."
  },
  {
    "id": 75,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "Slide 6 compares Algorithm A (t_A(n) = log n) and Algorithm B (t_B(n) = n). What does the graph demonstrate?",
    "options": [
      "As input size n grows to 100, t_A(n) stays very small (~7) while t_B(n) grows linearly to 100",
      "Algorithm B is significantly faster than Algorithm A for all large n",
      "Algorithm A experiences exponential growth while Algorithm B remains constant",
      "Both algorithms have identical time complexity curves"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 6 shows a plot where t_B(n)=n reaches 100, while t_A(n)=log n stays under 10, demonstrating the vast superiority of logarithmic time."
  },
  {
    "id": 76,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to Slide 7, why does probability arise in algorithm analysis?",
    "options": [
      "Computers generate hardware errors randomly during clock cycles",
      "Compilers choose instruction order by rolling random dice",
      "Randomized garbage collection pauses execution at unknown intervals",
      "There are different possible sets of inputs, and probability helps see if inputs meet conditions"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 7 states: 'There are different possible set of input and because of that probability may come into it. Use probability to see if the input will meet some condition in the algorithm'."
  },
  {
    "id": 77,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "In the probability discussion on Slide 7, what do probabilities of 0 and 1 represent?",
    "options": [
      "0 indicates negative numbers; 1 indicates positive numbers",
      "0 means best case; 1 means worst case",
      "0 means it will never occur; 1 means it will always occur",
      "0 represents false logic; 1 represents null memory"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 7 states: 'where 0 means it will bever [never] occur and 1 means it will always occur'."
  },
  {
    "id": 78,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to Slide 8, why are summations naturally used when analyzing algorithms?",
    "options": [
      "Summations are needed to calculate the total bytes of compiled machine code",
      "Summations determine the physical temperature of processor cores",
      "Algorithms contain loops where operations must be added across each iteration",
      "Summations calculate the number of characters in variable names"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 8 states: 'As we analyze the algorithms, we need to add the sets of values and we have an algorithm with a loop... total number of steps is the sum of the values from 1 to N'."
  },
  {
    "id": 79,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "What mathematical summation formula represents the total steps of a loop iterating from 1 to N in Slide 8?",
    "options": [
      "sum_{i=1}^N 2^i",
      "sum_{i=1}^N i",
      "prod_{i=1}^N i",
      "sum_{i=1}^N (1 / i)"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 8 displays the summation notation: sum_{i=1}^N i."
  },
  {
    "id": 80,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to Slide 9, what is the core benefit of a Recurrence Relation?",
    "options": [
      "Eliminates the need for loop structures in source code",
      "Provides an efficient way to calculate the quantity in question",
      "Converts non-linear equations directly into natural language",
      "Guarantees that an algorithm terminates in O(1) time"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 9 states: 'Recurrence provides an efficient way to calculate the quantity in question'."
  },
  {
    "id": 81,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "Which of the following is listed in Slide 9 as a typical First-Order Linear Recurrence?",
    "options": [
      "a_n = a_{n-1} + 2 * a_{n-2}",
      "a_n = a_{floor(n/2)} + a_{ceil(n/2)} + n",
      "a_n = 1 / (1 + a_{n-1})",
      "a_n = n * a_{n-1} - 1"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 9 lists for first-order linear: a_n = n a_{n-1} - 1."
  },
  {
    "id": 82,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "Which recurrence is listed in Slide 9 as a typical Divide-and-Conquer Recurrence?",
    "options": [
      "a_n = n * a_{n-1} - 1",
      "a_n = 1 / (1 + a_{n-1})",
      "a_n = a_{n-1} + 2 * a_{n-2}",
      "a_n = a_{floor(n/2)} + a_{ceil(n/2)} + n"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 9 explicitly gives the divide-and-conquer recurrence: a_n = a_{floor(n/2)} + a_{ceil(n/2)} + n."
  },
  {
    "id": 83,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "Which recurrence is classified in Slide 9 as a Second-Order Linear Recurrence?",
    "options": [
      "a_n = a_{n-1} + 2 * a_{n-2}",
      "a_n = n + a_{n-1} + a_{n-2} + ... + a_1",
      "a_n = n * a_{n-1} - 1",
      "a_n = a_{n-1} * a_{n-2} + sqrt(a_{n-2})"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 9 lists under second-order linear: a_n = a_{n-1} + 2 * a_{n-2}."
  },
  {
    "id": 84,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "In Slide 10, what recurrence relation problem is solved step-by-step?",
    "options": [
      "n * a_n = (n - 2) * a_{n-1} + 2 for n > 1 with a_1 = 1",
      "a_n = 2 * a_{n-1} + 1 with a_0 = 0",
      "a_n = a_{n-1} + n^2 with a_1 = 1",
      "T(n) = 2 * T(n / 2) + n with T(1) = 1"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 10 states: 'Example: Solve the recurrence: n * a_n = (n - 2) * a_{n-1} + 2 for n > 1 with a_1 = 1'."
  },
  {
    "id": 85,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "What is the final exact solution to the recurrence in Slide 10?",
    "options": [
      "a_n = n * (n - 1)",
      "a_n = 1 for n >= 1",
      "a_n = n! (factorial)",
      "a_n = 2^n - 1"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 10 concludes after expansion: 'n(n - 1)a_n = n(n - 1) => a_n = 1 for n >= 1'."
  },
  {
    "id": 86,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to Slide 11, how is Mathematical Induction defined?",
    "options": [
      "A sorting algorithm for ordered numerical sequences",
      "A compiler pass that optimizes arithmetic expressions",
      "A technique used to prove a theorem, statement or formula",
      "A heuristic used to guess the average case running time"
    ],
    "correctAnswer": 2,
    "explanation": "Slide 11 defines Mathematical Induction as: 'A technique used to prove a theorem, statement or formula'."
  },
  {
    "id": 87,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "According to Slide 11, what two foundational steps comprise Mathematical Induction?",
    "options": [
      "1. Simulation step; 2. Execution step",
      "1. Basis step; 2. Inductive step",
      "1. Branching step; 2. Bounding step",
      "1. Division step; 2. Combination step"
    ],
    "correctAnswer": 1,
    "explanation": "Slide 11 specifies: 'Consist of two steps: 1. Basis step; 2. Inductive step'."
  },
  {
    "id": 88,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "In Slide 12, what formula is proven using mathematical induction?",
    "options": [
      "1 + 2 + ... + n = n(n + 1) / 2",
      "2^0 + 2^1 + ... + 2^n = 2^{n+1} - 1",
      "1^2 + 2^2 + ... + n^2 = n(n + 1)(2n + 1) / 6",
      "1 + 3 + ... + (2n - 1) = n^2"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 12 proves: 'Prove that 1+2+...+n = n(n+1)/2 using mathematical induction'."
  },
  {
    "id": 89,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "In the induction proof on Slide 12, how is the Basis Step verified for n = 1?",
    "options": [
      "1(1 + 1) / 2 = 2 / 2 = 1, which is TRUE",
      "2^1 - 1 = 1, which is TRUE",
      "log_2(1) = 0, which is TRUE",
      "1^2 = 1, which is TRUE"
    ],
    "correctAnswer": 0,
    "explanation": "Slide 12 shows: '1. Basis Step : Let n = 1 : where 1(1+1)/2 = 1 is TRUE'."
  },
  {
    "id": 90,
    "topicId": 3,
    "topicTitle": "Topic 3: Mathematical Background",
    "question": "In the Inductive Step on Slide 12, what is added to k(k + 1) / 2 to prove the formula holds for n = k + 1?",
    "options": [
      "+ 2k",
      "+ k^2",
      "+ (k + 2)",
      "+ (k + 1)"
    ],
    "correctAnswer": 3,
    "explanation": "Slide 12 adds (k + 1): '[k(k + 1) / 2] + (k + 1) = [k(k + 1) + 2(k + 1)] / 2 = (k^2 + 3k + 2) / 2 = (k + 1)(k + 2) / 2'."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CCS_QUIZ_DATA };
}
