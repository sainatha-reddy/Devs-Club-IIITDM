"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  },
}

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const AnimatedSection = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    {children}
  </motion.div>
)

const CoreTeamMember = ({ name, role, bio, image, linkedin, github }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative w-64 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="rest"
      whileHover="hover"
      animate={isHovered ? "hover" : "rest"}
    >
      {/* Base card with shadow and scale */}
      <motion.div
        className="absolute inset-0 bg-white rounded-xl shadow-lg"
        variants={{
          rest: { 
            scale: 1,
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
          },
          hover: { 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
          }
        }}
      />

      {/* Front face */}
      <AnimatePresence mode="wait">
        {!isHovered && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-primary/90 to-primary overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Background pattern for visual interest */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  duration: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              className="relative z-10"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl">
                <Image
                  src={image}
                  alt={name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="relative z-10 text-center mt-4 px-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  delay: 0.1, 
                  duration: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
            >
              <h3 className="text-black text-xl font-bold tracking-wide mb-2 drop-shadow-md">
                {name}
              </h3>
              <div className="relative">
                <p className="text-black/90 text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm inline-block">
                  {role}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.2,
                    duration: 0.4,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }
                }}
                className="mt-3 flex justify-center space-x-3"
              >
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5 text-white/80 hover:text-white" />
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <Github className="w-5 h-5 text-white/80 hover:text-white" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back face */}
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            className="absolute inset-0 p-6 rounded-xl bg-white"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ 
              clipPath: "circle(100% at 50% 50%)",
              transition: { 
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
            exit={{ 
              clipPath: "circle(0% at 50% 50%)",
              transition: { 
                duration: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
          >
            <motion.div
              className="h-full flex flex-col justify-between"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
                  }
                }}
              >
                <h3 className="text-gray-900 text-xl font-bold mb-2">{name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
              </motion.div>
              
              <motion.div 
                className="flex justify-center space-x-4 pt-4"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
                  }
                }}
              >
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6 text-[#0077b5]" />
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:-translate-y-1"
                >
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TeamSection = ({ title, members }) => (
  <AnimatedSection>
    <motion.section variants={fadeInUp} className="mb-16">
      <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        variants={staggerChildren}
      >
        {members.map((member, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <CoreTeamMember {...member} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  </AnimatedSection>
)

export default function Team() {
  const headCore = [
  {name: "M Sai Pranav", role: "Head Core", bio: "Passionate about leading and inspiring the Developers Club community.", image: "/assets/cs22b1027.jpg", linkedin: "https://www.linkedin.com/in/sai-pranav-m-3340a0251/",github: "https://github.com/pranav-85"},
  {name: "Y Sainatha Reddy",role: "Vice Head Core",bio: "Full Stack Developer with expertise in Cloud Computing, actively working on innovative IoT and Fog-based solutions",image: "/assets/sainatha.jpg",linkedin: "https://www.linkedin.com/in/sainatha-reddy/",github: "https://github.com/sainatha-reddy"},
]
  const cores = [
    { name: "K M V R Madhava Krishna", role: "CS22B1005", bio: "Data science student excelling in ML, Python, cloud integration, problem-solving, and impactful solutions.", image: "/assets/cs22b1005.jpg", linkedin: "https://www.linkedin.com/in/k-m-v-r-madhava-krishna-a71533262/", github: "https://github.com/Madhava0412" },
    { name: "Praneeth Devarasetty", role: "CS22B1014", bio: "Full Stack Developer skilled in React, Node.js, databases, APIs, responsive design, and performance optimization", image: "/assets/cs22b1014.jpg", linkedin: "https://www.linkedin.com/in/praneeth-devarasetty/", github: "https://github.com/praneeth622" },
    { name: "A Sohan Kumar", role: "CS23B1004", bio: "I'm passionate about DevOps and Machine Learning, with a strong interest in solving algorithmic problems on platforms.", image: "/assets/cs23b1004.png", linkedin: "https://www.linkedin.com/in/sohan-kumar-anumalasetty-127029289/", github: "https://github.com/Sohanuu66" },
    { name: "K Krishna Chaitanya", role: "CS23B1027", bio: "I'm a passionate web developer and tech enthusiast.I enjoy building responsive and user-friendly websites.", image: "/assets/cs23b1027.jpg", linkedin: "https://www.linkedin.com/in/krishna-chaitanya-koppaku-4b7779289/", github: "https://github.com/krishnachaiatanya"},
    { name: "R K Larika", role: "CS23B1028", bio: "Driven to explore AI and Machine Learning and committed to foster innovation and collaboration in tech.", image: "/assets/cs23b1028.jpg", linkedin: "https://www.linkedin.com/in/larika-rajasekaran-337721355/", github: "https://github.com/Larika85" },
  ]

  const coordinators = [
     { name: "Fida Saifudheen ", role: "CS24B1003", bio: "Curious coder and CSE student exploring AI, robotics, and app development", image: '/assets/cs24b1003.png', linkedin: "www.linkedin.com/in/fida-saifudheen", github: "https://github.com/fida22" },
     { name: "Efanio Jens", role: "CS24B2051", bio: "I am an inquisitive developer passionate about solving real world problems.", image: "/assets/cs24b2051.png", linkedin: "https://www.linkedin.com/in/efanio-jens/", github: "https://github.com/GalacticLearner" },
     { name: "Gokul Krishna Balaji", role: "CS24B2053", bio: "I'm a developer with skills in AI and WebDev. Passionate about coming up with solutions to real world problems.", image: "/assets/cs24b2053.jpg", linkedin: "https://www.linkedin.com/in/gokul-krishna-balaji-434736332/", github: "https://github.com/gokulkrishna1686" },
     { name: "Hashir Shaikh", role: "CS24I1048", bio: "Full-stack web developer specializing in Python frameworks like Flask", image: "/assets/cs24i1048.jpg", linkedin: "www.linkedin.com/in/hashir-shaikh-5840ab372", github: "https://github.com/hashirshaikh" },
     { name: "Akula Sai Teja", role: "CS24I1054", bio: "I'm passionate about exploring new technologies every day—it fascinates me how things work behind the scenes.", image: "/assets/cs24i1054.png", linkedin: "https://www.linkedin.com/in/akula-sai-teja-30034a32", github: "https://github.com/SaiTeja-2101" },
     { name: "Narendhar T S", role: "EC24B1053", bio: "Enthusiastic programmer with a love for bringing ideas to life through code. Enjoys building practical, user-friendly applications", image: "/assets/ec24b1053.png", linkedin: "https://www.linkedin.com/in/narendharts", github: "https://github.com/zapds" },
     { name: "M Thanushree", role: "EC24I1007", bio: "Aspiring to become a full stack developer with a strong understanding of both frontend and backend technologies.", image: "/assets/ec24i1007.jpeg", linkedin: " www.linkedin.com/in/thanushree-m-559965340", github: "https://github.com/ThanushreeM-07" },
     { name: "M Mayukha", role: "ME24B2020", bio: "Curious about the intersection of technology and automation.Currently interested in Python (Data science), Machine learning and DevOps.", image: "/assets/me24b2020.png", linkedin: "https://www.linkedin.com/in/maramganty-mayukha-7b26b834b/", github: "https://github.com/Mayukha0702" },
      
  ]

  const mentors = [
    { name: "Jashwanth Peddisetty", role: "Developer@Randomwalk.Ai", bio: "Developer at Randomwalk.Ai | Ex-Intern at Congruent Solutions | Web3 enthusiast | ETHForAll winner 🏆 | GDSC core member", image: "/assets/jashwanth.jpg", linkedin: "https://www.linkedin.com/in/jashwanth-peddisetty/", github: "https://github.com/jashwanth0712" },
    { name: "T Lakshmi Srinivas", role: "", bio: "GDSC core member | Ex Developer's Club Headcore", image: "/assets/srinavas.png", linkedin: "https://www.linkedin.com/in/srinivastls/", github: "https://github.com/srinivastls" },
    ]
  const pics = [
    { name: "Dr. Preeth R", role: "Assistant Professor", bio: "Assistant Professor specializing in IoT, Machine Learning, Computer Vision, and Data Science research.", image: "/assets/Preeth.jpg", linkedin: "https://www.linkedin.com/in/preethr/"},
    ];

    const developers = [
        { name: "Praneeth Devarasetty", role: "Lead Developer", bio: "Leads the development team with expertise in Nextjs and cloud technologies.", image: "/assets/cs22b1014.jpg", linkedin: "https://www.linkedin.com/in/praneeth-devarasetty/", github: "https://github.com/praneeth622" },
        { name: "Darshan Karthikeya", role: "UI/UX & Frontend Developer", bio: "Darshan specializes in creating responsive and accessible web interfaces using modern frontend technologies.", image: "/assets/cs22b1022.jpg", linkedin: "https://www.linkedin.com/in/darshan-karthikeya/", github: "https://github.com/karthikeya1220" },
        { name: "Surya Srirama Murthy", role: "UI/UX Designer", bio: "Sriram is responsible for creating the user interface and experience, focusing on user-centered design principles", image: '/assets/sriram.jpg', linkedin: "https://www.linkedin.com/in/surya-sri-rama-murthy-pilla/", github: "https://github.com/sriram0620" },
        { name: "G Chaithanya Reddy", role: "Frontend Developer", bio: "Chaithanya is a Front-end Developer focused on building responsive, intuitive user interfaces with clean code and modern tech.", image: "/assets/cs22b1052.jpg", linkedin: "https://www.linkedin.com/in/chaitanya-reddy-gavinolla-22166b258/", github: "https://github.com/chaitanya-reddy-13" },
        { name: "T Lakshmi Srinivas", role: "Website Co-ordinator", bio: "Srinivas is a Website Coordinator managing updates, content, and performance for seamless user experiences.", image: "/assets/srinivas.png", linkedin: "https://www.linkedin.com/in/srinivastls/", github: "https://github.com/srinivastls   " },      
        { name: "Y Sainatha Reddy", role: "Backend Developer", bio: "Sainatha is a Back-end Developer focused on building reliable system, managing data, and ensuring smooth connections between servers and users.", image: "/assets/sainatha.jpg", linkedin: "https://www.linkedin.com/in/sainatha-reddy/", github: "https://github.com/sainatha-reddy" },

      ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-16 text-center"></h1>
      
      {/* PIC Section */}
      <TeamSection title="Faculty Advisor" members={pics} />
      <TeamSection title="Team Leads" members={headCore} />
      <TeamSection title="Core Team" members={cores} />
      <TeamSection title="Coordinators" members={coordinators} />
      <TeamSection title="Mentors" members={mentors} />
      <TeamSection title="Developers" members={developers} />
    </div>
  )
}
