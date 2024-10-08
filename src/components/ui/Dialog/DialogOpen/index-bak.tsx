import Dialog, { DialogTrigger, DialogPortal, DialogTitle, DialogContent, DialogDescription, DialogClose, DialogOverlay } from "@/components/ui/Dialog";

interface DialogOpenProps {
    ButtonText: string;
    ClassName?: string;
    Title: string;
    children?: React.ReactNode;
}

function DialogOpen({ ButtonText, Title, children, ClassName }: DialogOpenProps) {

    return (
        <Dialog>
            <DialogTrigger className={ClassName}>{ButtonText}</DialogTrigger>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle>{Title}</DialogTitle>
                    <DialogDescription>
                        {children}
                    </DialogDescription>
                    <DialogClose>x</DialogClose>
                </DialogContent>
            </DialogPortal>
        </Dialog>

    );
}

export default DialogOpen;