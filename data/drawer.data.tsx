import { IDrawerIconData } from "@/interfaces";
import {
  IconLocation,
  IconLogout,
  IconMessageEdit,
  IconReceiptEdit,
  IconSetting,
  IconWallet,
} from "@/assets/icons";

export const drawIconData: IDrawerIconData[] = [
  {
    title: "Wallet",
    name: "wallet",
    drawerIcon: ({ color }) => (
      <IconWallet width={24} height={24} color={color} />
    ),
  },
  {
    title: "Track Order",
    name: "track",
    drawerIcon: ({ color }) => (
      <IconLocation width={24} height={24} color={color} />
    ),
  },
  {
    title: "My posts",
    name: "posts",
    drawerIcon: ({ color }) => (
      <IconMessageEdit width={24} height={24} color={color} />
    ),
  },
  {
    title: "Settings",
    name: "settings",
    drawerIcon: ({ color }) => (
      <IconSetting width={24} height={24} color={color} />
    ),
  },
  {
    title: "Live Support",
    name: "support",
    drawerIcon: ({ color }) => (
      <IconReceiptEdit width={24} height={24} color={color} />
    ),
  },
  {
    title: "Suggest features",
    name: "features",
    drawerIcon: ({ color }) => (
      <IconSetting width={24} height={24} color={color} />
    ),
  },
  {
    title: "Log-out",
    name: "logout",
    drawerIcon: ({ color }) => (
      <IconLogout width={24} height={24} color={color} />
    ),
  },
];

export const drawerItemListIcon = (name: string) => {
  let Icon = null;

  switch (name) {
    case "wallet":
      Icon = <IconWallet width={24} height={24} />;
      break;
    case "track":
      Icon = <IconLocation width={24} height={24} />;
      break;
    case "posts":
      Icon = <IconMessageEdit width={24} height={24} />;
      break;
    case "settings":
      Icon = <IconSetting width={24} height={24} />;
      break;
    case "support":
      Icon = <IconReceiptEdit width={24} height={24} />;
      break;
    case "features":
      Icon = <IconSetting width={24} height={24} />;
      break;
    case "logout":
      Icon = <IconLogout width={24} height={24} />;
      break;
    default:
      Icon = null;
      break;
  }

  return Icon;
};
