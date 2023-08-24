import { ReactNode } from "react";
import { Header } from "./components/header";
// import { Footer } from "./components/footer";
import { Background1 } from "./components/background/background1";
import { Background2 } from "./components/background/background2";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-full w-full place-items-center overflow-y-scroll text-base-content">
      <div className="fixed left-0 right-0 top-0 z-20 grid place-items-center shadow-md backdrop-blur-md">
        <Header />
      </div>
      <div className="z-0 h-full w-full">{children}</div>
      {/* <div className="fixed bottom-0 left-0 right-0 grid place-items-center">
        <Footer />
      </div> */}
      <div className="fixed inset-0 -z-[9] grid place-items-center">
        <Background1 />
      </div>
      <div className="fixed inset-0 -z-10 grid">
        <Background2 />
      </div>
    </div>
  );
}
