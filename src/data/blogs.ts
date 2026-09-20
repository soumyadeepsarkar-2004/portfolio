export type Blog = {
  slug: string
  title: string
  url: string
  image?: string
  date: Date
  readTime: string
  summary: string
  tags: string[]
  content: string[]
}

export const BLOGS: Blog[] = [
  {
    slug: "building-decentralized-chat-dapp",
    title: "Building a Decentralized Chat Application using React, Solidity, and IPFS",
    url: "/blogs/building-decentralized-chat-dapp",
    image: "/assets/blogs/web3-chat.svg",
    date: new Date("2024-10-15"),
    readTime: "5 min read",
    summary: "A deep dive into creating end-to-end encrypted decentralized chat rooms using Ethereum smart contracts for identity verification and IPFS for decentralized media storage.",
    tags: ["Web3", "React", "Solidity", "IPFS"],
    content: [
      "Decentralized applications (dApps) represent a paradigm shift in how web applications manage state, identity, and data persistence. In traditional messaging platforms, user data resides on centralized servers subject to single-point failures and data harvesting. By combining Ethereum smart contracts with IPFS (InterPlanetary File System), we can build censorship-resistant communication networks.",
      "The core architectural challenge lies in balancing blockchain execution costs with real-time user expectations. Writing every chat message directly to an Ethereum smart contract incurs prohibitive gas fees. Instead, our design uses smart contracts strictly for identity registry, access control gating, and cryptographic session key management.",
      "Message payloads and media assets are stored off-chain on IPFS nodes using cryptographic content identifiers (CIDs). When a user dispatches a message, the content is encrypted locally using the recipient's public key, pinned to IPFS, and only the lightweight CID reference with metadata is broadcast across peer-to-peer pub/sub channels.",
      "On the frontend, React and Viem provide reactive state management that listens for smart contract events and IPFS pub/sub updates. This architecture guarantees that users maintain absolute ownership of their identity while enjoying real-time messaging performance."
    ]
  },
  {
    slug: "nextjs-for-web3",
    title: "Why Next.js App Router is Ideal for Full-Stack Web3 Development",
    url: "/blogs/nextjs-for-web3",
    image: "/assets/blogs/nextjs-web3.svg",
    date: new Date("2024-08-20"),
    readTime: "4 min read",
    summary: "How Server Components, Server Actions, and API routes in Next.js streamline RPC node interactions, indexing, and secure wallet authentication.",
    tags: ["Next.js", "Web3", "Full-Stack", "TypeScript"],
    content: [
      "Building Web3 applications historically required heavy client-side JavaScript bundles to handle provider injection, ABI decoding, and RPC polling. With the introduction of Next.js App Router and React Server Components, Web3 development has evolved dramatically.",
      "Security is the primary benefit of moving blockchain queries to the server side. Sensitive RPC node API keys (such as Alchemy or Infura credentials) can be safely kept in server environments rather than exposed to the browser. Next.js Server Actions allow developers to query blockchain state and return pre-rendered HTML before sending a single byte of client-side wallet code.",
      "Furthermore, SEO has long been a bottleneck for Web3 applications. Since traditional Web3 dApps rely on client-side wallet connections before fetching data, search engine crawlers often see empty placeholders. By leveraging Next.js static site generation (SSG) and incremental static regeneration (ISR) for chain data, dApp landing pages and token metadata load instantly and index flawlessly.",
      "Combining Next.js with Wagmi/Viem and Tailwind CSS creates a robust foundation for modern decentralized web experiences."
    ]
  },
  {
    slug: "ai-ecommerce-platform",
    title: "Lessons Learned Building SarkarBrothers: AI Shopping Assistant with Gemini API",
    url: "/blogs/ai-ecommerce-platform",
    image: "/assets/blogs/gemini-ai.svg",
    date: new Date("2024-06-10"),
    readTime: "6 min read",
    summary: "Architecture and optimization strategies for integrating Google Gemini API into an e-commerce platform for intelligent product recommendations and natural language search.",
    tags: ["AI", "E-commerce", "Next.js", "Gemini API", "MongoDB"],
    content: [
      "Integrating Generative AI into e-commerce goes beyond standard chatbots; it transforms how users discover products. While building SarkarBrothers, a modern toys & gifts purchasing platform, our goal was to allow customers to describe what they are looking for in conversational language and receive instant, tailored product recommendations.",
      "The primary engineering hurdle was ensuring structured and predictable outputs from the AI model. Large Language Models (LLMs) can produce free-form text that easily breaks frontend UI components. By utilizing Google Gemini API's structured JSON response schema and system instructions, we constrained the model to return strict product arrays matching our database schemas.",
      "To optimize performance, we implemented real-time response streaming. Rather than waiting 3-4 seconds for the complete LLM response, token streams are piped directly to React components via Server-Sent Events (SSE). Customers see product recommendations rendered incrementally in under 400ms.",
      "Paired with Firebase Authentication and MongoDB for inventory tracking, the result is a seamless, AI-augmented shopping experience."
    ]
  },
  {
    slug: "decoding-chaava",
    title: "Decoding Chaava: Art, Agenda, or Authenticity",
    url: "/blogs/decoding-chaava",
    image: "/assets/blogs/chaava.svg",
    date: new Date("2025-02-14"),
    readTime: "5 min read",
    summary: "An analytical essay evaluating historical accuracy, artistic direction, and narrative framing in contemporary biographical cinema.",
    tags: ["Essay", "Film Analysis", "Culture"],
    content: [
      "Biographical historical cinema sits at an intriguing intersection of historical fidelity, artistic liberty, and societal narrative. Exploring complex historical figures demands a nuanced balance between cinematic spectacle and biographical authenticity.",
      "In analyzing modern cinematic portrayals, one must evaluate how lighting, sound design, and script adaptation influence audience perception of historical events. Rather than serving as mere entertainment, historical dramas shape public memory and cultural dialogue.",
      "By dissecting narrative structure and character arcs, engineers and creators alike can gain appreciation for how storytelling principles apply across both film editing timelines and software interface design."
    ]
  },
  {
    slug: "the-scholar-and-the-stream",
    title: "The Scholar and the Stream: A Parable for Modern Engineers",
    url: "/blogs/the-scholar-and-the-stream",
    image: "/assets/blogs/scholar-stream.svg",
    date: new Date("2025-03-02"),
    readTime: "4 min read",
    summary: "Reflecting on the balance between theoretical computer science concepts and pragmatic software craftsmanship in fast-paced production environments.",
    tags: ["Philosophy", "Software Engineering", "Craft"],
    content: [
      "Software engineering often creates a tension between theoretical perfection and practical delivery. Theoretical computer science provides elegant algorithms and formal verification models, while real-world engineering demands pragmatic trade-offs, rapid prototyping, and iterative feedback loops.",
      "The parable of the scholar and the stream illustrates this dichotomy. A scholar spends years studying fluid dynamics on paper, yet when faced with a flowing stream, it is the swimmer who navigates the currents by understanding practical momentum.",
      "For modern developers, true mastery lies not in choosing theory over practice or practice over theory, but in bridging both: grounding architecture in solid principles while maintaining the agility to ship functional value to users."
    ]
  }
]
