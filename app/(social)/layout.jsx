import Topbar from "../../components/Topbar";
import SocialSidebar from "../../components/SocialSidebar";

export default function SocialLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <SocialSidebar />
      <div className="flex flex-col">
        <Topbar />
        <main className="container">{children}</main>
      </div>
    </div>
  );
}
