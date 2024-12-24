import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";
import { ColorPicker } from "@wordpress/components";

const Style = ({ attributes, setAttributes }) => {
  const { colors ,categoryColor,buttonColor} = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });



  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Category-color", "b-blocks")}
        initialOpen={false}
      >
        <ColorPicker
	color={categoryColor  }
  onChange={(color)=>setAttributes({categoryColor:color})}
/>
     
      </PanelBody>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Button-color", "b-blocks")}
        initialOpen={false}
      >
        <ColorPicker
	color={buttonColor}
  onChange={(color)=>setAttributes({buttonColor:color})}
/>
     
      </PanelBody>
    </>
  );
};

export default Style;
