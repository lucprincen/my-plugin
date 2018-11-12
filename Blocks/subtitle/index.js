const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { registerBlockType } = wp.blocks;

import icons from '../components/icons/';
import './style.scss';

registerBlockType(
    'myplugin/subtitle',
    {
        title: __( 'Subtitle', 'myplugin' ),
        description: __( 'Create a subtitle block', 'myplugin' ),
        category: 'common',
        icon: icons.subtitle,
        support: { html: false },
        attributes: {
            subtitle: {
                type: 'string',
                selector: '.subtitle'
            }
        },
        edit( props ){

            const { setAttributes } = props;
            let subtitle = props.attributes.subtitle;

            return (
                <RichText
                    tagName="h3"
                    value={subtitle}
                    onChange={(value) => { setAttributes({ subtitle: value })}}
                />                
            )                

        },
        save( props ){
            const { attributes: { subtitle } } = props;
            return ( 
                <p className="subtitle">
                    {subtitle}
                </p>
            )

        }
    }
)