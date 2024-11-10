import Announcement from "@/components/Announcement"
import ConSummary from "@/components/ConSummary";
import EventCalendar from "@/components/EventCalendar";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">

        {/* CONTENTS SUMMARY */}
        <div className="flex gap-4 justify-between flex-wrap">
          <ConSummary type="BOM"/>
          <ConSummary type="CAD"/>
          <ConSummary type="SCAN"/>
        </div>

        {/* MIDDLE CHART */}

      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage