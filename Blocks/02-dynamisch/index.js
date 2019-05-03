import './editor.scss';
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType(
    'my-plugin/dynamic',
    {
        title: 'Dynamisch block',
        description: 'A dynamic block',
        category: 'common',
        icon: 'welcome-write-blog',
        supports: { html: true },
        attributes: {
            posts_per_page: {
                type: 'int',
                default: 4
            }
        },
        edit(props) {
            return (<Edit {...props}/>);
        },
        save(props) {
            return null;
        }
    }
)
