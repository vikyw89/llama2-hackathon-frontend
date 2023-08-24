"use client";
import { useRouter } from "next/navigation";
import { CashPhone } from "./components/animation/cashPhone";
import { Button } from "./components/button";
import { LandingCard } from "./components/landingCard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssistantIcon from "@mui/icons-material/Assistant";

const data = {
  title: `YOUR AI FINANCE ASSISTANT`,
  actionButton: "Try on Telegram",
  description: `Registration is open for early adopters`,
  features: [
    {
      title: "Analyze",
      description: "Have your spending habit, and investment analyzed",
      icon: <QueryStatsIcon fontSize="inherit" />,
    },
    {
      title: "Report",
      description: "Do a detailed report on your spending",
      icon: <AssessmentIcon fontSize="inherit" />,
    },
    {
      title: "Plan",
      description: "Create a customized budget plan for you",
      icon: <NotificationImportantIcon fontSize="inherit" />,
    },
    {
      title: "Notify",
      description: "Get notified when you overspent",
      icon: <NotificationsIcon fontSize="inherit" />,
    },
    {
      title: "Help",
      description: "Help you achieving your financial goal",
      icon: <AssistantIcon fontSize="inherit" />,
    },
  ],
};

export default function Home() {
  const router = useRouter();
  const buttonClickHandler = () => {
    router.push("https://telegram.me/BuddyGPTBot");
  };
  return (
    <main className="z-0 flex h-full w-full flex-col items-center">
      <div className="z-10 grid h-screen max-w-7xl place-content-center items-center p-5 sm:grid-cols-2 ">
        <div className="rounded-box z-20 grid gap-5 p-2 text-center sm:col-start-1 sm:text-left">
          <div className=" cursor-default rounded bg-gradient-to-br from-cyan-800 via-fuchsia-800 to-neutral-100 bg-clip-text font-sans text-6xl font-bold text-transparent caret-pink-600">
            {data.title}
          </div>
          <div className="cursor-default text-base font-normal">
            {data.description}
          </div>
          <div className="">
            <Button
              data={{ name: data.actionButton }}
              event={{ click: buttonClickHandler }}
              className="btn-primary w-fit"
            />
          </div>
        </div>
        <div className="w-ful row-start-1 grid aspect-square place-items-center sm:col-start-2">
          <CashPhone />
        </div>
      </div>
      <div className="grid w-full place-items-center shadow-md ">
        <div
          className="grid w-full max-w-7xl cursor-default select-none justify-items-center gap-5 overflow-x-scroll p-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          }}
        >
          {data.features.map((v, i) => {
            return (
              <LandingCard
                title={v.title}
                description={v.description}
                key={i}
                icon={v.icon}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
