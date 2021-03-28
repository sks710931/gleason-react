import { SidebarMenuProps } from "../components/sidebar-menu/sidebar-menu.component";

export const sidebarMenus : SidebarMenuProps[] = [
  {
    icon: "dashboard",
    isParent: false,
    menuTitle: "Dashboard",
    routeToNavigate: "dashboard",
    isIconMaterial: true,
  },{
    icon: "post_add",
    isParent: false,
    menuTitle: "Add Post",
    routeToNavigate: "add-post",
    isIconMaterial: true,
  },
  {
    icon: "fas fa-blog",
    isParent: false,
    menuTitle: "Posts",
    routeToNavigate: "all-posts",
    isIconMaterial: false,
  },
  {
    icon: "checklist",
    isParent: false,
    menuTitle: "Categories",
    routeToNavigate: "categories",
    isIconMaterial: true,
  },
  {
    icon: "photo_library",
    isParent: false,
    menuTitle: "Images",
    routeToNavigate: "images-library",
    isIconMaterial: true,
  },
  {
    icon: "record_voice_over",
    isParent: false,
    menuTitle: "Authors",
    routeToNavigate: "authors",
    isIconMaterial: true,
  },
  {
    icon: "message",
    isParent: false,
    menuTitle: "Blog Messages",
    routeToNavigate: "authors",
    isIconMaterial: true,
  },
  {
    icon: "settings",
    isParent: false,
    menuTitle: "Settings",
    routeToNavigate: "settings",
    isIconMaterial: true,
  }
]