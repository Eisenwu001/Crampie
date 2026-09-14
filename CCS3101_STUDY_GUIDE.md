# CCS_3101: Algorithm and Complexity — Study Guide & Complete Answer Key

**Course Code:** CCS_3101  
**Course Title:** Algorithm and Complexity  
**Exam Practice Test:** 90 Questions across 3 Modules  

---

## Quick Review Summaries

### Module 1: Introduction (Algorithm Basics)
- **Algorithm Definition**: A finite set of instructions that specify a sequence of operations; a recipe for solving a problem.
- **Key Criterion**: Each step must be clear and precise.
- **Implementation**: Translating step-by-step instructions into programs that can run on a computer.
- **4 Ways to Represent Algorithms**:
  1. *Natural Language*: Written/spoken English steps.
  2. *Pseudocode*: Informal structured code-like language (INPUT, SET, OUTPUT, While).
  3. *Flowcharts*: Graphical diagrams with standard geometric shapes and flow arrows.
  4. *Programming Language*: Formal executable code (e.g., Python, C++, Java).
- **6 Characteristics of an Algorithm**:
  1. *Well-defined Inputs*: Known input constraints and types.
  2. *Finiteness*: Must terminate after a finite sequence of operations.
  3. *Clear and Unambiguous*: Each step leads to only one exact interpretation.
  4. *Feasible*: Practicable given available resources.
  5. *Language Independent*: General logic that can be written in any language.
  6. *Well-defined Outputs*: Produces specified desired output.
- **5 Considerations Before Designing**:
  1. Problem given
  2. Constraints of the problem
  3. Inputs to be processed
  4. Expected output
  5. Possible solution
  - *Testing Sequence*: Simulation then actual program.
- **5 Core Algorithm Design Techniques**:
  1. *Brute-Force*: Straightforward approach (e.g., Selection sort, Sequential search).
  2. *Divide and Conquer*: 3 steps: Divide into sub-problems $\rightarrow$ Solve each sub-problem $\rightarrow$ Combine solutions (e.g., Merge sort, Binary search).
  3. *Branch and Bound*: Used for solving combinatorial optimization problems.
  4. *Randomized Algorithm*: Provides random number/choice; expected running time depends on number of random choices.
  5. *Backtracking*: Systematic search for a solution by extending a partial solution.

---

### Module 2: Algorithm Analysis
- **Definition**: Checking effectiveness and evaluating the performance of the algorithm.
- **Two Evaluation Areas**: Space efficiency (memory) and Time efficiency (execution time).
- **Reasons to Analyze Efficiency**:
  - Assistance to select the better solution.
  - Provide performance guarantees.
  - Predict performance before actual programming.
  - Determine which parts execute quickly vs slowly.
- **Space Efficiency (3 Components)**:
  1. *Instruction Space*: Memory storing compiled executable machine instructions.
  2. *Data Space*: Memory for constants, variables, arrays, dynamic structures.
  3. *Run-Time Stack Space*: Memory for function call frames, return addresses, local variables, and recursion.
- **Time Efficiency**: Shorter execution time is better.
  - *4 Influencing Factors*: Device speed, compiler, amount of data, actual data.
  - *Analysis Aspects*: Order of asymptotic categorization, estimation of running time (by analysis of code, by execution of code).
- **Input Classes**: Input determines path of execution (e.g., comparing $N=10$ vs $N=100$).
- **Counting Operations**:
  - Step 1: Select operation(s).
  - Step 2: Determine integral vs overhead operations.
- **Operators**:
  - *Comparison Operators*: Searching and sorting.
  - *Arithmetic Operators*:
    - Additive: Addition, subtraction, increment, decrement.
    - Multiplicative: Multiplication, division, modulus.
- **3 Cases to Consider**:
  - *Best Case*: Input requiring shortest time (e.g., target element at index 0 of array).
  - *Worst Case*: Input requiring most time (e.g., target element absent or at last index).
  - *Average Case*: Dividing input set into $m$ groups, each with probability $p_i$ and runtime $t_i$:
    $$A(n) = \sum_{i=1}^m p_i \cdot t_i$$

---

