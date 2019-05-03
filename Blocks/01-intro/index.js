import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType(
    'my-plugin/intro',
    {
        title: 'Intro',
        description: __( 'Adds a paragraph of text that\'s just a little bit bigger', 'myplugin' ),
        category: 'common',
        icon: 'welcome-write-blog',
        supports: { html: true },
        attributes: {
            intro: {
                type: 'string',
                selector: 'p.intro'
            }
        },
        edit(props) {

            const { attributes: { intro }, setAttributes } = props;
            
            return (
                <RichText
                    tagName="p"
                    className="intro"
                    placeholder={__('Add your intro', 'myplugin')}
                    onChange={(intro) => setAttributes({ intro })}
                    value={intro}
                />
            )
        },
        save(props) {
            return null;
        }
    }
)
