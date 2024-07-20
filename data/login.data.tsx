import { IconEvelope, IconLock } from "@/assets/icons";

interface IFormData {
  Icon: React.ReactElement;
  placeHolder: string;
  show?: boolean;
}

export const formData: IFormData[] = [
  {
    Icon: <IconEvelope width={19.5} height={16.5} />,
    placeHolder: "example@email.com",
    show: false,
  },
  {
    Icon: <IconLock width={15.5} height={19.5} />,
    placeHolder: "***********",
    show: true,
  },
];
