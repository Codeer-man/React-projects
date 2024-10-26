const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription: "Complete the financial report for Q3.",
        taskDate: "2024-10-21",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend a meeting with client X.",
        taskDate: "2024-10-19",
        category: "Meetings",
      },
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Team Presentation",
        taskDescription: "Prepare and present quarterly results to the team.",
        taskDate: "2024-10-22",
        category: "Presentations",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the codebase for the new feature.",
        taskDate: "2024-10-22",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix bugs reported in the latest release.",
        taskDate: "2024-10-18",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Data Migration",
        taskDescription: "Migrate data from old database to new system.",
        taskDate: "2024-10-15",
        category: "Database",
      },
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Perform routine server maintenance.",
        taskDate: "2024-10-23",
        category: "Infrastructure",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Schedule and perform database backups.",
        taskDate: "2024-10-19",
        category: "Database",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Social Media Update",
        taskDescription: "Post updates on the company’s social media channels.",
        taskDate: "2024-10-22",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Create Campaign",
        taskDescription: "Create a new marketing campaign for product X.",
        taskDate: "2024-10-20",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Ad Budget Proposal",
        taskDescription:
          "Prepare a proposal for the ad budget for next quarter.",
        taskDate: "2024-10-18",
        category: "Marketing",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Website Redesign",
        taskDescription: "Redesign the company website.",
        taskDate: "2024-10-22",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Create Mockups",
        taskDescription: "Create design mockups for the new product.",
        taskDate: "2024-10-16",
        category: "Design",
      },
    ],
  },
];

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees') || '[]')
  const admin = JSON.parse(localStorage.getItem('admin') || '{}')

  return { admin, employees }
}