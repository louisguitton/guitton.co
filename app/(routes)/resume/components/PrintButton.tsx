"use client";

import { Button } from "@/components/ui/button";
import { PrinterIcon } from "@heroicons/react/solid";

const PrintButton = () => {
  return (
    <div className="text-right">
      <Button onClick={() => window.print()} className="print:hidden">
        <PrinterIcon className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" />
        Print
      </Button>
    </div>
  );
};

export default PrintButton;
