import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import ImportHooks from "../components/Import";
import "handsontable/dist/handsontable.full.min.css";
import { registerAllModules } from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

interface Left {
  sheetname: string;
  sheetlist: any;
  fileRef: React.RefObject<any>;

  sheetdata: any[][] | Handsontable.RowObject[];
  hotTableComponentLeft: React.RefObject<any>;

  onFileSelectChange(e: React.ChangeEvent<HTMLInputElement>): any;
  onSheetSelectChange(e: string): any;

  //added line
  setLeftSheetData: React.Dispatch<React.SetStateAction<any[][]>>;
}

const LeftHooks = (props: Left) => {
  const hotLeftSettings = {
    colHeaders: true,
    rowHeaders: true,
    height: 305,
    minRows: 12,
    minCols: 8,
    // colWidth: 100,
    licenseKey: "non-commercial-and-evaluation",
    id: "table-left",
    afterFilter(filters: any) {
      // The 'filters' parameter contains information about the applied filters.

      // You can access the filtered data by calling the 'getData' method on the Handsontable instance.
      const hotInstance = props.hotTableComponentLeft.current.hotInstance;
      const filteredData = hotInstance.getData();
      props.setLeftSheetData(filteredData);
      // Now, you can use 'filteredData' as needed.
      console.log("Filtered Data:", filteredData);
    },
  };

  return (
    <>
      <div className="left" style={{ padding: 10, marginTop: -25 }}>
        <h1 style={{ marginLeft: 3 }}>{"Current File"}</h1>
        <ImportHooks
          sheetname={props.sheetname}
          sheetlist={props.sheetlist}
          onFileSelectChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onFileSelectChange(e)
          }
          onSheetSelectChange={(e: string) => props.onSheetSelectChange(e)}
          fileRef={props.fileRef}
        />
        <HotTable
          ref={props.hotTableComponentLeft}
          data={props.sheetdata}
          style={{ width: "98%" }}
          settings={hotLeftSettings}
          stretchH={"all"}
          filters={true}
          // enable the column menu
          dropdownMenu={true}
        />
      </div>
    </>
  );
};

export default LeftHooks;
