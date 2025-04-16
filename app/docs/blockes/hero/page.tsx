import { Separator } from "@/components/ui/separator";
import React from "react";
import InstallationCommands from "../../components/installation-commands";
import CopyCommandButton from "../../components/copy-command-button";
import CodeSnippet from "../../components/code-snippet";
import Hero from "@/components/crazxy/hero/hero";

export default function FooterPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Hero</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-hero.json`}
          command={"pnpm dlx shadcn@latest add footer"}
        />
      </div>
      <p className="text-muted-foreground">
        A simple hero block for your application.
      </p>

      {/* component */}
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple crazxy hero section
          </h2>
          <div className="flex items-center gap-2">
            {/* <OpenInV0Button name="crazxy-footer" /> */}
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            {/* component */}
            <Hero />
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-hero.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />

      <CodeSnippet>
        {`import { Hero } from "@/components/crazxy-ui/hero";`}
      </CodeSnippet>
      <p className="text-muted-foreground">
        If you are not add your button component you use your button it is also
        work.
      </p>
      <CodeSnippet>{`<Hero/>`}</CodeSnippet>
    </div>
  );
}
