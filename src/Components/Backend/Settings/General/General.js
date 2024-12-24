import { __ } from '@wordpress/i18n';
import {useState} from 'react'

import { PanelBody, __experimentalNumberControl as NumberControl,FormTokenField,TextControl,FormFileUpload,Button}from '@wordpress/components';
import {MediaUpload} from "@wordpress/block-editor"
import { IconButton } from '@wordpress/components';



const continents = [
    'Africa',
    'America',
    'Antarctica',
    'Asia',
    'Europe',
    'Oceania',
];


const General = ({ attributes, setAttributes }) => {
  const { purposeType,tags,image,title,description ,button} = attributes;
 
 





  return (
    <>
    
    <PanelBody className='bPlPanelBody' title={__('card-title', 'b-blocks')} initialOpen={false}>
     

       <TextControl onChange={(ti)=>setAttributes({title:ti})} value={title}></TextControl>
       

    </PanelBody>
    <PanelBody title='card_description' initialOpen={false}>
    <TextControl onChange={(de)=>setAttributes({description:de})} value={description}></TextControl>


    </PanelBody>
    <PanelBody title='card-tag' initialOpen={false}>
    <FormTokenField
            value={tags}
            suggestions={ continents }
            onChange={ ( tokens ) => {
              setAttributes({tags:tokens})
            }}
        />
    </PanelBody>
    <PanelBody title='card-button' initialOpen={false}>
    <TextControl onChange={(bu)=>setAttributes({button:bu})} value={button}></TextControl>


    </PanelBody>
    <PanelBody title='card-price' initialOpen={false}>
    <NumberControl
	onChange={ e => setAttributes({price:e}) }
	isDragEnabled
	isShiftStepEnabled
	shiftStep={ 1}
	step={1}
	value={ 8 }
  min={1}
/>


    </PanelBody>

    <PanelBody title='card-image'>
    <MediaUpload
    onSelect={(media) => setAttributes({ image: media.url })}  // Update the photoUrl attribute with the selected image URL
    type="image"  
    value={image}  
    render={({ open }) => (
        <IconButton
            onClick={open}  
            icon="upload"  
            className="editor-media-placeholder_button is-button is-default is-large"
        >
            Upload a Photo  
        </IconButton>
    )}
/>

    </PanelBody>
    </>
  )
}

export default General 