import projectImg01 from "../project-images/project-01.png";
import projectImg02 from "../project-images/project-02.png";
import projectImg03 from "../project-images/project-03.png";
import projectImg04 from "../project-images/project-04.png";
import projectImg05 from "../project-images/project-05.png";
import projectImg06 from "../project-images/project-06.png";

const projects = [
  {
    id: "01",
    imgUrl: projectImg01,
    category: "ML",
    title: "Movie Recommender System",
    description:
      "Created a Content-based Filtering Model and a Collaborative Filtering Model using Linear Algebra techniques – SVD for Matrix Factorization, PCA Dimensionality Reduction, and Cosine Similarity Function. Built a Matrix Factorization algorithm from scratch and optimized accuracy by 70% and response time by 30%.",
    technologies: ["Pandas", "Numpy", "SciKit-Learn", "Linear Algebra", "Feature Extraction"],
    siteUrl: "#",
  },
  
  {
    id: "03",
    imgUrl: projectImg02,
    category: "ML",
    title: "Breast Cancer Detection Model",
    description:
      "Modeled Supervised ML algorithms (Random Forest, SVM, KNN, MLP) to classify Breast Cancer into malignant or benign after using correlation heatmaps, histogram plotting, and confusion matrix to assess accuracy. Built Random Forest and Linear SVM algorithms from scratch and achieved accuracy of 90% and 80% respectively.",
    technologies: ["Numpy", "Pandas", "Sci-Kit Learn", "Feature Extraction"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: projectImg03,
    category: "AI",
    title: "DocuQuery",
    description:
      "Implemented a querying system using that extract precise information based on the user's question from provided pdf documents in a Conversational Q/A format. Reduced query time by 40%",
    technologies: ["NLP", "LangChain", "OpenAI", "Flask", "HTML", "CSS"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: projectImg04,
    category: "UI/UX",
    title: "Google - Software Product Sprint",
    description:
      "Collaborated with Google Engineers to devise a Student Habit Tracking Web App using Java, JS, HTML, and CSS, leveraging Google Cloud Platform and its APIs, including App Engine and Datastore.",
    technologies: ["Java", "JS", "HTML", "CSS", "Google Cloud Platform", "NoSQL", "API"],
    siteUrl: "#",
  },

  {
    id: "05",
    imgUrl: projectImg05,
    category: "Web Design",
    title: "Neuromodulation Research",
    description:
      "Developed Supervised Machine Learning models (Linear Regression, KNN, Random Forest) and Neural Networks to predict UPDRS scores of 50+ Parkinson’s Disease patients from their wearable sensor data. Increased accuracy of these models by 93%.",
    technologies: ["Numpy", "Pandas", "Tensorflow", "Sci-kit Learn", "Matplotlib", "Seaborn"],
    siteUrl: "#",
  },
  {
    id: "06",
    imgUrl: projectImg06,
    category: "ux",
    title: "Aged-Macular Degeneration Research",
    description:
      "With Earl E. Bakken Medical Device Center, researching possible VR Solutions to help Aged-Macular Degeneration patients read faster. The aim is to warp the text around their blind spot and move it to the area of their newly perceived focal point. Optimized and reduced time by 44%.",
    technologies: ["Python", "OpenCV", "Unity"],
    siteUrl: "#",
  },
];

export default projects;