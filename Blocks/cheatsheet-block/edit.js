/**
 * Bring in WP Dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { MediaUpload, RichText } = wp.editor;


/**
 * Initiate an Edit component:
 */
export default class Edit extends Component {

    //constructor
    constructor() {
        super(...arguments);

        this.selectImage = this.selectImage.bind(this);

    }

    /**
     * Render a simple RichText component
     */
    render() {

        const { className, isSelected, setAttributes, attributes: { title, img_id, img_url } } = this.props;

        return (
            <div className={className}>
                <RichText
                    tagName="h3"
                    value={title}
                    placeholder={__('Set a title', 'myplugin')}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <MediaUpload
                    onSelect={this.selectImage}
                    type="image"
                    value={img_id}
                    render={({ open }) => (
                        <a href="#" onClick={open} className="image-container">
                            {img_id == 0 && (<p> {__('Click to select an image', 'myplugin' ) } </p> ) }
                            <img src={img_url} className="banner-img" />
                        </a>
                    )}
                ></MediaUpload> 
            </div>
        )
    }


    /**
     * Select an image
     * 
     * @param Object img 
     */
    selectImage(img) {

        const { setAttributes } = this.props;   
        setAttributes({
            img_id: img.id,
            img_url: img.url,
            img_alt: img.alt
        });
    
    }
}