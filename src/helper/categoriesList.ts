interface categoryItem {
    [key: string]: string[];
}
interface categoryItems extends Array<categoryItem>{}

const categories: categoryItems = [
    {"Web Development": ["JavaScript", "React", "Angular", "CSS", "Node.JS", "PHP"]},
    {"Data Science": ["Python", "Machine Learning", "Deep Learning", "Data Analysis"]}
];

export default categories;