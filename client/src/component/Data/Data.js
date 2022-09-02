// Sidebar imports
import {
  ViewGridIcon,
  UserIcon,
  BookOpenIcon,
  CogIcon,
  LogoutIcon,
  StopIcon,
  PencilIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";

// Sidebar Data
export const SidebarData = [
  {
    icon: ViewGridIcon,
    heading: "Dashboard",
    link: "dashboard",
  },
  {
    icon: UserIcon,
    heading: "Profile",
    link: "profile",
  },
  {
    icon: BookOpenIcon,
    heading: "Course",
    link: "course",
  },
  {
    icon: CogIcon,
    heading: "Settings",
    link: "settings",
  },
  {
    icon: LogoutIcon,
    heading: "Logout",
    link: "#!",
  },
];

export const NotificationData = [
  {
    icon: StopIcon,
    sender: "RECTOR",
    message:
      "Message: Hey {name} Welcome to Redeemer’s College of Technology and Management.",
    time: "18min",
    style: "text-rectem-green h-3 w-3",
  },
  {
    icon: StopIcon,
    sender: "RECTOR",
    message: "Alert: New card added this week check em out.",
    time: "34min",
    style: "text-rectem-green h-3 w-3",
  },
  {
    icon: StopIcon,
    sender: "RECTOR",
    message: "Promotion: Get 13% the price when you exchange bitcoin to cash.",
    time: "1hour",
    style: "text-rectem-green h-3 w-3",
  },
  {
    icon: StopIcon,
    sender: "SCHOOL ADMIN",
    message:
      "Alert: Sorry to see you go. You just unsubscribe from the newsletter.",
    time: "2hour",
    style: "text-rectem-green h-3 w-3",
  },
];

export const FormHeader = [
  {
    icon: "",
    check: CheckCircleIcon,
    header: "Student data form",
    edit: PencilIcon,
  },
  {
    icon: "",
    check: CheckCircleIcon,
    header: "Academic Certificate form",
    edit: PencilIcon,
  },
  {
    icon: "",
    check: CheckCircleIcon,
    header: "Student bio",
    edit: PencilIcon,
  },
  {
    icon: "",
    check: CheckCircleIcon,
    header: "Medical report",
    edit: PencilIcon,
  },
  {
    icon: "",
    check: CheckCircleIcon,
    header: "Payment",
    edit: PencilIcon,
  },
];
