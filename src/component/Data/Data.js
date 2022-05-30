// Sidebar imports
import {
    ViewGridIcon,
    UserIcon,
    BookOpenIcon,
    CogIcon,
    LogoutIcon,
    StopIcon
} from '@heroicons/react/solid';

// Sidebar Data
export const SidebarData = [
    {
        icon: ViewGridIcon,
        heading: 'Dashboard',
        link: 'dashboard',
    },
    {
        icon: UserIcon,
        heading: 'Profile',
        link: 'profile',
    },
    {
        icon: BookOpenIcon,
        heading: 'Course Reg',
        link: 'course',
    },
    {
        icon: CogIcon,
        heading: 'Settings',
        link: 'settings',
    },
    {
        icon: LogoutIcon,
        heading: 'Logout',
        link: '',
    },
];

export const NotificationData = [
    {
        icon: StopIcon,
        sender: 'RECTOR',
        message: "Message:  Hy {name} Welcome to Redeemer’s College of Technology and Management.",
        time: '18min',
        style: '#25CD6B',
    },
    {
        icon: StopIcon,
        sender: 'RECTOR',
        message: "Alert:  New card added this week check em out.",
        time: '34min',
        style: '#25CD6B',
    },
    {
        icon: StopIcon,
        sender: 'RECTOR',
        message: "Promotion:  Get 13% the price when you exchange bitcoin to cash.",
        time: '1hour',
        style: '#FF3D72',
    },
    {
        icon: StopIcon,
        sender: 'SCHOOL ADMIN',
        message: "Alert:  Sorry to see you go. You just unsubscribe from the newsletter.",
        time: '2hour',
        style: '#FFBE57',
    },
];