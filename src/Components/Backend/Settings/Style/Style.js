import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl, __experimentalUnitControl as UnitControl, 
  SelectControl
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";
import { ColorPicker } from "@wordpress/components";

const Style = ({ attributes, setAttributes }) => {
  const { colors ,categoryColor,buttonColor,card,cardColor,cardPadding,cardMargin,cardRadius,boxShadow,cardBorder,imageWidth,titleTypo,descriptionTypo,buttonStyle} = attributes;
  const {width,height}=card






  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Category-Style", "b-blocks")}
        initialOpen={false}
      >
         
              <label>Category-Color</label>
        <ColorPicker
	color={categoryColor.color  }
  onChange={(color)=>setAttributes({categoryColor:{...categoryColor,color:color}})}
/>
     
              <label>Category-Background</label>
        <ColorPicker
	color={categoryColor.bg  }
  onChange={(color)=>setAttributes({categoryColor:{...categoryColor,bg:color}})}
  
/>
<UnitControl
	onChange={(v)=>setAttributes({categoryColor:{...categoryColor,border:v}})}
	label="Border"
	isUnitSelectTabbable
	value={ categoryColor?.border } 
  />
  <BoxControl
label="Category-padding"
	values={ categoryColor.padding }
	onChange={ ( nextValues ) => setAttributes({categoryColor:{...categoryColor,padding:nextValues}}) }
/>
     
      </PanelBody>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Button-Style", "b-blocks")}
        initialOpen={false}
      >
        <ColorPicker
	color={buttonColor}
  onChange={(color)=>setAttributes({buttonColor:color})}
/>
    <UnitControl
	onChange={(v)=>setAttributes({buttonStyle:{...buttonStyle,font:v}})}
	onUnitChange={ e => console.log("new unit",e) }
	label="font-size"
	isUnitSelectTabbable
	value={ buttonStyle?.font } 
  />
<SelectControl
	label={ __( 'Title-Font-Weight:' ) }
	value={ buttonStyle?.weight }
  onChange={(v)=>setAttributes({buttonStyle:{...buttonStyle,weight:v}})}

	options={ [
		{ value: null, label: 'Select a User', disabled: true },
		{ value: 'normal', label: 'Normal' },
		{ value: 'bold', label: 'Bold' },
		{ value: 'bolder ', label: 'Think' },
		{ value: 'lighter ', label: 'Lighter' },
	] }
/>
<ColorPicker
	color={buttonStyle?.color}
  onChange={(color)=>setAttributes({buttonStyle:{...buttonStyle,color:color}})}
/>
<UnitControl
	onChange={(v)=>setAttributes({buttonStyle:{...buttonStyle,border:v}})}
	onUnitChange={ e => console.log("new unit",e) }
	label="border"
	isUnitSelectTabbable
	value={ buttonStyle?.border } 
  />
  <BoxControl
label="card padding"
	values={ buttonStyle?.padding}
	onChange={ ( nextValues ) => setAttributes({buttonStyle:{...buttonStyle,padding:nextValues}}) }
/>

     
      </PanelBody>

      <PanelBody title={__("Card Width-Height")} initialOpen={false}>  
      <UnitControl
	onChange={(v)=>setAttributes({card:{...card,width:v}})}
	onUnitChange={ e => console.log("new unit",e) }
	label="Width"
	isUnitSelectTabbable
	value={ width } 
  />
      <UnitControl
	onChange={(v)=>setAttributes({card:{...card,height:v}})}
	label="Height"
	isUnitSelectTabbable
	value={ height } 
  />

      </PanelBody>

      <PanelBody title={__("Card-Style")} initialOpen={false}>
        <label>Card-Background</label>
      <ColorPicker
	color={ cardColor }
onChange={(co)=>setAttributes({cardColor:co})}
/>

<BoxControl
label="card padding"
	values={ cardPadding }
	onChange={ ( nextValues ) => setAttributes({cardPadding:nextValues}) }
/>


<BoxControl
  label="Card Margin"
  values={{
    top: cardMargin.mtop, 
    left: cardMargin.mleft, 
    right: cardMargin.mright, 
    bottom: cardMargin.mbottom
  }}
  onChange={(nextValues) => {
    setAttributes({
      cardMargin: {
        mtop: nextValues.top || cardMargin.mtop,
        mleft: nextValues.left || cardMargin.mleft,
        mright: nextValues.right || cardMargin.mright,
        mbottom: nextValues.bottom || cardMargin.mbottom,
      }
    });
  }}
/>

<BoxControl
label="card border rADIUS"
	values={ cardRadius}
	onChange={ ( nextValues ) => setAttributes({cardRadius:nextValues}) }
/>





      </PanelBody>

      <PanelBody title={__("Card-shadow")} initialOpen={false}>

      <UnitControl
	onChange={(v)=>setAttributes({boxShadow:{...boxShadow,shadowOffsetX:v}})}
	onUnitChange={ e => console.log("new unit",e) }
	label="shadow-OffsetX"
	isUnitSelectTabbable
	value={boxShadow?.shadowOffsetX}
  />
      <UnitControl
		onChange={(v)=>setAttributes({boxShadow:{...boxShadow,blurRadius:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="blur-Radius"
	isUnitSelectTabbable
	value={boxShadow?.blurRadius}
  />
      <UnitControl
  onChange={(v)=>setAttributes({boxShadow:{...boxShadow,spreadRadius:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="spread-Radius"
	isUnitSelectTabbable
	value={boxShadow?.spreadRadius}
  />
   <label>Card-Shadow-Color</label>
      <ColorPicker
	color={ boxShadow?.shadowColor }
onChange={(co)=>setAttributes({boxShadow:{...boxShadow,shadowColor:co}})}
/>


        

      </PanelBody>
      <PanelBody title={__("Card-Border")} initialOpen={false}>
      <UnitControl
  onChange={(v)=>setAttributes({cardBorder:{...cardBorder,width:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="spread-Radius"
	isUnitSelectTabbable
	value={cardBorder?.width}
  />

<SelectControl
	label={ __( 'Card-Border-Style:' ) }
	value={ cardBorder?.style } 
  onChange={(v)=>setAttributes({cardBorder:{...cardBorder,style:v}})}

	options={ [
		{ value: null, label: 'Select a User', disabled: true },
		{ value: 'solid', label: 'Solid' },
		{ value: 'dotted', label: 'Dotted' },
		{ value: 'groove ', label: 'Grove' },
	] }
/>
<label>Border-Color</label>
<ColorPicker
  onChange={(v)=>setAttributes({cardBorder:{...cardBorder,color:v}})}

	color={ cardBorder?.color }
/>




      </PanelBody>

      <PanelBody title={__("Image-Width-Height")} initialOpen={false} >
      <UnitControl
  onChange={(v)=>setAttributes({imageWidth:{...imageWidth,width:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="image-width"
	isUnitSelectTabbable
	value={imageWidth?.width}
  />
      <UnitControl
  onChange={(v)=>setAttributes({imageWidth:{...imageWidth,height:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="image-height"
	isUnitSelectTabbable
	value={imageWidth?.height}
  />



      </PanelBody>
      <PanelBody title={__("Card-Title")} initialOpen={false}>
     
      <UnitControl
  onChange={(v)=>setAttributes({titleTypo:{...titleTypo,font:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="Font-size"
	isUnitSelectTabbable
	value={titleTypo?.font}
  />
      <UnitControl
  onChange={(v)=>setAttributes({titleTypo:{...titleTypo,word:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="Word-spacing"
	isUnitSelectTabbable
	value={titleTypo?.word}
  />
  <SelectControl
	label={ __( 'Title-Font-Weight:' ) }
	value={ titleTypo?.weight } // e.g: value = [ 'a', 'c' ]
  onChange={(v)=>setAttributes({titleTypo:{...titleTypo,weight:v}})}

	options={ [
		{ value: null, label: 'Select a User', disabled: true },
		{ value: 'normal', label: 'Normal' },
		{ value: 'bold', label: 'Bold' },
		{ value: 'bolder ', label: 'Think' },
		{ value: 'lighter ', label: 'Lighter' },
	] }
/>
<label>Title-Color</label>
<ColorPicker
  onChange={(v)=>setAttributes({titleTypo:{...titleTypo,color:v}})}

	color={ titleTypo?.color }
/>
<label>Title-Background-Color</label>
<ColorPicker
  onChange={(v)=>setAttributes({titleTypo:{...titleTypo,bg:v}})}

	color={ titleTypo?.bg }
/>
<SelectControl
	label={ __( 'Title-Font-Weight:' ) }
	value={ titleTypo?.tag } // e.g: value = [ 'a', 'c' ]
  onChange={(v)=>setAttributes({titleTypo:{...titleTypo,tag:v}})}

	options={ [
		{ value: null, label: 'Select a User', disabled: true },
		{ value: 'h2', label: 'H2' },
		{ value: 'h3', label: 'H3' },
	
	] }
/>



        
      </PanelBody>
      <PanelBody title={__("Card-Description")} initialOpen={false}>
      <UnitControl
  onChange={(v)=>setAttributes({descriptionTypo:{...descriptionTypo,font:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="Font-size"
	isUnitSelectTabbable
	value={descriptionTypo?.font}
  />
      <UnitControl
  onChange={(v)=>setAttributes({descriptionTypo:{...descriptionTypo,word:v}})}

	onUnitChange={ e => console.log("new unit",e) }
	label="Word-spacing"
	isUnitSelectTabbable
	value={descriptionTypo?.word}
  />
  <SelectControl
	label={ __( 'ont-Weight:' ) }
	value={ descriptionTypo?.weight }
  onChange={(v)=>setAttributes({descriptionTypo:{...descriptionTypo,weight:v}})}

	options={ [
		{ value: null, label: 'Select a User', disabled: true },
		{ value: 'normal', label: 'Normal' },
		{ value: 'bold', label: 'Bold' },
		{ value: 'bolder ', label: 'Think' },
		{ value: 'lighter ', label: 'Lighter' },
	] }
/>
<label>Title-Color</label>
<ColorPicker
  onChange={(v)=>setAttributes({descriptionTypo:{...descriptionTypo,color:v}})}

	color={ descriptionTypo?.color }
/>
<label>Title-Background-Color</label>
<ColorPicker
  onChange={(v)=>setAttributes({descriptionTypo:{...descriptionTypo,bg:v}})}

	color={ descriptionTypo?.bg }
/>


      </PanelBody>
    </>
  );
};

export default Style;
