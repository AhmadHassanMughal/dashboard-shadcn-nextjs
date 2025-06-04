import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  DollarSign,
  FileText,
  Home,
  ListCheck,
  ListIcon,
  PersonStanding,
  Plus,
  Projector,
  Settings,
  User,
  User2,
  Users,
} from "lucide-react";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        type: "plain-menu-item",
        icon: Home,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        type: "collapsible-menu-item",
        icon: User,
        label: "Users",
        href: "/list/teachers",
        subItems: [
          {
            type: "plain-menu-item",
            icon: ListCheck,
            label: "Listing",
            href: "/users",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            type: "plain-menu-item",
            icon: DollarSign,
            label: "Payments",
            href: "/payments",
            visible: ["admin", "teacher"],
          },
        ],
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        type: "collapsible-menu-item",
        icon: PersonStanding,
        label: "Teachers",
        href: "/list/teachers",
        subItems: [
          {
            type: "plain-menu-item",
            icon: Projector,
            label: "All Projects",
            href: "/teachers/projects",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            type: "plain-menu-item",
            icon: User,
            label: "Main Teachers",
            href: "/teachers/main",
            visible: ["admin", "teacher"],
          },
        ],
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        type: "collapsible-menu-item",
        icon: Users,
        label: "Students",
        href: "/list/students",
        subItems: [
          {
            type: "plain-menu-item",
            icon: BookOpen,
            label: "Student List",
            href: "/students/list",
            visible: ["admin", "teacher"],
          },
          {
            type: "plain-menu-item",
            icon: FileText,
            label: "Reports",
            href: "/students/reports",
            visible: ["admin"],
          },
        ],
        visible: ["admin", "teacher"],
      },
      {
        type: "plain-menu-item",
        icon: Settings,
        label: "Settings",
        href: "/settings",
        visible: ["admin"],
      },
    ],
  },
];

const AppSidebar = () => {
  let role = "admin";
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"}>
                <Image src={"/favicon.ico"} alt="logo" width={20} height={20} />
                <span>Menufy</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((item, key) => (
          <SidebarGroup key={key}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((i) => {
                  if (!i.visible.includes(role)) return null;

                  if (i.type === "plain-menu-item") {
                    return (
                      <SidebarMenuItem key={i.label}>
                        <SidebarMenuButton asChild>
                          <Link href={i.href}>
                            <i.icon />
                            <span>{i.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  } else {
                    return (
                      <Collapsible
                        key={i.label}
                        defaultOpen
                        className="group/collapsible"
                      >
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                              <i.icon />
                              <span>{i.label}</span>
                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                        </SidebarMenuItem>

                        <CollapsibleContent>
                          {i.subItems?.map((subItem) =>
                            subItem.visible.includes(role) ? (
                              <SidebarMenuItem key={subItem.label}>
                                <SidebarMenuButton asChild>
                                  <Link href={subItem.href}>
                                    <subItem.icon />
                                    <span>{subItem.label}</span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ) : null
                          )}
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  }
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* COLLAPSIBLE */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Collapsible
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Projector />
                        <span>See All Project</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Plus />
                        <span>Add Project</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus />
            <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Projector />
                    <span>See All Project</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Plus />
                    <span>Add Project</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* NESTED */}
        <SidebarGroup>
          <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/#">
                    <Plus />
                    <span>Add Project</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href="/#">
                    <Plus />
                    <span>Add Category</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
