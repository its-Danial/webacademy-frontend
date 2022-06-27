interface categoryItemInterface {
    [key: string]: string[];
}

interface categoryItemsInterface extends Array<categoryItemInterface> {
}

const categories: categoryItemsInterface = [
    {"Web Development": ["Javascript", "React", "Angular", "CSS", "Node.Js", "PHP", "HTML5", "Vue JS"]},
    {"Data Science": ["Python", "Machine Learning", "Deep Learning", "Artificial Intelligence", "R (programming language", "Statistics", "Natural Language Processing"]},
    {"Mobile Development": ["Google Flutter", "iOS Development", "Android Development", "Swift", "React Native", "Dart (programming language)", "Kotlin", "Mobile App Development", "SwiftUI"]},
    {"Programming Languages": ["Python", "Java", "C#", "React", "C++", "JavaScript", "Go (programming language", "Spring Framework", "C (programming language)"]},
    {"Game Development": ["Unity", "Unreal Engine", "Game Development Fundamentals", "C#", "3D Game Development", "C++", "Unreal Engine Blueprints", "2D Game Development", "Blender"]},
    {"Database Design & Development": ["SQL", "MySQL", "Oracle SQL", "Database Management", "MongoDB", "Apache Kafka", "SQL Server", "Database Programming", "PostgreSQL"]},
    {"Software Testing": ["Selenium WebDriver", "Java", "Automation Testing", "Selenium Testing Framework", "API Testing", "Postman", "Javascript", "Cypress.io"]},
    {"Software Engineering": ["Data Structures", "Coding Interview", "Algorithms", "Microservice", "Kubernates", "Sertified Kubernetes Application Developer (CKAD)", "Python", "Software Architecture", "Apache Airflow"]},
    {"Software Development Tools": ["Git", "Docker", "Kubernetes", "JIRA", "DevOps", "Confluence", "Jenkins", "Node.Js", "Continious Integration"]},
    {"No-Code Development": ["Elementor", "Bubble Visual Programming", "WordPress", " Wix", "Web Design", "Artificial Intelligence", "Airtable", "Microsoft Power Apps", "Microsoft Power Automate"]}
]

export {categories};
export type { categoryItemInterface, categoryItemsInterface };



