const employees = [
  {
    id: "1",
    email: "employee1@email.com",
    password: "123",
    tasks: [
      {
        taskId: "1",
        title: "Finish Report",
        description: "Complete the monthly performance report.",
        date: "2024-11-07",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: "2",
        title: "Client Meeting",
        description: "Attend the client feedback session at 3 PM.",
        date: "2024-11-08",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: "3",
        title: "Update Website",
        description: "Fix the issues reported by QA team on the website.",
        date: "2024-11-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: "2",
    email: "employee2@email.com",
    password: "123",
    tasks: [
      {
        taskId: "1",
        title: "Product Research",
        description: "Conduct research on competitors' products.",
        date: "2024-11-07",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: "2",
        title: "Team Sync",
        description: "Sync with the team about the new project timeline.",
        date: "2024-11-08",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: "3",
        title: "Fix Bugs",
        description: "Resolve the bugs found in the last sprint's code.",
        date: "2024-11-10",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "3",
    email: "employee3@email.com",
    password: "123",
    tasks: [
      {
        taskId: "1",
        title: "Create Marketing Plan",
        description:
          "Develop a detailed marketing strategy for the new product.",
        date: "2024-11-07",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: "2",
        title: "Sales Presentation",
        description: "Prepare and present sales pitch to the client.",
        date: "2024-11-08",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskId: "3",
        title: "Customer Survey",
        description: "Analyze the results of the customer satisfaction survey.",
        date: "2024-11-09",
        category: "Customer Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: "4",
        title: "Website Content Update",
        description: "Update the product description on the website.",
        date: "2024-11-10",
        category: "Content Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "4",
    email: "employee4@email.com",
    password: "123",
    tasks: [
      {
        taskId: "1",
        title: "Team Collaboration",
        description: "Work with the design team on a new feature design.",
        date: "2024-11-07",
        category: "Collaboration",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: "2",
        title: "System Maintenance",
        description: "Perform regular system maintenance and checks.",
        date: "2024-11-08",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: "3",
        title: "Fix Database Issues",
        description:
          "Resolve the database connection issues reported by users.",
        date: "2024-11-09",
        category: "IT Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "5",
    email: "employee5@email.com",
    password: "123",
    tasks: [
      {
        taskId: "1",
        title: "Research New Tech",
        description:
          "Look into new technologies that could improve our product.",
        date: "2024-11-07",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: "2",
        title: "Prepare Training Material",
        description: "Create training materials for new team members.",
        date: "2024-11-08",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: "3",
        title: "Attend Conference",
        description: "Attend the annual tech conference in San Francisco.",
        date: "2024-11-09",
        category: "Events",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskId: "4",
        title: "Client Support",
        description:
          "Provide support to clients experiencing issues with the software.",
        date: "2024-11-10",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [{ id: "1", email: "employee1@email.com", password: "123" }];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  console.log(employeesData, adminData);
};
