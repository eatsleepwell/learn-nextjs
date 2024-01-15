import Card from "@/components/card";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <div>Notifications</div>
        <div className="p-2 bg-slate-700 rounded-md text-slate-300">
          <Link href={"/complex-dashboard/archived"}>Archived</Link>
        </div>
      </div>
    </Card>
  );
};

export default Notification;
