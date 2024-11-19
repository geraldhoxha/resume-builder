import { Template } from "@pdfme/common";

export const ResumeTemplate1 = (): Template => ({
  basePdf: {
    width: 595, // A4 width in points
    height: 842, // A4 height in points
    padding: [40, 40, 40, 40], // padding for the document in points
  },
  schemas: [
    {
      headerName: {
        type: "text",
        content: "Jane Doe",
        position: { x: 50, y: 30 },
        width: 500,
        height: 40,
        rotate: 0,
        opacity: 1,
        readOnly: true,
        fontSize: 28,
        fontWeight: "bold",
      },
      headerTitle: {
        type: "text",
        content: "Creative Full Stack Developer",
        position: { x: 50, y: 80 },
        width: 500,
        height: 20,
        fontSize: 18,
        opacity: 0.9,
        color: "#4A90E2",
        fontStyle: "italic",
      },

      // Contact Section with Icons
      iconEmail: {
        type: "image",
        icon: "📧",
        position: { x: 50, y: 120 },
        width: 15,
        height: 15,
        readOnly: true,
      },
      contactEmail: {
        type: "text",
        content: "janedoe@example.com",
        position: { x: 70, y: 120 },
        width: 200,
        height: 15,
      },
      iconPhone: {
        type: "image",
        icon: "📞",
        position: { x: 50, y: 140 },
        width: 15,
        height: 15,
        readOnly: true,
      },
      contactPhone: {
        type: "text",
        content: "(123) 456-7890",
        position: { x: 70, y: 140 },
        width: 200,
        height: 15,
      },
      iconLinkedIn: {
        type: "image",
        icon: "🔗",
        position: { x: 50, y: 160 },
        width: 15,
        height: 15,
        readOnly: true,
      },
      contactLinkedIn: {
        type: "text",
        content: "linkedin.com/in/janedoe",
        position: { x: 70, y: 160 },
        width: 300,
        height: 15,
        color: "#0077b5",
      },

      // Decorative Separator Line
      separator: {
        type: "line",
        position: { x: 50, y: 190 },
        width: 500,
        height: 1,
        color: "#4A90E2",
      },

      // Professional Summary Section
      summaryHeader: {
        type: "text",
        content: "Professional Summary",
        position: { x: 50, y: 210 },
        width: 500,
        height: 20,
        fontWeight: "bold",
        fontSize: 16,
        color: "#333333",
      },
      summaryText: {
        type: "text",
        content: "Passionate developer with 6+ years of experience in creating innovative and scalable web solutions. Specialized in modern frameworks and technologies.",
        position: { x: 50, y: 240 },
        width: 500,
        height: 40,
        fontSize: 12,
        opacity: 0.85,
      },

      // Skills Section with Decorative Dots
      skillsHeader: {
        type: "text",
        content: "Skills",
        position: { x: 50, y: 300 },
        width: 500,
        height: 20,
        fontWeight: "bold",
        fontSize: 16,
        color: "#333333",
      },
      skill1: {
        type: "text",
        content: "● JavaScript ● React ● Node.js",
        position: { x: 50, y: 330 },
        width: 500,
        height: 15,
        fontSize: 12,
      },
      skill2: {
        type: "text",
        content: "● SQL ● CSS ● HTML ● Git",
        position: { x: 50, y: 350 },
        width: 500,
        height: 15,
        fontSize: 12,
      },
      skill3: {
        type: "text",
        content: "● REST APIs ● Express ● MongoDB",
        position: { x: 50, y: 370 },
        width: 500,
        height: 15,
        fontSize: 12,
      },

      // Experience Section with Dates and Bullets
      experienceHeader: {
        type: "text",
        content: "Experience",
        position: { x: 50, y: 420 },
        width: 500,
        height: 20,
        fontWeight: "bold",
        fontSize: 16,
        color: "#333333",
      },
      job1Title: {
        type: "text",
        content: "Senior Developer - ABC Tech",
        position: { x: 50, y: 450 },
        width: 300,
        height: 15,
        fontWeight: "bold",
        fontSize: 14,
      },
      job1Date: {
        type: "text",
        content: "June 2019 - Present",
        position: { x: 400, y: 450 },
        width: 150,
        height: 15,
        fontSize: 12,
        opacity: 0.7,
      },
      job1Description1: {
        type: "text",
        content: "• Lead developer in a team of 5, creating an e-commerce platform with advanced analytics.",
        position: { x: 50, y: 470 },
        width: 500,
        height: 15,
        fontSize: 12,
        opacity: 0.9,
      },
      job1Description2: {
        type: "text",
        content: "• Implemented optimized RESTful APIs, integrated with cloud services.",
        position: { x: 50, y: 490 },
        width: 500,
        height: 15,
        fontSize: 12,
        opacity: 0.9,
      },

      // Education Section with Decorative Icons
      educationHeader: {
        type: "text",
        content: "Education",
        position: { x: 50, y: 550 },
        width: 500,
        height: 20,
        fontWeight: "bold",
        fontSize: 16,
        color: "#333333",
      },
      iconDegree: {
        type: "image",
        icon: "🎓",
        position: { x: 50, y: 580 },
        width: 15,
        height: 15,
      },
      educationDegree: {
        type: "text",
        content: "Bachelor of Science in Computer Science",
        position: { x: 70, y: 580 },
        width: 500,
        height: 15,
        fontSize: 12,
      },
      educationInstitution: {
        type: "text",
        content: "University of Technology, Graduated May 2017",
        position: { x: 50, y: 600 },
        width: 500,
        height: 15,
        fontSize: 12,
        opacity: 0.8,
      },
    },
  ],
})
