import { Transition } from "./transition"

export default function Template({ children }: { children: React.ReactNode }) {
  console.log('template')
  return <Transition>{children}</Transition>
}