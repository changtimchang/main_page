const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "BOM",
        href: "/",
      },
      {
        icon: "/teachers.png",
        label: "CAD",
        href: "/",
      },
      {
        icon: "/students.png",
        label: "SCAN",
        href: "/",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Prediction",
        href: "/",
      },
      {
        icon: "/setting.png",
        label: "Id_Tracking",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
