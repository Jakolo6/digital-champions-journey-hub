export interface Session {
  id: string;
  title: string;
  type: 'Essential' | 'Deep Dive';
  format: 'Lecture' | 'Seminar' | 'Modulhandbuch' | 'Workshop';
  speakers: string[];
  description: string;
  nextLiveSessionDate?: string;
  sessionRecordingUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  sessions: Session[];
  courseraLinks?: { title: string; url: string; }[];
}

export const modules: Module[] = [
  {
    id: '1',
    title: 'Digital Mind',
    description: 'Laying the foundation for a digital-first mindset and collaborative success.',
    courseraLinks: [
      { title: 'Coursera: Learning How to Learn', url: 'https://www.coursera.org/learn/learning-how-to-learn' },
      { title: 'Coursera: Mindshift', url: 'https://www.coursera.org/learn/mindshift' }
    ],
    sessions: [
      { 
        id: '1.E1', 
        title: 'Embracing Change: Cultivating a learner\'s mindset', 
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Sven Oevermann', 'Lisa Brenner', 'Miriam Hartling'], 
        description: 'Focuses on Change Readiness, Learning Culture, and Continuous Learning.',
        nextLiveSessionDate: 'October 15, 2025',
        sessionRecordingUrl: 'https://example.com/recording/1E1'
      },
      { 
        id: '1.E2', 
        title: 'Beyond borders: Mastering collaboration in an international setting', 
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Chris Graves'], 
        description: 'Covers virtual collaboration methods, conflict management, and intercultural competencies.',
        sessionRecordingUrl: 'https://example.com/recording/1E2'
      },
      { 
        id: '1.D1', 
        title: 'Digital Wellbeing: Keeping sanity in a virtual world', 
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Henrik Drewel'], 
        description: 'Discusses stress, resilience, and digital wellbeing.',
        nextLiveSessionDate: 'November 3, 2025'
      },
      { id: '1.D2', title: 'Motivating others for change: Sparking inspiration in times of complexity', type: 'Deep Dive', format: 'Seminar', speakers: ['Heiko Krügel'], description: 'Learn about inspiring change, feedback, and psychological safety.' },
      { id: '1.D3', title: 'From Slide to Story: Elevating digital presentations through Structure and Design', type: 'Deep Dive', format: 'Seminar', speakers: ['Malin Bartsch'], description: 'Master the art of visualization and digital presentation skills.' },
      { id: '1.D4', title: 'From Information to Action: Successful Communication at Arvato and Beyond', type: 'Deep Dive', format: 'Seminar', speakers: ['Lars Grundmeier'], description: 'Covers effective communication, handling information overload, and understanding communication channels at Arvato.' },
    ]
  },
  {
    id: '2',
    title: 'IT Excellence',
    description: 'Harnessing the power of data, AI, and automation to drive efficiency and innovation.',
    courseraLinks: [
      { title: 'Coursera: Introduction to Data Science', url: 'https://www.coursera.org/learn/data-science-course' },
      { title: 'Coursera: Machine Learning for Everyone', url: 'https://www.coursera.org/learn/machine-learning-for-everyone' }
    ],
    sessions: [
      { 
        id: '2.E1', 
        title: 'Data-driven mindset: Use the power of data', 
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Daniel Böske'], 
        description: 'Learn why a data-driven mindset is important and realize the benefits of data.',
        nextLiveSessionDate: 'December 1, 2025',
        sessionRecordingUrl: 'https://example.com/recording/2E1'
      },
      { 
        id: '2.E2', 
        title: 'AI and Arvato: Envisioning a smarter future', 
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Dietmar Guhe'], 
        description: 'An introduction to AI and a look behind buzzwords like data, analytics, and generative AI.',
        sessionRecordingUrl: 'https://example.com/recording/2E2'
      },
      { id: '2.D1', title: '(Digital) Process Automation - RPA and Power Platform', type: 'Deep Dive', format: 'Seminar', speakers: ['Oliver Stenzel', 'Bernhard Kreft'], description: 'Understand Robotic Process Automation and its benefits with a use case from Arvato.' },
      { id: '2.D2', title: 'Safeguarding in a digital world', type: 'Deep Dive', format: 'Lecture', speakers: ['Marc Hansmann', 'Birgit Wagner'], description: 'Understand the basics of data privacy, information security, and cloud security at Arvato.' },
      { id: '2.D3', title: 'AI in Action: The future of technology', type: 'Deep Dive', format: 'Seminar', speakers: ['Dietmar Guhe'], description: 'Hands-on AI session demonstrating its practical benefits for you.' },
      { id: '2.D4', title: 'Fireworks: Standardised reporting for excellence', type: 'Deep Dive', format: 'Seminar', speakers: ['Patricia Janik', 'Daniel Böske'], description: 'Familiarize yourself with standard reporting at Arvato and discover how to drive change.' },
      { id: '2.D5', title: 'SAP Spotlight: Optimizing Arvato\'s Efficiency', type: 'Deep Dive', format: 'Lecture', speakers: ['Stefan Köhne', 'Stefan Kull', 'Daniel Erdmann'], description: 'Gain an overview of Arvato\'s IT landscape and the benefits of SAP cloud ecosystems.' },
    ]
  },
  {
    id: '3',
    title: 'Digital Acceleration',
    description: 'From customer needs to tangible solutions, master the art of digital project execution.',
    sessions: [
      { id: '3.E1', title: 'Empowering Excellence: Mastering Customer Centricity Together', type: 'Essential', format: 'Modulhandbuch', speakers: ['Julia Börs', 'Axel Meyer'], description: 'Understand how to focus on the customer, with guest stories and Arvato\'s approach to customer centricity.' },
      { id: '3.E2', title: 'Innovate with Impact: The Power of Storytelling', type: 'Essential', format: 'Workshop', speakers: ['Nunatak', 'Martin Mühl', 'Ricardo Dittmer'], description: 'Learn how to tell a story with your ideas and live innovation beyond boundaries.' },
      { id: '3.D1', title: 'Turning Vision into Reality: Mastering Digital Projects', type: 'Deep Dive', format: 'Lecture', speakers: ['David Pelster', 'Stuart Draxler'], description: 'Get an overview of the challenges and opportunities of digital projects with a real-life example.' },
      { id: '3.D2', title: 'Brainstorming and facilitation techniques', type: 'Deep Dive', format: 'Seminar', speakers: ['Nunatak'], description: 'Learn and apply proven techniques for designing successful brainstorming and ideation sessions.' },
      { id: '3.D3', title: 'From Concept to Creation: Interactive Prototyping Mastery', type: 'Deep Dive', format: 'Lecture', speakers: ['Benjamin Mangold', 'Slawomir Grzeskowiak'], description: 'Get to know tools to turn your ideas into reality, from process mining to the Digital Loading Assistant.' },
      { id: '3.D4', title: 'UX: all you need is need. User-centricity and real-world benefits', type: 'Deep Dive', format: 'Lecture', speakers: ['Sven/Wim', 'Stuart Draxler'], description: 'Understand the importance of user experience in designing and testing digital products.' },
    ]
  },
  {
    id: '4',
    title: 'Future Warehouse',
    description: 'Exploring the technology, automation, and sustainable practices shaping the future of logistics.',
    sessions: [
      { id: '4.E1', title: 'Logistics in action: From theory to reality', type: 'Essential', format: 'Modulhandbuch', speakers: ['Uni Münster', 'Maurijn Hellenthal'], description: 'Learn warehousing theory and see it in practice with a virtual tour of an Arvato site.' },
      { id: '4.E2', title: 'Future Warehouse: Transforming logistics for tomorrow', type: 'Essential', format: 'Lecture', speakers: ['Thorsten Wiemann', 'Bernhard Lembeck'], description: 'Get to know Arvato\'s approach to future-proof logistics and join a panel discussion with internal experts.' },
      { id: '4.D1', title: 'Revolutionizing Warehousing: The Future of Robotics', type: 'Deep Dive', format: 'Lecture', speakers: ['Markus Billmann'], description: 'Learn about different kinds of robots and their underlying technology with real use cases.' },
      { id: '4.D2', title: 'How to move (more than) goods', type: 'Deep Dive', format: 'Lecture', speakers: ['Natalie Meier', 'Dennis Schmitz'], description: 'Get to know our transport management and innovative logistics solutions like Smarcel and Urbify.' },
      { id: '4.D3', title: 'Warehouse IT: Driving Our Unique Success', type: 'Deep Dive', format: 'Lecture', speakers: ['Thorsten Wiemann'], description: 'A glimpse into one of Arvato\'s USPs: the diverse IT landscape including Armada and SAP.' },
      { id: '4.D4', title: 'Digital Sustainability: Shaping Our Green Future Together', type: 'Deep Dive', format: 'Seminar', speakers: ['Miriam Flocke', 'Nunatak'], description: 'Learn how Arvato is becoming greener and how you can contribute to a sustainable future.' },
      { id: '4.D5', title: 'Digital Standardization: Enhancing Quality and Effectiveness', type: 'Deep Dive', format: 'Lecture', speakers: ['Volker Prior', 'Vaiva Naujokaitė', 'Claudia Gehrke'], description: 'Learn how to avoid waste, maintain quality, and increase efficiency through standardization.' },
    ]
  }
];
