import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

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
        icon: "/teacher.png",
        label: "CAD",
        href: "/",
      },
      {
        icon: "/student.png",
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
      },
    ],
  },
];


const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
