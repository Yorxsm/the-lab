"use client";

import React from 'react';

// Icon wrapper for consistent sizing and styling
const IconWrapper = ({ children, className = "", size = "1em" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size, height: size }}
        className={className}
    >
        {children}
    </svg>
);

// Users / Team icon
export const UsersIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconWrapper>
);

// Lightning bolt / Speed icon
export const BoltIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none" />
    </IconWrapper>
);

// Globe / World icon
export const GlobeIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </IconWrapper>
);

// Money / Cost icon
export const CoinIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="12" x2="12" y2="8" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </IconWrapper>
);

// Robot icon
export const RobotIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <circle cx="8" cy="14" r="2" fill="currentColor" stroke="none" />
        <circle cx="16" cy="14" r="2" fill="currentColor" stroke="none" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
        <line x1="9" y1="20" x2="9" y2="22" />
        <line x1="15" y1="20" x2="15" y2="22" />
    </IconWrapper>
);

// Factory / Building icon
export const FactoryIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M3 21h18" />
        <path d="M5 21V7l6 4V7l6 4V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v17" />
        <path d="M9 21v-4h4v4" />
    </IconWrapper>
);

// Ticket icon
export const TicketIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
    </IconWrapper>
);

// Handshake / Partnership icon
export const HandshakeIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="m11 17 2 2a1 1 0 0 0 1.4-.4" />
        <path d="M16.3 10a6.3 6.3 0 0 0-8.4.9l-2.6 2.6a1 1 0 0 0 0 1.4L7 16.5a1 1 0 0 0 1.4 0l.9-.9" />
        <path d="m20 9-1.4 1.4a1 1 0 0 1-1.4 0l-.4-.4" />
        <path d="M18.9 11.1 21 9l-3-3-2.1 2.1" />
        <path d="m3 15 3 3" />
        <path d="M3 9l3-3 2.5 2.5" />
    </IconWrapper>
);

// Wrench / Tools icon
export const WrenchIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </IconWrapper>
);

// Graduation cap / Student icon
export const GraduationIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 4 6 4s6-2 6-4v-5" />
    </IconWrapper>
);

// Building / University icon
export const UniversityIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
        <path d="M10 9h4" />
        <path d="M10 13h4" />
    </IconWrapper>
);

// Target icon
export const TargetIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </IconWrapper>
);

// Building / Government icon
export const GovernmentIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M3 21h18" />
        <path d="M4 21V10l8-7 8 7v11" />
        <path d="M7 21v-6h4v6" />
        <path d="M13 21v-6h4v6" />
    </IconWrapper>
);

// Chart / Investment icon  
export const ChartIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M3 21h18" />
    </IconWrapper>
);

// Gamepad icon
export const GamepadIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="17" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    </IconWrapper>
);

// Brain icon
export const BrainIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M9.5 2a2.5 2.5 0 0 1 2.45 2A2.5 2.5 0 0 1 14.5 2a2.5 2.5 0 0 1 2.45 3H17a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.45 3A2.5 2.5 0 0 1 12 20a2.5 2.5 0 0 1-2.55-2 2.5 2.5 0 0 1-2.45-3A2.5 2.5 0 0 1 4.5 12.5 2.5 2.5 0 0 1 7 10a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h.05A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" stroke="none" />
    </IconWrapper>
);

// Joystick icon
export const JoystickIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M21 21H3v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        <path d="M12 17V7" />
        <circle cx="12" cy="5" r="3" />
    </IconWrapper>
);

// Gear / Settings icon
export const GearIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </IconWrapper>
);

// Chat / Message icon
export const ChatIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </IconWrapper>
);

// Antenna / Signal icon
export const AntennaIcon = ({ className, size }) => (
    <IconWrapper className={className} size={size}>
        <path d="M12 20v-8" />
        <path d="M18 9a6 6 0 0 0-12 0" />
        <path d="M21 6a9 9 0 0 0-18 0" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </IconWrapper>
);
