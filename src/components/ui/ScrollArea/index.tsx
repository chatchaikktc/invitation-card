import * as ScrollArea from '@radix-ui/react-scroll-area';
import { twMerge } from "@/lib/twMerge";

export default function Scroll(props: ScrollArea.ScrollAreaProps) {
  return (
    <ScrollArea.Root {...props} className={twMerge("tw-h-full", props.className)}>
      {props.children}
    </ScrollArea.Root>
  );
}

export function Viewport({ className, ...props }: ScrollArea.ScrollAreaViewportProps) {
  return (
    <ScrollArea.Viewport
      className={twMerge("tw-overflow-y-auto tw-h-full", className)}
      {...props}
    >
      {props.children}
    </ScrollArea.Viewport>
  );
}

export function Scrollbar({ className, ...props }: ScrollArea.ScrollAreaScrollbarProps) {
  return (
    <ScrollArea.Scrollbar
      className={twMerge("tw-bg-gray-300 tw-w-1 tw-rounded-full", className)} // ไม่ต้องการให้ scrollbar เลื่อนเอง
      {...props}
    >
      {props.children}
    </ScrollArea.Scrollbar>
  );
}

export function Thumb({ className, ...props }: ScrollArea.ScrollAreaThumbProps) {
  return (
    <ScrollArea.Thumb
      className={twMerge("tw-bg-[#f4b1ae] tw-rounded-full tw-w-2", className)} // Thumb ต้องมีขนาดชัดเจน
      {...props}
    />
  );
}

export function Corner({ className, ...props }: ScrollArea.ScrollAreaCornerProps) {
  return (
    <ScrollArea.Corner
      className={twMerge("tw-bg-gray-200", className)} // ไม่ต้องการให้ corner เลื่อนเอง
      {...props}
    />
  );
}


