import React, { Component } from 'react';
import { PostData } from './PostData';

const Update = React.createClass({

    getInitialState() {
        return {
            blogPost: {}
        };
    },

    componentDidMount() {
        PostData.fetchBlogPost(this.props.params.postId)
            .then((IsActive) => {
                this.setState(state => {
                    state.blogPost = IsActive;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    },

    handleSubmit(data) {
        updateBlogPost(this.state.blogPost.id, data);
        this.props.router.push('/');
    },

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}
                    title={this.state.blogPost.title}
                    body={this.state.blogPost.body}></Form>
            </div>
        );
    }
});

export default Update;