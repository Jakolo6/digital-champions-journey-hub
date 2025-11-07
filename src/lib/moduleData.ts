import futureExplorerImg from '@/assets/Future_Explorer.png';
import digitalEnablerImg from '@/assets/Digital_AI_Enabler.png';
import innovationPilotImg from '@/assets/Innovation_Pilot.png';
import logisticsLeaderImg from '@/assets/Logistic_Leader.png';

export interface Session {
  id: string;
  title: string;
  shortTitle: string;
  type: 'Essential' | 'Deep Dive';
  format: 'Lecture' | 'Seminar' | 'Modulhandbuch' | 'Workshop';
  speakers: string[];
  description: string;
  nextLiveSessionDate?: string;
  sessionRecordingUrl?: string;
  materials?: { title: string; url: string; }[];
}

export interface SelfLearningItem {
  title: string;
  url: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  sessions: Session[];
  selfLearningItems?: SelfLearningItem[];
}

export const modules: Module[] = [
  {
    id: '1',
    title: 'LEADERSHIP LAB',
    description: 'Discover the future: An introduction to AI leadership and the essential skills required to prepare for and lead through AI transformation.',
    image: futureExplorerImg,
    selfLearningItems: [
      { title: 'Coursera: Learning How to Learn', url: 'https://www.coursera.org/learn/learning-how-to-learn', completed: false },
      { title: 'Coursera: Mindshift', url: 'https://www.coursera.org/learn/mindshift', completed: true }
    ],
    sessions: [
      { 
        id: '1.E1', 
        title: 'Embracing Change: Cultivating a learner\'s mindset', 
        shortTitle: 'Embracing Change',
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Sven Oevermann', 'Lisa Brenner', 'Miriam Hartling'], 
        description: 'Focuses on Change Readiness, Learning Culture, and Continuous Learning.',
        nextLiveSessionDate: 'October 15, 2025',
        sessionRecordingUrl: 'https://example.com/recording/1E1',
        materials: [
          { title: 'Learning Mindset Presentation.pdf', url: 'https://example.com/materials/mindset.pdf' },
          { title: 'Change Readiness Workbook.pdf', url: 'https://example.com/materials/workbook.pdf' }
        ]
      },
      { 
        id: '1.E2', 
        title: 'Beyond borders: Mastering collaboration in an international setting', 
        shortTitle: 'Global Collaboration',
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Chris Graves'], 
        description: 'Covers virtual collaboration methods, conflict management, and intercultural competencies.',
        sessionRecordingUrl: 'https://example.com/recording/1E2',
        materials: [
          { title: 'Collaboration Tools Guide.pdf', url: 'https://example.com/materials/collab.pdf' }
        ]
      },
      { 
        id: '1.D1', 
        title: 'Digital Wellbeing: Keeping sanity in a virtual world', 
        shortTitle: 'Digital Wellbeing',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Henrik Drewel'], 
        description: 'Discusses stress, resilience, and digital wellbeing.',
        nextLiveSessionDate: 'November 3, 2025'
      },
      { 
        id: '1.D2', 
        title: 'Motivating others for change: Sparking inspiration in times of complexity', 
        shortTitle: 'Motivating Change',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Heiko Krügel'], 
        description: 'Learn about inspiring change, feedback, and psychological safety.' 
      },
      { 
        id: '1.D3', 
        title: 'From Slide to Story: Elevating digital presentations through Structure and Design', 
        shortTitle: 'Better Presentations',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Malin Bartsch'], 
        description: 'Master the art of visualization and digital presentation skills.' 
      },
      { 
        id: '1.D4', 
        title: 'From Information to Action: Successful Communication at Arvato and Beyond', 
        shortTitle: 'Effective Communication',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Lars Grundmeier'], 
        description: 'Covers effective communication, handling information overload, and understanding communication channels at Arvato.' 
      },
    ]
  },
  {
    id: '2',
    title: 'AI LEARNING PATH',
    description: 'Mastering technology: Learn to integrate modern AI technologies, from data analytics to generative AI, to drive meaningful change and scale innovative solutions.',
    image: digitalEnablerImg,
    selfLearningItems: [
      { title: 'Coursera: Introduction to Data Science', url: 'https://www.coursera.org/learn/data-science-course', completed: true },
      { title: 'Coursera: Machine Learning for Everyone', url: 'https://www.coursera.org/learn/machine-learning-for-everyone', completed: false }
    ],
    sessions: [
      { 
        id: '2.E1', 
        title: 'Data-driven mindset: Use the power of data', 
        shortTitle: 'Data Mindset',
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Daniel Böske'], 
        description: 'Learn why a data-driven mindset is important and realize the benefits of data.',
        nextLiveSessionDate: 'December 1, 2025',
        sessionRecordingUrl: 'https://example.com/recording/2E1',
        materials: [
          { title: 'Data Analytics Primer.pdf', url: 'https://example.com/materials/data-primer.pdf' },
          { title: 'Data Visualization Templates.xlsx', url: 'https://example.com/materials/templates.xlsx' }
        ]
      },
      { 
        id: '2.E2', 
        title: 'AI and Arvato: Envisioning a smarter future', 
        shortTitle: 'AI at Arvato',
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Dietmar Guhe'], 
        description: 'An introduction to AI and a look behind buzzwords like data, analytics, and generative AI.',
        sessionRecordingUrl: 'https://example.com/recording/2E2'
      },
      { 
        id: '2.D1', 
        title: '(Digital) Process Automation - RPA and Power Platform', 
        shortTitle: 'Process Automation',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Oliver Stenzel', 'Bernhard Kreft'], 
        description: 'Understand Robotic Process Automation and its benefits with a use case from Arvato.' 
      },
      { 
        id: '2.D2', 
        title: 'Safeguarding in a digital world', 
        shortTitle: 'Cyber Security',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Marc Hansmann', 'Birgit Wagner'], 
        description: 'Understand the basics of data privacy, information security, and cloud security at Arvato.' 
      },
      { 
        id: '2.D3', 
        title: 'AI in Action: The future of technology', 
        shortTitle: 'AI in Action',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Dietmar Guhe'], 
        description: 'Hands-on AI session demonstrating its practical benefits for you.' 
      },
      { 
        id: '2.D4', 
        title: 'Fireworks: Standardised reporting for excellence', 
        shortTitle: 'Fireworks Reporting',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Patricia Janik', 'Daniel Böske'], 
        description: 'Familiarize yourself with standard reporting at Arvato and discover how to drive change.' 
      },
      { 
        id: '2.D5', 
        title: 'SAP Spotlight: Optimizing Arvato\'s Efficiency', 
        shortTitle: 'SAP Spotlight',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Stefan Köhne', 'Stefan Kull', 'Daniel Erdmann'], 
        description: 'Gain an overview of Arvato\'s IT landscape and the benefits of SAP cloud ecosystems.' 
      },
    ]
  },
  {
    id: '3',
    title: 'EXPERIENCE SESSION',
    description: 'Putting visions into action: Go beyond theory with agile methods and proven innovation approaches to actively shape the course of AI transformation.',
    image: innovationPilotImg,
    selfLearningItems: [
      { title: 'Design Thinking Fundamentals', url: 'https://example.com/design-thinking', completed: false },
      { title: 'Agile Project Management', url: 'https://example.com/agile-pm', completed: false }
    ],
    sessions: [
      { 
        id: '3.E1', 
        title: 'Empowering Excellence: Mastering Customer Centricity Together', 
        shortTitle: 'Customer Centricity',
        type: 'Essential', 
        format: 'Modulhandbuch', 
        speakers: ['Julia Börs', 'Axel Meyer'], 
        description: 'Understand how to focus on the customer, with guest stories and Arvato\'s approach to customer centricity.' 
      },
      { 
        id: '3.E2', 
        title: 'Innovate with Impact: The Power of Storytelling', 
        shortTitle: 'Impactful Storytelling',
        type: 'Essential', 
        format: 'Workshop', 
        speakers: ['Nunatak', 'Martin Mühl', 'Ricardo Dittmer'], 
        description: 'Learn how to tell a story with your ideas and live innovation beyond boundaries.' 
      },
      { 
        id: '3.D1', 
        title: 'Turning Vision into Reality: Mastering Digital Projects', 
        shortTitle: 'Digital Projects',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['David Pelster', 'Stuart Draxler'], 
        description: 'Get an overview of the challenges and opportunities of digital projects with a real-life example.' 
      },
      { 
        id: '3.D2', 
        title: 'Brainstorming and facilitation techniques', 
        shortTitle: 'Brainstorming',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Nunatak'], 
        description: 'Learn and apply proven techniques for designing successful brainstorming and ideation sessions.' 
      },
      { 
        id: '3.D3', 
        title: 'From Concept to Creation: Interactive Prototyping Mastery', 
        shortTitle: 'Prototyping',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Benjamin Mangold', 'Slawomir Grzeskowiak'], 
        description: 'Get to know tools to turn your ideas into reality, from process mining to the Digital Loading Assistant.' 
      },
      { 
        id: '3.D4', 
        title: 'UX: all you need is need. User-centricity and real-world benefits', 
        shortTitle: 'User Experience (UX)',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Sven/Wim', 'Stuart Draxler'], 
        description: 'Understand the importance of user experience in designing and testing digital products.' 
      },
    ]
  },
  {
    id: '4',
    title: 'AI COMMUNITY',
    description: 'Building connections: Join a thriving community of AI leaders, share insights, collaborate on challenges, and drive collective innovation in AI adoption.',
    image: logisticsLeaderImg,
    selfLearningItems: [
      { title: 'Robotics in Logistics', url: 'https://example.com/robotics-logistics', completed: false },
      { title: 'Sustainable Supply Chain', url: 'https://example.com/sustainable-supply', completed: false }
    ],
    sessions: [
      { 
        id: '4.E1', 
        title: 'Logistics in action: From theory to reality', 
        shortTitle: 'Logistics in Action',
        type: 'Essential', 
        format: 'Modulhandbuch', 
        speakers: ['Uni Münster', 'Maurijn Hellenthal'], 
        description: 'Learn warehousing theory and see it in practice with a virtual tour of an Arvato site.' 
      },
      { 
        id: '4.E2', 
        title: 'Future Warehouse: Transforming logistics for tomorrow', 
        shortTitle: 'Future Warehouse',
        type: 'Essential', 
        format: 'Lecture', 
        speakers: ['Thorsten Wiemann', 'Bernhard Lembeck'], 
        description: 'Get to know Arvato\'s approach to future-proof logistics and join a panel discussion with internal experts.' 
      },
      { 
        id: '4.D1', 
        title: 'Revolutionizing Warehousing: The Future of Robotics', 
        shortTitle: 'Warehouse Robotics',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Markus Billmann'], 
        description: 'Learn about different kinds of robots and their underlying technology with real use cases.' 
      },
      { 
        id: '4.D2', 
        title: 'How to move (more than) goods', 
        shortTitle: 'Transport Management',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Natalie Meier', 'Dennis Schmitz'], 
        description: 'Get to know our transport management and innovative logistics solutions like Smarcel and Urbify.' 
      },
      { 
        id: '4.D3', 
        title: 'Warehouse IT: Driving Our Unique Success', 
        shortTitle: 'Warehouse IT',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Thorsten Wiemann'], 
        description: 'A glimpse into one of Arvato\'s USPs: the diverse IT landscape including Armada and SAP.' 
      },
      { 
        id: '4.D4', 
        title: 'Digital Sustainability: Shaping Our Green Future Together', 
        shortTitle: 'Digital Sustainability',
        type: 'Deep Dive', 
        format: 'Seminar', 
        speakers: ['Miriam Flocke', 'Nunatak'], 
        description: 'Learn how Arvato is becoming greener and how you can contribute to a sustainable future.' 
      },
      { 
        id: '4.D5', 
        title: 'Digital Standardization: Enhancing Quality and Effectiveness', 
        shortTitle: 'Digital Standardization',
        type: 'Deep Dive', 
        format: 'Lecture', 
        speakers: ['Volker Prior', 'Vaiva Naujokaitė', 'Claudia Gehrke'], 
        description: 'Learn how to avoid waste, maintain quality, and increase efficiency through standardization.' 
      },
    ]
  }
];
