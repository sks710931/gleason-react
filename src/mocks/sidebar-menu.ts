import { SidebarMenuProps } from "../components/sidebar-menu/sidebar-menu.component";

export const sidebarMenus : SidebarMenuProps[] = [
  {
    icon: "post_add",
    isParent: false,
    menuTitle: "Add Post",
    routeToNavigate: "add-post",
  },
  {
    icon: "article",
    isParent: false,
    menuTitle: "Posts",
    routeToNavigate: "user-management",
  },
  {
    icon: "checklist",
    isParent: false,
    menuTitle: "Categories",
    routeToNavigate: "user-management",
  },
  {
    icon: "photo_library",
    isParent: false,
    menuTitle: "Images",
    routeToNavigate: "user-management",
  },
  {
    icon: "record_voice_over",
    isParent: false,
    menuTitle: "Authors",
    routeToNavigate: "user-management",
  },
  {
    icon: "settings",
    isParent: false,
    menuTitle: "Settings",
    routeToNavigate: "user-management",
  }
]