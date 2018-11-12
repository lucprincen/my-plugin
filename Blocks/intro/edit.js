/**
 * Bring in WP Dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText } = wp.editor;

/**
 * Initiate an Edit component:
 */
export default class Edit extends Component {

    //constructor
    constructor() {
        super(...arguments);

        //bind this class to the setIntro function, so we
        //can use "this" in that function.
        //this.setIntro = this.setIntro.bind(this);
    }

    /**
     * Render a simple RichText component
     */
    render() {
        const { attributes } = this.props;
        return (
            <RichText
                tagName="p"
                className="intro"
                placeholder="Type an introduction"
                value={attributes.intro}
                onChange={(value) => { setAttributes({ intro: value } ) }}
            />
        )
    }

    /**
     * Set the intro value and save it:
     * 
     * @param String value 
     */
    setIntro(value) {
        const { setAttributes } = this.props;
        setAttributes({
            intro: value
        });
    }
}