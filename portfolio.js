const resumeData = {
    "name": "Saurabh Kumar",
    "email": "2021umt0190@iitjammu.ac.in",
    "skills": "HTML, CSS, Java Script, C++, Python, SQL, Data Structure and Algorithms, ReactJs, Bootstrap, NodeJs, Django, Onshape",
    "education": "Bachelor's in Materials Engineering from IIT JAMMU",
    "experience": "INTERN(FIRST PRINCIPLES APPROACH ON HYDROGEN EMBRITTLEMENT IN STEELS) at TATA STEEL",
    "certifications": "SQL (Intermediate), SQL (Basics)",
    "projects": "Portfolio Website, WEATHER APP, Chatbot Integration, Responsive Movie APP",
    "hobbies": "Gaming, Coding, Traveling",
  };

  const getResponseFromResume = (query) => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("name")) {
      return `My name is ${resumeData.name}.`;
    } else if (lowerQuery.includes("email")) {
      return `You can contact me at ${resumeData.email}.`;
    } else if (lowerQuery.includes("skills")) {
      return `My skills include: ${resumeData.skills}.`;
    } else if (lowerQuery.includes("education")) {
      return `I completed my education in: ${resumeData.education}.`;
    } else if (lowerQuery.includes("experience")) {
      return `I have ${resumeData.experience}.`;
    } else if (lowerQuery.includes("certifications")) {
      return `Here are my certifications: ${resumeData.certifications}.`;
    } else if (lowerQuery.includes("projects")) {
      return `I've worked on these projects: ${resumeData.projects}.`;
    } else if (lowerQuery.includes("hobbies")) {
      return `My hobbies include: ${resumeData.hobbies}.`;
    } else {
      return "I'm sorry, I couldn't find that information in my resume.";
    }
  };

  const sendMessage = () => {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    if (!userInput) return;

    
    const userMessage = `<div style="text-align: right; color: blue; margin-bottom: 10px;">You: ${userInput}</div>`;
    chatBox.innerHTML += userMessage;
    chatBox.scrollTop = chatBox.scrollHeight;


    const botResponse = getResponseFromResume(userInput);
    const botMessage = `<div style="text-align: left; color: green; margin-bottom: 10px;">Bot: ${botResponse}</div>`;
    chatBox.innerHTML += botMessage;
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("user-input").value = "";
  };

  document.getElementById("send-button").addEventListener("click", sendMessage);
  document.getElementById("user-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });