/**
 * Bring in WP Dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RangeControl } = wp.components;
const { MediaUpload, RichText } = wp.editor;


/**
 * Initiate an Edit component:
 */
export default class Edit extends Component {

    //constructor
    constructor() {
        super(...arguments);

        this.state = { posts: [] }
        this.fetchPosts = this.fetchPosts.bind(this);
        this.setAmount = this.setAmount.bind( this );

        this.fetchPosts();
    }


    render(){

        const { className, attributes: {posts_per_page} } = this.props;
        const posts = this.state.posts;
        let postList = ( <p>{__('No posts yet', 'my-plugin')}</p> );


        if (posts.length > 0) {
            postList = posts.map( (post) => {
                return (
                    <li className="post-link">
                        <p>{post.title.rendered}</p>
                    </li>
                )
            });
        }

        return (
            <div className={className}>
                <RangeControl
                    label={__('Posts per page:')}
                    value={posts_per_page}
                    onChange={this.setAmount}
                    min={0}
                    max={20}
                />
                <ul className="post-list">{postList}</ul>
            </div>
        )
    }


    fetchPosts() {

        const { attributes: { posts_per_page } } = this.props;
        console.log( posts_per_page );

        fetch('https://gutenberg.test/wp-json/wp/v2/posts/?per_page='+posts_per_page )
            .then((results) => results.json())
            .then((results) => {
                this.setState({
                    posts: results
                });
            });
    }

    setAmount( posts_per_page ){
        const { setAttributes } = this.props;
        setAttributes({ posts_per_page });

        setTimeout( this.fetchPosts, 200 );
    }
    
}
    