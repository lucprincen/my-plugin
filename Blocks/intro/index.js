
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import Edit from './edit.js';
import './editor.scss'; //backend styling
import './style.scss'; //frontend styling

registerBlockType(
    'myplugin/intro',
    {
        title: __( 'Intro block', 'myplugin' ),
        description: __( 'Mooie intro', 'myplugin' ),
        category: 'common',
        attributes: {
            intro: {
                type: 'string',
                selector: '.intro'
            }
        },
        edit( props ){
        },
        save( props ){
        }
    }
)