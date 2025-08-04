
export interface NavLink {
    title: string;
    href: string;
    description?: string;
    image?: React.ReactNode;
    items?: NavLinkItem[];
}

export interface NavLinkItem {
    title: string;
    href: string;
    description: string;
    icon?: React.ReactNode;
}
