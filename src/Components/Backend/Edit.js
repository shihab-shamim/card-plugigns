import { RichText, useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  const {
    title,
    description,
    button,
    tags,
    price,
    image,
    categoryColor,
    buttonColor,
    alignment,
    card,
    cardColor,
    cardPadding,
    cardMargin,
    cardRadius,
    boxShadow,
    cardBorder,
    imageWidth,
    titleTypo,
    descriptionTypo,
    buttonStyle
  } = attributes;
  const { width, height } = card;
  const { top, left, right, bottom } = cardPadding;
  const { mtop, mleft, mright, mbottom } = cardMargin;

 

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="container" style={{ justifyContent: alignment }}>
          <div
            className="card"
            style={{
              width: width,
              height: height,
              backgroundColor: cardColor,
              paddingTop: top,
              paddingRight: right,
              paddingLeft: left,
              paddingBottom: bottom,
              marginTop: mtop,
              marginLeft: mleft,
              marginRight: mright,
              marginBottom: mbottom,
              borderTopRightRadius: cardRadius?.top,
              borderTopLeftRadius: cardRadius?.left,
              borderBottomLeftRadius: cardRadius?.right,
              borderBottomRightRadius: cardRadius?.bottom,
              boxShadow: `${boxShadow?.shadowOffsetX} ${boxShadow?.shadowOffsetY} ${boxShadow?.blurRadius} ${boxShadow?.spreadRadius} ${boxShadow?.shadowColor}`,
              border: `${cardBorder?.width} ${cardBorder?.style} ${cardBorder?.color}`,
            }}
          >
            <div className="image-container">
              <img
                src={image}
                alt="Product Image"
                className="product-image"
                style={{
                  width: imageWidth?.width,
                  height: imageWidth?.height,
                  objectFit: "cover",
                  borderTopRightRadius:cardRadius?.top,
              borderTopLeftRadius:cardRadius?.left,
              borderBottomLeftRadius:cardRadius?.right,
              borderBottomRightRadius:cardRadius?.bottom,
                }}
              />
            </div>
            <div className="content">

              <RichText
              tagName={titleTypo?.tag}
                value={title}
                onChange={(ti) => setAttributes({ title: ti })}
                className="title"
                style={{color:titleTypo?.color,fontSize:titleTypo?.font,fontWeight:titleTypo.weight,backgroundColor:titleTypo.bg,wordSpacing:titleTypo.word}}
              />
              {/* descriptionTypo */}
              <RichText
              style={{color:descriptionTypo?.color,fontSize:descriptionTypo?.font,fontWeight:descriptionTypo.weight,backgroundColor:descriptionTypo.bg,wordSpacing:descriptionTypo.word}}
              tagName="p"
                value={description}
                onChange={(de) => setAttributes({ description: de })}
                className="description"
              />

             
              <div className="tags">
                {tags.map((tag, i) => (
                  <RichText
                    style={{ backgroundColor: categoryColor?.bg ,color:categoryColor.color,borderRadius:categoryColor?.border,
                      paddingTop:categoryColor?.padding?.top,
                      paddingRight:categoryColor?.padding?.right,
                      paddingLeft:categoryColor?.padding?.left,
                      paddingBottom:categoryColor?.padding?.bottom,
                     
                    }}
                    key={i}
                    className="tag"
                    value={tag}
                    onChange={(newValue) => {
                      const updatedTags = [...tags];
                      updatedTags[i] = newValue;
                      setAttributes({ tags: updatedTags });
                    }}
                  ></RichText>
                ))}
              </div>
              <div className="price-action">
                <span className="price">${price}</span>
                <RichText
                  className="order-button"
                  style={{ backgroundColor: buttonColor,fontSize:buttonStyle?.font,color:buttonStyle?.color,fontWeight:buttonStyle?.weight,borderRadius:buttonStyle?.border,
                  paddingTop:buttonStyle?.padding?.top ,
                  paddingLeft:buttonStyle?.padding?.left,
                  paddingRight:buttonStyle?.padding?.right,
                  paddingBottom:buttonStyle?.padding?.bottom,
                }}
                  value={button}
                  onChange={(bu) => setAttributes({ button: bu })}
                ></RichText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit;
