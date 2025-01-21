import projectImg01 from "../project-images/project-01.png";
import projectImg02 from "../project-images/project-02.png";
import projectImg03 from "../project-images/project-03.png";
import projectImg04 from "../project-images/project-04.png";
import projectImg05 from "../project-images/project-05.png";
import projectImg06 from "../project-images/project-06.png";
import projectImg07 from "../project-images/project-07.png";
import projectImg08 from "../project-images/project-08.png";
import projectImg09 from "../project-images/project-09.png";
import projectImg10 from "../project-images/project-10.png";
import projectImg11 from "../project-images/project-11.png";
import projectImg12 from "../project-images/project-12.png";

const projects = [
  {
    id: "01",
    imgUrl: projectImg01,
    category: "ML",
    title: "Scalable Eye-Tracking for RLHF",
    description:
      "Developing a fine-grained alignment model using distributional Reinforcement Learning from Human Feedback (RLHF) for improved natural language understanding from scalable eye-tracking data",
    technologies: ["Reinforcement Learning", "Python", "JsPsych"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: projectImg02,
    category: "ML",
    title: "Recommender System with RLHF",
    description:
      "Engineering an RLHF-based algorithm to address cold-start issue in recommender systems, enabling faster personalization through interactive text-based feedback.",
    technologies: ["Recommender Systems", "Python", "ML"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: projectImg03,
    category: "ML",
    title: "6-Step Optimization to GeMMs",
    description:
      "Enhancing the performance of FP32 General Matrix Multiplications (GeMMs) with optimizations such as coalescing, tiling, coarsening, and vectorization.",
    technologies: ["CUDA", "GPU Programming", "Performance Optimization", "Distributed Systems"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: projectImg04,
    category: "ML",
    title: "7-Step Optimization to Parallel Reductions",
    description:
      "A series of 7 optimizations we can perform on our reduction algorithm to make it faster and more efficient on GPUs.",
    technologies: ["CUDA", "GPU Programming", "Performance Optimization", "Distributed Systems"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: projectImg05,
    category: "ML",
    title: "Generative Python Transformer Model",
    description:
      "Engineering an GPT-2 model for Python code generation with 4.3GB of Python data gathered from GitHub API",
    technologies: ["Python", "PyTorch", "NLP", "Transformers"],
    siteUrl: "#",
  },
  {
    id: "06",
    imgUrl: projectImg06,
    category: "ML",
    title: "Reinforcement Learning with Super Mario Bros Gameplay",
    description:
      "Trained an Reinforcement Learning agent with a Deep Q-Network to autonomously complete the Super Mario Bros game",
    technologies: ["PyTorch", "Reinforcement Learning", "Distributed Systems"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: projectImg07,
    category: "ML",
    title: "Movie Recommender System",
    description:
      "Created a Content-based Filtering Model and a Collaborative Filtering Model using Linear Algebra techniques – SVD for Matrix Factorization, PCA Dimensionality Reduction, and Cosine Similarity Function. Built a Matrix Factorization algorithm from scratch and optimized accuracy by 70% and response time by 30%.",
    technologies: ["Recommender Systems", "Pandas", "Numpy", "SciKit-Learn", "Linear Algebra", "Feature Extraction"],
    siteUrl: "#",
  },
  
  {
    id: "08",
    imgUrl: projectImg08,
    category: "ML",
    title: "Breast Cancer Detection Model",
    description:
      "Modeled Supervised ML algorithms (Random Forest, SVM, KNN, MLP) to classify Breast Cancer into malignant or benign after using correlation heatmaps, histogram plotting, and confusion matrix to assess accuracy. Built Random Forest and Linear SVM algorithms from scratch and achieved accuracy of 90% and 80% respectively.",
    technologies: ["Numpy", "Pandas", "Sci-Kit Learn", "Feature Extraction"],
    siteUrl: "#",
  },
  {
    id: "09",
    imgUrl: projectImg09,
    category: "AI",
    title: "DocuQuery",
    description:
      "Implemented a querying system using that extract precise information based on the user's question from provided pdf documents in a Conversational Q/A format. Reduced query time by 40%",
    technologies: ["NLP", "LangChain", "OpenAI", "Flask", "HTML", "CSS"],
    siteUrl: "#",
  },
  {
    id: "10",
    imgUrl: projectImg10,
    category: "UI/UX",
    title: "Google - Software Product Sprint",
    description:
      "Collaborated with Google Engineers to devise a Student Habit Tracking Web App using Java, JS, HTML, and CSS, leveraging Google Cloud Platform and its APIs, including App Engine and Datastore.",
    technologies: ["Java", "JS", "HTML", "CSS", "Google Cloud Platform", "NoSQL", "API"],
    siteUrl: "#",
  },

  {
    id: "11",
    imgUrl: projectImg11,
    category: "Web Design",
    title: "Neuromodulation Research",
    description:
      "Developed Supervised Machine Learning models (Linear Regression, KNN, Random Forest) and Neural Networks to predict UPDRS scores of 50+ Parkinson’s Disease patients from their wearable sensor data. Increased accuracy of these models by 93%.",
    technologies: ["Numpy", "Pandas", "Tensorflow", "Sci-kit Learn", "Matplotlib", "Seaborn"],
    siteUrl: "#",
  },
  {
    id: "12",
    imgUrl: projectImg12,
    category: "ux",
    title: "Aged-Macular Degeneration Research",
    description:
      "With Earl E. Bakken Medical Device Center, researching possible VR Solutions to help Aged-Macular Degeneration patients read faster. The aim is to warp the text around their blind spot and move it to the area of their newly perceived focal point. Optimized and reduced time by 44%.",
    technologies: ["Python", "OpenCV", "Unity"],
    siteUrl: "#",
  },
];

export default projects;