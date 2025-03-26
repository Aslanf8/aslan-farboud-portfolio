import * as React from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-start gap-4 px-8 md:flex-row md:gap-2 md:px-0 ml-4">
          <p className="text-sm leading-loose text-muted-foreground">
            © 2025 Aslan Farboud. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/aslan-farboud-1b59ab224/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 hover:bg-accent"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:aslan.farboud@gmail.com"
            className="rounded-full p-2 hover:bg-accent"
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://github.com/Aslanf8"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
// import * as React from "react";
// import { Linkedin, Mail, Github } from "lucide-react";
// import Link from "next/link";

// export function Footer() {
//   // add margin left
//   return (
//     <footer className="border-t bg-background">
//       <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
//         <div className="flex flex-col items-start gap-4 px-8 md:flex-row md:gap-2 md:px-0">
//           <p className="text-sm leading-loose text-muted-foreground">
//             © 2025 Aslan Farboud. All rights reserved.
//           </p>
//         </div>
//         <div className="flex gap-4">
//           <Link
//             href="https://www.linkedin.com/in/aslan-farboud-1b59ab224/"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full p-2 hover:bg-accent"
//           >
//             <Linkedin className="h-4 w-4" />
//             <span className="sr-only">LinkedIn</span>
//           </Link>
//           <Link
//             href="mailto:aslan.farboud@gmail.com"
//             className="rounded-full p-2 hover:bg-accent"
//           >
//             <Mail className="h-4 w-4" />
//             <span className="sr-only">Email</span>
//           </Link>
//           <Link
//             href="https://github.com/Aslanf8"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full p-2 hover:bg-accent"
//           >
//             <Github className="h-4 w-4" />
//             <span className="sr-only">GitHub</span>
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }
