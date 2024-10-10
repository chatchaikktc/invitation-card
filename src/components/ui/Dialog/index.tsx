import * as BaseDialog from '@radix-ui/react-dialog';
import { twMerge } from "@/lib/twMerge";
import Scroll, { Viewport, Scrollbar, Corner, Thumb } from '@/components/ui/ScrollArea';

import './styles.css'
import Image from '../Image';

export default function Dialog(props: BaseDialog.DialogProps) {
    return <BaseDialog.Root {...props}>{props.children}</BaseDialog.Root>;
}

export function DialogTrigger({ className, ...props }: BaseDialog.DialogTriggerProps) {
    return (
        <BaseDialog.Trigger
            className={twMerge(
                "tw-shrink-0",
                className
            )}
            {...props}
        >
            {props.children}
        </BaseDialog.Trigger>
    );
}

interface DialogPortalProps extends BaseDialog.DialogPortalProps {
    className?: string;
}

export function DialogPortal({ className, ...props }: DialogPortalProps) {
    return (
        <BaseDialog.Portal {...props}>
            <div className={twMerge("", className)}>
                {props.children}
            </div>
        </BaseDialog.Portal>
    );
}

export function DialogTitle({ className, ...props }: BaseDialog.DialogTitleProps) {
    return (
        <BaseDialog.Title
            className={twMerge(
                "DialogTitle tw-text-white lg:tw-text-[22px] tw-text-[18px] tw-font-bold tw-px-[25px]",
                className
            )}
            {...props}
        >{props.children}


        </BaseDialog.Title>
    );
}

export function DialogContent({ className, ...props }: BaseDialog.DialogContentProps) {
    return (
        <BaseDialog.Content
            className={twMerge(
                " tw-will-change-transform tw-z-[99999999] DialogContent lg:tw-max-w-[945px] tw-max-w-[90%] lg:tw-w-[945px] tw-w-[90%] lg:tw-h-auto tw-max-h-[90vh] tw-h-[90vh] tw-bg-black xl:tw-p-[25px] tw-p-[16px] tw-border-2 tw-border-solid tw-border-white tw-text-white tw-rounded-2xl",
                className
            )}
            {...props}
        >

            {props.children}
        </BaseDialog.Content>
    );
}

export function DialogDescription({ className, ...props }: BaseDialog.DialogDescriptionProps) {
    return (
        <BaseDialog.Description
            className={twMerge(
                " lg:tw-p-[16px] tw-p-[0] lg:tw-pr-[4px]  tw-h-full tw-relative",
                className
            )}
            {...props}
        >
            <Scroll className='tw-w-full'>
                <Viewport className='tw-max-h-[70vh] tw-overflow-x-hidden'>
                    <div className="tw-h-full tw-p-4"> {/* สร้างเนื้อหาที่ยาวพอที่จะเลื่อนได้ */}
                        <div className=''>
                            <div className='xl:tw-pr-[16px] tw-pr-[0px]'>{props.children}</div>
                        </div>
                    </div>
                </Viewport>
                <Scrollbar orientation="vertical" className=''>
                    <Thumb className='' />
                </Scrollbar>
                <Corner />
            </Scroll>

        </BaseDialog.Description>
    );
}

export function DialogClose({ className }: BaseDialog.DialogCloseProps) {
    return (
        <BaseDialog.Close
            className={twMerge(
                "tw-absolute tw-top-[10px] tw-right-[10px] tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-p-[4px] hover:tw-opacity-25 tw-w-[25px] tw-h-[25px] tw-border-[1px] tw-border-solid tw-border-white tw-rounded-full tw-transition tw-ease-in tw-delay-150 duration-150",
                className
            )}
        >
            <Image src="https://www.ktc.co.th/pub/media/creditcard/invitation/ktc-visa-infinite/img/x-close.png" className="tw-w-[16px] tw-h-[16px]" />
        </BaseDialog.Close>
    );
}

export function DialogOverlay({ className, ...props }: BaseDialog.DialogOverlayProps) {
    return (
        <BaseDialog.Overlay
            className={twMerge(
                "tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-80 tw-z-[9999]",
                className
            )}
            {...props}
        >

            {props.children}
        </BaseDialog.Overlay>
    );
}

