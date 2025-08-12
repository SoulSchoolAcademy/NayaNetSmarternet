import Topbar from "../../components/Topbar";
import HubSidebar from "../../components/HubSidebar";

export default function HubLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <HubSidebar />
      <div className="flex flex-col">
        <Topbar />
        <main className="container">{children}</main>
      </div>
    </div>
  );
}
