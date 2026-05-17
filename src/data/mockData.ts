export type Role = "admin" | "staff" | "client";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  lastActive: string;
  status: "active" | "inactive";
}

export interface TradeRecord {
  id: string;
  client: string;
  type: "import" | "export";
  origin: string;
  destination: string;
  value: number;
  status: "pending" | "in-transit" | "cleared" | "delivered";
  date: string;
}

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  ip: string;
}

export const demoUsers: Record<string, { password: string; user: User }> = {
  "admin@nexustrade.com": {
    password: "admin123",
    user: {
      id: "1",
      name: "Alex Rivera",
      email: "admin@nexustrade.com",
      role: "admin",
      lastActive: "Just now",
      status: "active",
    },
  },
  "staff@nexustrade.com": {
    password: "staff123",
    user: {
      id: "2",
      name: "Jordan Kim",
      email: "staff@nexustrade.com",
      role: "staff",
      lastActive: "2h ago",
      status: "active",
    },
  },
  "client@acme.com": {
    password: "client123",
    user: {
      id: "3",
      name: "Morgan Chen",
      email: "client@acme.com",
      role: "client",
      lastActive: "1d ago",
      status: "active",
    },
  },
};

export const tradeRecords: TradeRecord[] = [
  { id: "TR-2401", client: "Acme Global", type: "export", origin: "Mumbai", destination: "Rotterdam", value: 284500, status: "in-transit", date: "2026-05-14" },
  { id: "TR-2402", client: "Nordic Supply", type: "import", origin: "Hamburg", destination: "Chennai", value: 156200, status: "cleared", date: "2026-05-12" },
  { id: "TR-2403", client: "Pacific Foods", type: "export", origin: "Singapore", destination: "Los Angeles", value: 412800, status: "delivered", date: "2026-05-10" },
  { id: "TR-2404", client: "EuroTextiles", type: "import", origin: "Milan", destination: "Dubai", value: 89300, status: "pending", date: "2026-05-15" },
  { id: "TR-2405", client: "Acme Global", type: "import", origin: "Shanghai", destination: "Mumbai", value: 521000, status: "in-transit", date: "2026-05-13" },
  { id: "TR-2406", client: "Atlas Minerals", type: "export", origin: "Perth", destination: "Tokyo", value: 198750, status: "cleared", date: "2026-05-11" },
  { id: "TR-2407", client: "GreenHarvest", type: "export", origin: "São Paulo", destination: "Antwerp", value: 67340, status: "pending", date: "2026-05-16" },
  { id: "TR-2408", client: "Nordic Supply", type: "export", origin: "Oslo", destination: "New York", value: 334200, status: "delivered", date: "2026-05-08" },
];

export const activityLogs: ActivityLog[] = [
  { id: "1", user: "Alex Rivera", action: "Exported Q2 report", timestamp: "2026-05-17 09:42", ip: "192.168.1.10" },
  { id: "2", user: "Jordan Kim", action: "Updated TR-2404 status", timestamp: "2026-05-17 09:15", ip: "192.168.1.22" },
  { id: "3", user: "Morgan Chen", action: "Viewed shipment TR-2401", timestamp: "2026-05-16 18:30", ip: "203.45.12.8" },
  { id: "4", user: "Alex Rivera", action: "Added user: Sam Patel", timestamp: "2026-05-16 14:02", ip: "192.168.1.10" },
  { id: "5", user: "Jordan Kim", action: "Filtered trade records", timestamp: "2026-05-16 11:55", ip: "192.168.1.22" },
  { id: "6", user: "Morgan Chen", action: "Downloaded invoice PDF", timestamp: "2026-05-15 16:20", ip: "203.45.12.8" },
];

export const allUsers: User[] = [
  demoUsers["admin@nexustrade.com"].user,
  demoUsers["staff@nexustrade.com"].user,
  demoUsers["client@acme.com"].user,
  { id: "4", name: "Sam Patel", email: "sam@nexustrade.com", role: "staff", lastActive: "3d ago", status: "inactive" },
  { id: "5", name: "Elena Voss", email: "elena@nordic.com", role: "client", lastActive: "5h ago", status: "active" },
];

export const monthlyStats = [
  { month: "Jan", imports: 42, exports: 38, revenue: 1.2 },
  { month: "Feb", imports: 48, exports: 45, revenue: 1.4 },
  { month: "Mar", imports: 55, exports: 52, revenue: 1.6 },
  { month: "Apr", imports: 61, exports: 58, revenue: 1.8 },
  { month: "May", imports: 58, exports: 64, revenue: 2.1 },
];
