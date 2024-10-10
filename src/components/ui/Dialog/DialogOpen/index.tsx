import React from "react";
import Dialog, { DialogTrigger , DialogPortal, DialogTitle, DialogContent, DialogDescription, DialogClose, DialogOverlay } from "@/components/ui/Dialog";

interface DialogOpenProps {
    ClassName?: string;
    Title?: string;
    children: React.ReactNode[];
}

function DialogOpen({ Title, children, ClassName }: DialogOpenProps) {
    const [triggerContent, dialogContent] = React.Children.toArray(children);

    return (
        <Dialog>
            <DialogTrigger className={ClassName}>{triggerContent}</DialogTrigger>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle className="tw-mt-5">{Title}</DialogTitle>
                    <DialogDescription>
                        {dialogContent}
                    </DialogDescription>
                    <DialogClose>x</DialogClose>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}

export default DialogOpen;