### Module 3: Mathematical Background
- **5 Concepts**: Logarithms, Probabilities, Summations, Recurrence Relations, Mathematical Induction.
- **Logarithms**:
  - Inverse of exponential functions: $b^c = a \iff \log_b a = c$.
  - Most common in computer science: **Base 2**.
  - Examples: $\log_2 8 = 3$ ($2^3 = 8$); $\log_3 27 = 3$ ($3^3 = 27$).
  - *Log Laws*:
    - $\log_b 1 = 0$
    - $\log_b b = 1$
    - $\log_b(cd) = \log_b c + \log_b d$ (Product rule)
    - $\log_b(c/d) = \log_b c - \log_b d$ (Quotient rule)
    - $\log_b(a^c) = c \log_b a$ (Power rule)
    - $\log_b a = \frac{\log_c a}{\log_c b}$ (Change of base)
    - $b^{\log_c a} = a^{\log_c b}$
  - *Uses in Complexity Theory*: Measure input size; complexity for divide-and-conquer algorithms that repeatedly divide input in two (involve $\log_2$).
  - Growth comparison: $t_A(n) = \log n$ vs $t_B(n) = n$ ($\log n$ grows significantly slower than $n$).
- **Probabilities**:
  - Handle varied possible inputs; test if inputs meet algorithmic conditions.
  - Bounds: $0$ means never occur, $1$ means always occur.
- **Summations**:
  - Represent loop step counts: $\sum_{i=1}^N i$.
  - Closed-form formula: $1 + 2 + \dots + n = \frac{n(n+1)}{2}$.
- **Recurrence Relations**:
  - Efficient way to calculate a quantity in terms of smaller instances.
  - First-order linear: $a_n = n a_{n-1} - 1$.
  - First-order nonlinear: $a_n = \frac{1}{1 + a_{n-1}}$.
  - Second-order linear: $a_n = a_{n-1} + 2a_{n-2}$.
  - Divide-and-conquer: $a_n = a_{\lfloor n/2 \rfloor} + a_{\lceil n/2 \rceil} + n$.
  - Solved Example: $n a_n = (n-2)a_{n-1} + 2$ for $n > 1$ with $a_1 = 1 \implies a_n = 1$ for all $n \ge 1$.
- **Mathematical Induction**:
  - Proof technique for statements over natural numbers.
  - 2 Steps:
    1. *Basis Step*: Verify statement holds for base value (e.g., $n = 1$).
    2. *Inductive Step*: Assume statement holds for $n = k$ (Inductive Hypothesis), prove it holds for $n = k + 1$.

---

## 90-Question Answer Key

### Topic 1: Algorithm Basics (Q1–Q30)
1. **A** — A finite set of instructions that specify a sequence of operations (Slide 3)
2. **A** — A recipe for solving a problem (Slide 3)
3. **A** — Each step must be clear and precise (Slide 3)
4. **A** — Translating step-by-step instructions into programs that can run in a computer (Slide 3)
5. **A** — Natural Language, Pseudocode, Flowcharts, Programming Language (Slide 5)
6. **A** — Natural Language (Slide 5, 8)
7. **A** — Pseudocode (Slide 5, 8)
8. **A** — Flowchart (Slide 5, 8)
9. **A** — Python (Slide 8)
10. **A** — 6 characteristics (Slide 6)
11. **A** — Finiteness (Slide 6)
12. **A** — Clear and Unambiguous (Slide 6)
13. **A** — Feasible (Slide 6)
14. **A** — Language Independent (Slide 6)
15. **A** — Well defined Inputs and Well-defined outputs (Slide 6)
16. **A** — Problem given, Constraints, Inputs, Expected output, Possible solution (Slide 7)
17. **A** — Simulation then actual program (Slide 7)
18. **A** — Find the largest value among n integers (Slide 9)
19. **A** — Set COUNT to 2 (Slide 9)
20. **A** — If NUM is greater than LARGE (Slide 9)
21. **A** — If COUNT equals to N (Slide 9)
22. **A** — 5 techniques (Slide 11)
23. **A** — A straightforward approach to solving a problem (Slide 12)
24. **A** — Selection sort and Sequential search (Slide 12)
25. **A** — 3 steps (Slide 13)
26. **A** — 1. Divide into sub-problems; 2. Solve each sub-problem; 3. Combine solutions (Slide 13)
27. **A** — Merge sort and Binary search (Slide 13)
28. **A** — Optimization problems (combinatorial optimization) (Slide 14)
29. **A** — The number of random choices made (Slide 15)
30. **A** — Systematic way to search for a solution by extending a partial solution (Slide 16)

