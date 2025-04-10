import * as React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-[300px] bg-black text-white font-pt-sans">
        <div className="p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-[40px] leading-[48px] font-bold mb-2 scale-hover">
              This is<br />CS2040DE
            </h1>
            <h2 className="text-[20px] leading-[24px] font-normal text-white/80">
              All Things Data Structures and Algorithms
            </h2>
          </div>

          {/* Team Section */}
          <div className="mb-6">
            <h3 className="section-header">Teaching Team</h3>
            <div className="space-y-1">
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Wang Zhiguo
              </p>
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Sangit Sasidhar
              </p>
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Babu Mahadev Prasad Hitesh
              </p>
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Shao Yurui
              </p>
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Zhang Xiaoyang
              </p>
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Zhu Zikun
              </p>
            </div>
          </div>

          {/* iP Navigation Section */}
          <div className="nav-section mb-6">
            <h3 className="section-header">Lab Handouts</h3>
            <div className="space-y-1">
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab1/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 1
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab2/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 2
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab3/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 3
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab4/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 4
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab5/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 5
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab6/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 6
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab7/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 7
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab8/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 8
              </a>
              <a href="https://nus-cs2040de-ay2425s2.github.io/lab9/" className="nav-link" target="_blank" rel="noopener noreferrer">
                Lab 9
              </a>
            </div>
          </div>

          {/* tP Navigation Section */}
          <div className="nav-section">
            <h3 className="section-header">
              <span className="flex items-center gap-2">
                Others
                <span className="bg-yellow-500 text-black text-[12px] px-2 py-0.5 rounded-md font-medium ml-2">Not Coming Soon</span>
              </span>
            </h3>
            <div className="space-y-1">
              <a href="https://canvas.nus.edu.sg/courses/69905/files" className="nav-link">
                Lectures
              </a>
              <a href="https://canvas.nus.edu.sg/courses/69905/files" className="nav-link">
                Tutorials
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="p-8">
          <h2 className="text-[32px] leading-[38px] font-bold text-black mb-4 title-hover-1">
            Course Synopsis
          </h2>
          <div className="border-t border-black">
            <p className="text-[16px] leading-[1.6] font-normal text-black mt-4">
                This course introduces students to the design and implementation of fundamental data structures and algorithms. The course covers basic data structures (linked lists, stacks, queues, hash tables, binary heaps, trees, and graphs), searching and sorting algorithms, and basic analysis of algorithms. Students will be implementing these in Java.
            </p>
          </div>

          {/* Course Objectives Section */}
          <div className="mt-12">
            <h2 className="text-[32px] leading-[38px] font-bold text-black mb-4 title-hover-1">
              Course Objectives
            </h2>
            <div className="border-t border-black">
              <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px] leading-[1.6] text-black">
                <li>Apply algorithmic thinking and techniques for solving computational problems</li>
                <li>Describe the structure and operation of different data structures and algorithms under the standard computational model</li>
                <li>Assess the suitability of different data structures and algorithms for a specific computational problem</li>
                <li>Adapt existing data structures and algorithms to solve specific computational problems</li>
              </ul>
            </div>
          </div>

          {/* Syllabus Section */}
          <div className="mt-12">
            <h2 className="text-[32px] leading-[38px] font-bold text-black mb-4 title-hover-1">
              Syllabus
            </h2>
            <div className="border-t border-black overflow-x-auto">
              <table className="min-w-full mt-4 border-collapse">
                <thead>
                  <tr className="border-b border-black/20">
                    <th className="py-2 px-4 text-left font-bold text-[14px] text-black/80">Week</th>
                    <th className="py-2 px-4 text-left font-bold text-[14px] text-black/80">Lecture</th>
                    <th className="py-2 px-4 text-left font-bold text-[14px] text-black/80">Tutorial</th>
                    <th className="py-2 px-4 text-left font-bold text-[14px] text-black/80">Lab</th>
                    <th className="py-2 px-4 text-left font-bold text-[14px] text-black/80">Assignments</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">
                      <ul className="list-disc pl-4">
                        <li>Course Introduction</li>
                        <li>Introduction to algorithm</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">No Tutorial</td>
                    <td className="py-3 px-4">No Lab</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">
                      <ul className="list-disc pl-4">
                        <li>Algorithm analysis</li>
                        <li>Searching algorithm (linear/binary search)</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">No Tutorial</td>
                    <td className="py-3 px-4">No Lab</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4">
                      <div>Sorting Algorithms</div>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Bubble/Selection/Insertion sort</li>
                        <li>Merge sort</li>
                        <li>Quick sort</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">1. Algorithm analysis and searching</td>
                    <td className="py-3 px-4">1. Introduction to Java</td>
                    <td className="py-3 px-4">
                      Online Quiz 1
                      <div className="text-sm text-black/60">(By 27-Jan, 16:00)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">
                      <div>ADT and data structures</div>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Abstract data type</li>
                        <li>Linked list</li>
                        <li>Stack, Queue, Deque</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">2. Sorting algorithms</td>
                    <td className="py-3 px-4">2. Introduction to classes and OOP</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">5</td>
                    <td className="py-3 px-4">
                      <div>Trees</div>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Binary search tree (BST)</li>
                        <li>Tree traversal</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">3. ADT and data structures</td>
                    <td className="py-3 px-4">3. Stack, Queue, Linked list in Java</td>
                    <td className="py-3 px-4">
                      Online Quiz 2
                      <div className="text-sm text-black/60">(By 10-Feb, 16:00)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4">
                      <div>Heap</div>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Heap operations</li>
                        <li>Heap sort</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">4. Trees</td>
                    <td className="py-3 px-4">4. Set in Java</td>
                    <td className="py-3 px-4">Release of Individual assignment</td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">Recess</td>
                    <td className="py-3 px-4">No Lecture</td>
                    <td className="py-3 px-4">No tutorial</td>
                    <td className="py-3 px-4">No lab</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">7</td>
                    <td className="py-3 px-4">Mid-term test (No Lecture)</td>
                    <td className="py-3 px-4">No tutorial</td>
                    <td className="py-3 px-4">No lab</td>
                    <td className="py-3 px-4">
                      Online Quiz 3
                      <div className="text-sm text-black/60">(By 03-Mar, 23:00)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">Graphs</td>
                    <td className="py-3 px-4">5. Heaps</td>
                    <td className="py-3 px-4">5. Heap data structure and priority queue</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">9</td>
                    <td className="py-3 px-4">
                      <div>Directed Acyclic Graphs (DAGs)</div>
                      <div>(optional) Hashing</div>
                    </td>
                    <td className="py-3 px-4">6. Graphs</td>
                    <td className="py-3 px-4">6. BFS in Java</td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4">
                      <div>Single source shortest path</div>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Dijkstra's algorithm</li>
                        <li>Bellman-Ford algorithm</li>
                        <li>Floyd-Warshall</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">7. BFS and DFS</td>
                    <td className="py-3 px-4">7. DFS in Java</td>
                    <td className="py-3 px-4">
                      Online Quiz 4
                      <div className="text-sm text-black/60">(By 17-Mar, 16:00)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">11</td>
                    <td className="py-3 px-4">
                      <div>Disjoint sets</div>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Find</li>
                        <li>Union</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">8. Single source shortest path</td>
                    <td className="py-3 px-4">8. Single source shortest path in Java</td>
                    <td className="py-3 px-4">
                      Submission of Individual assignment
                      <div className="text-sm text-black/60">(By 24-Mar, 16:00)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">12</td>
                    <td className="py-3 px-4">
                      <div>Minimum spanning tree</div>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Prim's algorithm</li>
                        <li>Kruskal's algorithm</li>
                        <li>Boruvka's algorithm</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4">9. Minimum spanning tree</td>
                    <td className="py-3 px-4">9. Minimum spanning tree in Java</td>
                    <td className="py-3 px-4">
                      Online Quiz 5
                      <div className="text-sm text-black/60">(By 31-Mar, 16:00)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 px-4">13</td>
                    <td className="py-3 px-4">Summary and Review</td>
                    <td className="py-3 px-4">No tutorial</td>
                    <td className="py-3 px-4">No lab</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
