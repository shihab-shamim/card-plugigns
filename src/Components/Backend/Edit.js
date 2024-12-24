import { RichText, useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";


const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const {title,description,button,tags,price,image,categoryColor,buttonColor}=attributes

  
  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="container">
  <div className="card">
    <div className="image-container">
      <img
        src={image}
        alt="Product Image"
        className="product-image"
      />
    </div>
    <div className="content">
      <RichText value={title} onChange={(ti)=>setAttributes({title:ti})} className="title"/>
      <RichText value={description} onChange={(de)=>setAttributes({description:de})} className="description"/>

      <div className="tags">
        {tags.map((tag,i)=> <RichText style={{backgroundColor:categoryColor}} key={i} className="tag" value={tag}
        onChange={(newValue) => {
        
          const updatedTags = [...tags];
          updatedTags[i] = newValue; 
          setAttributes({ tags: updatedTags }); 
        }}
        ></RichText>)}
       
      </div>
      <div className="price-action">
        <span className="price">${price}</span>
        <RichText className="order-button" style={{backgroundColor:buttonColor}} value={button} onChange={(bu)=>setAttributes({button:bu})}></RichText>
      </div>
    </div>
  </div>
</div>






      </div>
      
    </>
  );
};
export default Edit;
