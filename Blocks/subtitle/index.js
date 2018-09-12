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

            const { attributes: { subtitle }, setAttributes } = props;

            return (
                <RichText   
                    tagName="h3"
                    value={subtitle}
                    placeholder={__('Write a subtitle', 'myplugin')}
                    onChange={(value) => setAttributes({ subtitle: value })}
                    inlineToolbar
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