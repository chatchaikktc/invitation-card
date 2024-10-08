import React from "react";

// usePrivilegeComponents.ts
import VisaBanner from "@/components/privilegeSection/VisaBanner";
import AfternoonTea from "@/components/privilegeSection/AfternoonTea";


const componentMapping = {
    VisaBanner: VisaBanner,
    AfternoonTea: AfternoonTea,
    
} as const; // ใช้ as const เพื่อทำให้คีย์ของ object เป็น literal type

export const usePrivilegeComponents = () => {
    // ฟังก์ชันที่ใช้ในการเลือกคอมโพเนนต์ตามชื่อ PrivilegeName
    const renderComponentByName = (name: string) => {
        const Component = componentMapping[name as keyof typeof componentMapping]; // ใช้ type assertion
        return Component ? React.createElement(Component) : null;
    }

    return { renderComponentByName };
};

