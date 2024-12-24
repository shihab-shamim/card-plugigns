import { useBlockProps, BlockControls, BlockAlignmentMatrixToolbar, BlockAlignmentToolbar, } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

// styles that make it look good in the editor
// import './editor.scss';

const BLOCKNAME = "block-controls";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

const BlockControlComponent = ({ attributes = {}, setAttributes }) => {
    // Provide default values for attributes in case they are not defined
    const { align = "center center", textAlign = "left" } = attributes;

    return (
        <div { ...useBlockProps() }>
            <BlockControls>
                <BlockAlignmentMatrixToolbar
                    label={ __( 'Change matrix alignment' ) }
                    value={ align }
                    onChange={ ( nextAlign ) => {
                        setAttributes( { align: nextAlign } );
                    } }
                />
                <BlockAlignmentToolbar
                    value={ textAlign }
                    onChange={ ( nextAlign ) => {
                        setAttributes( { textAlign: nextAlign } );
                    } }
                />
            </BlockControls>

            <div style={{ textAlign }}>
                <p>Content aligned: { textAlign }</p>
            </div>
        </div>
    );
};

// Register block type
registerBlockType(BLOCKPATH, {
    apiVersion: 2,
    title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
    description: __( 'A block with alignment controls' ),
    category: 'wp-gb',
    icon: 'smiley',
    attributes: {
        align: {
            type: "string",
            default: "center center",
        },
        textAlign: {
            type: "string",
            default: "left",
        },
    },

    edit: BlockControlComponent, // Using the BlockControlComponent here
});

export default BlockControlComponent;
