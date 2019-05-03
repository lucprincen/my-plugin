const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import Edit from './edit';
import './editor.scss';

registerBlockType(
    'myplugin/cheatsheet',
    {
        title: __( 'Cheatsheet block', 'myplugin' ),
        description: __( 'A custom block', 'myplugin' ),
        category: 'common',
        icon: 'groups',
        support: { html: false },
        attributes: {
            title: {
                type: 'string',
                selector: 'h3',
                default: ''
            },
            img_id: {
                type: 'int',
                source: 'attribute',
                selector: 'img',
                attribute: 'data-id',
                default: 0
            },
            img_url: {
                type: 'string',
                source: 'attribute',
                selector: 'img',
                attribute: 'src',
                default: 'https://via.placeholder.com/350x150'
            },
            img_alt: {
                type: 'string',
                source: 'attribute',
                selector: 'img',
                attribute: 'alt',
                default: ''
            }
        },
        edit( props ){
            return <Edit {...props}/>
        },
        save( props ){

            const { attributes: { title, img_id, img_url, img_alt }, className } = props;

            return (
                <div className={className}>
                    <h2>{title}</h2>
                    <img src={img_url} data-id={img_id} alt={img_alt}/>
                </div>
            );
        }
    }
)