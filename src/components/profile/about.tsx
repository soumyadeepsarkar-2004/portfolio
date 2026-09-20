import { Button } from "@/components/ui/button"
import { HeaderTitle } from "./header-title"
import { FluidGradientText } from "@/components/ui/fluid-gradient-text"

export function About() {
  return (
    <section className="w-full">
      <HeaderTitle title="About" />
      <div className="space-y-2 p-2">
        <p className="text-primary/90 text-base">
          I&apos;m <FluidGradientText text="soumyadeep" className="text-xl px-1" />, a Full Stack &amp; Web3 Developer based in{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a href="https://maps.google.com/?q=Barrackpore,India" target="_blank">
              Barrackpore, India
            </a>
          </Button>
          . I specialize in building scalable, production-ready web applications using
          Next.js, React, TypeScript, and Node.js. As a backend-focused developer, I enjoy building practical products with clean architecture and scalable APIs.
        </p>
        <p className="text-primary/90 text-base">
          I have hands-on experience with blockchain and Web3 technologies — from Solidity smart contracts
          to IPFS storage and Celo-based dApps. I&apos;m also a{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a href="https://gssoc.girlscript.tech/" target="_blank">
              GSSoC&apos;25
            </a>
          </Button>{" "}
          Project Admin &amp; Mentor, and a hackathon winner (HackOdisha&apos;25, EduChain Kolkata Top 5).
        </p>
        <p className="text-primary/90 text-base">
          Currently pursuing B.E. in IT at{" "}
          <Button
            asChild
            className="h-0 cursor-pointer p-0 underline"
            variant="link"
          >
            <a href="https://uit.buruniv.ac.in/" target="_blank">
              University Institute of Technology, B.U.
            </a>
          </Button>
          {" "}(Expected June 2026), and actively working on full-stack &amp; Web3 projects.
        </p>
      </div>
    </section>
  )
}
