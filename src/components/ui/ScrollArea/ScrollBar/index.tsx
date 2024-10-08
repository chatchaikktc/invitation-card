import Scroll, { Viewport, Scrollbar, Corner, Thumb } from '@/components/ui/ScrollArea';

function ScrollBar() {
    return (
        <Scroll className='tw-w-[500px]'>
            <Viewport className='tw-h-[200px]'>
                <div className="tw-h-[200%] tw-p-4"> {/* สร้างเนื้อหาที่ยาวพอที่จะเลื่อนได้ */}

                </div>
            </Viewport>
            <Scrollbar orientation="horizontal" className=''>
                <Thumb className='' />
            </Scrollbar>
            <Scrollbar orientation="vertical" className=''>
                <Thumb className='' />
            </Scrollbar>
            <Corner />
        </Scroll>
    );
}

export default ScrollBar;
