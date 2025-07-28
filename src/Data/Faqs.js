// src/Data/Faqs.js

const featuredFaqs = [
  {
    question: "Who should use our tech services?",
    answer: "Startups, SMEs, and large enterprises looking for high-quality web, app, cloud, and Data Analytics solutions tailored to their business goals."
  },
  {
    question: "What services do you offer?",
    answer: "We specialize in web development, mobile app development, cloud infrastructure setup, and DevOps automation to streamline your software lifecycle."
  }
];

const allFaqs = [
  ...featuredFaqs,
  {
    question: "Do you provide end-to-end web development?",
    answer: "Yes, we handle everything from UI/UX design and frontend/backend development to deployment and maintenance."
  },
  {
    question: "What cloud platforms do you work with?",
    answer: "We work with AWS, Microsoft Azure, and Google Cloud to deliver scalable and secure cloud solutions."
  },
  {
    question: "Can you help us implement DevOps?",
    answer: "Absolutely. We offer CI/CD pipeline setup, infrastructure as code, monitoring, and automation to streamline your development process."
  },
  {
    question: "Do you offer support after project delivery?",
    answer: "Yes, we provide ongoing maintenance, performance optimization, and support to ensure your product runs smoothly post-launch."
  }
];


export default allFaqs;