### Topic 2: Algorithm Analysis (Q31–Q60)
31. **A** — To check the effectiveness and evaluate performance (Slide 3)
32. **A** — Space and time efficiency (Slide 3)
33. **A** — To automatically eliminate all syntax errors during compilation (Slide 4)
34. **A** — The memory required by the algorithm (Slide 5)
35. **A** — Instruction space, Data space, Run-time stack space (Slide 5)
36. **A** — Instruction space (Slide 5)
37. **A** — Data space (Slide 5)
38. **A** — Run-time stack space (Slide 5)
39. **A** — The time required by the algorithm; shorter is better (Slide 6)
40. **A** — Speed of device, compiler, amount of data, actual data (Slide 6)
41. **A** — Order of asymptotic categorization and Estimation of running time (Slide 7)
42. **A** — By analysis of code and By execution of code (Slide 7)
43. **A** — Sequential independent if-statements vs. nested decision trees (Slide 8)
44. **A** — Input determines the path of execution (Slide 9)
45. **A** — Loop iterates ~10 times more, executing 10 times more comparisons (Slide 9)
46. **A** — When the device has limited memory space (Slide 10)
47. **A** — 1. Selecting operation(s); 2. Determine integral vs overhead (Slide 11)
48. **A** — Comparison or arithmetic operators (Slide 11)
49. **A** — Searching and sorting (Slide 12)
50. **A** — Additive operators and multiplicative operators (Slide 12)
51. **A** — Addition, subtraction, increment, and decrement (Slide 12)
52. **A** — Multiplication, division, and modulus (Slide 12)
53. **A** — Best Case, Worst Case, Average Case (Slide 13)
54. **A** — The input that requires take the shortest time (Slide 14)
55. **A** — Searching for a number when it is at the first index (Slide 14)
56. **A** — Used most time for the algorithm to finish (Slide 15)
57. **A** — Target value not part of array or at the last index (Slide 15)
58. **A** — Divide inputs into groups, probability of each group, runtime for each group (Slide 16)
59. **A** — $A(n) = \sum_{i=1}^m (p_i \cdot t_i)$ (Slide 16)
60. **A** — Probability that input will be from group $i$ (Slide 16)

### Topic 3: Mathematical Background (Q61–Q90)
61. **A** — Logarithms, Probabilities, Summations, Recurrence relations, Mathematical induction (Slide 3)
62. **A** — The inverse of exponential functions (Slide 4)
63. **A** — Base 2 (Slide 4)
64. **A** — $\log_b(a) = c$ (Slide 4)
65. **A** — $3$, because $2^3 = 8$ (Slide 4)
66. **A** — $3$, because $3^3 = 27$ (Slide 4)
67. **A** — $0$, because $b^0 = 1$ (Slide 4)
68. **A** — $1$, because $b^1 = b$ (Slide 4)
69. **A** — $\log_b(cd) = \log_b(c) + \log_b(d)$ (Slide 4)
70. **A** — $\log_b(c/d) = \log_b(c) - \log_b(d)$ (Slide 4)
71. **A** — $\log_b(a^c) = c \cdot \log_b(a)$ (Slide 4)
72. **A** — $\log_b(a) = (\log_c(a)) / (\log_c(b))$ (Slide 4)
73. **A** — Encrypting RSA public key certificates (Slide 5)
74. **A** — Measure input size and model divide-by-two algorithms ($\log_2$) (Slide 5)
75. **A** — $\log n$ stays very small while $n$ grows linearly (Slide 6)
76. **A** — Varied input sets; probability models if input meets conditions (Slide 7)
77. **A** — $0$ means never occur; $1$ means always occur (Slide 7)
78. **A** — Loops require adding operation counts across iterations (Slide 8)
79. **A** — $\sum_{i=1}^N i$ (Slide 8)
80. **A** — Provides an efficient way to calculate the quantity in question (Slide 9)
81. **A** — $a_n = n \cdot a_{n-1} - 1$ (Slide 9)
82. **A** — $a_n = a_{\lfloor n/2 \rfloor} + a_{\lceil n/2 \rceil} + n$ (Slide 9)
83. **A** — $a_n = a_{n-1} + 2a_{n-2}$ (Slide 9)
84. **A** — $n \cdot a_n = (n - 2) \cdot a_{n-1} + 2$ for $n > 1$ with $a_1 = 1$ (Slide 10)
85. **A** — $a_n = 1$ for all $n \ge 1$ (Slide 10)
86. **A** — A technique used to prove a theorem, statement or formula (Slide 11)
87. **A** — 1. Basis step; 2. Inductive step (Slide 11)
88. **A** — $1 + 2 + \dots + n = \frac{n(n+1)}{2}$ (Slide 12)
89. **A** — $\frac{1(1+1)}{2} = 1$, which is TRUE (Slide 12)
90. **A** — $+ (k + 1)$ (Slide 12)
