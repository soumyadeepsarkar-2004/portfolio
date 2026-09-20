import { USER } from "@/data"
import Link from "next/link"
import { Button } from "../ui/button"
import { ContainerWrapper } from "./container"
import { FluidGradientText } from "../ui/fluid-gradient-text"

export function SiteFooter() {
  return (
    <footer className="border-edge w-full border-b-[1px]">
      <ContainerWrapper className="relative flex flex-col gap-4 py-8">
        <div className="py-0">
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-1 text-center font-mono text-xs text-balance sm:px-4">
            Inspired by{" "}
            <Button
              variant="link"
              asChild
              className="m-0 p-0 text-xs underline"
            >
              <Link href="http://tailwindcss.com" target="_blank">
                tailwindcss.com
              </Link>
            </Button>
            <span className="">,</span>
            <Button
              variant="link"
              asChild
              className="m-0 p-0 text-xs underline"
            >
              <Link href="https://ui.shadcn.com" target="_blank">
                ui.shadcn.com
              </Link>
            </Button>
            <span className="">,</span>
            <Button
              variant="link"
              asChild
              className="m-0 p-0 text-xs underline"
            >
              <Link href="https://chanhdai.com/" target="_blank">
                chanhdai.com
              </Link>
            </Button>
          </div>
        </div>
        <div className="py-0">
          <h3 className="text-muted-foreground px-4 text-center font-mono text-xs text-balance">
            Developed by{" "}
            <Button
              asChild
              variant="link"
              className="m-0 p-0 text-xs underline"
            >
              <a href="https://github.com/soumyadeepsarkar-2004" target="_blank">
                {USER.name}
              </a>
            </Button>
          </h3>
        </div>
        <div className="flex w-full items-center justify-center pt-8">
          <div className="h-32 w-full max-w-3xl">
            <FluidGradientText text="soumyadeep" />
          </div>
        </div>
      </ContainerWrapper>
    </footer>
  )
}

