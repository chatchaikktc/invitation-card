import * as BaseDialog from '@radix-ui/react-dialog';
import { twMerge } from "@/lib/twMerge";


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
                "DialogTitle tw-text-[#5B6670] lg:tw-text-[22px] tw-text-[18px] tw-mb-[8px] tw-border-b tw-border-[#EEEEEE] tw-pb-[8px] tw-pr-6",
                className
            )}
            {...props}
        >
            {props.children}
        </BaseDialog.Title>
    );
}

export function DialogContent({ className, ...props }: BaseDialog.DialogContentProps) {
    return (
        <BaseDialog.Content
            className={twMerge(
                " tw-will-change-transform tw-z-[99999999] DialogContent lg:tw-max-w-[945px] tw-max-w-[90%] lg:tw-w-[945px] tw-w-[90%] lg:tw-h-auto tw-max-h-[90vh] tw-h-[90vh] tw-bg-white tw-rounded-[4px] xl:tw-p-[25px] tw-p-[16px] tw-border-t-4 tw-border-solid tw-border-[#CF3339]",
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
                "tw-text-[#222222] lg:tw-p-[16px] tw-p-[0] lg:tw-pr-[4px]  tw-h-full tw-relative",
                className
            )}
            {...props}
        >
            <div className=''>
                <div className='xl:tw-pr-[16px] tw-pr-[0px]'>{props.children}</div>
            </div>
        </BaseDialog.Description>
    );
}

export function DialogClose({ className}: BaseDialog.DialogCloseProps) {
    return (
        <BaseDialog.Close
            className={twMerge(
                "tw-absolute tw-top-0 tw-right-0 tw-flex tw-justify-center tw-cursor-pointer tw-p-[4px] hover:tw-opacity-25 tw-w-[40px] tw-h-[40px]",
                className
            )}
        >
            <Image src="https://www.ktc.co.th/sites/cs/assets/ktc_css/img/ico-close.svg" className="tw-w-[16px]" />
        </BaseDialog.Close>
    );
}

export function DialogOverlay({ className, ...props }: BaseDialog.DialogOverlayProps) {
    return (
        <BaseDialog.Overlay
            className={twMerge(
                "tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-[9999]",
                className
            )}
            {...props}
        >
            
            {props.children}
        </BaseDialog.Overlay>
    );
}

