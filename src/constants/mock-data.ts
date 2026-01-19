export interface ISubject extends BaseRecord {
    code: string;
    name: string;
    department: string;
    description: string;
}

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Fundamental concepts of programming, algorithms, and data structures using Python."
    },
    {
        id: 2,
        code: "MATH202",
        name: "Linear Algebra",
        department: "Mathematics",
        description: "Study of vectors, vector spaces, linear transformations, and matrices."
    },
    {
        id: 3,
        code: "PHY305",
        name: "Quantum Mechanics I",
        department: "Physics",
        description: "Introduction to the principles of quantum mechanics, wave functions, and the Schrödinger equation."
    }
];