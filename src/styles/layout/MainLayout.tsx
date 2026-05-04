import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">{children}</main>
    </div>
  );
}
