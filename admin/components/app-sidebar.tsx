import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ChefHat,
  Users,
  BookOpen,
  Tags,
  Star,
  MessageSquare,
  BarChart3,
  Settings,
  Shield,
  Database,
  Image,
  Clock,
  TrendingUp,
  Bell,
  FileText,
  Calendar,
  LogOut,
  User,
} from "lucide-react";

export function AppSidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      items: [
        {
          title: "Overview",
          url: "/feature/dashboard",
          icon: BarChart3,
        },
      ],
    },
    {
      title: "Recipe Management",
      items: [
        {
          title: "All Recipes",
          url: "/feature/recipes",
          icon: BookOpen,
        },
        {
          title: "Add New Recipe",
          url: "/feature/recipes/create",
          icon: ChefHat,
        },
        {
          title: "Recipe Categories",
          url: "/feature/categories",
          icon: Tags,
        },
        {
          title: "Cooking Methods",
          url: "/feature/cooking-methods",
          icon: Clock,
        },
      ],
    },
    {
      title: "User Management",
      items: [
        {
          title: "All Users",
          url: "/feature/users",
          icon: Users,
        },
        {
          title: "Chefs & Authors",
          url: "/feature/chefs",
          icon: ChefHat,
        },
      ],
    },
    {
      title: "Content Management",
      items: [
        {
          title: "Reviews & Ratings",
          url: "/feature/reviews",
          icon: Star,
        },
        {
          title: "Comments",
          url: "/feature/comments",
          icon: MessageSquare,
        },
        {
          title: "Media Library",
          url: "/feature/media",
          icon: Image,
        },
        {
          title: "Blog Posts",
          url: "/feature/blog",
          icon: FileText,
        },
      ],
    },
    {
      title: "System",
      items: [
        {
          title: "Notifications",
          url: "/feature/notifications",
          icon: Bell,
        },
        {
          title: "Reports",
          url: "/feature/reports",
          icon: Calendar,
        },
        {
          title: "Settings",
          url: "/feature/settings",
          icon: Settings,
        },
      ],
    },
  ];

  return (
    <Sidebar className="border-r ">
      <SidebarHeader className="p-4 ">
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-orange-500" />
          <h2 className="text-lg font-semibold">Recipe Admin</h2>
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-hidden ">
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider ">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                href="/admin/profile"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Admin Profile</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                href="/logout"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
